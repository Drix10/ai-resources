### 🤖 Chainguard Harness beta waitlist opens today

Chainguard Harness launches with a beta waitlist, letting Anthropic Claude Mythos 5.1 probe live apps for exploitable vulnerabilities. Harness builds the app from source, runs it in an isolated microVM with no network egress or credentials, and provides a validated report with fixes reviewed by a Chainguard engineer.

Key Points:

- Harness runs the model in a microVM with no network egress and no credentials.

- Workspaces are now in beta, offering microVM-based development environments with short-lived credential injection and a tamper-proof flight recorder.

🔗 Resources:

- [Original post](https://x.com/chainguard_dev/status/2115882279440470260)
- [Everything we announced at Chainguard Assemble London 2026](https://www.chainguard.dev/unchained/everything-we-announced-at-chainguard-assemble-london-2026) - Linked page
![Image](https://pbs.twimg.com/amplify_video_thumb/2115881717839904768/img/Ht3XBUdFWoSNkL5d.jpg)

---

### 🤖 Le Chonk (Mistral Large 4) claims best open agentic coding model, 41% score

Le Chonk, Mistral’s Large 4 model, is announced as the best open agentic coding model with a 41% Terminal-Bench 4.0 score, edging GLM-5.3’s 40%. Mistral says it uses 47% fewer tokens per task than GLM-5.3, lowering cost.

Key Points:

- **Terminal-Bench 4.0 agentic coding score**: Le Chonk 41%, GLM-5.3 40%

- **Token usage**: Le Chonk uses 47% fewer tokens per task than GLM-5.3

🔗 Resources:

- [Original post](https://x.com/thenewstack/status/2115881439866630441)
- [Mistral’s Large 4 open weights arrive with a 1-point coding lead over GLM-5.3: "](https://thenewstack.io/mistral-chonk-coding-model/?taid=6ae397c4f64aaa000119f33b) - Linked page

---

### 🤖 Skyworksinc uses LangGraph and LangSmith to cut root cause analysis time to 10 days

Skyworksinc uses LangGraph and LangSmith to deploy agents and run evaluations in one place, reducing manual root cause analysis from about 20 days to 10 days with the first pass.

Key Points:

- Manual mechanism takes about 20 days.

- First pass reduces time to 10 days.

- Uses LangGraph and LangSmith to deploy agents and run evals in one place.

🔗 Resources:

- [Original post](https://x.com/LangChain/status/2115881358132429187)
![Image](https://pbs.twimg.com/amplify_video_thumb/2115878585143590912/img/qOp7kwpr7u40P7s4.jpg)

---

### 🤖 Datadog failover isn’t safe – built HA PostgreSQL on Kubernetes with Patroni

Datadog discovered unsafe PostgreSQL failover during a gameday and rebuilt their Kubernetes clusters using synchronous replication coordinated by Patroni. The redesign makes failover automatic and safe while preserving performance.

Key Points:

- Gameday simulated zonal failure caused replication lag and unsafe failover.

- New architecture uses synchronous replication and Patroni for controlled leader election.

🔗 Resources:

- [Original post](https://x.com/K8sArchitect/status/2115882873173450984)
- [When failover isn’t safe: Building high-availability PostgreSQL on Kubernetes](https://www.datadoghq.com/blog/engineering/postgresql-ha-kubernetes/) - Linked page
![Image](https://pbs.twimg.com/media/HV0gQpLXMAAwZiP?format=jpg&name=small)

---

### 🤖 Snowflake Interactive Warehouses benchmark 150M rows

Snowflake Interactive Warehouses let latency-sensitive queries run on existing tables without duplicate serving tables. Alexander Murugesan shows proactive cache warming, fallback warehouse configuration and a selective-query benchmark on 150 million rows.

Key Points:

- Keep your standard tables. Route your interactive queries to a different warehouse.

- Snowflake Interactive Warehouses serve latency-sensitive workloads from existing tables without creating a duplicate serving table.

🔗 Resources:

- [Original post](https://x.com/Snowflake/status/2115881433596113268)
- [bit.ly](https://bit.ly/4iaAxSX) - Linked in the post
![Image](https://pbs.twimg.com/media/HV0e80lX0AE_cWf?format=jpg&name=900x900)

---

### 🤖 NetApp ONAIR explains GPU clusters and ONTAP A90

NetApp ONAIR explains how GPU clusters, metadata servers, and ONTAP A90 nodes work together for high-performance AI pipelines. It highlights the role of storage systems in moving data at scale for AI breakthroughs.

Key Points:

- GPU clusters, metadata servers, and ONTAP A90 nodes work together

- Combination powers high-performance AI pipelines

🔗 Resources:

- [Original post](https://x.com/NetApp/status/2115881448083169721)

---

### 🤖 Durable Execution Telemetry Exporter adds cumulative JSON record

Durable Execution Telemetry Exporter is an SDK plugin that creates a cumulative JSON record for each Lambda durable execution. It supports many destinations and can be added with a one-line configuration change. The exporter builds a single DurableExecutionTelemetryRecord JSON document that includes steps, waits, retries, timing, status and errors.

Key Points:

- Plugin creates a cumulative JSON record for each execution, including every step, wait, and retry.

- Integration requires only a one-line configuration change and supports multiple destinations.

🔗 Resources:

- [Original post](https://x.com/RDarrylR/status/2115831163096814076)
- [Observing AWS Lambda durable functions with the Durable Execution Telemetry Expo](https://aws.amazon.com/blogs/compute/observing-aws-lambda-durable-functions-with-the-durable-execution-telemetry-exporter/) - Linked page
![Image](https://pbs.twimg.com/media/HVzxOrTW8AAyMXy?format=jpg&name=900x900)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/tech-infrastructure/chainguard-harness-beta-waitlist-opens-today-271)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
