### 🤖 E-Gaborformer – strictly causal speech recognizer with 19MB constant streaming state

E-Gaborformer is a strictly causal encoder that uses Gated DeltaNet-2 recurrent layers and sliding-window attention, keeping streaming memory constant at about 19MB per call. It achieves up to 31% lower English WER than NVIDIA’s Nemotron 3.5 streaming model on voice-agent traffic and trains the RNN-T lattice 2.6× faster.

Key Points:

- Streaming state constant ~19MB per call; a comparable causal-attention encoder exceeds 1GB after ten minutes.

- 0.6B-parameter Hebrew and English streaming transducer built on E-Gaborformer reduces English WER by 28-31% versus NVIDIA Nemotron 3.5 streaming.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2118730657757290826)
- [Gabor Gabor: E-Gaborformer, a Strictly Causal Speech Recognizer with Gabor-Dicti](https://arxiv.org/abs/2611.08092) - Linked page

---

### 🤖 Decode Before You Hear: Speculative Listening speeds up full-duplex speech models

Decode Before You Hear introduces Speculative Listening, a training-free framework that speeds speak chunks 2.6-2.8× and tool-call chunks up to 23.4×. It drafts the next chunk during idle time using a silence assumption and verifies drafts when audio arrives.

Key Points:

- 95.3% of next audio chunks do not change the model output.

- Decoding delay before a response starts is reduced by 73% to 74-241 ms.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2118730477561602231)
- [Decode Before You Hear: Speculative Listening for Chunk-Interleaved Full-Duplex ](https://arxiv.org/abs/2611.06982) - Linked page

---

### 📊 SubRoformer: Subband Time-Domain code released

SubRoformer: Subband Time-Domain Representation for Music Source Separation code released, achieving 10.63 dB SDR on MUSDB18-HQ. With 500 extra songs, a single model reaches 11.59 dB SDR across four stems.

Key Points:

- Average SDR 10.63 dB on MUSDB18-HQ test set using target-specific models.

- Average SDR 11.59 dB with 500 additional training songs using a single model for all four stems.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2118730672105988158)
- [SubRoformer: Subband Time-Domain Representation for Music Source Separation](https://arxiv.org/abs/2611.08130) - Linked page

---

### 📊 DM-ASR – Diarization-aware Multi-speaker ASR with unified offline and online decoding

DM-ASR is a diarization-aware multi-speaker ASR framework that treats transcription as diarization-conditioned multi-turn dialogue generation. It adds optional word-level timestamps and uses Group Sequence Policy Optimization for fine-tuning, enabling both offline and causal sentence-level online decoding. Experiments on Mandarin and English benchmarks show competitive structured transcription with relatively compact models and limited training data.

Key Points:

- Reformulates multi-speaker recognition as diarization-conditioned multi-turn dialogue generation.

- Supports unified offline and online decoding through flexible acoustic context and dialogue history management.

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2118730323412550130)
- [DM-ASR: Diarization-aware Multi-speaker ASR with Unified Offline and Online Deco](https://arxiv.org/abs/2604.22467) - Linked page

---

### 📊 VoxCanvas-41M dataset released with 41M speech editing pairs

VoxCanvas-41M dataset released with about 41 million bilingual speech editing pairs for instruction-based editing. It covers content editing (single-span, multi-span, location-reference) and paralinguistic editing of 39 non-verbal event classes, and enables training of the VoxCanvas-Edit model.

Key Points:

- **Dataset size**: ~41 million bilingual speech editing pairs.

- **Editing categories**: content editing (single-span, multi-span, location-reference) and paralinguistic editing (insertion/deletion of 39 nonverbal event classes).

🔗 Resources:

- [Original post](https://x.com/ArxivSound/status/2118730698903474332)
- [VoxCanvas-41M: A Large-Scale Bilingual Dataset for Instruction-Based Speech Edit](https://arxiv.org/abs/2611.08251) - Linked page

---

### 🤖 ElevenAgents Unity SDK now available for voice interaction

ElevenAgents Unity SDK is now available, letting players walk up to a character and talk out loud. Characters can respond with any voice from the library and trigger actions via client tools.

Key Points:

- Players can walk up to a character and talk out loud.

- Characters can respond with any voice in the library and take actions using client tools.

🔗 Resources:

- [Original post](https://x.com/ElevenLabsDevs/status/2118730104285147231)
![Image](https://pbs.twimg.com/amplify_video_thumb/2118729561030430720/img/hQ861ayFld96Y8sS.jpg)

---

### 🚀 Soniox STT v6 launches with 60+ language support and agent echo cancellation

Soniox STT v6 is a new speech-to-text model that supports over 60 languages and adds agent text input and voice echo cancellation. It claims higher accuracy for numbers, currencies, units, dates, names, alphanumeric identifiers, and specialized terminology. Developers can improve results by supplying product names, professional vocabularies, and project terminology.

Key Points:

- Supports 60+ languages with faster, more accurate voice typing.

- Introduces agent voice echo cancellation to filter out playback while still listening to the user.

🔗 Resources:

- [Original post](https://x.com/soniox_ai/status/2118744952167375040)
- [Soniox Introducing Soniox STT v6](https://soniox.com/blog/soniox-stt-v6) - Linked page

---

### 🚀 InfiniStems ARA VST3/AU plugin released GPU accelerated

InfiniStems ARA VST3/AU plugin released GPU accelerated. The model is now available as an ARA VST3/AU plugin for DAWs. It runs on GPU for maximum speed.

Key Points:

- **Plugin type**: ARA VST3/AU plugin

- **Acceleration**: GPU accelerated for maximum speed

🔗 Resources:

- [Original post](https://x.com/splitter_ai/status/2118782838862745698)
![Image](https://pbs.twimg.com/media/HWdtwqIWsAA7tQ_?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-generated-music-and-audio/e-gaborformer-strictly-causal-speech-recognizer-with-19mb-co-283)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
