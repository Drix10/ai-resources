### 🤖 REWEAVE: Online Learning for Workload-Adaptive HNSW Indexes improves recall up to 23.3 pp

REWEAVE introduces an online method that learns which HNSW edges matter for the query workload and rewires them within the same per-node degree cap. It improves held-out recall by up to 23.3 percentage points over standard HNSW on skewed queries. The approach also reduces search distance computations by 34% while raising stream recall@100 from 0.745 to 0.979 on Amazon-ESCI with query drift.

Key Points:

- **Recall improvement**: up to 23.3 percentage points over HNSW under stationary skew.

- **Stream recall increase**: from 0.745 to 0.979 with 34% fewer distance computations on Amazon-ESCI.

🔗 Resources:

- [Original post](https://x.com/_reachsumit/status/2121179616870330475)
- [REWEAVE: Online Learning for Workload-Adaptive HNSW Indexes](https://arxiv.org/abs/2611.16060) - Linked page

---

### 📊 DeepSeek V4 Flash GPU thread count inference shows B200 usage

DeepSeek V4 Flash and Minimax M3 were pretrained on B200/B300 GPUs, identified by a stripe width of 303,104 threads. DeepSeek V4 Pro and Kimi K3/K3.1-Pro were pretrained on GB200/GB300 GPUs, identified by a stripe width of 270,336 threads. The method uses random-number generator stripe width matching GPU thread counts. Seeds used were 953049583 for DeepSeek V3/V4 Flash and 20256586 for Kimi K3.

Key Points:

- **GPU thread count**: H200 has 270,336 threads; B200 has 303,104 threads.

- **Pretraining GPUs**: DeepSeek V4 Flash and Minimax M3 on B200/B300; DeepSeek V4 Pro and Kimi K3/K3.1-Pro on GB200/GB300.

- **Seeds**: DeepSeek V3/V4 Flash seed 953049583; Kimi K3 seed 20256586.

- Small models pretrained on RTX Pro 6000 show 288,768 threads; on H200 show 270,336 threads.

🔗 Resources:

- [Original post](https://x.com/bojie_li/status/2121133775887482884)
![Image](https://pbs.twimg.com/media/HW_EgYkakAAIgKB?format=jpg&name=small)
![Image](https://pbs.twimg.com/media/HW9GgJ_WcAA9m3I?format=jpg&name=900x900)

---

### 🤖 ReSID – Long-tail retrieval method released with production deployment

ReSID introduces parallel semantic IDs, popularity-debiased beam search and partial SID matching to improve long-tail item retrieval in generative recommendation. It achieves state-of-the-art long-tail recall while keeping overall accuracy, latency and throughput better than prior methods. The system is already deployed in Alibaba’s production traffic and the code and model checkpoints are publicly released.

Key Points:

- Parallel SID construction outperforms sequential SIDs on tail items under equal code lengths

- Popularity-debiased, user-semantic-aware beam search keeps promising paths alive for partial matching

- Deployed in production serving main user traffic with substantial business gains

- Code and model checkpoints released for reproducibility and real-world deployment

🔗 Resources:

- [Original post](https://x.com/_reachsumit/status/2121178969483653490)
- [ReSID: Rethinking Long-Tail Retrieval in Generative Recommendation through Item ](https://arxiv.org/abs/2611.16404) - Linked page
- [github.com](https://github.com/Gabriel-reina/ReSID) - Linked in the post

---

### 🤖 From Tokens to Behaviors: TraGR outperforms baselines on UBTP

From Tokens to Behaviors introduces TraGR, a behavior-aware generative recommendation framework that predicts whole user behavior sequences. It generates SID tokens in parallel per interaction and models transitions with recurrent updates. Experiments on four public datasets show consistent improvement over state-of-the-art baselines across prediction horizons.

Key Points:

- **Framework name**: TraGR, behavior-aware generative recommendation system.

- **Evaluation**: tested on four public datasets, consistently outperforms state-of-the-art baselines.

🔗 Resources:

- [Original post](https://x.com/_reachsumit/status/2121179502806221277)
- [From Tokens to Behaviors: Rethinking Generative Recommendation for User Trajecto](https://arxiv.org/abs/2611.16159) - Linked page
- [github.com](https://github.com/CalmaQi/GR4UBT) - Linked in the post

---

### 🤖 CURATOR fine-tuned decision model for evidence selection in RAG

CURATOR is a fine-tuned decision model that selects supporting spans from retrieved passages for retrieval-augmented generation. It evaluates many spans jointly while keeping evidence discrimination as candidate count grows. The model improves downstream RAG performance when context is limited.

Key Points:

- Fine-tuned decision model trained to select varying numbers of supporting spans from large candidate pools.

- Maintains strong evidence discrimination as the number of candidates increases and improves downstream RAG performance with limited context.

🔗 Resources:

- [Original post](https://x.com/_reachsumit/status/2121179349596643491)
- [CURATOR: Scalable Fine-grained Evidence Selection for Retrieval-Augmented Genera](https://arxiv.org/abs/2611.16366) - Linked page

---

### 🤖 When Does a Recommendation Spark Curiosity? adds metric

When Does a Recommendation Spark Curiosity? adds metric and proposes a computational curiosity measure. The paper formalizes five axioms of curiosity and validates the measure with a survey. Offline tests on three datasets show it outperforms state-of-the-art methods, and an online experiment increased click-through rate, video views, and time spent.

Key Points:

- Five axioms formalize the information-gap theory of curiosity

- Offline experiments on three real-world datasets outperform existing methods

🔗 Resources:

- [Original post](https://x.com/_reachsumit/status/2121180016356753583)
- [When Does a Recommendation Spark Curiosity? Theory, Measurement, and Field Evide](https://arxiv.org/abs/2611.14938) - Linked page

---

### 📊 When Direction Matters: Diagnosing Relational Instruction Following in Dense Retrieval

When Direction Matters: Diagnosing Relational Instruction Following in Dense Retrieval introduces SwitchIR, a diagnostic that keeps query-document pairs fixed while reversing the requested relation direction. Dense retrievers perform well on controls with lexical or attribute cues but consistently score low on the Relational Flip condition across embedding and late-interaction models.

Key Points:

- SwitchIR contrasts Constraint Shift, Explicit Filtering, and Relational Flip to test direction sensitivity.

- Fine-tuning enables models to learn relational behavior that generalizes across relation families, with stronger generalization in larger models.

🔗 Resources:

- [Original post](https://x.com/_reachsumit/status/2121179760806281434)
- [When Direction Matters: Diagnosing Relational Instruction Following in Dense Ret](https://arxiv.org/abs/2611.15417) - Linked page

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-professionals-and-community/reweave-online-learning-for-workload-adaptive-hnsw-indexes-i-281)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
