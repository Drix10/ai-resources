### 📊 Enabling Retraining-Free Accurate Inference in Analog Compute in Memory Accelerators

Enabling Retraining-Free Accurate Inference in Analog Compute in Memory Accelerators presents a calibration method that restores ViT-B/16 accuracy from 37.4% to 82.9% and Phi-4 from 27.0% to 72.2% on ReRAM with 6-bit ADCs. The technique centers inputs and applies Hadamard rotations to keep shared reference errors spread while confining input mixing to each array. It works across CNNs, vision transformers and LLMs up to 14B parameters on PCM and ReRAM, matching or approaching hardware-aware training without weight retraining.

Key Points:

- Method centers inputs and applies Hadamard rotations designed for analog arrays.

- Restores ViT-B/16 from 37.4% to 82.9% and Phi-4 from 27.0% to 72.2% on ReRAM with 6-bit ADCs.

🔗 Resources:

- [Original post](https://x.com/WWVY/status/2119723099117482285)
- [Enabling Retraining-Free Accurate Inference in Analog Compute in Memory Accelera](https://arxiv.org/abs/2611.08693) - Linked page
![Image](https://pbs.twimg.com/media/HWrE7QsXIAAtvbs?format=png&name=small)

---

### 🤖 Scalable Bayesian Gaussian Process Classification for Cancer Histopathology

Scalable Bayesian Gaussian Process Classification operates on frozen pathology embeddings and adds accelerated RPCholesky and HMC sampling, handling about 300k training points. The method reduces expected calibration error by up to 88% and false negative rate by up to 90% on breast cancer metastasis benchmarks, especially under hospital-level distribution shift.

Key Points:

- RPCholesky provides low-rank kernel factorization enabling HMC sampling at N ≈ 300,000 points.

- Calibration error improves by up to 88% and false negative rate by up to 90% versus variational GP and neural network baselines.

🔗 Resources:

- [Original post](https://x.com/Memoirs/status/2119724644672450848)
- [Scalable Bayesian Gaussian Process Classification for Cancer Histopathology: Cal](https://arxiv.org/abs/2611.07127) - Linked page
![Image](https://pbs.twimg.com/media/HWrGVOVXAAAQ7YK?format=png&name=small)

---

### 🤖 Dynamic GPU Voxel Grids and Voxel-sequential Processing in NanoVDB

Dynamic GPU Voxel Grids and Voxel-sequential Processing in NanoVDB introduces dynamic topology operators for GPU-native updates. Bit-parallel algorithms rebuild grids with hundreds of millions of voxels in a few milliseconds. Voxel-sequential access streams active voxels as a flat linear sequence, reducing tree traversal and approaching peak memory bandwidth.

Key Points:

- Dynamic topology operators include morphological dilation, grid merging, pruning, and cross-resolution coarsening and refinement.

- Bit-parallel reconstruction handles grids of hundreds of millions of voxels in a few milliseconds.

🔗 Resources:

- [Original post](https://x.com/Animation/status/2119721314059420091)
- [Dynamic GPU Voxel Grids and Voxel-sequential Processing in NanoVDB](https://arxiv.org/abs/2611.08665) - Linked page
![Image](https://pbs.twimg.com/media/HWrDTWgWIAACbkN?format=png&name=small)

---

### 🤖 StrataSLAM open-source multi-floor SLAM for ROS2

StrataSLAM open-source multi-floor SLAM for ROS2 adds support for stairs, ramps, elevators and drones between floors, with one map per floor and no collapse of identical floors. It works with camera, LiDAR or both, optional IMU, and is Apache-2.0 licensed.

Key Points:

- One map per floor; identical floors never collapse into one.

- Supports camera, LiDAR or both; IMU optional; Apache-2.0 license.

🔗 Resources:

- [Original post](https://x.com/jm__guerrero/status/2119719539529449863)
- [youtu.be](https://youtu.be/0jp8mhmuQsI) - Linked in the post

---

### 🤖 Qwen Code /stats speed calculation changed to include TTFT

Qwen Code updated /stats so output speed (TPS) now includes time to first token in its denominator. The denominator is TTFT plus generation time, resulting in lower but server-aligned numbers. The change is delivered in PR #16716.

Key Points:

- Output speed now divides output tokens by TTFT + generation time per request.

- The 100 ms window floor is removed and the field is optional on the daemon stats route.

🔗 Resources:

- [Original post](https://x.com/QwenAIFans/status/2119726130752045554)
- [fix(stats): include time to first token in output speed by qqqys](https://github.com/QwenLM/qwen-code/pull/16716) - Linked page
![Image](https://pbs.twimg.com/media/HWrHpk5XsAA5Cv9?format=jpg&name=900x900)
![Image](https://pbs.twimg.com/media/HWrHpk1W8AAS2BE?format=jpg&name=900x900)

---

### 🤖 Geometry-Aware Score-Repellent Monte Carlo appears at NeurIPS 2026

Geometry-Aware Score-Repellent Monte Carlo is a new paper by Jie Hu, Lingyun Chen, and Do Young Eun, slated for NeurIPS 2026. The announcement includes the paper title, authors, and conference venue.

Key Points:

- **Authors**: Jie Hu, Lingyun Chen, Do Young Eun

- **Venue**: NeurIPS 2026

🔗 Resources:

- [Original post](https://x.com/StatsPapers/status/2119724306158457309)
- [arxiv.org](https://arxiv.org/abs/2611.08909) - Linked in the post
![Image](https://pbs.twimg.com/media/HWrGBgAW0AEMPXN?format=png&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-organizations-and-media/enabling-retraining-free-accurate-inference-in-analog-comput-296)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
