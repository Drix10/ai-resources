### 🤖 ARTEX servers observed on over 2,200 hosts

ARTEX servers observed on over 2,200 hosts, exceeding Cobalt Strike and all other C2 frameworks combined. New AI-generated C2 frameworks are already being used by threat actors, some not publicly detected.

Key Points:

- More ARTEX servers than Cobalt Strike and all other C2 frameworks combined.

- Almost 2,200 servers are running ARTEX with exposed default admin panels.

- New/not publicly detected AI-generated C2 frameworks already in use.

🔗 Resources:

- [Original post](https://x.com/MichalKoczwara/status/2115795731923517724)
![Image](https://pbs.twimg.com/media/HVzOPn1XUAAYDX5?format=jpg&name=240x240)
![Image](https://pbs.twimg.com/media/HVzPbJ7WwAAlRk5?format=jpg&name=small)

---

### 🚀 TpDirectCallbackHijack: thread-pool callback PoC

TpDirectCallbackHijack is a process injection PoC that overwrites a function pointer in a thread pool object and dispatches shellcode via a single completion packet. The restore stub puts the pointer back, keeping the thread pool functional, and it uses no remote thread or Get/SetThreadContext.

Key Points:

- **Release**: TpDirectCallbackHijack released as a process injection PoC.

- **Technique**: overwrites one function pointer inside an existing thread pool object (TP_IO / TP_ALPC / TP_JOB) and posts a single completion packet to execute shellcode.

🔗 Resources:

- [Original post](https://x.com/MalDevAcademy/status/2115864670913343635)
- [github.com](https://github.com/Maldev-Academy/TpDirectCallbackHijack) - Linked in the post
![Image](https://pbs.twimg.com/media/HV0Pk8QW8AAAMlZ?format=png&name=360x360)
![Image](https://pbs.twimg.com/media/HV0Pk8OW0AAhNr_?format=png&name=small)

---

### 🤖 Padre Terminal fake app linked to $23K Solana wallet theft

Padre Terminal, a fake crypto trading app previously on the Apple App Store, drained about $23,000 from 27 Solana wallets. The malicious app has been removed but the drainer remained active after removal.

Key Points:

- Drained 27 Solana wallets since October 25, 2026, stealing approximately $23,000.

- Converted 4,070 USDC tokens to SOL on October 29 and transferred 192 SOL to a new wallet.

🔗 Resources:

- [Original post](https://x.com/BleepinComputer/status/2115887376245354496)
- [Fake crypto app on Apple App Store linked to $23K wallet theft](https://www.bleepingcomputer.com/news/security/fake-crypto-app-on-apple-app-store-linked-to-23k-wallet-theft/) - Linked page

---

### 🚨 Polymarket compromised, millions stolen in past hour

Polymarket was compromised by an unknown Threat Actor and millions of dollars were stolen in the past hour. The post also references a prior mock of Threat Actors for enumerating infrastructure and building targets.

Key Points:

- **Compromise**: unknown Threat Actor compromised Polymarket.

- **Loss**: millions of dollars stolen in the past hour.

🔗 Resources:

- [Original post](https://x.com/vxunderground/status/2115906655548268724)
![Image](https://pbs.twimg.com/media/HV0tjF1XkAAxg9W?format=png&name=small)

---

### 🚨 Binance compromised, $3.5B stolen across chains

Binance compromised at approx. the same time as the Polymarket compromise, with theft estimates crossing into the billions. Total hacked is around $3.5B now across multiple chains.

Key Points:

- Compromise occurred approx. same time as Polymarket compromise.

- Total hacked is around $3.5B now across multiple chains.

🔗 Resources:

- [Original post](https://x.com/vxunderground/status/2115914258890281091)

---

### 🚨 GitLab vulnerability CVE-2026-97229 added to KEV Catalog

GitLab Community Edition & Enterprise Edition vulnerability CVE-2026-97229 was added to the KEV Catalog. Cisco Secure Firewall ASA Software and Cisco Secure FTD Software vulnerability CVE-2026-76418 was also added.

Key Points:

- CVE-2026-97229 added to KEV Catalog

- CVE-2026-76418 added to KEV Catalog

🔗 Resources:

- [Original post](https://x.com/CISACyber/status/2115919728241742309)
- [go.dhs.gov](https://go.dhs.gov/Z3Q) - Linked in the post
![Image](https://pbs.twimg.com/media/HV1Bx5LWkAAKK8M?format=png&name=small)

---

### 🚀 BloodHound v8.0 Innovation of the Year finalist 2026 SANS DMA

BloodHound v8.0 with OpenGraph is a finalist for Innovation of the Year (Open Source Product or Tool) in the 2026 SANS Institute Difference Makers Awards. Voting closes November 9.

Key Points:

- BloodHound v8.0 with OpenGraph is a finalist for Innovation of the Year (Open Source Product or Tool) in the 2026 SANS Institute Difference Makers Awards.

- Voting closes November 9.

🔗 Resources:

- [Original post](https://x.com/SpecterOps/status/2115906526938317262)
- [ghst.ly](https://ghst.ly/4knB45j) - Linked in the post
![Image](https://pbs.twimg.com/media/HV01xgoWEAARLX-?format=jpg&name=small)

---

### 🤖 Microsoft Authenticator passkey enrollment – new CA exclusion method

Microsoft Authenticator now supports passkey enrollment when Compliance or App Protection policies are required by excluding the Azure Credential Configuration Endpoint Service (appId ea890292-c8c8-4433-b5ea-b09d0668e1a6). The exclusion removes the need for the previously hacky workaround.

Key Points:

- Excluding service principal ea890292-c8c8-4433-b5ea-b09d0668e1a6 allows passkey registration with app protection enforced.

- Register the service principal in Graph (e.g., New-MgServicePrincipal –AppId ea890292-c8c8-4433-b5ea-b09d0668e1a6) before adding it to Conditional Access.

🔗 Resources:

- [Original post](https://x.com/NathanMcNulty/status/2115919686131241099)
- [Improving passkey registration experiences](https://nathanmcnulty.com/blog/2025/09/improving-passkey-registration-experiences/) - Linked page

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cybersecurity-and-tech/artex-servers-observed-on-over-2-200-hosts-237)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
