### 🚀 Nano Banana 2.1 launched on Wondercraft

Nano Banana 2.1 is now available on Wondercraft. The image generation model claims better visual design, mask‑based editing, subject consistency, and more natural‑looking images compared with previous models. Users are invited to try it.

Key Points:

- **Release**: Nano Banana 2.1 is live on Wondercraft.

- **Features**: better visual design, mask‑based editing, subject consistency, more natural‑looking images.

🔗 Resources:

- [Original post](https://x.com/wondercraft_ai/status/2108466623879446853)
![Image](https://pbs.twimg.com/media/HT9ZRBEWcAAkeMw?format=jpg&name=small)
![Image](https://pbs.twimg.com/media/HT9ZRA6W4AA9PcX?format=jpg&name=small)

---

### 🤖 Conversational Voice Aesthetic Model (CVAM) release

Conversational Voice Aesthetic Model (CVAM) is a speech large language model that describes voice aesthetics in conversational contexts. It predicts nine categorical attributes covering gender, pitch, pacing, emotion, and delivery. CVAM is fine‑tuned on synthesized descriptions and then optimized with Group Relative Policy Optimization using ~10 human annotations per 3 k real and synthetic responses. Experiments show CVAM agrees better with human listeners than Gemini 3.1 Pro and open‑source speech LLMs and exceeds single‑human‑vs‑rest agreement.

Key Points:

- **Data**: ~10 human annotations for each of 3 k real and synthetic responses from the CANDOR corpus.

- **Optimization**: Trained with Group Relative Policy Optimization on human judgments.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2108446747219677200)
- [Conversational Voice Aesthetic Model with Reinforcement Learning from Human List](https://arxiv.org/abs/2610.10868) - Linked page

---

### 🤖 AutoSynth – model that generates editable synthesizer programs from audio or text

AutoSynth is a system that predicts synthesizer programs from reference audio or from text descriptions. It encodes MIDI events, fixed synthesizer parameters, and variable-length modulation routes as a single sequence and learns them with an audio‑conditioned autoregressive model. Training uses supervised learning on large audio‑program pairs followed by group‑relative policy optimization with a mixed reward. Experiments show it can produce complete, editable programs and achieves competitive results on synthesizer inversion and text‑driven generation.

Key Points:

- **Unified sequence**: represents MIDI performance events, fixed synthesizer parameters, and variable‑length modulation routes together.

- **Two‑stage training**: supervised learning on automatically constructed audio‑program pairs, then policy optimization with rewards for semantic similarity, pitch features, acoustic similarity, and usefulness.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2108446701740806593)
- [AutoSynth: Learning to Generate Editable Synthesizer Programs from Audio and Tex](https://arxiv.org/abs/2610.10774) - Linked page

---

### 📊 Detection-Guided Adaptive Purification (DGAP) paper released

Detection-Guided Adaptive Purification (DGAP) is a diffusion‑based defense that varies purification strength per input. The method uses detector score shifts to identify adversarial inputs and applies stronger purification only when needed. Experiments cover three adversarial attack settings, three deepfake detectors, and nine existing defenses. Results claim DGAP achieves the best defense performance while keeping benign inputs nearly unchanged and remains effective against defense‑aware adaptive attacks.

Key Points:

- Adaptive purification strength is determined by the detector score shift caused by light purification.

- DGAP is evaluated on three attack settings, three detectors, and compared with nine existing defenses.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2108446683701141891)
- [Detection-Guided Adaptive Purification with Diffusion Models for Robust Audio De](https://arxiv.org/abs/2610.10752) - Linked page

---

### 🤖 Listen-to-Reason (L2R) audio-language pipeline announced

Listen-to-Reason (L2R) is an interpretable pipeline that routes audio through frozen expert encoders to a human‑readable tree and then to a frozen text‑only LLM. The system can trace each answer to specific nodes and an ASR transcript. Results show L2R outperforms all compared LALMs on SAKURA and trails them by 6‑12 points on MMAU and MMAR while using far fewer parameters and data.

Key Points:

- L2R replaces the deciding node with a distractor and overturns 78 % of correct answers on SAKURA.

- L2R trains about 1,400× fewer parameters on orders of magnitude less audio data than the LALMs it compares against.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2108446645847474372)
- [Listen-to-Reason: Listen with Experts, Retrieve over a Graph, Reason with LLMs](https://arxiv.org/abs/2610.10749) - Linked page

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-generated-music-and-audio/nano-banana-2-1-launched-on-wondercraft-270)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
