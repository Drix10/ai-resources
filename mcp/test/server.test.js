import test from 'node:test';
import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { createServer, DATA_LINE } from '../server.js';

const ITEM = {
  title: 'Claude 9 released',
  url: 'https://example.test/articles/ai-developer-tools/claude-9-released-1',
  slug: 'ai-developer-tools/claude-9-released-1',
  category: 'AI Developer Tools',
  categorySlug: 'ai-developer-tools',
  date: '2026-10-28',
  description: 'Anthropic ships Claude 9.',
  headlines: ['Claude 9 released', 'Cursor adds agents'],
  sources: [{ title: 'Original post', url: 'https://x.com/a/status/1' }],
};

async function connect(routes) {
  const calls = [];
  const fetchImpl = async (url) => {
    calls.push(new URL(url));
    const u = new URL(url);
    const hit = routes[u.pathname];
    const [status, body] = typeof hit === 'function' ? hit(u) : hit || [404, { error: 'Briefing not found' }];
    if (typeof body === 'string') return new Response(body, { status, headers: { 'Content-Type': 'text/plain' } });
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  };
  const server = createServer({ base: 'https://example.test/', fetchImpl });
  const [a, b] = InMemoryTransport.createLinkedPair();
  const client = new Client({ name: 'test', version: '0' });
  await Promise.all([server.connect(a), client.connect(b)]);
  const call = async (name, args = {}) => {
    const r = await client.callTool({ name, arguments: args });
    return { ...r, text: r.content.map((c) => c.text).join('\n') };
  };
  return { client, call, calls };
}

const list = { '/api/articles': [200, { items: [ITEM], total: 7 }] };

test('lists the four tools', async () => {
  const { client } = await connect({});
  const { tools } = await client.listTools();
  assert.deepEqual(tools.map((t) => t.name).sort(), ['get_briefing', 'latest', 'list_categories', 'search_briefings', 'trending_movements']);
});

test('search_briefings passes the query and ends with the source line', async () => {
  const { call, calls } = await connect(list);
  const r = await call('search_briefings', { query: 'claude', category: 'ai-developer-tools', limit: 3, since: '2026-10-01' });
  assert.equal(r.isError, undefined);
  const p = calls[0].searchParams;
  assert.deepEqual([p.get('q'), p.get('category'), p.get('limit'), p.get('since')], ['claude', 'ai-developer-tools', '3', '2026-10-01']);
  assert.match(r.text, /1 of 7 briefings/);
  assert.match(r.text, /Claude 9 released \(2026-10-28, AI Developer Tools\)/);
  assert.match(r.text, /Sources: https:\/\/x\.com\/a\/status\/1/);
  assert.match(r.text, /Also in this briefing: Cursor adds agents/);
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
  assert.match(r.text, /Source: https:\/\/example\.test\/search\?q=claude/);
});

test('latest defaults to 10 and links the category', async () => {
  const { call, calls } = await connect(list);
  const r = await call('latest', { category: 'ai-education' });
  assert.equal(calls[0].searchParams.get('limit'), '10');
  // (the link uses the slug the API gives its items, never the name or slug passed in)
  assert.match(r.text, /Source: https:\/\/example\.test\/categories\/ai-developer-tools/);
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
});

test('search_briefings and latest pass page to the API', async () => {
  const { call, calls } = await connect({ '/api/articles': [200, { items: [ITEM], total: 7, totalPages: 3 }] });
  await call('search_briefings', { query: 'openai', page: 2 });
  await call('latest', { page: 3 });
  assert.equal(calls[0].searchParams.get('page'), '2');
  assert.equal(calls[1].searchParams.get('page'), '3');
  const none = await connect(list);
  await none.call('latest');
  assert.equal(none.calls[0].searchParams.get('page'), null);
});

test('"More:" line appears only when there are later pages', async () => {
  const first = await connect({ '/api/articles': [200, { items: [ITEM], total: 7, totalPages: 3 }] });
  const r1 = await first.call('search_briefings', { query: 'openai' });
  assert.match(r1.text, /More: call again with page=2 \(3 pages in total\)\./);

  const middle = await connect({ '/api/articles': [200, { items: [ITEM], total: 7, totalPages: 3 }] });
  const r2 = await middle.call('latest', { page: 2 });
  assert.match(r2.text, /More: call again with page=3 \(3 pages in total\)\./);

  const last = await connect({ '/api/articles': [200, { items: [ITEM], total: 7, totalPages: 3 }] });
  const r3 = await last.call('latest', { page: 3 });
  assert.doesNotMatch(r3.text, /More:/);
  assert.ok(r3.text.trimEnd().endsWith(DATA_LINE));
});

test('get_briefing returns the full Markdown and its URL', async () => {
  const { call, calls } = await connect({ '/api/articles': [200, { items: [{ ...ITEM, content: '### Claude 9 released\n\nBody.' }] }] });
  const r = await call('get_briefing', { id: ITEM.url });
  assert.equal(calls[0].searchParams.get('slug'), ITEM.url);
  assert.match(r.text, /Body\./);
  assert.match(r.text, new RegExp(`Source: ${ITEM.url.replace(/[.?]/g, '\\$&')}`));
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
});

test('get_briefing reports a missing briefing as a tool error', async () => {
  const { call } = await connect({});
  const r = await call('get_briefing', { id: 'nope/nope' });
  assert.equal(r.isError, true);
  assert.match(r.text, /Briefing not found/);
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
});

const DIGEST_PATH = '/Drix10/ai-resources/main/AI%20Developer%20Tools/resources-300.md';
const DIGEST_LINK = 'https://github.com/Drix10/ai-resources/blob/main/AI%20Developer%20Tools/resources-300.md';
const DIGEST_MD = '# AI Developer Tools digest\n\n- Claude 9 released';

