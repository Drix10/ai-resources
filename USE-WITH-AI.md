# Use AI Resources from your AI agent

Give Claude, Cursor, VS Code, Windsurf or any agent a dated, sourced AI news layer: what shipped, who raised, what the numbers were, with the link to the post it came from. Pick the path that fits your tool. No key, no account.

| Path | Best for | Setup |
| --- | --- | --- |
| [MCP server](#mcp-server) | Claude Code, Claude Desktop, Cursor, VS Code, Windsurf | one command or one JSON block |
| [Agent Skill](#agent-skill) | Claude Code and other Skill-aware agents | copy one folder |
| [JSON API](#json-api) | your own code, custom GPT actions, scripts | none, CORS open |
| [llms.txt](#llmstxt) | any LLM that can read a URL | none |
| [RSS](#rss) | feed readers, automations | none |
| [Raw Markdown](#raw-markdown) | RAG, evals, offline indexes, the full 100,000+ briefing archive | `git clone` |

Everything is CC BY 4.0. When you show the data, credit it as `Data: github.com/Drix10/ai-resources (CC BY 4.0)`; the MCP server and the Skill add that line for you.

## MCP server

Code in [`mcp/`](mcp/). Tools:

| Tool | What it does |
| --- | --- |
| `search_briefings(query, category?, limit?, since?)` | Keyword search, newest first. All words must match. `since` is `YYYY-MM-DD`. |
| `latest(category?, limit?)` | The newest briefings, overall or for one category. |
| `get_briefing(id)` | Full Markdown of one briefing (URL or slug), with every source link. |
| `list_categories()` | Every category slug with its briefing count. |

> **npm package coming soon.** `ai-resources-mcp` is not on npm yet, so `npx -y ai-resources-mcp` does not work today. Until it is published, run it from a clone:
>
> ```bash
> git clone --depth 1 https://github.com/Drix10/ai-resources
> cd ai-resources/mcp && npm ci
> ```
>
> and in the snippets below replace `npx -y ai-resources-mcp` with `node /full/path/to/ai-resources/mcp/index.js` (in JSON: `"command": "node", "args": ["/full/path/to/ai-resources/mcp/index.js"]`).

**Claude Code**

```bash
claude mcp add ai-resources -- npx -y ai-resources-mcp
```

**Claude Desktop** (Settings → Developer → Edit Config, `claude_desktop_config.json`), **Cursor** (`~/.cursor/mcp.json`, or `.cursor/mcp.json` in a project) and **Windsurf** (`~/.codeium/windsurf/mcp_config.json`):

```json
{
  "mcpServers": {
    "ai-resources": { "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

**VS Code** (`.vscode/mcp.json` in a workspace, or *MCP: Open User Configuration*):

```json
{
  "servers": {
    "ai-resources": { "type": "stdio", "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

On Windows, if a client cannot start `npx`, use `"command": "cmd", "args": ["/c", "npx", "-y", "ai-resources-mcp"]`.

Optional setting: `AI_RESOURCES_API_URL`, the API base URL (default `https://blogs.drix10.com`). Needs Node 18 or later.

Try it: *"What did Anthropic announce this week? Cite the sources."*

## Agent Skill

[`skills/ai-news/SKILL.md`](skills/ai-news/SKILL.md) teaches an agent when and how to answer "what's new in AI", "latest on <model or company>" and "who raised" questions from the briefings, with citations. It uses the MCP tools when they are installed and the JSON API when they are not.

Claude Code, for every project:

```bash
git clone --depth 1 https://github.com/Drix10/ai-resources
mkdir -p ~/.claude/skills
cp -r ai-resources/skills/ai-news ~/.claude/skills/
```

For one project only, copy it to `.claude/skills/ai-news/` in that project instead. On Windows (PowerShell): `Copy-Item -Recurse ai-resources\skills\ai-news $HOME\.claude\skills\`.

Other agents that read `SKILL.md` folders work the same way; for chat apps without Skills, paste the body of `SKILL.md` into the custom instructions.

## JSON API

Base URL `https://blogs.drix10.com`. JSON, CORS open, no key. It covers the briefings published on the blog (about 2,000, growing with every run); the full archive is in this repository.

| Request | Returns |
| --- | --- |
| `GET /api/articles?q=<words>&category=<slug>&since=YYYY-MM-DD&limit=<n>&page=<n>` | `{ items, total, page, limit, totalPages, license }`, newest first. All words in `q` must match; every parameter is optional. |
| `GET /api/articles?slug=<slug or article URL>` | One item, plus `content` (the full Markdown). |
| `GET /api/categories` | `{ items: [{ name, slug, count, url, llms }] }` |

Each item: `title`, `url`, `slug`, `category`, `categorySlug`, `date`, `description`, `headlines` (every news item in the briefing) and `sources` (`[{ title, url }]`, the original posts).

```bash
curl "https://blogs.drix10.com/api/articles?q=anthropic&since=2026-10-01&limit=5"
curl "https://blogs.drix10.com/api/categories"
```

## llms.txt

- [`https://blogs.drix10.com/llms.txt`](https://blogs.drix10.com/llms.txt): the index, linking every category.
- `https://blogs.drix10.com/llms/<category-slug>.txt`: the 50 newest briefings of one category, for example [`/llms/ai-developer-tools.txt`](https://blogs.drix10.com/llms/ai-developer-tools.txt). Slugs come from `/api/categories`.

## RSS

[`https://blogs.drix10.com/rss.xml`](https://blogs.drix10.com/rss.xml), for feed readers, Slack/Discord feed bots or email-digest services.

## Raw Markdown

The whole archive, 100,000+ briefings in 41 category folders, is plain Markdown in this repository:

```bash
git clone --depth 1 https://github.com/Drix10/ai-resources
```

One file: `https://raw.githubusercontent.com/Drix10/ai-resources/main/<Category Name>/resources-<N>.md` (spaces in the folder name as `%20`; a higher `N` is newer). Each file holds 5 to 12 briefings: a headline, a short summary, **Key Points** and the source links.

## Something missing?

Open an issue labelled [`mcp`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Amcp) or [`skill`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Askill), or pick one up; see [CONTRIBUTING.md](CONTRIBUTING.md).
