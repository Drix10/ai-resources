# अपने AI agent में AI Resources इस्तेमाल करें

> यह [USE-WITH-AI.md](../../USE-WITH-AI.md) का हिंदी अनुवाद है। अगर दोनों में कहीं फ़र्क दिखे, तो अंग्रेज़ी वाला पेज ही सही माना जाएगा।

Claude, Cursor, VS Code, Windsurf या किसी भी agent को AI news की एक ऐसी layer दीजिए जिसमें हर चीज़ की तारीख और source हो: क्या launch हुआ, किसने funding उठाई, numbers क्या थे, और साथ में उस post का link जहाँ से ख़बर आई। अपने tool के हिसाब से रास्ता चुनिए। न कोई key चाहिए, न account।

| तरीका | किसके लिए सबसे अच्छा | Setup |
| --- | --- | --- |
| [MCP server](#mcp-server) | Claude Code, Claude Desktop, Cursor, VS Code, Windsurf | एक command या एक JSON block |
| [Agent Skill](#agent-skill) | Claude Code और Skills समझने वाले दूसरे agents | एक folder copy करना है |
| [JSON API](#json-api) | आपका अपना code, custom GPT actions, scripts | कुछ नहीं, CORS खुला है |
| [llms.txt](#llmstxt) | कोई भी LLM जो URL पढ़ सकता हो | कुछ नहीं |
| [RSS](#rss) | feed readers, automations | कुछ नहीं |
| [Raw Markdown](#raw-markdown) | RAG, evals, offline indexes, पूरा 100,000+ briefings का archive | `git clone` |

सब कुछ CC BY 4.0 के तहत है। जब आप यह data कहीं दिखाएँ, तो credit ऐसे दें: `Data: github.com/Drix10/ai-resources (CC BY 4.0)`; MCP server और Skill यह line खुद जोड़ देते हैं।

## MCP server

Code [`mcp/`](../../mcp/) में है। Tools:

| Tool | क्या करता है |
| --- | --- |
| `search_briefings(query, category?, limit?, since?)` | Keyword से search, सबसे नया पहले। सारे words match होने चाहिए। `since` का format `YYYY-MM-DD` है। |
| `latest(category?, limit?)` | सबसे नई briefings, सब मिलाकर या किसी एक category की। |
| `get_briefing(id)` | एक briefing का पूरा Markdown (URL या slug से), हर source link के साथ। |
| `list_categories()` | हर category का slug और उसमें कितनी briefings हैं। |

> **npm package जल्द आ रहा है।** `ai-resources-mcp` अभी npm पर नहीं है, इसलिए `npx -y ai-resources-mcp` आज काम नहीं करेगा। जब तक publish नहीं होता, इसे clone करके चलाइए:
>
> ```bash
> git clone --depth 1 https://github.com/Drix10/ai-resources
> cd ai-resources/mcp && npm ci
> ```
>
> और नीचे के snippets में `npx -y ai-resources-mcp` की जगह `node /full/path/to/ai-resources/mcp/index.js` लिखिए (JSON में: `"command": "node", "args": ["/full/path/to/ai-resources/mcp/index.js"]`)।

**Claude Code**

```bash
claude mcp add ai-resources -- npx -y ai-resources-mcp
```

**Claude Desktop** (Settings → Developer → Edit Config, `claude_desktop_config.json`), **Cursor** (`~/.cursor/mcp.json`, या किसी project में `.cursor/mcp.json`) और **Windsurf** (`~/.codeium/windsurf/mcp_config.json`):

```json
{
  "mcpServers": {
    "ai-resources": { "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

**VS Code** (workspace में `.vscode/mcp.json`, या *MCP: Open User Configuration*):

```json
{
  "servers": {
    "ai-resources": { "type": "stdio", "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

Windows पर अगर कोई client `npx` start नहीं कर पा रहा, तो `"command": "cmd", "args": ["/c", "npx", "-y", "ai-resources-mcp"]` इस्तेमाल करें।

Optional setting: `AI_RESOURCES_API_URL`, यानी API का base URL (default `https://blogs.drix10.com`)। Node 18 या उससे नया चाहिए।

आज़माकर देखिए: *"What did Anthropic announce this week? Cite the sources."*

## Agent Skill

[`skills/ai-news/SKILL.md`](../../skills/ai-news/SKILL.md) agent को सिखाता है कि "AI में नया क्या है", "<model या company> की latest ख़बर" और "किसने funding उठाई" जैसे सवालों का जवाब briefings से, citations के साथ, कब और कैसे देना है। MCP tools install हों तो यह उन्हें इस्तेमाल करता है, नहीं तो JSON API को।

Claude Code में, हर project के लिए:

```bash
git clone --depth 1 https://github.com/Drix10/ai-resources
mkdir -p ~/.claude/skills
cp -r ai-resources/skills/ai-news ~/.claude/skills/
```

सिर्फ़ एक project के लिए चाहिए, तो इसे उस project के `.claude/skills/ai-news/` में copy कर दीजिए। Windows (PowerShell) पर: `Copy-Item -Recurse ai-resources\skills\ai-news $HOME\.claude\skills\`।

जो दूसरे agents `SKILL.md` folders पढ़ते हैं, उनमें भी यही तरीका चलता है; जिन chat apps में Skills नहीं हैं, उनमें `SKILL.md` का content custom instructions में paste कर दीजिए।

## JSON API

Base URL `https://blogs.drix10.com`। JSON, CORS खुला, कोई key नहीं। इसमें वो briefings हैं जो blog पर publish हुई हैं (लगभग 2,000, और हर run के साथ बढ़ रही हैं); पूरा archive इसी repository में है।

| Request | क्या मिलता है |
| --- | --- |
| `GET /api/articles?q=<words>&category=<slug>&since=YYYY-MM-DD&limit=<n>&page=<n>` | `{ items, total, page, limit, totalPages, license }`, सबसे नया पहले। `q` के सारे words match होने चाहिए; हर parameter optional है। |
| `GET /api/articles?slug=<slug or article URL>` | एक item, साथ में `content` (पूरा Markdown)। |
| `GET /api/categories` | `{ items: [{ name, slug, count, url, llms }] }` |

हर item में होता है: `title`, `url`, `slug`, `category`, `categorySlug`, `date`, `description`, `headlines` (briefing की हर news) और `sources` (`[{ title, url }]`, यानी original posts)।

```bash
curl "https://blogs.drix10.com/api/articles?q=anthropic&since=2026-10-01&limit=5"
curl "https://blogs.drix10.com/api/categories"
```

## llms.txt

- [`https://blogs.drix10.com/llms.txt`](https://blogs.drix10.com/llms.txt): index, जिसमें हर category का link है।
- `https://blogs.drix10.com/llms/<category-slug>.txt`: किसी एक category की 50 सबसे नई briefings, जैसे [`/llms/ai-developer-tools.txt`](https://blogs.drix10.com/llms/ai-developer-tools.txt)। Slugs `/api/categories` से मिलते हैं।

## RSS

[`https://blogs.drix10.com/rss.xml`](https://blogs.drix10.com/rss.xml), feed readers, Slack/Discord feed bots या email-digest services के लिए।

## Raw Markdown

पूरा archive, 41 category folders में 100,000+ briefings, इस repository में सीधे Markdown में रखा है:

```bash
git clone --depth 1 https://github.com/Drix10/ai-resources
```

एक file: `https://raw.githubusercontent.com/Drix10/ai-resources/main/<Category Name>/resources-<N>.md` (folder name के spaces को `%20` लिखें; जितना बड़ा `N`, उतना नया)। हर file में 5 से 12 briefings होती हैं: एक headline, छोटा सा summary, **Key Points** और source links।

## कुछ छूट गया?

[`mcp`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Amcp) या [`skill`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Askill) label के साथ issue खोलिए, या कोई खुला issue खुद उठा लीजिए; [CONTRIBUTING.md](../../CONTRIBUTING.md) देखें।
