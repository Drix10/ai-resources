### 🤖 REKI 2.4B vision-language-action model announced with public-data pretraining

REKI is a 2.4B parameter vision-language-action model pretrained only on public data. It introduces a register-token memory in the action expert that adds past context at negligible cost and achieves fast inference on a H100 GPU. The model outperforms larger competitors on LIBERO-Plus, RoboTwin Clean2Rand, and RoboCasa365, and the code and weights are released.

Key Points:

- 2.4B parameter model pretrained exclusively on public data.

- Memory uses a few register tokens per frame, cached across chunks, adding ~0.1 ms inference overhead and ~2 MiB GPU memory per past frame.

🔗 Resources:

- [Original post](https://x.com/kyutai_labs/status/2111125878709088487)
- [REKI: Registering Knowledge in VLAs](https://kyutai.org/reki/) - Linked page
![Image](https://pbs.twimg.com/media/HUw3r1AWkAIvvGY?format=jpg&name=small)

---

### 📊 Beyond Fixed Targets: One-Shot Speaker Personalization

Beyond Fixed Targets introduces GRPO and OPSD, on-policy methods that improve speaker similarity for one-shot AR TTS. The paper shows that on-policy supervision avoids the blank-output failure of fixed off-policy fine-tuning. GRPO attains the strongest overall performance, while OPSD provides substantially faster adaptation without external reward evaluation.

Key Points:

- Fixed, off-policy supervision causes blank or near-empty outputs at inference in one-shot SFT for AR TTS.

- GRPO uses a speaker-similarity reward and achieves the strongest overall performance among the proposed methods.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2110999531819344048)
- [Beyond Fixed Targets: On-Policy One-Shot Speaker Personalization for Autoregress](https://arxiv.org/abs/2610.17838) - Linked page

---

### 📊 Modeling and Design of a Diaphragm-Integrated Photonic Waveguide Microphone

Modeling and Design of a Diaphragm-Integrated Photonic Waveguide Microphone presents an analytical model linking pressure-induced diaphragm bending to waveguide elongation and photocurrent. For a compact MEMS case with 1 mW optical input, a 1 mm diameter, 1 µm thick silicon diaphragm predicts a signal-to-noise ratio of 78 dB and acoustic overload pressure of 124 dB.

Key Points:

- Compact MEMS microphone uses 1 mW optical input, 1 mm diameter, 1 µm thick stress-free silicon diaphragm, 100% modulation efficiency.

- **Predicted performance**: 78 dB signal-to-noise ratio and 124 dB acoustic overload pressure.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2110999422280843751)
- [Modeling and Design of a Diaphragm-Integrated Photonic Waveguide Microphone](https://arxiv.org/abs/2610.17745) - Linked page

---

### 🤖 Brand AI music scaling and licensing query

Brand AI music scaling claims a brand can turn one ad into 10,000 AI versions. Licensing still requires specifying TV or social, platforms, and duration.

Key Points:

- **Scale**: one ad into 10,000 AI versions.

- **License asks**: TV or social? Which platforms? For how long?

🔗 Resources:

- [Original post](https://x.com/recoupai/status/2111199191854621037)

---

### 🤖 Seedance 2.5 unwanted music and Mirelo SFX 2.0 fix

Seedance 2.5 adds unprompted music to video clips. Mirelo SFX 2.0 removes the music, keeps visuals, and rebuilds SFX from footage. Users complain about the baked-in soundtrack.

Key Points:

- **Issue**: Seedance 2.5 bleeds unprompted music into clips at random.

- **Solution**: Mirelo SFX 2.0 keeps visuals, removes music, and rebuilds SFX based on the footage.

🔗 Resources:

- [Original post](https://x.com/MireloAI/status/2111118922561020104)
![Image](https://pbs.twimg.com/amplify_video_thumb/2111118460822360064/img/ABVCpPVC218YVfeZ.jpg)

---

### 🚀 Instant Soundtracks adds music and effects in one pass

Instant Soundtracks lets you upload footage and receive original music scored to the video, then automatically places sound effects at appropriate timestamps. The feature combines music generation and effect placement in a single workflow.

Key Points:

- Upload footage, model scores it with original music

- Watches for moments that call for an effect and places each one at the right timestamp

🔗 Resources:

- [Original post](https://x.com/MireloAI/status/2111079782507012386)
![Image](https://pbs.twimg.com/amplify_video_thumb/2111079530064400384/img/msu9N2iOTNrf3g_W.jpg)
![Image](https://pbs.twimg.com/amplify_video_thumb/2110808323104862208/img/SetXF9nadP2CYYcR?format=jpg&name=240x240)

---

### 🤖 Neko pocket guitar rig real-time stem separation launch

Neko pocket guitar rig adds LALAL AI real-time stem separation to a pocket-sized guitar studio. The device splits tracks into guitar, bass, drums and vocal stems locally. It includes amp modeling, effects, recording and wireless connections.

Key Points:

- Real-time stem separation splits tracks into four stems on-device.

- Device specs include 3.5-inch touchscreen, 4GB memory, Wi-Fi, Bluetooth and about six hours battery life.

🔗 Resources:

- [Original post](https://x.com/ai_lalal/status/2111066092672299248)
- [Neko puts real-time stem separation, amp modeling and recording in one pocket gu](https://guitarradar.news/gear/neko-puts-real-time-stem-separation-amp-modeling-and-recording-in-one-pocket-guitar-rig) - Linked page

---

### 📊 FLOMSS: Generative Music Source Separation by Flow Matching announced

FLOMSS: Generative Music Source Separation by Flow Matching introduces a flow-matching generative model for four-source full-band stereo music separation. The paper evaluates the model on MUSDB18-HQ with objective and subjective metrics, reporting competitive performance.

Key Points:

- Investigates prediction targets, flow paths, single-source versus multi-source modeling, and mixture consistency constraints.

- Benchmarks include signal-to-distortion ratio, embedding-based metrics, and a listening test on MUSDB18-HQ.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2110999513662165275)
- [FLOMSS: Generative Music Source Separation by Flow Matching](https://arxiv.org/abs/2610.17821) - Linked page

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-generated-music-and-audio/reki-2-4b-vision-language-action-model-announced-with-public-273)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
