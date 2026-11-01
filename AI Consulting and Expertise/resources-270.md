### 🚨 Anthropic paper shows 0.1% data poison creates backdoor

Anthropic paper “Agentic Backdoors via Pretraining Poisoning” shows that poisoning 0.1% of pretraining data can plant a remote-code-execution backdoor in an AI agent. The backdoor survives a fully clean SFT → DPO → RL pipeline.

Key Points:

- 0.1% of pretraining data poisoning can plant a remote-code-execution backdoor.

- Backdoor survives a fully clean SFT → DPO → RL pipeline.

🔗 Resources:

- [Original post](https://x.com/artuskg/status/2116715410167063000)
![Image](https://pbs.twimg.com/media/HV5ZBfubwAAy2Kp?format=png&name=small)

---

### 🤖 torch.index_add_ fingerprint exact GPU identity

torch.index_add_ can fingerprint the exact GPU you’re running on, even among identical GPUs. The method relies on floating-point order differences per GPU, survives reboots and cannot be faked.

Key Points:

- Method uses a default torch.index_add_ call

- Fingerprint survives reboots and cannot be faked

🔗 Resources:

- [Original post](https://x.com/divagr1925/status/2116241086050115692)
![Image](https://pbs.twimg.com/amplify_video_thumb/2116240958836948992/img/_OdQZYS10DmhsZkL.jpg)

---

### 🤖 FlashAlign abliterates per request, no permanent changes

FlashAlign adds an on-demand ablation feature that works on the weights you already serve and makes no permanent changes. By default it applies only to authorized users, channels and tools, leaving everything else stock.

Key Points:

- **Feature**: Abliteration on demand, per request, on existing weights.

- **Access**: Only authorized users, channels and tools receive it; all other entities stay stock.

🔗 Resources:

- [Original post](https://x.com/HealthRanger/status/2116636864417558786)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-consulting-and-expertise/anthropic-paper-shows-0-1-data-poison-creates-backdoor-270)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
