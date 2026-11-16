import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export const VERSION = '1.1.0';
export const DATA_LINE = 'Data: github.com/Drix10/ai-resources (CC BY 4.0)';
export const DEFAULT_BASE = 'https://blogs.drix10.com';
const REPO = 'Drix10/ai-resources';
const BLOB_BASE = `https://github.com/${REPO}/blob/main/`;
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/main/`;
// "<Category>/resources-<N>.md": one folder (not starting with a dot), no ".." and no other path.
const DIGEST = /^([^./\\][^/\\]*)\/resources-\d+\.md$/;

const text = (s) => ({ content: [{ type: 'text', text: s }] });
const fail = (s) => ({ ...text(`${s}\n${DATA_LINE}`), isError: true });

// Repo path of a digest given as a GitHub blob/raw link or a bare path; null for anything else.
export function digestPath(id) {
  let p = id.trim();
  if (/^https?:\/\//i.test(p)) {
    const m = p.match(/^https:\/\/(?:github\.com\/Drix10\/ai-resources\/blob\/main|raw\.githubusercontent\.com\/Drix10\/ai-resources\/main)\/(.+)$/);
    if (!m) return null;
    p = m[1].replace(/[?#].*$/, '');
  }
  try {
    p = decodeURIComponent(p);
  } catch {
    return null;
  }
  return DIGEST.test(p) ? p : null;
}

function formatItem(a, i) {
  const lines = [`${i + 1}. ${a.title} (${a.date}, ${a.category})`, `   ${a.description}`, `   ${a.url}`];
  const more = (a.headlines || []).slice(1, 6);
  if (more.length) lines.push(`   Also in this briefing: ${more.join('; ')}`);
  const src = (a.sources || []).slice(0, 3).map((s) => s.url);
  if (src.length) lines.push(`   Sources: ${src.join(' ')}`);
  return lines.join('\n');
}

function formatList(data, pageUrl) {
  if (!data.items?.length) return text(`No briefings found.\nSource: ${pageUrl}\n${DATA_LINE}`);
  const body = data.items.map(formatItem).join('\n\n');
  return text(`${data.items.length} of ${data.total} briefings, newest first:\n\n${body}\n\nSource: ${pageUrl}\n${DATA_LINE}`);
}

// All tools read the public JSON API of the blog (see the repository README).
export function createServer({ base = process.env.AI_RESOURCES_API_URL || DEFAULT_BASE, fetchImpl = globalThis.fetch } = {}) {
  base = base.replace(/\/+$/, '');

  async function api(path, params = {}) {
    const url = new URL(path, `${base}/`);
    for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') url.searchParams.set(k, String(v));
    const res = await fetchImpl(url, { headers: { Accept: 'application/json', 'User-Agent': `ai-resources-mcp/${VERSION}` } });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || `HTTP ${res.status} from ${url}`);
    return body;
  }

  const guard = (fn) => async (args) => {
    try {
      return await fn(args);
    } catch (e) {
      return fail(`ai-resources: ${e.message}`);
    }
  };

  // A digest file straight from the repository (raw Markdown); only digestPath() paths reach here.
  async function digest(path) {
    const encoded = path.split('/').map(encodeURIComponent).join('/');
    const link = BLOB_BASE + encoded;
    const res = await fetchImpl(RAW_BASE + encoded, { headers: { 'User-Agent': `ai-resources-mcp/${VERSION}` } });
    if (res.status === 404) return fail(`No digest found at ${link}.`);
    if (!res.ok) throw new Error(`HTTP ${res.status} from ${link}`);
    return text(`${await res.text()}\n\nSource: ${link}\n${DATA_LINE}`);
  }

  const server = new McpServer({ name: 'ai-resources', version: VERSION });
  const category = z.string().max(80).optional().describe('Category slug or name, e.g. "ai-developer-tools" (see list_categories)');
  const limit = z.number().int().min(1).max(100).optional().describe('How many briefings (1-100, default 10)');

  server.registerTool(
    'search_briefings',
    {
      title: 'Search AI briefings',
      description: 'Search daily AI news briefings (models, companies, funding rounds, tools, research) by keywords. All words must match. Newest first.',
      inputSchema: { query: z.string().min(1).max(100).describe('Keywords, e.g. "anthropic claude" or "series a"'), category, limit, since: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().describe('Only briefings on or after this date (YYYY-MM-DD)') },
    },
    guard(async ({ query, category, limit = 10, since }) => {
      const data = await api('api/articles', { q: query, category, limit, since });
      return formatList(data, `${base}/search?q=${encodeURIComponent(query)}`);
    }),
  );

  server.registerTool(
    'latest',
    {
      title: 'Latest AI briefings',
      description: 'The newest AI news briefings, optionally for one category. Use for "what is new in AI" questions.',
      inputSchema: { category, limit },
    },
    guard(async ({ category, limit = 10 }) => {
      const data = await api('api/articles', { category, limit });
      // (the category's own slug from the API: a name passed in would give a link that 404s)
      const slug = data.items?.[0]?.categorySlug;
      return formatList(data, category && slug ? `${base}/categories/${slug}` : base);
    }),
  );

  server.registerTool(
    'get_briefing',
    {
      title: 'Read one briefing',
      description: 'Full Markdown of one briefing, with every item, key points and source links. Pass its URL or slug from search_briefings/latest. Also accepts a GitHub link to a digest file (https://github.com/Drix10/ai-resources/blob/main/<Category>/resources-<N>.md, the raw.githubusercontent.com form, or the bare <Category>/resources-<N>.md path); other GitHub or web URLs are not fetched.',
      inputSchema: { id: z.string().min(1).max(300).describe('Briefing URL (https://blogs.drix10.com/articles/...), slug ("category/article-slug"), or digest file (GitHub blob/raw link or "<Category>/resources-<N>.md")') },
    },
    guard(async ({ id }) => {
      const path = digestPath(id);
      if (path) return digest(path);
      const a = (await api('api/articles', { slug: id })).items?.[0];
      if (!a) return fail(`No briefing found for "${id}".`);
      return text(`# ${a.title}\n${a.date} | ${a.category}\n\n${a.content || a.description}\n\nSource: ${a.url}\n${DATA_LINE}`);
    }),
  );

  server.registerTool(
    'trending_movements',
    {
      title: 'What is accelerating in AI',
      description: 'Topics whose briefing coverage climbs week over week (rising) or had one hot week (watch), each with sample headlines and source links. Use for "what is trending / heating up in AI" questions. Computed from counts only; trajectories, not predictions.',
      inputSchema: { limit },
    },
    guard(async ({ limit = 10 }) => {
      const data = await api('api/signals');
      if (!data || !Array.isArray(data.movements)) return fail(`unexpected /api/signals response shape${data && data.builtOn ? ` (built ${data.builtOn})` : ''}`);
      const items = data.movements.slice(0, limit);
      if (!items.length) return text(`No movement is accelerating right now (computed ${data.builtOn || 'recently'}.)\nSource: ${base}/signals\n${DATA_LINE}`);
      const body = items.map((m, i) => [
        `${i + 1}. [${String(m.stage).toUpperCase()}] ${m.title} (${m.category}, ${m.briefings} briefings over ${m.days}d, weeks [${(m.ladder || []).join(', ')}])`,
        ...m.samples.map((sm) => `   ${sm.date} \u2014 ${sm.headline}${sm.url ? `\n   ${sm.url}` : ''}`),
      ].join('\n')).join('\n\n');
      return text(`${items.length} topic(s) accelerating or on watch, computed ${data.builtOn}: \n\n${body}\n\nSource: ${base}/signals\n${DATA_LINE}`);
    }),
  );

  server.registerTool(
    'list_categories',
    {
      title: 'List categories',
      description: 'Every briefing category with its slug and count. Use a slug as the category of search_briefings or latest.',
      inputSchema: {},
    },
    guard(async () => {
      const data = await api('api/categories');
      const body = (data.items || []).map((c) => `- ${c.slug}: ${c.name} (${c.count})`).join('\n');
      return text(`${body}\n\nSource: ${base}/categories\n${DATA_LINE}`);
    }),
  );

  return server;
}
