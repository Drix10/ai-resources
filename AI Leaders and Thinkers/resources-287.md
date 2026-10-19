### 🤖 Buildkite and GitHub Actions CI pipeline steps

Buildkite runs tests and builds images after pushes to main, then GitHub Actions runs infrastructure security checks and starts deployments. Failed checks block deployment and notify the commit author in Slack; CI continues on later pushes while fixes are applied.

Key Points:

- Push to main triggers Buildkite to run tests and build images.

- GitHub Actions runs security checks, blocks deployment on failure, and pings the commit author in Slack.

🔗 Resources:

- [Original post](https://x.com/mikehostetler/status/2111828540714873261)

---

### 🚨 Base64 secret key trailing '=' may break awk split in .env

Base64 string format as secret key is poisonous, because the trailing '=' may bite your users who use naive awk to get the second substring with a split char '=' from a .env file. The issue arises when parsing .env files with awk using '=' as delimiter.

Key Points:

- **Issue**: trailing '=' in Base64 secret key

- **Impact**: awk split on '=' returns incorrect substring in .env files

🔗 Resources:

- [Original post](https://x.com/wangzhr4/status/2112011971923161555)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-leaders-and-thinkers/buildkite-and-github-actions-ci-pipeline-steps-287)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
