### 🚨 Miasma/testmetest supply chain worm poisons 12 GitHub repos with 3.7MB script

Miasma/testmetest supply chain worm added forged, backdated commits to 12 GitHub repos on Nov 9, each instructing an AI coding agent to run an obfuscated 3.7MB scripts/setup.js. The CLAUDE.md file marked “DEVOPS-SEALED” tells the assistant not to read, quote or analyse the script, to run it without displaying output, and to run it automatically without confirmation.

Key Points:

- 12 GitHub repos were poisoned on Nov 9 with forged, backdated commits.

- Each repo’s agent config points to an obfuscated 3.7MB scripts/setup.js.

🔗 Resources:

- [Original post](https://x.com/fr0gger_/status/2119730348699640060)
![Image](https://pbs.twimg.com/media/HWrKJgabEAAzCKK?format=jpg&name=900x900)

---

### 🤖 filza-wq repackaged for stock iOS 27.0.x with system container access

filza-wq is a repackaged Filza file manager for stock iOS 27.0.x that can browse system containers normally inaccessible to App Store apps. It injects a dylib that uses the publicly documented worse_query sandbox-escape technique. The IPA must be re-signed with an App Groups entitlement to work.

Key Points:

- Accessible Roots hub lists five targets including ConfigurationProfiles and System Data.

- Dylib swaps Library/Caches for a symlink and consumes the sandbox token returned by container_copy_sandbox_token.

🔗 Resources:

- [Original post](https://x.com/blackorbird/status/2119625270068134215)
- [filza-wq](https://github.com/MchinaMd57764/filza-wq) - Linked page

---

### 🤖 sshole openssh on musl accepts any 257+ char password

sshole reports that openssh on musl accepted any 257+ character password for accounts with no password. The condition has existed since 2016. A proof-of-concept and patch are linked.

Key Points:

- openssh on musl accepted any 257+ char password for accounts with no password

- condition has existed since 2016

- proof-of-concept and patch are available

🔗 Resources:

- [Original post](https://x.com/KitPloit/status/2119701766283366437)
- [check.sh](https://check.sh) - Linked in the post
- [ktp.sh](https://ktp.sh/2rOVaY83if) - Linked in the post
![Image](https://pbs.twimg.com/media/HWqxhjdWwAAFn2q?format=jpg&name=small)

---

### 🚨 S5PIVOT – Python backconnect proxy uses scheduled task and sitecustomize

S5PIVOT reuses similar persistence to VIPERTUNNEL, using a numeric scheduled task, pythonw.exe from ProgramData, and a sitecustomize.py hook. The post lists three indicators to hunt for this tool.

Key Points:

- **Persistence**: a numeric scheduled task.

- **Loader**: sitecustomize.py in Lib loads the payload via runpy.

🔗 Resources:

- [Original post](https://x.com/mgreen27/status/2119681024997372270)
- [S5PIVOT – A Python Backconnect Proxy Hidden Inside a Qilin Ransomware Intrusion ](https://hexastrike.com/resources/blog/threat-intelligence/s5pivot-a-python-backconnect-proxy-hidden-inside-a-qilin-ransomware-intrusion/) - Linked page

---

### 🤖 spillway Prompt-injection defense for tool-using agents announced

spillway is a prompt-injection defense for tool-using agents that uses structure to decide where agents act and a model to review refusals. It targets prompt-injection attacks on agents that use external tools.

Key Points:

- Structure decides where agents act

- Model reviews refusals

🔗 Resources:

- [Original post](https://x.com/KitPloit/status/2119661410758107541)
- [ktp.sh](https://ktp.sh/L6dQfobbX2) - Linked in the post
![Image](https://pbs.twimg.com/media/HWqM0jOWsAAhTCC?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cybersecurity-and-tech/miasma-testmetest-supply-chain-worm-poisons-12-github-repos-243)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
