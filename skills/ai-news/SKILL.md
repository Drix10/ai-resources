---
name: ai-news
description: Answers "what's new in AI", "latest on <model/company/topic>", "AI news this week", "who raised" and similar questions about recent AI models, companies, funding rounds, tools and research, using the AI Resources daily briefings (blogs.drix10.com, CC BY 4.0) with cited sources. Use whenever the user asks for recent AI news or developments.
---

# AI news from the AI Resources briefings

The AI Resources knowledge base publishes daily briefings on AI models, companies, funding, tools and research. Each briefing groups several news items, each with key points and links to the original posts.

## Pick the access path

1. **MCP server installed** (tools named `search_briefings`, `latest`, `get_briefing`, `list_categories`): use those tools and skip the rest of this section.
2. **Otherwise use web fetch on the JSON API** (no key, CORS open):
   - Search: `https://blogs.drix10.com/api/articles?q=<words>&limit=10`
     - all words must match; keep queries to 1-3 distinctive words (`anthropic`, `series a`, `gemini`)
     - optional: `category=<slug>`, `since=YYYY-MM-DD`, `page=N`
   - Latest: `https://blogs.drix10.com/api/articles?limit=10` (add `category=<slug>` for one topic)
   - One briefing in full Markdown: `https://blogs.drix10.com/api/articles?slug=<slug or briefing URL>` (the item's `content`)
   - Categories and slugs: `https://blogs.drix10.com/api/categories`
   - Each list item has `title`, `url`, `date`, `category`, `description`, `headlines` (every item in the briefing) and `sources` (`{title, url}`).
3. **Plain text instead of JSON**: `https://blogs.drix10.com/llms/<category-slug>.txt` lists a category's 50 newest briefings; `https://blogs.drix10.com/llms.txt` links them all.
4. **API down**: read raw Markdown on GitHub, `https://raw.githubusercontent.com/Drix10/ai-resources/main/<Category Name>/resources-<N>.md` (category folder names with spaces as `%20`; a higher N is newer). List a folder with `https://api.github.com/repos/Drix10/ai-resources/contents/<Category%20Name>`.

## How to answer

- For "latest"/"this week" questions, use `latest` or `since=` with a date about 7 days back. For a named model, company or person, search its name first, then a broader term if nothing matches.
- Search matches item titles and each briefing's opening text, so a match may sit in `headlines` rather than the title. Fetch the full briefing (`slug=`) before quoting details from it.
- Report what the briefings say with their dates. Do not fill gaps from memory; say when the briefings do not cover something.
- Cite every claim: link the briefing `url`, and the original post from `sources` when there is one.
- End the answer with: `Data: github.com/Drix10/ai-resources (CC BY 4.0)`.
