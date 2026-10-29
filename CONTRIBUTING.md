# Contributing

Thanks for helping. AI Resources has two kinds of content, and they take help differently:

- **Generated digests** (`<Category>/resources-NNN.md` and the category list in the README) are written by an automated pipeline and refreshed several times a day. Help here comes mostly through **issues**: better sources, wrong facts, new categories.
- **Everything else** (the [MCP server](mcp/), the [ai-news Skill](skills/ai-news/), [USE-WITH-AI.md](USE-WITH-AI.md), these docs, examples and guides) is written by hand. **Pull requests are welcome.**

New here? Start with an issue labelled [`good first issue`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22). Questions and ideas go to [Discussions](https://github.com/Drix10/ai-resources/discussions).

## Ways to help

| You want to… | Do this |
| --- | --- |
| Suggest an X account, X list or site to follow | Open a [Suggest a source](https://github.com/Drix10/ai-resources/issues/new?template=suggest-source.yml) issue. Name the category and link two or three recent posts that show the kind of concrete material it shares. |
| Report a wrong number, name or link | Open a [Wrong fact](https://github.com/Drix10/ai-resources/issues/new?template=wrong-fact.yml) issue with the link to the briefing (the `resources-NNN.md` file or the blog page) and a link to the source that shows the correct version. Wrong facts are fixed first. |
| Ask for a new category | Open a [Request a category](https://github.com/Drix10/ai-resources/issues/new?template=request-category.yml) issue and list five or more sources that would feed it. |
| Improve the MCP server or the Skill | Pick an issue labelled [`mcp`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Amcp) or [`skill`](https://github.com/Drix10/ai-resources/issues?q=is%3Aissue+is%3Aopen+label%3Askill), or report a bug with the [MCP server / Skill bug](https://github.com/Drix10/ai-resources/issues/new?template=mcp-skill-bug.yml) form. Then send a pull request (see below). |
| Add a guide, example or topic page | Pull requests welcome: integration guides, example notebooks, translations of [USE-WITH-AI.md](USE-WITH-AI.md), and hand-written topic pages that collect briefings on one company or theme with links to the digests. Open an issue first for anything large. |
| Fix the README | Edit only the text **above** the `## 📚 Resource Categories` heading; everything from that heading down is regenerated on every run. |

## Working on the MCP server

```bash
git clone https://github.com/Drix10/ai-resources
cd ai-resources/mcp
npm ci
npm test          # node:test with a stubbed fetch, no network needed
```

- Node 18 or later, ES modules, no build step. Tools live in `mcp/server.js`; tests in `mcp/test/server.test.js`.
- Every new tool or behaviour gets a test. Tests must not call the live API.
- Every tool result keeps its source link and the `Data: github.com/Drix10/ai-resources (CC BY 4.0)` line.
- The API it reads is documented in [USE-WITH-AI.md](USE-WITH-AI.md#json-api). If you need something the API does not offer, open an issue rather than scraping the site.
- Pull requests that touch `mcp/` run the tests in GitHub Actions.

## Working on the Skill

`skills/ai-news/SKILL.md` is plain Markdown with a YAML header. Test a change by copying the folder to `~/.claude/skills/` and asking Claude Code a few AI-news questions; say in the pull request which prompts you tried and what came back.

## What not to do

- **No hand edits to generated digest files**, except to fix a factual error or a broken link, and only with a link to the source that shows the correction. Keep the existing structure (headline, summary, Key Points, Resources). Anything else is overwritten or lost on the next run.
- No edits below `## 📚 Resource Categories` in the README.
- No paid placements, promotional rewrites or self-promotion disguised as a source. Suggesting your own account or product is fine if you say so; it is judged the same way.
- No bulk machine-generated issues or pull requests.

## What makes a good source

- It posts concrete things (releases, numbers, papers, code, postmortems) more often than opinions.
- It is the original author, not a repost or aggregator account.
- It fits one of the [41 categories](README.md#-resource-categories), or enough sources exist to justify a new one.

## Licence

- **Content** (the digests, briefings and docs) is [CC BY 4.0](LICENSE). By contributing text you agree to license it the same way.
- **Code** in `mcp/` is [MIT](mcp/LICENSE). By contributing code there you agree to license it under MIT.

## Conduct

Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md).
