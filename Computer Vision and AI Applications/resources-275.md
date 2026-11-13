### 🤖 OnlyAct – action encoder from video, zero labels, 640-dim embedding

OnlyAct converts a pretrained V-JEPA 2 video encoder into an action encoder without any action labels, outputting a 640-dimensional embedding. It trains only LoRA adapters on 168K frame pairs in about 1.5 hours on a single RTX 4090. The frozen embedding replaces the latent action in an AdaWorld world model and shows the highest mean R² (0.490) on action probing across 13 datasets.

Key Points:

- 640-dimensional action embedding produced from a two-frame clip.

- Trained LoRA adapters (rank 16, ~7M parameters) on 168K frame pairs in ~1.5 h on one RTX 4090.

🔗 Resources:

- [Original post](https://x.com/RunjiaLi/status/2120557716758577166)
- [OnlyAct](https://runjiali-rl.github.io/onlyact/) - Linked page
- [github.com](https://github.com/runjiali-rl/onlyact) - Linked in the post
![Image](https://pbs.twimg.com/amplify_video_thumb/2120556978309156864/img/S4lfAO98GxMxVFIK.jpg)

---

### 🤖 Déjà View 117M model matches larger models on five benchmarks

Déjà View is a 117M-parameter model that loops a single transformer block and matches or outperforms models up to 10× larger on five benchmarks, using comparable or less compute. Nvidia open sourced the model, enabling follow-up work before the paper was presented.

Key Points:

- 117M-parameter model loops a single transformer block.

- Matches or outperforms models up to 10× larger across five benchmarks with comparable or less compute.

🔗 Resources:

- [Original post](https://x.com/kwangmoo_yi/status/2121148907464101903)
![Image](https://pbs.twimg.com/amplify_video_thumb/2121148772478775296/img/6bd_33Ehb0CDOXRJ.jpg)
![Image](https://pbs.twimg.com/amplify_video_thumb/2120616346136563712/img/dOYqfqajmpOffWHJ?format=jpg&name=240x240)

---

### 📊 Attention-Guided Sequence Fusion boosts R@1 by 3.37%

Attention-Guided Sequence Feature Fusion and Mixed-Space Metric Learning (ASML) improves cross-view image sequence geo-localization R@1 by 3.37% on SeqGeo and 2.10% on CrossRoad-66K. The paper introduces Sequential Content Fusion, Spatial Feature Aggregation, and a Geo-InfoNCE loss. A new dataset, CrossRoad-66K, is also released.

Key Points:

- Sequential Content Fusion module models cross-image feature correlations to suppress redundant content.

- Geo-InfoNCE loss jointly considers feature distance and geographic distance for mixed-space metric learning.

- New CrossRoad-66K dataset provides more complex cross-view scenarios.

🔗 Resources:

- [Original post](https://x.com/CSVisionPapers/status/2121168195293773984)
- [Attention-Guided Sequence Feature Fusion and Mixed-Space Metric Learning for Cro](https://arxiv.org/abs/2611.12051) - Linked page
![Image](https://pbs.twimg.com/media/HW_nO7IWsAAZ33h?format=png&name=small)

---

### 🤖 atlas-humanoid humanoid with no System 1 shown at CoRL 2026

atlas-humanoid presented a humanoid with no System 1 at CoRL 2026, using an agent-written harness linking System 2 and System 0. One human video demonstration was used to get the task done.

Key Points:

- Humanoid with no System 1

- Agent-written harness linking System 2 and System 0

🔗 Resources:

- [Original post](https://x.com/junli_r84995/status/2121098492257108116)
- [atlas-humanoid.github.io](https://atlas-humanoid.github.io) - Linked in the post
![Image](https://pbs.twimg.com/amplify_video_thumb/2121094887600701441/img/RvsY5ITwO4eTs4Xm.jpg)

---

### 📊 CVPR2026 compute report released with full report link

CVPR2026 compute report released, link to full report and press release provided. The post shares the URL for the report.

Key Points:

- CVPR2026 compute report mentioned

- Full report and press release linked

🔗 Resources:

- [Original post](https://x.com/CVPR/status/2116983085149360626)
- [cvpr.thecvf.com](https://cvpr.thecvf.com/Conferences/2026/News/ComputeReport) - Linked in the post
![Image](https://pbs.twimg.com/media/HWEI5UNWIAAXnKq?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/computer-vision-and-ai-applications/onlyact-action-encoder-from-video-zero-labels-640-dim-embedd-275)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
