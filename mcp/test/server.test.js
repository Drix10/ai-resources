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
  assert.deepEqual(tools.map((t) => t.name).sort(), ['get_briefing', 'latest', 'list_categories', 'search_briefings']);
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
