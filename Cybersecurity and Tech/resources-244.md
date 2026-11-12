### 🤖 Sparrow Framework tracking by CopperDragon threat actor

Sparrow Framework is a modular toolkit used by multiple espionage clusters, supporting the full intrusion lifecycle on Windows and Linux. YARA rules cover initial access, loaders, backdoors, credential theft, and tunneling components.

Key Points:

- **Initial Access**: Spearphishing LNK files that abuse legitimate Windows binaries and malicious DLLs distributed through CAB archives.

- **Backdoors**: CopperDoor and CopperDNS providing remote access and command-and-control capabilities over TLS and DNS.

🔗 Resources:

- [Original post](https://x.com/nextronresearch/status/2120806656229458099)
- [github.com](https://github.com/NextronSystems/iocs/tree/master/reports/CopperDragon:%20Tracking%20the%20Sparrow%20Framework%20Around%20the%20Globe) - Linked in the post
![Image](https://pbs.twimg.com/media/HW6doxrWIAI6EHh?format=jpg&name=medium)
![Image](https://pbs.twimg.com/media/HW6dov9WIAAWES0?format=jpg&name=medium)

---

### 🚨 ScreenConnect worm hits hundreds of hosts downstream

ScreenConnect worm is infecting hundreds of downstream hosts during the holiday. Attackers use cloud-hosted ScreenConnect panels to install rogue clients on managed endpoints. Do not triage infected hosts with ScreenConnect as connecting can spread the malware.

Key Points:

- **Incident**: worm hitting hundreds of hosts downstream.

- **Attack method**: cloud-hosted ScreenConnect panels install rogue clients.

🔗 Resources:

- [Original post](https://x.com/_JohnHammond/status/2120708452360347880)
- [huntress.com](https://www.huntress.com/blog/sckit-worm-rogue-screenconnect) - Linked in the post
![Image](https://pbs.twimg.com/media/HW5EnfSWMAAx4MT?format=png&name=small)
![Image](https://pbs.twimg.com/media/HW38SYSXkAAb-LZ?format=jpg&name=240x240)

---

### 🤖 Incident Investigation Report Checklist announced

Incident Investigation Report Checklist is now available for use in outsourcing investigations or reviewing reports. It is provided as a downloadable resource and also hosted on GitHub.

Key Points:

- Incident Investigation Report Checklist published.

- Incident Investigation Report Checklist hosted on GitHub.

🔗 Resources:

- [Original post](https://x.com/jpcert/status/2120372179305218157)
- [jpcert.or.jp](https://www.jpcert.or.jp/ir_report_checklist_20261111.html) - Linked in the post
- [jpcertcc.github.io](https://jpcertcc.github.io/ir_report_checklist/) - Linked in the post

---

### 🤖 JSAC2027 Training Day registration opens for upcoming conference

JSAC2027 Training Day registration opens, with details on the website. If applications exceed spots, participants are chosen by lottery.

Key Points:

- Registration is now open for Training Day ahead of the #JSAC2027 conference.

- Participants will be selected by lottery if there are more applicants than available spots.

🔗 Resources:

- [Original post](https://x.com/jpcert_ac/status/2120760035857019033)
- [jsac.jpcert.or.jp](https://jsac.jpcert.or.jp/training.html) - Linked in the post
- [Linked resource](https://t.co/lnJhkpGxLo) - Linked in the post

---

### 🚨 N-able zero-days and 4EverAble2Shell probes affect Legacy API builds

N-able zero-days are out and watchTowr Intel reports probes for “4EverAble2Shell”, which affect builds with the Legacy API enabled. Monitor systems, disable Legacy API access, and follow vendor guidance.

Key Points:

- New N-able zero-days are out.

- watchTowr Intel sees probes for “4EverAble2Shell” affecting builds with Legacy API enabled.

🔗 Resources:

- [Original post](https://x.com/watchtowrcyber/status/2120803577094439123)
![Image](https://pbs.twimg.com/media/HW6bjKzWUAACIw5?format=png&name=small)

---

### 🚨 Brainworm APT-C-35 phishing chain details

Brainworm APT-C-35 uses a phishing email with an XLTM macro to run a script chain, checks AV products, downloads a malicious .mp3/.mp4 DLL, and copies it to %TEMP%\WindowWeb. The chain ends with C2 communication.

Key Points:

- Phishing > XLTM > Macro > SC > Download > Check AV (Bitdefender, Kaspersky, ESET…) > Download .mp3/.mp4 (DLL) > Task > Copy DLL to %TEMP%\WindowWeb > Get info > #C2

- Uses AV checks for Bitdefender, Kaspersky, ESET before downloading payload

🔗 Resources:

- [Original post](https://x.com/RexorVc0/status/2120777742589263953)
- [mp.weixin.qq.com](https://mp.weixin.qq.com/s?__biz=MzUyMjk4NzExMA==&mid=2247509083&idx=1&sn=6db4ea5f0fab35a30d10c28f83173514&cur_album_id=1955835290309230595&search_click_id=&poc_token=HBlf9WqjlTPD0JE4vElwmV2M2L95QKP886CXgfvr) - Linked in the post
![Image](https://pbs.twimg.com/media/HW5-BPQWEAAH1Qg?format=png&name=900x900)

---

### 🚨 CopperDragon Sparrow Framework tracking findings reported

CopperDragon’s Sparrow Framework was tracked for a year, linked to Chinese nexus APT watering-hole attacks, passive backdoors, rootkits and telecom espionage. The post shares samples and a research link.

Key Points:

- Tracked for a year.

- Used by Chinese nexus APTs around watering-hole attacks on government websites.

🔗 Resources:

- [Original post](https://x.com/cyb3rops/status/2120814365486297138)

---

### 🤖 CopperHound adds RustHound-CE ingestion support

CopperHound can now ingest RustHound-CE data. CopperHound also ingests SharpHound, bloodhound-python, ldapdomaindump, AzureHound output, raw LDIF dumps and Sysinternals.

Key Points:

- Ingests RustHound-CE data

- Ingests SharpHound, bloodhound-python, ldapdomaindump, AzureHound output, raw LDIF dumps and Sysinternals

🔗 Resources:

- [Original post](https://x.com/g0h4n_0/status/2120789538687869201)
![Image](https://pbs.twimg.com/media/HW6Ow80WEAAu1eq?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cybersecurity-and-tech/sparrow-framework-tracking-by-copperdragon-threat-actor-244)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
