### 📊 Anthropic needs $602B annual revenue for 20% return

Anthropic would need about $602B in yearly revenue to earn a 20% return on its roughly $1T in compute commitments. That exceeds Alphabet’s $471B and Apple’s $478B, and is about two-thirds of the $908B earned by 76 software and IT services companies in the S&P 1500.

Key Points:

- **Revenue needed**: $602B annual revenue required for a 20% return on $1T compute commitments.

- **Comparison**: $602B is more than Alphabet’s $471B, Apple’s $478B, and roughly two-thirds of the $908B earned by 76 S&P 1500 software and IT services firms.

🔗 Resources:

- [Original post](https://x.com/rohanpaul_ai/status/2123313372510998911)
![Image](https://pbs.twimg.com/media/HXeFvVkbIAEuG06?format=jpg&name=small)

---

### 🤖 HiT learns hierarchy, 1.48 FID on ImageNet 256

HiT is an end-to-end image generator that learns its own hierarchy of abstractions and achieves 1.48 FID on ImageNet 256. It uses 2.4× less training compute than JiT-H/16 at matched quality and outperforms models with six times more parameters on average across text-to-image benchmarks.

Key Points:

- **FID**: 1.48 on ImageNet 256

- **Compute**: 2.4× less training compute than JiT-H/16 at matched quality

- **Parameters**: outperforms models with 6× more parameters on average across text-to-image benchmarks

🔗 Resources:

- [Original post](https://x.com/XiaoyuW9401147/status/2123080502567485498)

---

### 🤖 Tessera-small diffusion model for 16×16 pixel art

Tessera-small is a masked diffusion language model that generates 16×16 pixel art sprites as 256-token sequences, using a 512-color palette. It was trained in about 5.5 hours on a single RTX PRO 6000 on 1.4M sprites and runs in the browser via an int8 ONNX WebGPU build.

Key Points:

- **Params**: 47.6M parameters.

- **Training time**: ~5.5 h on one GPU over 1.4M sprites.

🔗 Resources:

- [Original post](https://x.com/RisingSayak/status/2123427418367266990)
- [thejagstudio/tessera-small](https://huggingface.co/thejagstudio/tessera-small) - Linked page
- [huggingface.co](https://huggingface.co/spaces/cfahlgren1/slack-moji) - Linked in the post

---

### 📊 vLLM batching gains engine 1.33× scheduler 2.91×

vLLM batching gains engine 1.33× and scheduler 2.91×, explained by @nhu_hoang as coming from continuous batching and disappearing when all requests finish together. Continuous batching’s gains vanish when every request finishes at the same time.

Key Points:

- **Engine**: 1.33×

- **Scheduler**: 2.91×

🔗 Resources:

- [Original post](https://x.com/TDataScience/status/2123442551940104283)
- [towardsdatascience.com](https://towardsdatascience.com/continuous-batching-beats-static-and-dynamic-by-up-to-291-in-vllm/) - Linked in the post

---

### 🤖 Marin Mochi 535B checkpoint release with 57 intermediate checkpoints

Marin Mochi 535B checkpoint drop includes 57 intermediate checkpoints, 10 from long-context extension, covering 18.2T tokens and about 61TB of weights. The release adds a tech report detailing component choices for training stability and GPU throughput.

Key Points:

- Latent MoE uses an extra RMSNorm on the latent, improving latent MoE performance.

- **Classic 3**: 1 sliding-window/global gated GQA, partial RoPE (local) and NoPE (global) are employed.

🔗 Resources:

- [Original post](https://x.com/rasbt/status/2123433827234111659)
![Image](https://pbs.twimg.com/media/HXfzsevXIAAAxXe?format=jpg&name=900x900)
![Image](https://pbs.twimg.com/media/HXWxfAOagAAADBi?format=jpg&name=900x900)

---

### 🤖 Neurosymbolic Agents Explained With a Python Example – Benchmarks Reported

Neurosymbolic agents combine language models with symbolic solvers that can prove when the model is wrong. Logic-LM improves over standard prompting by 39.2% on average, Agent-C reaches 100% policy conformance, and Amazon’s Automated Reasoning checks report soundness above 99%.

Key Points:

- Logic-LM beats standard prompting by 39.2% on five logical reasoning datasets.

- Agent-C attains 100% policy conformance on retail and airline benchmarks with Claude Sonnet 4.5 and GPT-5.

- Amazon’s Automated Reasoning checks achieve soundness above 99% with almost no false positives.

- **Example calculation**: with step success probability 0.95 over 20 steps, a checker with three tries per step raises success to 99.8%.

🔗 Resources:

- [Original post](https://x.com/TDataScience/status/2123378009730080834)
- [Neurosymbolic Agents Explained With a Python Z3 Example](https://towardsdatascience.com/neurosymbolic-agents-explained-with-a-z3-example-in-python/) - Linked page

---

### 🤖 MAI Image 2.7 launches as #1 AA-Image-Editing at $34.82

MAI Image 2.7 is announced as the top model on Artificial Analysis for image editing, costing $34.82. It is claimed to outperform GPT Image 2.6 Sunburst at one-fifth the price.

Key Points:

- **Rank**: 1 on Artificial Analysis for image editing.

- **Cost**: $34.82 per use.

🔗 Resources:

- [Original post](https://x.com/MicrosoftAI/status/2122811944675443135)
- [msft.it](https://msft.it/6015xEl7c) - Linked in the post

---

### 🤖 HiT – end-to-end hierarchy learning model announced

HiT is a new image generator trained end to end from pixels that learns to dynamically group patches across multiple levels. Semantic structure emerges without masks or region labels. Independent reproductions of 2D H-Net from the blog post appeared quickly.

Key Points:

- HiT learns to dynamically group patches across multiple levels.

- Semantic structure emerges without masks or region labels.

🔗 Resources:

- [Original post](https://x.com/_albertgu/status/2123144364100911286)
![Image](https://pbs.twimg.com/amplify_video_thumb/2123080445797466112/img/qCdqnOM_-s9cTbXV.jpg)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cs-academics/anthropic-needs-602b-annual-revenue-for-20-return-320)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
