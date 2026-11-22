### 🚨 Upload2Shell CVE-2026-125396 use-after-free in Ghostscript

Upload2Shell (CVE-2026-125396) is a use-after-free in Ghostscript’s Type 1 font loader that gives a write-what-where primitive. The primitive can disable the -dSAFER sandbox and execute commands.

Key Points:

- CVE-2026-125396 targets Ghostscript’s Type 1 font loader.

- A crafted PostScript/PDF or a file named .png/.jpg can trigger the vulnerability.

🔗 Resources:

- [Original post](https://x.com/blackorbird/status/2124437113018220895)
- [How We Hacked the Pipes](https://pwn.ai/upload2shell/research.html) - Linked page
![Image](https://pbs.twimg.com/media/HXuESYfbwAAjexM?format=jpg&name=small)

---

### 🤖 Entra Connect Health admin email addresses readable flaw

Entra Connect Health bug exposed admins' email addresses to outsiders for almost four months. It was in Microsoft’s cloud service and affected business customers.

Key Points:

- **Bug location**: Entra Connect Health monitors server sync with Entra.

- **Exposure duration**: almost four months.

🔗 Resources:

- [Original post](https://x.com/vxunderground/status/2124327399571558693)
![Image](https://pbs.twimg.com/media/HXrmRxxWUAAHYkc?format=png&name=small)
![Image](https://pbs.twimg.com/media/HXrma27XkAAunok?format=jpg&name=small)

---

### 🚨 OpenRouter off-boards 3 providers, cuts endpoints

OpenRouter off-boarded three inference providers and removed many endpoints from ZDR eligibility after data-handling problems were found. Ongoing checks will now include the researchers’ testing.

Key Points:

- Off-boarded 3 providers

- Removed many endpoints from ZDR eligibility

- Building researchers’ testing into ongoing checks

🔗 Resources:

- [Original post](https://x.com/OpenRouter/status/2124315081899200715)

---

### 🚀 Enterprise firewall management exposure mitigated with reverse proxy

Enterprise firewall appliances with publicly exposed web management interfaces can be hidden from internet scans by routing traffic through a reverse proxy and allowing only proxy IP ranges. This reduces the chance of zero-day exploits reaching the device while keeping it reachable via a domain.

Key Points:

- Zero-day vulnerabilities appear in web management interfaces of such appliances roughly every other week.

- Configuring a reverse-proxy service to forward traffic and then blocking all non-proxy IPs hides the device from scanners like Shodan and Censys.

🔗 Resources:

- [Original post](https://x.com/MalwareTechBlog/status/2124285344267079972)

---

### 🤖 Microsoft Defender adds ClipboardMonitor process list

Microsoft Defender adds ClipboardMonitor process list to monitor additional processes for clipboard attacks. By default it monitors clipboard contents from browsers and can be extended via HKLM:\SOFTWARE\Microsoft\Windows Defender\ClipboardMonitor\Processes.

Key Points:

- Monitors clipboard contents from browsers by default.

- **Extensible via HKLM**: \SOFTWARE\Microsoft\Windows Defender\ClipboardMonitor\Processes.

🔗 Resources:

- [Original post](https://x.com/NathanMcNulty/status/2123306487779037224)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/cybersecurity-and-tech/upload2shell-cve-2026-125396-use-after-free-in-ghostscript-250)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
