### 🤖 Slotstream runs Qwen3.8-Flash-Next on 16-64GB Macs, 20.91-23.69 tok/s benchmark

Slotstream streams the 105GB Qwen3.8-Flash-Next model from SSD and runs on Apple Silicon Macs with 16GB to 64GB of RAM. A 48GB M5 Pro achieved 20.91–23.69 tokens per second on short, long, and coding prompts at a 33GB memory budget. The engine is a single Swift binary, works offline after download, and requires no Python.

Key Points:

- Runs Qwen3.8-Flash-Next from SSD on 16–64GB Apple Silicon Macs, one Swift binary, offline after download.

- 48GB M5 Pro measured 20.91–23.69 tok/s across short, longer, and coding workloads at a 33GB memory budget.

🔗 Resources:

- [Original post](https://x.com/QwenAIFans/status/2114477622402982225)
- [slotstream](https://github.com/carloslfu/slotstream) - Linked page
![Image](https://pbs.twimg.com/media/HVgiGuOXoAAMUQf?format=jpg&name=small)

---

### 🤖 bbtree Rust map released, 5x faster than std BTreeMap

bbtree is a Rust ordered map released by Xiangpeng Hao, benchmarked 5× faster than std's BTreeMap on one thread. It also runs 12× faster than crossbeam-skiplist at 96 threads, with mixed memory results.

Key Points:

- **Release**: bbtree released last week, LLM wrote all implementation, Hao made every design decision.

- **Benchmark**: 5× faster than std BTreeMap on one thread, 12× faster than crossbeam-skiplist at 96 threads.

🔗 Resources:

- [Original post](https://x.com/lmoroney/status/2114758884283850791)

---

### 🚨 Microsoft Authenticator bug lets Android app steal Teams tokens July CVE-2026-80097

Microsoft Authenticator bug let an Android app with zero permissions pose as Teams and steal a user's work-account tokens. In Enclave's tests the stolen tokens opened the victim's mailbox, files and calendar with no prompt. Microsoft fixed the issue in July and assigned CVE-2026-80097.

Key Points:

- Bug allowed an Android app with zero permissions to impersonate Teams and obtain work-account tokens.

- Tokens accessed the victim's mailbox, files and calendar without any prompt.

- Fix released in July, identified as CVE-2026-80097.

🔗 Resources:

- [Original post](https://x.com/IntCyberDigest/status/2114703843975921970)
![Image](https://pbs.twimg.com/media/HVjPH4XWoAATyRJ?format=jpg&name=small)
![Image](https://pbs.twimg.com/media/HVjPOVWW8AAOxH1?format=jpg&name=small)

---

### 🚀 BrowserCode launch – free, no-account dev environment

BrowserCode is a full dev environment in a browser tab, launched today, free and requires no account. It lets users share running projects instantly and experiment with agents in an isolated, safe playground.

Key Points:

- **Launch**: Today we launch BrowserCode, a full dev environment in a browser tab.

- **Access**: No account is required, and it's completely free.

🔗 Resources:

- [Original post](https://x.com/alexpignotti/status/2114730935887224947)
- [labs.leaningtech.com](https://labs.leaningtech.com/blog/announcing-browsercode) - Linked in the post

---

### 🤖 Cloudflare adds 'Onboard your agent' button to dashboard

Cloudflare adds "Onboard your agent to Cloudflare" button on dashboard that copies a setup prompt for AI coding tools. It notes SaaS owners could add the same button.

Key Points:

- **Feature**: "Onboard your agent to Cloudflare" appears first on dashboard.

- **Action**: One click copies a setup prompt for your AI coding tool.

🔗 Resources:

- [Original post](https://x.com/fekdaoui/status/2114650497617707295)
![Image](https://pbs.twimg.com/media/HVi_a73a4AAqlgE?format=jpg&name=small)

---

### 🤖 CapCut plugin for ChatGPT announced at CapCut World LA

CapCut announced a CapCut plugin for ChatGPT at CapCut World LA, enabling draft video creation directly in chat. Prompt format should be a shot list describing each beat, its duration, and music placement.

Key Points:

- CapCut plugin is coming to ChatGPT.

- **Write prompts like a shot list**: what each beat shows, how long it holds, and where the music lands.

🔗 Resources:

- [Original post](https://x.com/lmoroney/status/2114745509407568268)

---

### 🚨 Copilot chat free fails with spreadsheets, drops 25% of rows

Copilot chat (free) is now failing with spreadsheets. Users report it randomly drops about 25% of rows on small sheets.

Key Points:

- **Issue**: Copilot chat (free) now fails miserably with spreadsheets.

- **Failure mode**: Randomly dropping 25% of rows on small sheets.

🔗 Resources:

- [Original post](https://x.com/erictronai/status/2114751973144633701)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-consulting-and-expertise/slotstream-runs-qwen3-8-flash-next-on-16-64gb-macs-20-91-23-267)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
