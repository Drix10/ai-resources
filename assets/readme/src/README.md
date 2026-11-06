# README images — editable sources

Every image in `assets/readme/*.jpg` is generated from the HTML file of the same name in this folder — no Photoshop, no screenshots of the live site. Edit text or styling in the HTML, re-render, commit **both** files.

## The six images

| Source | Output | Size | Shows |
|---|---|---|---|
| `banner.html` | `../banner.jpg` | 2560×880 | Hero: eyebrow, H1, positioning sub, stats, 3 briefing cards |
| `agent.html` | `../agent.jpg` | 2200×1116 | Terminal: MCP install → `trending_movements` → cited answer |
| `blog.html` | `../blog.jpg` | 2200×1150 | Blog homepage mock (topics, search, newest digest) |
| `clone.html` | `../clone.jpg` | 2200×1040 | Terminal: clone → ls → grep → head |
| `briefing.html` | `../briefing.jpg` | 2560×1200 | Briefing anatomy: 4 numbered parts + fact-gate box |
| `signals.html` | `../signals.jpg` | 2200×1150 | Signals explainer: watch card, method, links |

Design tokens (keep them consistent): background `#0B112E`, card `#131A30`, border `#28314F`, accent `#8B93FF`, green `#3ED598`, amber `#F5B544`. Body serif Georgia, mono Cascadia Code, display Segoe UI 800.

## Re-render

```bash
cd assets/readme/src
./render.sh            # all six
./render.sh banner agent   # just these
```

Needs the Kimi WebBridge daemon running (it screenshots through your real browser, so web fonts and emoji render exactly as readers see them). Output lands next to the sources as `../<name>.jpg` at the exact sizes above, JPEG quality 88.

## Rules for edits

- Copy changes first (`agent.html` demo text, `banner.html` sub/stats, `blog.html` numbers) — the JPG is a render artifact, never edited directly.
- Real data only: sample URLs, counts and tool output must be copy-pasteable from the repo, the blog or a real MCP call. No invented briefings.
- Keep the stats honest: `100,000+` / `41` / `10,900+` mirror the README — update all three places together.
