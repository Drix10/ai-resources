### 🤖 LongCat-2.5 released with 1.6T parameters and INT4 inference

LongCat-2.5 is released under the MIT License with a 1.6 trillion-parameter multimodal MoE and about 48 billion activated per token. It adds INT4 inference on NPUs with quantized KV cache, achieving nearly double decode throughput over W8A8KV16.

Key Points:

- 1.6T total parameters, ~48B activated per token

- INT4 inference (W4A4) nearly doubles decode throughput versus W8A8KV16 in stress test

🔗 Resources:

- [Original post](https://x.com/ModelScope2022/status/2120063938448515358)
- [modelscope.ai](https://modelscope.ai/models/meituan-longcat/LongCat-2.5) - Linked in the post
![Image](https://pbs.twimg.com/media/HWv66nuXoAALqWc?format=jpg&name=900x900)

---

### 🤖 ReproBridge workflow lifts agent success to 92.6%

ReproBridge workflow lifts agent reproduction success to 92.6% and cuts API costs by ~20%. It turns papers and raw code into refined reproducible artifacts.

Key Points:

- **Success rate**: 92.6% (up from 76.4%)

- **API cost reduction**: ~20%

🔗 Resources:

- [Original post](https://x.com/HuggingPapers/status/2120066954249601291)
![Image](https://pbs.twimg.com/ext_tw_video_thumb/2120066938776813568/pu/img/MF3jspSp9VZT2TjY.jpg)

---

### 🚀 Zero-Query Transferable Pretend Benign Attacks – RT-TrPB generates perturbations in <56 ms

Zero-Query Transferable Pretend Benign (TrPB) introduces RT-TrPB, an amortized online generator that creates each perturbation in under 56 ms. Experiments show RT-TrPB bypasses ROBOSAC and FLD defenses with success rates near 100%. The paper also proposes STTrust, which detects over 90% of PB-style attacks and restores perception performance to near the attack-free level.

Key Points:

- RT-TrPB creates each perturbation in under 56 ms.

- RT-TrPB achieves success rates approaching 100% against consensus-based defenses ROBOSAC and FLD.

- STTrust detects over 90% of PB-style attacks.

- STTrust restores perception performance to near the attack-free level.

🔗 Resources:

- [Original post](https://x.com/SciFi/status/2120062202988179894)
- [Zero-Query Transferable Pretend Benign Attacks with Amortized Online Generation ](https://arxiv.org/abs/2611.09256) - Linked page
![Image](https://pbs.twimg.com/media/HWv5VruWYAA7xz2?format=png&name=small)

---

### 🤖 Forecasting cumulative intraoperative hypotension burden – benchmark results released

Forecasting cumulative intraoperative hypotension burden paper reports a residual-versus-persistence loss difference of –0.644 mmHg-min at the 90th percentile. The study uses subject-disjoint splits of 70,402 training, 14,270 validation and 15,575 test windows.

Key Points:

- Residual-versus-persistence loss at the 90th percentile: 2.256 mmHg-min vs 2.900 mmHg-min (difference –0.644; 95% interval –0.814 to –0.487).

- Direct quantile boosting achieved loss 2.196 mmHg-min; with additional MAP features 2.193 mmHg-min.

🔗 Resources:

- [Original post](https://x.com/SciFi/status/2120068177564463249)
- [Forecasting cumulative intraoperative hypotension burden: patient-disjoint evalu](https://arxiv.org/abs/2611.09259) - Linked page
![Image](https://pbs.twimg.com/media/HWv-xeyWwAAnSwl?format=png&name=small)

---

### 📊 STAG-Net lightweight head pose estimation achieves 3.51° error

STAG-Net introduces structure-aware attention over landmark groups for lightweight head pose estimation and reaches a lowest mean absolute error of 3.51° on BIWI under cross-dataset evaluation. The method uses only 0.012–0.043M parameters and 24.1–83.6k FLOPs, running at 322.9 fps on a Tesla T4 GPU.

Key Points:

- Mean absolute error of 3.51° on BIWI cross-dataset evaluation (FAN variant).

- Inference speed of 322.9 frames per second on a Tesla T4 GPU.

🔗 Resources:

- [Original post](https://x.com/CSVisionPapers/status/2120066674397163753)
- [STAG-Net: Structure-Aware Attention over Landmark Groups for Lightweight Head Po](https://arxiv.org/abs/2611.07828) - Linked page
![Image](https://pbs.twimg.com/media/HWv9Z8ZWAAAFD_j?format=png&name=small)

---

### 🤖 Dialt Budget launch at half price, Dialt Fast 41.1% pass rate

Dialt Budget is offered at 50% of the cost of Dialt Fast with a more limited set of voices. Dialt Fast reports a 41.1% pass rate and $0.18 per call, placing it on the pareto frontier and ahead of OpenAI GPT-Live 1 and GoogleDeepMind Gemini 3.8 Live.

Key Points:

- Dialt Budget costs 50% of Dialt Fast and supports fewer voices.

- Dialt Fast achieves a 41.1% pass rate at $0.18 per call.

- Dialt Fast is positioned ahead of OpenAI GPT-Live 1 and GoogleDeepMind Gemini 3.8 Live on the leaderboard.

🔗 Resources:

- [Original post](https://x.com/TrelisResearch/status/2120059029552848926)
- [Dialt - Train, evaluate and improve speech models and voice agents](https://dialt.com/) - Linked page
![Image](https://pbs.twimg.com/media/HWv2XFgXcAAK8nF?format=jpg&name=small)
![Image](https://pbs.twimg.com/amplify_video_thumb/2119836422706221056/img/bpon3ces_cUzBUJ4?format=jpg&name=240x240)

---

### 🤖 NVIDIA Auto Ontology launches ontology layer for agents

NVIDIA Auto Ontology adds a semantic catalog built from enterprise metadata and validates queries against certified definitions and lineage. It serves the ontology to agents via MCP, CLI, and API.

Key Points:

- **Feature**: Builds a certified semantic ontology from your metadata

- **Feature**: Validates generated queries against certified definitions and lineage

🔗 Resources:

- [Original post](https://x.com/GithubProjects/status/2120067440889749776)
- [An ontology layer that tells agents what your data means](https://www.opensourceprojects.dev/post/auto-ontology) - Linked page
![Image](https://pbs.twimg.com/media/HWv-GlQbIAApEgn?format=jpg&name=900x900)

---

### 🤖 Gemini 4 Carbon live on Vertex AI and Gemini Web App

Gemini 4 Carbon is now rolling out on Google Cloud Vertex AI and added to the live Gemini Web App configuration. It is mapped to the internal chrome_chai_upsell tier alongside gemini-4-argon (chrome_sencha_upsell).

Key Points:

- **Launch**: Gemini 4 Carbon live on Vertex AI (Google Cloud)

- **Configuration**: gemini-4-carbon added to the Gemini Web App and mapped to chrome_chai_upsell tier with gemini-4-argon (chrome_sencha_upsell)

🔗 Resources:

- [Original post](https://x.com/StatsWire/status/2120067254570176644)
- [gemini.google.com](https://gemini.google.com/app) - Linked in the post
![Image](https://pbs.twimg.com/media/HWv9yjbWgAAgG1a?format=jpg&name=900x900)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-organizations-and-media/longcat-2-5-released-with-1-6t-parameters-and-int4-inference-297)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
