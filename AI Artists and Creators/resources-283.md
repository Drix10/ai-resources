### 🚀 Qwen3.8-35B-A3B runs at 50 tokens/s on RTX 3060 12GB VRAM

Qwen3.8-35B-A3B generates about 50 tokens per second on an RTX 3060 with 12GB VRAM using llama.cpp. The setup also reaches ~550 tokens/s for prompt prefill and can be configured for up to 262K token context.

Key Points:

- **Decode speed**: ~50 tokens/s on RTX 3060 (12GB VRAM) with 16GB system RAM.

- **Prefill speed**: ~550 tokens/s; context window configurable up to 262K tokens.

- **Quantisation**: Q4_K_M; CPU offloading of 26 MoE layers; KV cache stored at Q8 precision.

- **Model size**: 35 billion parameters, MoE architecture activates ~3 billion parameters per token.

🔗 Resources:

- [Original post](https://x.com/Oluwaphilemon1/status/2123963033458254164)

---

### 📊 Qwen3.8-27B LoRA adapter improves coding benchmarks, cuts agent turns

Qwen3.8-27B with a 300MB LoRA adapter reaches 51.0% on SWE-bench Pro versus 35.3% baseline, and reduces median agent turns from 48 to 13. The adapter is RL-trained and released on Hugging Face.

Key Points:

- **SWE-bench Pro score**: 35.3% original, 51.0% with adapter (15.7 pp, ~44% relative increase)

- **Median agent turns on successful tasks**: 48 original, 13 with adapter (≈73% fewer)

🔗 Resources:

- [Original post](https://x.com/Oluwaphilemon1/status/2123960670500598164)

---

### 🤖 Bonsai 2 compresses Qwen3.8-27B to 5.9GB, 98.2% retention

Bonsai 2 reduces Qwen3.8-27B from 55.6GB to 5.9GB, an 89.4% storage reduction, while keeping 98.2% of aggregate benchmark performance across 20 benchmarks. The compression uses ternary quantisation with scaling factors.

Key Points:

- **Storage reduction**: 89.4% (55.6GB to 5.9GB)

- **Reported benchmark retention**: 98.2% across 20 benchmarks

🔗 Resources:

- [Original post](https://x.com/Oluwaphilemon1/status/2123977248768221491)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-artists-and-creators/qwen3-8-35b-a3b-runs-at-50-tokens-s-on-rtx-3060-12gb-vram-283)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
