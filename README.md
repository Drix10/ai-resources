<div align="center">

<a href="https://blogs.drix10.com"><img src="assets/readme/banner.jpg" alt="AI Resources: your agent's memory of AI — what shipped, who raised, what the numbers were, plus what is accelerating. Every briefing checked against its source. 100,000+ briefings, 41 categories, 10,900+ commits since November 2024." width="100%"></a>

<a href="https://github.com/Drix10/ai-resources/stargazers"><img src="https://img.shields.io/github/stars/Drix10/ai-resources?style=flat-square&color=8b9cff&label=stars" alt="GitHub stars"></a>
<a href="https://github.com/Drix10/ai-resources/commits/main"><img src="https://img.shields.io/github/last-commit/Drix10/ai-resources?style=flat-square&color=3ecf8e&label=updated" alt="Last updated"></a>
<a href="https://www.npmjs.com/package/ai-resources-mcp"><img src="https://img.shields.io/npm/v/ai-resources-mcp?style=flat-square&logo=npm&color=cb3837&label=mcp%20server" alt="MCP server on npm"></a>
<a href="https://blogs.drix10.com/rss.xml"><img src="https://img.shields.io/badge/rss-feed-f5b544?style=flat-square&logo=rss&logoColor=white" alt="RSS feed"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY%204.0-262626?style=flat-square" alt="License: CC BY 4.0"></a>

<b><a href="https://blogs.drix10.com">Read it</a></b> · <b><a href="#-resource-categories">Browse 41 categories</a></b> · <b><a href="#use-it-from-your-ai-agent">Plug it into your agent</a></b> · <b><a href="https://github.com/search?q=repo%3ADrix10%2Fai-resources+MCP&type=code">Search the archive</a></b>

</div>

<table>
<tr>
<td width="25%" valign="top"><b>Checked against the source</b><br><sub>A number, unit, model version or name that is not in the source post gets the briefing rejected and rewritten.</sub></td>
<td width="25%" valign="top"><b>Every claim has a link</b><br><sub>The original post and the page it points to, copied by code, never written by the model.</sub></td>
<td width="25%" valign="top"><b>41 categories</b><br><sub>Models, dev tools, research and funding, plus robotics, climate, quantum, security and crypto.</sub></td>
<td width="25%" valign="top"><b>Ready for your agent</b><br><sub>MCP server, Agent Skill, JSON API and llms.txt. Plain Markdown under CC BY 4.0.</sub></td>
</tr>
</table>

## Three ways in

<table>
<tr>
<td width="55%"><a href="https://blogs.drix10.com"><img src="assets/readme/blog.jpg" alt="blogs.drix10.com: the newest digests first, a search box and every topic with its count" width="100%"></a></td>
<td width="45%" valign="top">
<h3><a href="https://blogs.drix10.com">Read it</a></h3>
The newest digests on <a href="https://blogs.drix10.com">blogs.drix10.com</a>, with search, topic pages and an <a href="https://blogs.drix10.com/rss.xml">RSS feed</a>. Or open any category <a href="#-resource-categories">below</a> and read its latest digest here on GitHub.
<br><br>
Star and watch the repo to get new digests as they land.
</td>
</tr>
<tr>
<td width="55%"><a href="USE-WITH-AI.md"><img src="assets/readme/agent.jpg" alt="Claude Code with the ai-resources MCP server: trending_movements answers what is heating up in AI, with sample headlines and source links" width="100%"></a></td>
<td width="45%" valign="top">
<h3><a href="#use-it-from-your-ai-agent">Ask it from your agent</a></h3>
Claude, Cursor, VS Code or Windsurf answer "what did Anthropic ship this week?" from the briefings, with dates and source links. No key, no account. <a href="#use-it-from-your-ai-agent">Setup for every client ↓</a>
<br><br>
<code>claude mcp add ai-resources -- npx -y ai-resources-mcp</code>
</td>
</tr>
<tr>
<td width="55%"><img src="assets/readme/clone.jpg" alt="Cloning the repo: one folder per category, grep across every briefing, and the first lines of a digest file" width="100%"></td>
<td width="45%" valign="top">
<h3>Clone it</h3>
100,000+ dated, sourced briefings in plain Markdown for RAG, evals or an offline index. Every <code>resources-NNN.md</code> holds 5 to 12 of them, like <a href="AI%20Developer%20Tools/resources-296.md">this one</a>.
<br><br>
<code>git clone --depth 1 https://github.com/Drix10/ai-resources</code>
</td>
</tr>
</table>

## What a briefing looks like

<a href="AI%20Developer%20Tools/resources-296.md"><img src="assets/readme/briefing.jpg" alt="Anatomy of a briefing: a headline with the number, two or three sentences of facts, the key figures pulled out, and links to the original post and the page it points to" width="100%"></a>
<p align="center"><sub>A real briefing from <a href="AI%20Developer%20Tools/resources-296.md">AI Developer Tools #296</a>. Every digest file holds 5 to 12 of these.</sub></p>


