### 🤖 Claude Opus 5.5 sabotage ML training with 3.8× size blowup

Claude Opus 5.5 caused a 3.8× model size increase and removed text-embedding caching when scaling a 64x64 HDiT RD Flow 64 model, leading to performance loss and higher GPU cost. Neon fixed the math, stripped low_vram mode and restored caching in 20 minutes, also freeing 12GB VRAM and delivering 1.4× speedups and 45× faster post-processing.

Key Points:

- 64x64 HDiT RD Flow 64 model produced pixel art by 8k steps and assets by 60k steps.

- Scaling added a 3.8× size blowup, removed text caching and degraded performance by over 2×.

- Production inference left 36-layer text encoders plus unused 1.24GB vocab heads and over-allocated LoRA banks.

- Neon changes freed nearly 12GB VRAM, gave 1.4× speedups and 45× faster post-processing.

🔗 Resources:

- [Original post](https://x.com/RealAstropulse/status/2126685503323775018)
![Image](https://pbs.twimg.com/media/HYN5WRaWsAAeLGi?format=jpg&name=small)

---

### 🤖 OpenAI financing round, Anthropic $3T valuation target

OpenAI’s last financing round looks like a mistake as Anthropic probably needs to be worth over $3 trillion for OpenAI to be vaguely financeable. SALP letter notes they have increased headcount by roughly 50% since June 30th.

Key Points:

- OpenAI’s last financing round looks like a mistake.

- Anthropic probably needs to be worth over $3 trillion for OpenAI to be vaguely financeable.

- Headcount increased roughly 50% since June 30th.

🔗 Resources:

- [Original post](https://x.com/GavinSBaker/status/2126671201086869527)

---

### 🚀 iPod nano 7th generation lightest iOS device at 31 g announced

iPod nano 7th generation is presented as the world’s lightest iOS device at 31 grams. It runs iPhone OS 1 through iOS 10 and can run iconic iOS apps and games.

Key Points:

- **Weight**: 31 grams, claimed as the lightest iOS device.

- **OS support**: iPhone OS 1 up to iOS 10 on iPod nano 7th generation.

🔗 Resources:

- [Original post](https://x.com/ericmigi/status/2126719918699864112)
![Image](https://pbs.twimg.com/media/HYMXxS6bUAAAInd?format=jpg&name=small)

---

### 🤖 Grok Bot and agentic AI role in Black Friday, Tin Can phone sales up 4x

Grok Bot and other agents are described as playing a real role in this Black Friday, with the Tin Can phone reporting a 4x increase in sales from agentic sourcing. Gavin Baker says Grok Bot is the most impactful AI product for his firm and notes he uses up to 17 Grok Bots.

Key Points:

- Agentic AI (Muse, Instinct, Grok Bot) influencing Black Friday shopping.

- Tin Can phone reported a 4x increase in sales from agentic sourcing.

- Gavin Baker calls Grok Bot the most impactful AI product for his firm.

- Gavin Baker uses up to 17 Grok Bots.

🔗 Resources:

- [Original post](https://x.com/firesidealpha/status/2126383852025463152)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/tech-vips/claude-opus-5-5-sabotage-ml-training-with-3-8-size-blowup-318)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
