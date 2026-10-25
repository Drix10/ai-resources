### 🤖 MorphMimic shares morphology-conditioned world model and policy across three robots

MorphMimic introduces a single world model and policy that operate on Unitree G1, AgiBot X2 Ultra, and Booster T2, demonstrated from MuJoCo simulation to live browser demo and G1 hardware. The unified model matches specialist performance within 0.02 mean normalized return and achieves up to 99.9% survival across robots.

Key Points:

- Unified model trained 40,000 iterations, 4096 environments per robot, uses 16.3 GPU-hours versus 13.9 GPU-hours for three specialists.

- Mean normalized return of unified model within 0.02 of each specialist; survival rate 99.9% when trained on all three bodies.

🔗 Resources:

- [Original post](https://x.com/lzyang2000/status/2114014980538614174)
- [MorphMimic: Morphology-Conditioned World Model and Policy Sharing Across Humanoi](https://lzyang2000.github.io/morphmimic/) - Linked page
![Image](https://pbs.twimg.com/media/HVZ9HKyb0AAmwlT.jpg)

---

### 🤖 Nanbeige4.3-33B launch with ~30B parameters

Nanbeige4.3-33B is a new ~30B-parameter model announced as the flagship teacher for the Nanbeige4.3 series. It claims state-of-the-art agentic performance on coding and cowork benchmarks and supports a context length of up to 524,288 tokens.

Key Points:

- **Model size**: ~30B parameters (Nanbeige4.3-33B)

- **Context length**: up to 524,288 tokens

- Serves as teacher for upcoming smaller Nanbeige models, starting with Nanbeige4.3-3B

- Chat template includes enable_thinking (default True) and preserve_thinking flags, with tool_call_format options “xml” or “json”

🔗 Resources:

- [Original post](https://x.com/nanbeige/status/2114328933181333798)
- [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) - Linked page
- [huggingface.co](https://huggingface.co/Nanbeige/Nanbeige4.3-33B-Base) - Linked in the post

---

### 🤖 SN44 Score validation mechanism and miner incentive

SN44 Score will use a generative engine to score miners on footage they have never seen, later moving to live streams and real-world prediction. The system currently pays about 34 $TAO per day in emissions across 256 neurons, providing miner incentive.

Key Points:

- Validation starts with a generative engine scoring miners on unseen footage.

- SN44 Score pays ~34 $TAO/day in emissions across 256 neurons.

🔗 Resources:

- [Original post](https://x.com/MaxSebti/status/2114349562567541138)

---

### 🚨 FlashAttention backward zero-sum bug fixed in softmax

FlashAttention's backward pass has the same zero-sum bug, now fixed in softmax. With FP4 stochastic rounding it was wrong on every draw, and the fix appears in the ICLR'27 submission CroissAttn, enabling end-to-end FP4 training.

Key Points:

- Bug fixed in softmax.

- Fix included in ICLR'27 submission CroissAttn, enabling e2e FP4 training.

🔗 Resources:

- [Original post](https://x.com/AlexRoseJo/status/2114202656994713690)
![Image](https://pbs.twimg.com/amplify_video_thumb/2114201345939140608/img/SxdnqVwt8CU4x_H1.jpg)
![Image](https://pbs.twimg.com/amplify_video_thumb/2113698124351074304/img/LFJgXhcT_P7PthYR?format=jpg&name=240x240)

---

### 🤖 StableReinforce objective is Reinforce + Score Centering

StableReinforce is a new method on Tinker that adds a Reinforce + Score Centering objective. It is presented as a way to keep off-policy RL runs stable despite async staleness or numerical mismatch.

Key Points:

- **Objective**: Reinforce + Score Centering.

- **Claim**: Off-policy RL is difficult; runs can suddenly collapse because of async RL staleness or numerical mismatch.

🔗 Resources:

- [Original post](https://x.com/mrtnm/status/2114145574987702525)

---

### 🚀 EMNLP2026 poster – Reasoning in LLMs on Oct 25

EMNLP2026 poster – Reasoning in LLMs presented Oct 25. The work will be shown at Hall H, Poster Session B from 4–5:30 PM.

Key Points:

- Presenting our work at EMNLP2026 today.

- **Oct 25, 4–5**: 30 PM, Hall H, Poster Session B.

🔗 Resources:

- [Original post](https://x.com/sgjeong_evelyn/status/2114237510398419443)
- [arxiv.org](https://arxiv.org/abs/2609.04753) - Linked in the post
![Image](https://pbs.twimg.com/media/HVdHwhYa8AACImP?format=jpg&name=small)

---

### 🤖 Kimi K3.1 Pro builds Mont-Saint-Michel voxel scene

Kimi K3.1 Pro on Nous Portal generated a voxel representation of Mont-Saint-Michel after receiving a prompt. The output includes the abbey, golden statue, village, pilgrims, sheep, and an incoming tide.

Key Points:

- Kimi K3.1 Pro is on Nous Portal.

- It built the abbey with its golden statue, the village inside its ramparts, pilgrims on the causeway, sheep in the salt meadows, and a tide coming.

🔗 Resources:

- [Original post](https://x.com/MaxSebti/status/2114344524369850416)
![Image](https://pbs.twimg.com/amplify_video_thumb/2114002889014153216/img/zflAG6hiUxpycK13.jpg)

---

### 🤖 EgoXperience full-stack framework for 3D reconstruction

EgoXperience is a full-stack framework that jointly reconstructs camera motion, scene geometry, hands, and objects in a shared 3D world. It was announced as part of Ropedia Super Week Day 2 alongside HoliWorld.

Key Points:

- **Framework**: jointly reconstructs camera motion, scene geometry, hands, and objects in a shared 3D world

- Introduced during Ropedia Super Week Day 2 together with HoliWorld

🔗 Resources:

- [Original post](https://x.com/liuziwei7/status/2112566828379885678)
- [ropedia.github.io](https://ropedia.github.io/EgoXperience/) - Linked in the post
- [github.com](https://github.com/Ropedia/EgoXperience) - Linked in the post
![Image](https://pbs.twimg.com/amplify_video_thumb/2112560653961662464/img/zn3GlMK0IJ42c402.jpg)
![Image](https://pbs.twimg.com/amplify_video_thumb/2112472125114310656/img/pyFLy2ptkCyd79S5?format=jpg&name=240x240)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/computer-vision-and-ai-applications/morphmimic-shares-morphology-conditioned-world-model-and-pol-261)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