test('get_briefing fetches a digest from a GitHub blob link as raw Markdown (digest)', async () => {
  const { call, calls } = await connect({ [DIGEST_PATH]: [200, DIGEST_MD] });
  const r = await call('get_briefing', { id: DIGEST_LINK });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].href, `https://raw.githubusercontent.com${DIGEST_PATH}`);
  assert.equal(r.isError, undefined);
  assert.match(r.text, /Claude 9 released/);
  assert.match(r.text, new RegExp(`Source: ${DIGEST_LINK.replace(/[.?%]/g, '\\$&')}`));
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
});

test('get_briefing fetches a digest from a raw.githubusercontent.com link (digest)', async () => {
  const { call, calls } = await connect({ [DIGEST_PATH]: [200, DIGEST_MD] });
  const r = await call('get_briefing', { id: `https://raw.githubusercontent.com${DIGEST_PATH}` });
  assert.equal(calls[0].href, `https://raw.githubusercontent.com${DIGEST_PATH}`);
  assert.match(r.text, /Source: https:\/\/github\.com\/Drix10\/ai-resources\/blob\/main\/AI%20Developer%20Tools\/resources-300\.md/);
  assert.match(r.text, /Claude 9 released/);
});

test('get_briefing accepts a bare digest path with spaces (digest)', async () => {
  const { call, calls } = await connect({ [DIGEST_PATH]: [200, DIGEST_MD] });
  const r = await call('get_briefing', { id: 'AI Developer Tools/resources-300.md' });
  assert.equal(calls[0].href, `https://raw.githubusercontent.com${DIGEST_PATH}`);
  assert.match(r.text, /Claude 9 released/);
});

test('get_briefing reports a missing digest as a tool error (digest)', async () => {
  const { call } = await connect({});
  const r = await call('get_briefing', { id: 'AI Developer Tools/resources-999999.md' });
  assert.equal(r.isError, true);
  assert.match(r.text, /No digest found at https:\/\/github\.com\/Drix10\/ai-resources\/blob\/main\/AI%20Developer%20Tools\/resources-999999\.md/);
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
});

test('get_briefing rejects foreign URLs and paths without fetching them (digest)', async () => {
  for (const id of [
    'https://evil.test/AI%20Developer%20Tools/resources-300.md',
    'https://github.com/someone/fork/blob/main/AI%20Developer%20Tools/resources-300.md',
    'https://github.com/Drix10/ai-resources/blob/main/README.md',
    'https://github.com/Drix10/ai-resources/blob/main/AI%20Developer%20Tools/resources-300.md.exe',
    'AI Developer Tools/../resources-300.md',
    '../resources-300.md',
  ]) {
    const { call, calls } = await connect({});
    const r = await call('get_briefing', { id });
    assert.equal(r.isError, true, id);
    assert.ok(calls.every((u) => u.hostname === 'example.test'), `${id} fetched ${calls.map((u) => u.href)}`);
  }
});

test('list_categories lists slugs and counts', async () => {
  const { call } = await connect({ '/api/categories': [200, { items: [{ name: 'AI Education', slug: 'ai-education', count: 63 }] }] });
  const r = await call('list_categories');
  assert.match(r.text, /- ai-education: AI Education \(63\)/);
  assert.ok(r.text.trimEnd().endsWith(DATA_LINE));
});

test('empty results and network failures do not throw', async () => {
  const empty = await connect({ '/api/articles': [200, { items: [], total: 0 }] });
  assert.match((await empty.call('latest')).text, /No briefings found/);
  const server = createServer({ base: 'https://example.test', fetchImpl: async () => { throw new Error('offline'); } });
  const [a, b] = InMemoryTransport.createLinkedPair();
  const client = new Client({ name: 't', version: '0' });
  await Promise.all([server.connect(a), client.connect(b)]);
  const r = await client.callTool({ name: 'latest', arguments: {} });
  assert.equal(r.isError, true);
  assert.match(r.content[0].text, /offline/);
});

const MOVEMENT = {
  key: 'gauss+splat', title: 'Gaussian splatting breakthroughs', category: 'cross-category',
  stage: 'rising', ladder: [1, 2, 4], briefings: 7, days: 19, latest: '2026-11-04',
  samples: [{ headline: 'QuantumNet ships feature D', date: '2026-11-04', category: 'Dev', url: 'https://x.com/q' }],
};

test('trending_movements lists accelerating topics with samples', async () => {
  const { call } = await connect({ '/api/signals': [200, { builtOn: '2026-11-05', movements: [MOVEMENT] }] });
  const r = await call('trending_movements', {});
  assert.match(r.text, /\[RISING\] Gaussian splatting breakthroughs/);
  assert.match(r.text, /weeks \[1, 2, 4\]/);
  assert.match(r.text, /https:\/\/x\.com\/q/);
  assert.match(r.text, /Source: https:\/\/example\.test\/signals/);
});

test('trending_movements reports an empty week honestly', async () => {
  const { call } = await connect({ '/api/signals': [200, { builtOn: '2026-11-05', movements: [] }] });
  const r = await call('trending_movements', {});
  assert.match(r.text, /No movement is accelerating right now/);
});

test('trending_movements rejects a malformed signals response', async () => {
  for (const body of [{ builtOn: '2026-11-05', movements: 'oops' }, { builtOn: '2026-11-05' }]) {
    const { call } = await connect({ '/api/signals': [200, body] });
    const r = await call('trending_movements', {});
    assert.equal(r.isError, true);
    assert.match(r.text, /unexpected \/api\/signals response shape/);
  }
});
