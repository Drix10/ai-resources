### 🤖 OPAL reactive optimizer improves vision and language training

OPAL is a deep-learning optimizer that watches training dynamics, rewrites its own code, and improves performance on vision and language tasks. It invents specialized schedules and strategies to prevent loss spikes and escape overfitting.

Key Points:

- Reactive optimizer rewrites the optimizer’s source code as training proceeds.

- On the Amharic dataset, the reactive optimizer achieves 81.11 bits per sentence versus 83.48 with the official recipe.

🔗 Resources:

- [Original post](https://x.com/MIT_CSAIL/status/2117300744168608012)
- [Reactive Optimizers](https://xingjianbai.com/reactive-optimizers/) - Linked page
- [tinyurl.com](https://tinyurl.com/mttj5exh) - Linked in the post

---

### 🤖 FlashAttention – Fast and Memory-Efficient Exact Attention with IO-Awareness

FlashAttention introduces an exact attention algorithm that tiles Q/K/V into on-chip SRAM and uses online softmax to avoid materializing the quadratic attention matrix in HBM. It achieves 15% wall-clock speedup on BERT-large (seq 512) and 3× speedup on GPT-2 (seq 1K) compared to prior baselines.

Key Points:

- IO-aware exact attention tiles Q/K/V into on-chip SRAM and avoids full N×N matrix writes to HBM.

- **Reported speedups**: 15% on BERT-large (seq 512), 3× on GPT-2 (seq 1K), and 2.4× on Long-Range Arena (seq 1K-4K).

🔗 Resources:

- [Original post](https://x.com/anshulcreates/status/2117763374352040149)
- [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://www.alphaxiv.org/abs/2205.14135) - Linked page
- [alphaxiv.org](https://www.alphaxiv.org/abs/2307.08691) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/2301.03598) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/2309.06180) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/2407.08608) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/1805.02867) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/2408.11743) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/2310.01889) - Linked in the post
- [alphaxiv.org](https://www.alphaxiv.org/abs/2501.01005) - Linked in the post
![Image](https://pbs.twimg.com/media/HWPOkIfXMAAzziD?format=jpg&name=large)
![Image](https://pbs.twimg.com/media/HWPOkIqW8AARG3h?format=png&name=small)

---

### 📊 byte-level models better under multi-epoch training

byte-level models are better under multi-epoching, training K times over 1/K of the data. n-gram dominates recent pre-training speedruns but performs poorly in multi-epoch setups.

Key Points:

- byte-level models outperform under multi-epoch training (K times over 1/K of data)

- larger tokenizers suffer more multi-epoch regret due to extra loss from repeating data instead of unique data

🔗 Resources:

- [Original post](https://x.com/_albertgu/status/2117798862186512601)
![Image](https://pbs.twimg.com/media/HWOdz6qXYAEpSw_?format=jpg&name=small)

---

### 🤖 Sakana AI demos at Gartner IT Symposium/Xpo 2026

Sakana AI is showcasing demos of Sakana Marlin, Fugu, and Namazu at the Gartner IT Symposium/Xpo™ 2026. A networking reception starts at 18:30 within the IT Xpo.

Key Points:

- **Demo**: Sakana Marlin

- **Demo**: Fugu

- **Demo**: Namazu

- **Reception**: 18:30 at the IT Xpo

🔗 Resources:

- [Original post](https://x.com/SakanaAILabs/status/2117806486172860793)
![Image](https://pbs.twimg.com/media/HWP1losbEAAI2kl?format=jpg&name=small)

---

### 🤖 PyTorch Day China 2026 CFP opens, deadline November 10

PyTorch Day China 2026 will be held in Beijing on December 12 and is now accepting session and lightning talk proposals. Submissions close on Tuesday, November 10 at 23:59 China Standard Time. The event will feature 20-minute sessions (max 3 speakers) and 10-minute lightning talks (max 2 speakers).

Key Points:

- **CFP close**: Tuesday, November 10 at 23:59 China Standard Time (UTC +8)

- **Submission types**: Session Presentation (20 min, up to 3 speakers) and Lightning Talk (10 min, up to 2 speakers)

🔗 Resources:

- [Original post](https://x.com/PyTorch/status/2117844321080606913)
- [Call For Proposals (CFP)](https://www.lfopensource.cn/pytorch-day-china/program/call-for-proposals/) - Linked page

---

### 🤖 Yann LeCun small AI model better than 660× larger LLM

Yann LeCun and Randall Balestro report a study on October 29 showing a small, well-fed AI model forms a better picture of the world than a language model 660 times larger. The claim compares model size and world understanding.

Key Points:

- **Study date**: October 29.

- **Claim**: small, well-fed AI model outperforms a LLM 660 times larger.

🔗 Resources:

- [Original post](https://x.com/Numerama/status/2117202126460084573)
- [l.numerama.com](https://l.numerama.com/Xet) - Linked in the post

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cs-academics/opal-reactive-optimizer-improves-vision-and-language-trainin-309)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
