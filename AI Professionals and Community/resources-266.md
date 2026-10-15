### 🤖 FLAT Flash Linear Attention on TPUs 3x faster GLA

FLAT is Flash Linear Attention on TPUs. On one TPU v6e, forward + backward runs up to 3× faster than FLA on an H100 for GLA and 1.5× faster for Mamba-2.

Key Points:

- **Benchmark**: 3× speedup over FLA on H100 for GLA on a TPU v6e.

- **Benchmark**: 1.5× speedup over FLA on H100 for Mamba-2 on a TPU v6e.

🔗 Resources:

- [Original post](https://x.com/tri_dao/status/2110501861258314023)
![Image](https://pbs.twimg.com/media/HUim4JqaEAAgPMf?format=jpg&name=small)

---

### 📊 DuoDiscover benchmarks show up to 2.68× TPU kernel speedup

DuoDiscover is announced with performance results, achieving up to 2.68× faster than production TPU kernels. It also ranks #1 on NVIDIA's SOL-ExecBench and shows gains on vLLM and FreeToken.

Key Points:

- 1 on NVIDIA's SOL-ExecBench

- 1.92× faster on vLLM

- 1.44× faster on FreeToken

- Beats the best human and AI-designed CPU prefetchers

🔗 Resources:

- [Original post](https://x.com/dilarafsoylu/status/2110428372585394651)

---

### 🤖 DeepSeek V4.1 Flash 425x cheaper than Opus 5.5 at 200 TPS/user

DeepSeek V4.1 Flash on @vllm_project is claimed to be 425× cheaper than Opus 5.5 and runs at 200 TPS per user. It is reported to cost about 900 M tokens per dollar, assuming the same cache hit rate and token mix. A quoted tweet adds that a GB300 NVL72 inference optimization gives 7.2× better performance per TCO than other AI chips.

Key Points:

- **Cost**: 425× cheaper than Opus 5.5, ~900 M tokens per $

- **Throughput**: 200 TPS per user on @vllm_project

- **Optimization claim**: GB300 NVL72 gives 7.2× better perf per TCO than other AI chips

🔗 Resources:

- [Original post](https://x.com/yifandotqiao/status/2110505614258675933)
![Image](https://pbs.twimg.com/media/HUn9YtDWcAAzFV0?format=jpg&name=small)

---

### 🤖 DuoDiscover full-stack code optimization agent benchmark results

DuoDiscover is a full-stack code optimization agent that co-discovers optimization targets and a cheap proxy evaluator. It achieved #1 on NVIDIA's SOL-ExecBench and reported speedups of 1.92× on vLLM, 1.44× on FreeToken, and 2.68× over production TPU kernels. The post also claims it beats the best human and AI-designed CPU prefetchers.

Key Points:

- **Benchmark**: 1 on NVIDIA's SOL-ExecBench

- **Performance**: 2.68× over production TPU kernels

🔗 Resources:

- [Original post](https://x.com/VioletNPeng/status/2110438744600027513)

---

### 🤖 DuoDiscover AI agents ship PRs, beat hardware baselines

DuoDiscover AI agents ship real PRs and outperform human-expert hardware baselines. They merged optimizations into main branches and achieved a 2.68× TPU kernel speedup.

Key Points:

- Real optimizations merged into main branches (e.g., FreeToken #619)

- **First superhuman CPU prefetcher**: +3.93% | +6.31% overall, outperforming AlphaEvolve

🔗 Resources:

- [Original post](https://x.com/shagarw21/status/2110434556155486209)

---

### 🚀 Dimuon optimizer reaches lower loss faster than AdamW

Dimuon is a new optimizer built for LoRA fine-tuning. In SFT tests it often reaches lower loss in fewer steps than AdamW. The guide is available for tinkerers.

Key Points:

- **Optimizer**: Dimuon, designed for LoRA fine-tuning.

- **Claim**: In SFT tests it often reaches lower loss in fewer steps than AdamW.

🔗 Resources:

- [Original post](https://x.com/cHHillee/status/2110569587955908774)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-professionals-and-community/flat-flash-linear-attention-on-tpus-3x-faster-gla-266)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
