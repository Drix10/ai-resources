### 📊 Qwen3-0.6B 24KB x86-64 Assembly OS runs 54% faster than Linux llama.cpp

Qwen3-0.6B is baked into a 24KB pure x86-64 assembly OS that boots in 74-94 ms and runs up to 54% faster than native Linux llama.cpp. The OS binary (asm-llm-os.elf) is 24,252 bytes and maps 614 MiB of weights directly from RAM. Benchmarks on an AMD EPYC 7642 show 1-thread 23.67 tok/s vs 16.63 tok/s (+42%). A diskless Proxmox VM boots in under 5 seconds (95 ms kernel) and achieves 78 tok/s decode.

Key Points:

- **Binary size**: 24,252 bytes, boots in 74-94 ms, wakes all CPU cores via APIC.

- **Benchmark**: 1 thread 23.67 tok/s vs 16.63 tok/s (+42%) on AMD EPYC 7642.

🔗 Resources:

- [Original post](https://x.com/superalesha/status/2125682626056839259)

---

### 🤖 Palo Alto Networks flags Fragnesia flaw in PAN-OS

Palo Alto Networks flags Fragnesia flaw in PAN-OS, noting exploitation of CVE-2026-46300 on internet-exposed management interfaces. The company released patches for PAN-OS 10.2, 11.1, 11.2, 12.1 and 12.2.

Key Points:

- Fragnesia (CVE-2026-46300) is a Linux kernel XFRM ESP-in-TCP flaw that lets a low-privilege local attacker gain root.

- Fixes for Fragnesia are available in PAN-OS versions 10.2, 11.1, 11.2, 12.1 and 12.2.

🔗 Resources:

- [Original post](https://x.com/BleepinComputer/status/2125712490285658330)
- [Palo Alto Networks warns of Fragnesia flaw exploited in PAN-OS attacks](https://www.bleepingcomputer.com/news/security/palo-alto-networks-warns-of-fragnesia-flaw-exploited-in-pan-os-attacks/) - Linked page

---

### 🚀 Vote to List Token pages fabricate votes, wallet drainer

Fake crypto-exchange “Vote to List Token” pages fabricate vote counts and use a Connect button that opens a wallet drainer disguised as a vote approval. The campaign ran on 56 pages from Nov 21-23 and used a shared backend.

Key Points:

- 56 pages, Nov 21-23, one shared backend

- Connect button opens a wallet drainer disguised as vote approval

🔗 Resources:

- [Original post](https://x.com/Unit42_Intel/status/2125745874139492764)
- [bit.ly](https://bit.ly/4le9c41) - Linked in the post
![Image](https://pbs.twimg.com/media/HYAql6dWwAAdy4o?format=jpg&name=small)
![Image](https://pbs.twimg.com/media/HYAqmLtWAAALRda?format=jpg&name=medium)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cybersecurity-and-tech/qwen3-0-6b-24kb-x86-64-assembly-os-runs-54-faster-than-linux-252)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
