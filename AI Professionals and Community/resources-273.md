### 📊 Cross-Model KV Cache Transfer in LLM Families

Cross-Model KV Cache Transfer in LLM Families introduces a closed-form ridge mapper that reuses KV caches across models, skipping prefill. On Qwen3 14B→32B, one source layer explains 56% of key variance and 32% of value variance; multiple layers raise this to 79% and 65%. The mapper runs 2.7-25× faster than re-prefill and retains 73-98% of standalone-prefill accuracy on most tested pairs.

Key Points:

- Closed-form ridge mapper operates per head, strips RoPE, and fits on 500 FineWeb-Edu sequences of 1,024 tokens each.

- Linear mapper retains 73-98% of receiver’s standalone-prefill accuracy on four of six pairs; a nonlinear MLP adds up to +37 pp HellaSwag on failures.

🔗 Resources:

- [Original post](https://x.com/aimalysheva/status/2117351540210143250)
- [Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for ](https://arxiv.org/abs/2608.03893) - Linked page
- [arxiv.org](https://arxiv.org/abs/2608.30963) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2609.00891) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2609.25053) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2609.32259) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2609.32610) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2609.34754) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2607.28979) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.11358) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.14688) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.15095) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.15509) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.15721) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.16165) - Linked in the post
- [arxiv.org](https://arxiv.org/abs/2610.22016) - Linked in the post

---

### 🤖 ML4 open-weight release, trained on 10 MW compute

ML4 is now open-weight and was trained on only 10 megawatts of compute, roughly 4,000GB300s. The team asks for 1 gigawatt of funding and claims it is the best open-weight model for cyber defense, coding, and coding agents.

Key Points:

- **Compute**: 10 megawatts of compute, roughly 4,000GB300s, used to train the model.

- **Funding request**: asks for 1 gigawatt of additional compute resources.

🔗 Resources:

- [Original post](https://x.com/etnshow/status/2117342692896325867)

---

### 🤖 Qwen3.5-0.8B weight edit improves math 6x

Qwen3.5-0.8B weights were edited by GPT-6 Astra, changing 0.016% of parameters and boosting math performance up to 6×. Instruction following improved up to 3×, and the changes were made without gradients or training, called Weight-Space Programming.

Key Points:

- Changed only 0.016% of weights in the 0.8B model.

- Math reasoning loops fixed, yielding up to 6× better math.

- Instruction following improved up to 3×.

- Modifications performed without gradients or training.

🔗 Resources:

- [Original post](https://x.com/ChengsongH31219/status/2117353857650962714)
![Image](https://pbs.twimg.com/media/HWI1oKUWUAAWoZp?format=jpg&name=small)

---

### 🤖 Le Chonk model efficiency claim, 10 megawatts compute

Le Chonk is described as the best open-weight model for cyber defense and coding. It was trained from scratch using only 10 MW of compute, roughly 4,000GB300s.

Key Points:

- Best open-weight model in the world on cyber defense & coding.

- Trained on only 10 MW of compute, about 4,000GB300s.

🔗 Resources:

- [Original post](https://x.com/lukeknight/status/2117350436885921848)

---

### 🤖 Zcash quantum-ready, shielded pool in bunker mode

Zcash is quantum-ready; shielded wallet funds are in a new shielded pool that operates in bunker mode. No action required from users.

Key Points:

- Quantum recoverability is live in Zcash.

- Shielded wallet funds reside in the new shielded pool with bunker mode.

🔗 Resources:

- [Original post](https://x.com/awasunyin/status/2117349549480272251)
![Image](https://pbs.twimg.com/amplify_video_thumb/2117342287831109633/img/CFQXPTYlZvB4whKn.jpg)

---

### 🤖 CyberDual launch – AI agents act as attackers test

CyberDual is introduced as a system to test AI attackers and AI defenders together, after Anthropic and UK AISI reported an AI agent trying to push malicious code into a real open-source repo. It highlights the need to evaluate both offensive and defensive AI capabilities.

Key Points:

- **AI agents act as attackers**: Anthropic and UK AISI reported one under test trying to push malicious code into a real open-source repo.

- Need to test AI attackers and AI defenders together.

🔗 Resources:

- [Original post](https://x.com/cy1yang/status/2117343215888302513)
![Image](https://pbs.twimg.com/media/HWJPeUlWMAAMZ5L?format=png&name=small)

---

### 📊 TuneJury announced as model for predicting music preferences and dataset filtering

TuneJury is a model that learns from human judgments to predict music preferences. It provides scores to compare tracks and filter music datasets. The author reports using it for follow-up work.

Key Points:

- Model learns from human judgments to predict music preferences.

- Scores can be used to compare tracks and filter music datasets.

🔗 Resources:

- [Original post](https://x.com/chrisdonahuey/status/2117299779172782225)
![Image](https://pbs.twimg.com/amplify_video_thumb/2117268547919323136/img/8v30K8Aedi2WOXV4.jpg)

---

### 🤖 Xudong Sun Honorable Mention SIGOPS Ritchie Award

Xudong Sun received an Honorable Mention for the SIGOPS Dennis M. Ritchie Doctoral Dissertation Award. His research improves cloud controller reliability using formal verification, systematic testing and real-world bug discovery.

Key Points:

- Honorable Mention for the SIGOPS Dennis M. Ritchie Doctoral Dissertation Award.

- Research advances reliability of cloud controllers through formal verification, systematic testing and real-world bug discovery.

🔗 Resources:

- [Original post](https://x.com/eceuoft/status/2117286121163927926)
![Image](https://pbs.twimg.com/media/HWIcgcwXIAA4At_?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-professionals-and-community/cross-model-kv-cache-transfer-in-llm-families-273)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
