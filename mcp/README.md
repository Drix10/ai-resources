# ai-resources-mcp

An MCP server that gives any AI agent the [AI Resources](https://github.com/Drix10/ai-resources) news layer: daily briefings on AI models, companies, funding rounds, tools and research, searchable and citable. It reads the public API of [blogs.drix10.com](https://blogs.drix10.com); no key needed.

| Tool | What it does |
| --- | --- |
| `search_briefings(query, category?, limit?, since?)` | Keyword search, newest first. All words must match. `since` is `YYYY-MM-DD`. |
| `latest(category?, limit?)` | The newest briefings, overall or for one category. |
| `get_briefing(id)` | Full Markdown of one briefing (URL or slug), with every source link. |
| `list_categories()` | Every category slug with its briefing count. |

Every result ends with its source link and `Data: github.com/Drix10/ai-resources (CC BY 4.0)`, so answers stay citable.

## Install

> The npm package `ai-resources-mcp` is not published yet. Until it is, run it from a clone:
> `git clone --depth 1 https://github.com/Drix10/ai-resources && cd ai-resources/mcp && npm ci`,
> then use `node /full/path/to/ai-resources/mcp/index.js` wherever the snippets below say `npx -y ai-resources-mcp`.

**Claude Code**

```bash
claude mcp add ai-resources -- npx -y ai-resources-mcp
```

**Claude Desktop** (`claude_desktop_config.json`), **Cursor** (`~/.cursor/mcp.json` or `.cursor/mcp.json`) and **Windsurf** (`~/.codeium/windsurf/mcp_config.json`):

```json
{
  "mcpServers": {
    "ai-resources": { "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

**VS Code** (`.vscode/mcp.json`):

```json
{
  "servers": {
    "ai-resources": { "type": "stdio", "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

or from a terminal: `code --add-mcp "{\"name\":\"ai-resources\",\"command\":\"npx\",\"args\":[\"-y\",\"ai-resources-mcp\"]}"`

On Windows, if a client cannot start `npx`, use `"command": "cmd", "args": ["/c", "npx", "-y", "ai-resources-mcp"]`.

## Settings

`AI_RESOURCES_API_URL`: base URL of the API (default `https://blogs.drix10.com`). Node 18 or later.

## The API underneath

Usable without MCP, from any HTTP client (CORS open, JSON):

- `GET /api/articles?q=&category=&since=&limit=&page=`: `{ items: [{ title, url, slug, category, categorySlug, date, description, headlines, sources: [{ title, url }] }], total, page, limit, totalPages, license }`
- `GET /api/articles?slug=<slug or URL>`: one item, plus `content` (full Markdown)
- `GET /api/categories`: `{ items: [{ name, slug, count, url, llms }] }`
- `GET /llms.txt` and `GET /llms/<category-slug>.txt`: the latest 50 briefings of a category in llms.txt form

## Develop

```bash
git clone https://github.com/Drix10/ai-resources
cd ai-resources/mcp
npm ci
npm test          # node:test against a stubbed fetch
```

Issues labelled [`mcp`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Amcp) are open for contributors; see [CONTRIBUTING.md](../CONTRIBUTING.md).

Code: [MIT](LICENSE). Data: [Drix10/ai-resources](https://github.com/Drix10/ai-resources), CC BY 4.0.