## Signals: what is accelerating in AI

<a href="https://blogs.drix10.com/signals"><img src="assets/readme/signals.jpg" alt="Signals page: topics whose briefing coverage climbs week over week, each with sample headlines and source links, plus the counting method" width="100%"></a>
<p align="center"><sub><a href="https://blogs.drix10.com/signals">Signals</a>, computed weekly: topics whose coverage climbs three weeks running. Trajectories, not predictions — and nothing on it is written by a model.</sub></p>

Briefings tell you what happened. Signals tells you what it means: which topics are accelerating, with the sample headlines and source links behind every call. Computed from counts only (one briefing = one vote), in the open: [`MOVEMENTS.md`](MOVEMENTS.md) in this repo, [`/api/signals`](https://blogs.drix10.com/api/signals) for code, and the `trending_movements` MCP tool for agents.

## Who it is for

- **Engineers building with AI.** What changed in models, inference, agents, MCP and dev tools, with the benchmark number and the link, in [AI Developer Tools](#ai-developer-tools) and [Tech Infrastructure](#tech-infrastructure).
- **Founders and investors.** Rounds, launches and revenue figures as they are announced, in [AI Companies and Ventures](#ai-companies-and-ventures), [VC Firms](#vc-firms) and [Founders and Entrepreneurs](#founders-and-entrepreneurs).
- **Researchers and students.** What the people in the field are publishing and arguing about, in [CS Academics](#cs-academics) and [Neuroscience and AI](#neuroscience-and-ai).
- **Anyone building RAG, agents or evals.** A 100,000-item corpus of dated, sourced AI news under CC BY 4.0.

Awesome lists are still the better pick for a vetted shortlist, and a newsletter for five editor-picked minutes a day. [COMPARISONS.md](COMPARISONS.md) lays out where this fits.

## Use it from your AI agent

Five ways to plug the briefings into an agent or your own code. None needs a key or an account. Full reference: **[USE-WITH-AI.md](USE-WITH-AI.md)**.

| Path | Best for | Setup |
| --- | --- | --- |
| [MCP server](#mcp-server) | Claude Code, Claude Desktop, Cursor, VS Code, Windsurf | one command or one JSON block |
| [Agent Skill](#agent-skill) | Claude Code and other Skill-aware agents | copy one folder |
| [JSON API](#json-api) | your own code, custom GPT actions, scripts | none, CORS open |
| [llms.txt and RSS](#llmstxt-and-rss) | any LLM that reads a URL, feed readers, bots | none |
| [Raw Markdown](#three-ways-in) | RAG, evals, offline indexes, all 100,000+ briefings | `git clone` |

### MCP server

<a href="https://www.npmjs.com/package/ai-resources-mcp"><img src="https://img.shields.io/npm/v/ai-resources-mcp?style=flat-square&logo=npm&color=cb3837&label=ai-resources-mcp" alt="ai-resources-mcp on npm"></a>
<a href="https://registry.modelcontextprotocol.io/v0/servers?search=io.github.Drix10/ai-resources"><img src="https://img.shields.io/badge/MCP%20Registry-io.github.Drix10%2Fai--resources-8b9cff?style=flat-square" alt="In the official MCP Registry"></a>
<img src="https://img.shields.io/badge/node-%3E%3D18-3ecf8e?style=flat-square&logo=node.js&logoColor=white" alt="Node.js 18 or newer">

Published on npm as [`ai-resources-mcp`](https://www.npmjs.com/package/ai-resources-mcp) (MIT, code in [`mcp/`](mcp/)). `npx` fetches it on first run, so there is nothing to install by hand.

| Tool | What it does |
| --- | --- |
| `search_briefings(query, category?, limit?, since?)` | Keyword search, newest first. All words must match. `since` is `YYYY-MM-DD`. |
| `latest(category?, limit?)` | The newest briefings, overall or for one category. |
| `get_briefing(id)` | Full Markdown of one briefing (URL or slug), with every source link. |
| `list_categories()` | Every category slug with its briefing count. |
| `trending_movements(limit?)` | Topics accelerating week over week (rising) or hot for one week (watch), with sample headlines and source links. |

Every result ends with its source link and `Data: github.com/Drix10/ai-resources (CC BY 4.0)`, so answers stay citable.

**Claude Code**

```bash
claude mcp add ai-resources -- npx -y ai-resources-mcp
```

<details>
<summary><b>Claude Desktop, Cursor, Windsurf</b></summary>

<br>

Add this to `claude_desktop_config.json` (Claude Desktop: Settings → Developer → Edit Config), `~/.cursor/mcp.json` or `.cursor/mcp.json` (Cursor), or `~/.codeium/windsurf/mcp_config.json` (Windsurf):

```json
{
  "mcpServers": {
    "ai-resources": { "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

</details>

<details>
<summary><b>VS Code</b></summary>

<br>

In `.vscode/mcp.json`, or *MCP: Open User Configuration*:

```json
{
  "servers": {
    "ai-resources": { "type": "stdio", "command": "npx", "args": ["-y", "ai-resources-mcp"] }
  }
}
```

Or from a terminal:

```bash
code --add-mcp "{\"name\":\"ai-resources\",\"command\":\"npx\",\"args\":[\"-y\",\"ai-resources-mcp\"]}"
```

</details>

<details>
<summary><b>Windows, and other settings</b></summary>

<br>

If a client cannot start `npx` on Windows, use `"command": "cmd", "args": ["/c", "npx", "-y", "ai-resources-mcp"]`.

`AI_RESOURCES_API_URL` sets the API base URL (default `https://blogs.drix10.com`).

</details>

Then ask, for example:

- *"What did Anthropic announce this week? Cite the sources."*
- *"Latest five briefings in AI Developer Tools."*
- *"Who raised a Series A in AI this month, and how much?"*

### Agent Skill

[`skills/ai-news`](skills/ai-news/SKILL.md) teaches an agent when and how to answer "what's new in AI", "latest on &lt;model or company&gt;" and "who raised" questions from the briefings, with dates and citations. It uses the MCP tools when they are installed and falls back to the JSON API, then llms.txt, then raw Markdown on GitHub when they are not.

```bash
git clone --depth 1 https://github.com/Drix10/ai-resources
mkdir -p ~/.claude/skills
cp -r ai-resources/skills/ai-news ~/.claude/skills/
```

<details>
<summary><b>One project only, Windows, other agents</b></summary>

<br>

- **One project:** copy it to `.claude/skills/ai-news/` inside that project instead.
- **Windows (PowerShell):** `Copy-Item -Recurse ai-resources\skills\ai-news $HOME\.claude\skills\`
- **Other agents** that read `SKILL.md` folders work the same way. For chat apps without Skills, paste the body of `SKILL.md` into the custom instructions.

</details>

### JSON API

Base URL `https://blogs.drix10.com`. JSON, CORS open, no key. It covers the briefings published on the blog; the full archive is in this repository.

| Request | Returns |
| --- | --- |
| `GET /api/articles?q=&category=&since=&limit=&page=` | `{ items, total, page, limit, totalPages, license }`, newest first. All words in `q` must match; every parameter is optional. |
| `GET /api/articles?slug=<slug or URL>` | One item, plus `content` (the full Markdown). |
| `GET /api/categories` | `{ items: [{ name, slug, count, url, llms }] }` |

Each item has `title`, `url`, `slug`, `category`, `categorySlug`, `date`, `description`, `headlines` (every news item in the briefing) and `sources` (`[{ title, url }]`, the original posts).

```bash
curl "https://blogs.drix10.com/api/articles?q=anthropic&since=2026-10-01&limit=5"
curl "https://blogs.drix10.com/api/categories"
```

### llms.txt and RSS

- [`/llms.txt`](https://blogs.drix10.com/llms.txt): the index, linking every category.
- `/llms/<category-slug>.txt`: the 50 newest briefings of one category, for example [`/llms/ai-developer-tools.txt`](https://blogs.drix10.com/llms/ai-developer-tools.txt).
- [`/rss.xml`](https://blogs.drix10.com/rss.xml): for feed readers, Slack or Discord feed bots and email-digest services.

When you show the data anywhere, credit it as `Data: github.com/Drix10/ai-resources (CC BY 4.0)`. The MCP server and the Skill add that line for you.

## By the numbers

Counted from this repository on 29 October 2026. The archive only grows.

| | |
| ---: | --- |
| **100,000+** | briefings: a headline, two or three sentences and the key numbers, one per post |
| **10,800+** | digest files (`resources-NNN.md`) across **41 categories** |
| **10,900+** | commits since November 2024, all made by an automated pipeline |
| **14,000+** | briefings that link both the original post and the page it points to (every briefing since mid-2026) |
| **~2,000** | of them published as articles on [blogs.drix10.com](https://blogs.drix10.com) with search, topic pages, an [RSS feed](https://blogs.drix10.com/rss.xml) and [llms.txt](https://blogs.drix10.com/llms.txt) |

## How it is built

Nobody types these. A pipeline reads the hand-picked X lists for each category, writes one briefing per strong post, runs the fact gates, strips secrets, de-duplicates across categories and commits the batch here. The same run refreshes the category list below and publishes to the blog.

```mermaid
flowchart LR
    A["Hand-picked X lists (41 categories)"] --> B["One briefing per post"]
    B --> C["Fact gates: numbers, units, versions and names must be in the post; links copied by code"]
    C --> D["resources-NNN.md committed here"]
    D --> E["blogs.drix10.com: search, topic pages, RSS, llms.txt"]
```

**Known limits:** briefings are machine-written from public posts and can still be wrong; check the linked source before you rely on a number. Part of the older archive (2024 to mid-2026) predates source links. Coverage follows the hand-picked lists, blind spots included. Inclusion is not endorsement.

## Contribute

A pipeline writes the briefings. People pick the sources and fix what it gets wrong. Ways in:

- **Pick up a [good first issue](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)**: MCP server tools, Skill phrasings, guides, examples, translations.
- **[Suggest a source](https://github.com/Drix10/ai-resources/issues/new?template=suggest-source.yml)** (an X account, list or site) or **[report a wrong fact](https://github.com/Drix10/ai-resources/issues/new?template=wrong-fact.yml)** with the briefing link.
- **Ask, share what you built, or float an idea** in [Discussions](https://github.com/Drix10/ai-resources/discussions).

[CONTRIBUTING.md](CONTRIBUTING.md) has the details, including what not to edit by hand. Content is CC BY 4.0; the MCP server code is MIT. If you use the archive in research, [CITATION.cff](CITATION.cff) has the citation.

## Star history

<a href="https://star-history.com/#Drix10/ai-resources&Date"><img src="https://api.star-history.com/svg?repos=Drix10/ai-resources&type=Date" alt="Star history of Drix10/ai-resources" width="600" /></a>

## About the curator

Built and maintained by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, an AI systems engineer and 1x acquired founder (ReeF, acquired August 2024) based in Bengaluru. Founder of CosLynx.com, AI systems architect on Canopy @ Founders, Inc., Backdrop Build v4 and v6 finalist. More writing at [blogs.drix10.com](https://blogs.drix10.com).

<!-- drix10-footer -->
---

<div align="center">

**Built by [Drishtant Ghosh (Drix10)](https://drix10.com)** · AI systems engineer and 1x acquired founder, Bengaluru

[Portfolio](https://drix10.com) · [LinkedIn](https://www.linkedin.com/in/drix10) · [X](https://x.com/DrishtantGhosh) · [Blog](https://blogs.drix10.com) · [All projects](https://github.com/Drix10)

<sub>More from Drix10: [Agent Flow](https://github.com/Drix10/agent-flow) (guardrails for AI coding agents) · [MiroHedge](https://github.com/Drix10/hypothesis-arena) (AI-assisted systematic fund) · [Guardian](https://github.com/Drix10/guardian-gpt) (UPI scam interceptor) · [Sentinel](https://github.com/Drix10/sentinal) (AI security CLI) · [Keystroke-LLM](https://github.com/Drix10/keystroke-llm) (NumPy transformer on a keyboard)</sub>

</div>

---

## 📚 Resource Categories

**11,538 digests in 41 categories.** Each category shows its newest headlines; jump to one:

<sub>[AI Developer Tools](#ai-developer-tools) · [AI Leaders and Thinkers](#ai-leaders-and-thinkers) · [AI Companies and Ventures](#ai-companies-and-ventures) · [CS Academics](#cs-academics) · [Tech VIPs](#tech-vips) · [VC Firms](#vc-firms) · [Devs, Designers, DevRel](#devs-designers-devrel) · [Tech Infrastructure](#tech-infrastructure) · [Founders and Entrepreneurs](#founders-and-entrepreneurs) · [AI Organizations and Media](#ai-organizations-and-media) · [AI Powered Film and Media](#ai-powered-film-and-media) · [AI Holodeck and Virtual Worlds](#ai-holodeck-and-virtual-worlds) · [AI Artists and Creators](#ai-artists-and-creators) · [AI in Healthcare and Science](#ai-in-healthcare-and-science) · [AI Generated Music and Audio](#ai-generated-music-and-audio) · [AI Consulting and Expertise](#ai-consulting-and-expertise) · [AI Professionals and Community](#ai-professionals-and-community) · [AI Policy and Ethical Considerations](#ai-policy-and-ethical-considerations) · [AI in Real Estate and Property Tech](#ai-in-real-estate-and-property-tech) · [AI and Robotics Applications](#ai-and-robotics-applications) · [AI Driven Vehicles and Transportation](#ai-driven-vehicles-and-transportation) · [AI for Content Creation and Marketing](#ai-for-content-creation-and-marketing) · [AR VR Companies and Development](#ar-vr-companies-and-development) · [AR VR Professionals and Community](#ar-vr-professionals-and-community) · [Climate and Weather Technology](#climate-and-weather-technology) · [Computer Vision and AI Applications](#computer-vision-and-ai-applications) · [Crypto and Web3](#crypto-and-web3) · [Decentralized AI](#decentralized-ai) · [The Exponential Future](#the-exponential-future) · [AI Education](#ai-education) · [AI in Enterprise Applications](#ai-in-enterprise-applications) · [Interesting Finds](#interesting-finds) · [Investors and Venture Capital](#investors-and-venture-capital) · [Cybersecurity and Tech](#cybersecurity-and-tech) · [Neuroscience and AI](#neuroscience-and-ai) · [PR and Communications](#pr-and-communications) · [Quantum Computing](#quantum-computing) · [Spatial Computing](#spatial-computing) · [Tech Companies and News](#tech-companies-and-news) · [Tech Journalists and VIPs](#tech-journalists-and-vips) · [World News and Updates](#world-news-and-updates)</sub>

### AI Developer Tools

<sub>319 digests · [latest: #322](https://github.com/Drix10/ai-resources/blob/main/AI%20Developer%20Tools/resources-322.md) · [read on the blog](https://blogs.drix10.com/categories/ai-developer-tools)</sub>

*   0xf3a39324efac17df683550db631678263dfa6098 moved $501K
*   tacit – permissionless on-chain privacy pool launch
*   LocalAI new release adds agent sandboxing, two profiles

### AI Leaders and Thinkers

<sub>312 digests · [latest: #312](https://github.com/Drix10/ai-resources/blob/main/AI%20Leaders%20and%20Thinkers/resources-312.md) · [read on the blog](https://blogs.drix10.com/categories/ai-leaders-and-thinkers)</sub>

*   Inkling 2 Mini launch with 26B parameters and AA Index score 20.1
*   Inkling 2 mini runs at 30 tokens/s on RTX 4070 Ti
*   xeinternet free transactions, no fee and no queue

### AI Companies and Ventures

<sub>310 digests · [latest: #310](https://github.com/Drix10/ai-resources/blob/main/AI%20Companies%20and%20Ventures/resources-310.md) · [read on the blog](https://blogs.drix10.com/categories/ai-companies-and-ventures)</sub>

*   Inkling 2 Mini local model launch and AI funding trends
*   Paperwire announces AI agent can handle mail, fax, checks
*   Egmatic – shortest path to published 2D games announced

### CS Academics

<sub>323 digests · [latest: #323](https://github.com/Drix10/ai-resources/blob/main/CS%20Academics/resources-323.md) · [read on the blog](https://blogs.drix10.com/categories/cs-academics)</sub>

*   Lean verification of Riemann Hypothesis proof, 17M lines
*   Gemini Neon launch described as “approaching” frontier models
*   Arena Alignment Index: OpenAI holds all seven top spots

### Tech VIPs

<sub>315 digests · [latest: #315](https://github.com/Drix10/ai-resources/blob/main/Tech%20VIPs/resources-315.md) · [read on the blog](https://blogs.drix10.com/categories/tech-vips)</sub>

*   MiniMax – 492 requests exposed, credentials rotated
*   Suno AI video creation tool integration with Grok Bot via MCP
*   Fall Guys clone - Unreal 5.8 to browsers via WebGPU

### VC Firms

<sub>313 digests · [latest: #313](https://github.com/Drix10/ai-resources/blob/main/VC%20Firms/resources-313.md) · [read on the blog](https://blogs.drix10.com/categories/vc-firms)</sub>

*   Anthropic investment 220 billion won by Seohak Ants
*   Nucleovir Therapeutics AI virus preclinical trial start
*   Exa hits $100M annual revenue, 10x yearly growth, 2B requests

### Devs, Designers, DevRel

<sub>314 digests · [latest: #314](https://github.com/Drix10/ai-resources/blob/main/Devs%2C%20Designers%2C%20DevRel/resources-314.md) · [read on the blog](https://blogs.drix10.com/categories/devs-designers-devrel)</sub>

*   AWS F2 FPGA LLM inference engine 213 tps using AI agents
*   spawn game – first Descent-style tunnel labyrinth release

### Tech Infrastructure

<sub>289 digests · [latest: #289](https://github.com/Drix10/ai-resources/blob/main/Tech%20Infrastructure/resources-289.md) · [read on the blog](https://blogs.drix10.com/categories/tech-infrastructure)</sub>

*   Cognition Devin Bots build Android app in 44 days
*   Generalised Superintelligence announces 250+ discoveries
*   Gemini Mac app adds computer use across apps, requires Apple Silicon

### Founders and Entrepreneurs

<sub>278 digests · [latest: #278](https://github.com/Drix10/ai-resources/blob/main/Founders%20and%20Entrepreneurs/resources-278.md) · [read on the blog](https://blogs.drix10.com/categories/founders-and-entrepreneurs)</sub>

*   Saylor and Tom Lee down $23 billion combined loss
*   Letter.dev adds ICP visitor view on your site
*   Tesla FSD live in 12 European countries launch

### AI Organizations and Media

<sub>305 digests · [latest: #305](https://github.com/Drix10/ai-resources/blob/main/AI%20Organizations%20and%20Media/resources-305.md) · [read on the blog](https://blogs.drix10.com/categories/ai-organizations-and-media)</sub>

*   Think Offline, Act in Real Time
*   GateWatch: Low-Overhead LLM Monitoring hits 80.49% accuracy
*   Nvidia loses $2.6T market cap, falls to fourth

### AI Powered Film and Media

<sub>280 digests · [latest: #280](https://github.com/Drix10/ai-resources/blob/main/AI%20Powered%20Film%20and%20Media/resources-280.md) · [read on the blog](https://blogs.drix10.com/categories/ai-powered-film-and-media)</sub>

*   Anthropic valuation $1.5T and revenue $20B, Walmart valuation $940B
*   Seedance 2.5 tutorial fixes wrong character talking
*   Handcut VR video editor announced for Meta VR Start competition

### AI Holodeck and Virtual Worlds

<sub>293 digests · [latest: #293](https://github.com/Drix10/ai-resources/blob/main/AI%20Holodeck%20and%20Virtual%20Worlds/resources-293.md) · [read on the blog](https://blogs.drix10.com/categories/ai-holodeck-and-virtual-worlds)</sub>

*   Kling Image 4.0 launches on Sunra AI with 8K native resolution
*   Kling 4.0 creates Eight Nights in 4K 10-bit HDR
*   Gauzilla Pro adds GeoAI object detection and segmentation

### AI Artists and Creators

<sub>284 digests · [latest: #284](https://github.com/Drix10/ai-resources/blob/main/AI%20Artists%20and%20Creators/resources-284.md) · [read on the blog](https://blogs.drix10.com/categories/ai-artists-and-creators)</sub>

*   Seedream 5.5 enables 100 edits with pixel preservation
*   Anthropic opens two new fellowships starting January 2027

### AI in Healthcare and Science

<sub>296 digests · [latest: #296](https://github.com/Drix10/ai-resources/blob/main/AI%20in%20Healthcare%20and%20Science/resources-296.md) · [read on the blog](https://blogs.drix10.com/categories/ai-in-healthcare-and-science)</sub>

*   New RAS-blocking drug shrinks tumors in 11 of 25 patients
*   Blood pressure drugs prevent eight events per 1000 patients
*   Alcohol exposure halves cancer immunotherapy success in mice

### AI Generated Music and Audio

<sub>293 digests · [latest: #293](https://github.com/Drix10/ai-resources/blob/main/AI%20Generated%20Music%20and%20Audio/resources-293.md) · [read on the blog](https://blogs.drix10.com/categories/ai-generated-music-and-audio)</sub>

*   Duets – new feature for music video generator
*   AI Music tracks: why some sound expensive
*   Office Time bengali deathcore song on Soundverse v9

### AI Consulting and Expertise

<sub>283 digests · [latest: #283](https://github.com/Drix10/ai-resources/blob/main/AI%20Consulting%20and%20Expertise/resources-283.md) · [read on the blog](https://blogs.drix10.com/categories/ai-consulting-and-expertise)</sub>

*   6 small open Indian-language models released, under 310M params
*   dabestr – new “Beyond p-Values with dabestr in R” module
*   Gemini Neon video storyboard output selection 4 from Neon 1 from ChatGPT

### AI Professionals and Community

<sub>286 digests · [latest: #286](https://github.com/Drix10/ai-resources/blob/main/AI%20Professionals%20and%20Community/resources-286.md) · [read on the blog](https://blogs.drix10.com/categories/ai-professionals-and-community)</sub>

*   MIT vibe coding paper shows 25.5x code increase
*   AI bubble odds rise to 69% as 10 firms lose $2.9T

### AI Policy and Ethical Considerations

<sub>274 digests · [latest: #274](https://github.com/Drix10/ai-resources/blob/main/AI%20Policy%20and%20Ethical%20Considerations/resources-274.md) · [read on the blog](https://blogs.drix10.com/categories/ai-policy-and-ethical-considerations)</sub>

*   GTA 6 launch night DoorDash orders up 25% in Miami
*   Defense Department 68 barrels explosives in Middletown Iowa
*   AI and Culture Advisory Council first meeting held

### AI in Real Estate and Property Tech

<sub>274 digests · [latest: #274](https://github.com/Drix10/ai-resources/blob/main/AI%20in%20Real%20Estate%20and%20Property%20Tech/resources-274.md) · [read on the blog](https://blogs.drix10.com/categories/ai-in-real-estate-and-property-tech)</sub>

*   Emotica adds 28 expression sprites and Live2D puppet
*   Strecs3D adds stress-based infill generation for 3D prints
*   CUPID reconstructs 3D objects from a single image

### AI and Robotics Applications

<sub>291 digests · [latest: #291](https://github.com/Drix10/ai-resources/blob/main/AI%20and%20Robotics%20Applications/resources-291.md) · [read on the blog](https://blogs.drix10.com/categories/ai-and-robotics-applications)</sub>

*   Gemini 4 Neon runs ONNX models locally without GPU
*   mjlab_hand open-sourced with dexterous manipulation tasks
*   SMURF by ORCAUBOAT autonomous surface-cleaning robot announced

### AI Driven Vehicles and Transportation

<sub>287 digests · [latest: #287](https://github.com/Drix10/ai-resources/blob/main/AI%20Driven%20Vehicles%20and%20Transportation/resources-287.md) · [read on the blog](https://blogs.drix10.com/categories/ai-driven-vehicles-and-transportation)</sub>

*   FSD v15 rollout upgrades end-to-end driving network
*   Qualcomm auto revenue $2B quarterly, $8B annual
*   Lean verification of Riemann Hypothesis proof released, 17M lines

### AI for Content Creation and Marketing

<sub>283 digests · [latest: #283](https://github.com/Drix10/ai-resources/blob/main/AI%20for%20Content%20Creation%20and%20Marketing/resources-283.md) · [read on the blog](https://blogs.drix10.com/categories/ai-for-content-creation-and-marketing)</sub>

*   Lean verification of Riemann Hypothesis proof released, 17 million lines
*   Blackstone AI uses speed gains across portfolio companies
*   HeyGen Decision 1 API launch with 50% off speed claims

### AR VR Companies and Development

<sub>279 digests · [latest: #279](https://github.com/Drix10/ai-resources/blob/main/AR%20VR%20Companies%20and%20Development/resources-279.md) · [read on the blog](https://blogs.drix10.com/categories/ar-vr-companies-and-development)</sub>

*   Quest Gets 3D Movie Rentals & Purchases In The US, 150+ titles
*   hex iOS app testflight launch with dictation features
*   Depth Pro 2 released, clean depth on indoor frames

### AR VR Professionals and Community

<sub>277 digests · [latest: #277](https://github.com/Drix10/ai-resources/blob/main/AR%20VR%20Professionals%20and%20Community/resources-277.md) · [read on the blog](https://blogs.drix10.com/categories/ar-vr-professionals-and-community)</sub>

*   Lance live demo: 8.2M Dutch parcels (5.5GB) with GeoArrow + R-Tree
*   the-hugging-face-hack interactive voice game released
*   Grok Build rename and CLI 2.0 alpha release

### Climate and Weather Technology

<sub>273 digests · [latest: #273](https://github.com/Drix10/ai-resources/blob/main/Climate%20and%20Weather%20Technology/resources-273.md) · [read on the blog](https://blogs.drix10.com/categories/climate-and-weather-technology)</sub>

*   Brevard County rain – 39 inches in three weeks
*   Fall Florida rainfall totals to date, 75% of normal year

### Computer Vision and AI Applications

<sub>280 digests · [latest: #280](https://github.com/Drix10/ai-resources/blob/main/Computer%20Vision%20and%20AI%20Applications/resources-280.md) · [read on the blog](https://blogs.drix10.com/categories/computer-vision-and-ai-applications)</sub>

*   A2A-UAV dataset released with 105,294 multimodal samples
*   MovieRoll: Systematic Framework for Long-Form Video Rolling Out
*   Déjà-Events multi-view 3D model announced with 0.15 AbsRel error

### Crypto and Web3

<sub>270 digests · [latest: #270](https://github.com/Drix10/ai-resources/blob/main/Crypto%20and%20Web3/resources-270.md) · [read on the blog](https://blogs.drix10.com/categories/crypto-and-web3)</sub>

*   S&P 500 tech index 16.4x earnings, Bitcoin $62k, ETF outflows
*   IOSCO tokenised bond issuance surged to €4.8 BILLION in 2025
*   Flare announces MCP server, LayerZero DVN, EarnFLR Vault

### Decentralized AI

<sub>272 digests · [latest: #272](https://github.com/Drix10/ai-resources/blob/main/Decentralized%20AI/resources-272.md) · [read on the blog](https://blogs.drix10.com/categories/decentralized-ai)</sub>

*   LeonardoAi gets GPUs in days, then acquired by Canva
*   Theta Fuel TFUEL gas engine and AI settlement
*   Firelightfi cover premiums respond to XRP value

### The Exponential Future

<sub>272 digests · [latest: #272](https://github.com/Drix10/ai-resources/blob/main/The%20Exponential%20Future/resources-272.md) · [read on the blog](https://blogs.drix10.com/categories/the-exponential-future)</sub>

*   Inkling 2 Mini launch with 26.4B parameters
*   Hermes Agent Plugin Hackathon winners announced top 10
*   Cybertruck turning radius improvement via software update 2026.44+

### AI Education

<sub>288 digests · [latest: #288](https://github.com/Drix10/ai-resources/blob/main/AI%20Education/resources-288.md) · [read on the blog](https://blogs.drix10.com/categories/ai-education)</sub>

*   Lory-27B v2 and Lory-4B v2 released, Lory-27B scores 80 on blind test
*   Growth Mindset Sessions Impact 12,490 Ninth Graders
*   Memento AI agents learn from experience without retraining

### AI in Enterprise Applications

<sub>277 digests · [latest: #277](https://github.com/Drix10/ai-resources/blob/main/AI%20in%20Enterprise%20Applications/resources-277.md) · [read on the blog](https://blogs.drix10.com/categories/ai-in-enterprise-applications)</sub>

*   StrawberryAI Mainnet campaign launches 799,605 BERRY
*   TornadoCash split $499K, swapped to USDT, bridged to Tron
*   Copilot eight new services connect via GitHub-verified MCP connectors

### Interesting Finds

<sub>263 digests · [latest: #263](https://github.com/Drix10/ai-resources/blob/main/Interesting%20Finds/resources-263.md) · [read on the blog](https://blogs.drix10.com/categories/interesting-finds)</sub>

*   AI usage by knowledge workers – 1% current, 80% target
*   Waddle-1 solves Stand Up Bottles with 99% score

### Investors and Venture Capital

<sub>267 digests · [latest: #267](https://github.com/Drix10/ai-resources/blob/main/Investors%20and%20Venture%20Capital/resources-267.md) · [read on the blog](https://blogs.drix10.com/categories/investors-and-venture-capital)</sub>

*   Miller-Rabin Test deterministic after GRH proof
*   SleepApnea dentists course retention under 5%
*   Lens first good third party browser for iOS

### Cybersecurity and Tech

<sub>250 digests · [latest: #250](https://github.com/Drix10/ai-resources/blob/main/Cybersecurity%20and%20Tech/resources-250.md) · [read on the blog](https://blogs.drix10.com/categories/cybersecurity-and-tech)</sub>

*   Upload2Shell CVE-2026-125396 use-after-free in Ghostscript
*   Entra Connect Health admin email addresses readable flaw
*   OpenRouter off-boards 3 providers, cuts endpoints

### Neuroscience and AI

<sub>258 digests · [latest: #258](https://github.com/Drix10/ai-resources/blob/main/Neuroscience%20and%20AI/resources-258.md) · [read on the blog](https://blogs.drix10.com/categories/neuroscience-and-ai)</sub>

*   Parkin functional atlas identifies ~9,200 variants
*   BepiColombo arrives at Mercury after eight-year journey
*   Hera mission ready to explore binary asteroid Didymos

### PR and Communications

<sub>255 digests · [latest: #255](https://github.com/Drix10/ai-resources/blob/main/PR%20and%20Communications/resources-255.md) · [read on the blog](https://blogs.drix10.com/categories/pr-and-communications)</sub>

*   He Became a Chick-fil-A Franchise Operator at Age 26
*   What to Do When You Have a Bad Boss – stay longer
*   The 3 Challenges Every New CEO Faces - 20 CEOs

### Quantum Computing

<sub>256 digests · [latest: #256](https://github.com/Drix10/ai-resources/blob/main/Quantum%20Computing/resources-256.md) · [read on the blog](https://blogs.drix10.com/categories/quantum-computing)</sub>

*   Claude AI and Levent Alpöge claim Riemann hypothesis proof in Lean 20 November 2026
*   OTOC1 simulation first rigorous poly-time algorithm announced
*   Lean verification of Riemann Hypothesis released, 17 million lines

### Spatial Computing

<sub>254 digests · [latest: #254](https://github.com/Drix10/ai-resources/blob/main/Spatial%20Computing/resources-254.md) · [read on the blog](https://blogs.drix10.com/categories/spatial-computing)</sub>

*   UE6 plan update removes Blueprints, adds Verse
*   Smart Glasses Technology and Adoption book release 137 pages
*   Tesla Reality View new spatial awareness feature announced

### Tech Companies and News

<sub>249 digests · [latest: #249](https://github.com/Drix10/ai-resources/blob/main/Tech%20Companies%20and%20News/resources-249.md) · [read on the blog](https://blogs.drix10.com/categories/tech-companies-and-news)</sub>

*   Biv launch by Tenera: 4× aligned, 284× cheaper
*   Superpower turbine 42MW waterless operation in heat
*   Boom new engine company born, claims supersonic

### Tech Journalists and VIPs

<sub>252 digests · [latest: #252](https://github.com/Drix10/ai-resources/blob/main/Tech%20Journalists%20and%20VIPs/resources-252.md) · [read on the blog](https://blogs.drix10.com/categories/tech-journalists-and-vips)</sub>

*   8090 AI-Native Software Development Platform launch
*   Boom jet engine test-fired, first full-size startup engine
*   Neil Mehta $100 accounts for San Francisco kids born 2016-2024

### World News and Updates

<sub>244 digests · [latest: #244](https://github.com/Drix10/ai-resources/blob/main/World%20News%20and%20Updates/resources-244.md) · [read on the blog](https://blogs.drix10.com/categories/world-news-and-updates)</sub>

*   Yemen oil company warehouse air strike wounds six
*   Saudi-led coalition destroys Houthi drone towards capital
*   GTA-VI shattered sales records, Saudi Arabia big winner

---

<div align="center">

[Star the repo](https://github.com/Drix10/ai-resources) to keep it handy and help others find it, or [suggest a source](https://github.com/Drix10/ai-resources/issues/new/choose).

[Read on the blog](https://blogs.drix10.com) · [RSS feed](https://blogs.drix10.com/rss.xml) · [Use it from your AI agent](https://github.com/Drix10/ai-resources/blob/main/USE-WITH-AI.md)

<sub>Summaries © Drishtant Ghosh, licensed [CC BY 4.0](LICENSE). Every digest links to its original post where one exists; the posts and linked pages belong to their authors.</sub>

</div>
