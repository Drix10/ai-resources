### 🤖 Revolut moves 2k engineers to self-hosted GLM

Revolut moved about 2,000 engineers onto self-hosted GLM for coding, achieving 1/10th the cost and 70% faster lead time. They run 56 Nvidia B200 GPUs and pay a blended 30 cents per million tokens, roughly a tenth of Anthropic pricing.

Key Points:

- **Engineers**: ~2,000 engineers on self-hosted GLM, 1/10th cost, 70% faster lead time.

- **Infrastructure**: 56 Nvidia B200 GPUs, blended 30 cents per million tokens, about a tenth of Anthropic spend.

🔗 Resources:

- [Original post](https://x.com/togethercompute/status/2117666686757372106)
![Image](https://pbs.twimg.com/media/HWJxC2yWEAAWYYO?format=jpg&name=small)

---

### 🚨 Zyxel GS1900 Pre-Auth RCE exploited, new CVE-2026-107441

Zyxel GS1900 switches were attacked with a pre-auth RCE linked to CVE-2026-7273, but the patch did not stop it. Researchers found a different unpatched flaw, reported it, and Zyxel issued a fix with CVE-2026-107441.

Key Points:

- Exploit CVE-2026-7273 used in the wild, patch ineffective.

- New vulnerability CVE-2026-107441 disclosed and fixed after report.

🔗 Resources:

- [Original post](https://x.com/binarly_io/status/2117651602823598202)
- [binarly.io](https://www.binarly.io/blog/zyxel-gs1900-rce-cve-2026-107441) - Linked in the post
- [binarly.io](https://www.binarly.io/advisories/brly-2026-057) - Linked in the post

---

### 🤖 vLLM platform layers added: tenant keys, routing, GPU scheduling

vLLM in a pod is described as only the engine, and a platform must add tenant keys and budgets, inference-aware routing, and GPU scheduling. The article outlines where each responsibility belongs in a Kubernetes LLM inference platform. It also notes that GPU utilization alone was insufficient for autoscaling, using queue depth instead.

Key Points:

- Tenant edge (LiteLLM) handles virtual keys, per-key budgets, model allowlists, rate limits, and spend records.

- Inference-aware router (Gateway API Inference Extension) selects the replica with the healthiest queue and cache state.

🔗 Resources:

- [Original post](https://x.com/learnk8s/status/2117664615878275457)
- [The Missing Control Plane Above vLLM](https://waleedmalik.dev/blog/missing-control-plane-above-vllm/) - Linked page
![Image](https://pbs.twimg.com/media/HWN0vuCWoAAZmoP?format=png&name=small)

---

### 🤖 RedHat AI 3.5 priority serving with llm-d flow control

RedHat AI 3.5 priority-aware serving uses llm-d flow control to protect interactive traffic and fill spare compute with batch jobs. It addresses latency spikes and 429 rejections in shared GPU pools.

Key Points:

- Priority-aware serving in RedHat AI 3.5

- llm-d flow control protects interactive traffic while using spare compute for batch jobs

🔗 Resources:

- [Original post](https://x.com/rhdevelopers/status/2117664109487403311)
- [red.ht](https://red.ht/4koPVwn) - Linked in the post
![Image](https://pbs.twimg.com/media/HWN0SQEWwAAYtIo?format=jpg&name=small)

---

### 🤖 IDC Quanta in Claude launch – available since July

IDC Quanta is now integrated in Claude, letting users ask market questions and receive answers that cite IDC forecasts and data. The connector was added in July and a case study with Anthropic is linked.

Key Points:

- **Availability**: IDC Quanta has been available in Claude since July.

- **Citation**: Each answer cites the IDC document or dataset it came from.

🔗 Resources:

- [Original post](https://x.com/IDC/status/2117664366245879822)
- [IDC Connects Claude to IDC Quanta and Uses Claude Across the Company](https://www.idc.com/resource-center/blog/idc-anthropic-case-study-blog/) - Linked page
![Image](https://pbs.twimg.com/media/HWN0hMFW0AAB9I6?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/tech-infrastructure/revolut-moves-2k-engineers-to-self-hosted-glm-275)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
