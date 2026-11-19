### 🤖 Carbon runs Gemma 3 270m in printer, 60s per token

Carbon compiled a small transformer engine and a quantized Gemma 3 270m model into a single PostScript job that runs entirely in an office printer. The job uses 14MB peak RAM and processes tokens at about 60 seconds each. Smart layers are used to avoid out-of-memory errors.

Key Points:

- **Engine**: Small transformer engine + quantized Gemma 3 270m compiled into one PostScript job

- **Performance**: 14MB peak RAM, ~60 s per token, runs 100% in printer

- **Technique**: Smart layers juggling to avoid OOMing

🔗 Resources:

- [Original post](https://x.com/osanseviero/status/2122646098418491739)
![Image](https://pbs.twimg.com/media/HXUlMzMWoAAdSmu?format=jpg&name=small)

---

### 🤖 Stripe MoR announcement and alternative payment fees

Stripe will become a MoR and is shutting down Lemon Squeezy. The post lists seven alternative payment platforms with their fee structures.

Key Points:

- **Stripe fee**: 2.9% + $0.30

- **Cream fee**: 3.9% + $0.40

🔗 Resources:

- [Original post](https://x.com/AmasCreates/status/2122660013906985130)

---

### 🤖 StickyGP – new tool overview and tutorial available

StickyGP is highlighted with a current state overview, use cases, future plans, and a tutorial by Simon. Access to the StickyGP special is limited to Blender Studio subscribers.

Key Points:

- Current state, use cases and future plans are described.

- Simon’s comprehensive tutorial is provided.

🔗 Resources:

- [Original post](https://x.com/BlenderStudio_/status/2122710498986664022)
- [studio.blender.org](https://studio.blender.org/blog/stickygp/) - Linked in the post
![Image](https://pbs.twimg.com/ext_tw_video_thumb/2122710486319861760/pu/img/mwG2HI6Jpb_J7pa8.jpg)

---

### 🚀 Supertoast Redux – offload index files to S3 on Hatchet Cloud

Supertoast Redux is the updated implementation that moves index files to S3 to offload data from NVMe disks on Hatchet Cloud. The team earlier created a table called Supertoast for this purpose and now expanded it.

Key Points:

- Supertoast is the name of the table used to offload payload data to S3.

- Supertoast, Redux is the revised implementation that extends the offload.

🔗 Resources:

- [Original post](https://x.com/hatchet_dev/status/2122708729166455048)

---

### 🤖 PlayCanvas games run inside Snapchat Web Lenses, 7 demos released

PlayCanvas games run inside Snapchat Web Lenses, with seven examples created for the Lenslist Web Lens Game Challenge. The games were built using Snapchat’s new Web Lenses feature. The post thanks the Lenslist challenge for the push.

Key Points:

- 7 games built for Snapchat Web Lenses

- Created for the @lenslist Web Lens Game Challenge

🔗 Resources:

- [Original post](https://x.com/emredevsalot/status/2122670918396723635)
![Image](https://pbs.twimg.com/amplify_video_thumb/2122669641445105664/img/_asXkPjakR3MVGaF.jpg)

---

### 🤖 qsort compare function requires char** cast for strings

qsort compare function receives pointers to elements, so when sorting an array of strings each element is a char *, the compare receives char ** and must use strcmp(*(const char **)a, *(const char **)b) instead of strcmp(a, b).

Key Points:

- qsort gets a base pointer, a count, the size of one element, and a compare function.

- For an array of strings the compare function receives char  and uses strcmp(*(const char )a, *(const char )b).

🔗 Resources:

- [Original post](https://x.com/chessMan786/status/2122711976787018222)
![Image](https://pbs.twimg.com/media/HXVjQO9aEAAI_2O?format=jpg&name=900x900)

---

### 🤖 Prusa Connect public beta launch, local-first on Raspberry Pi

Prusa Connect public beta launches as a local-first service you can run on a Raspberry Pi, NAS or your own server. It requires no cloud, no internet, and files stay with you; download and run with no sign-up, free.

Key Points:

- **Launch**: public beta released today.

- **Deployment**: runs on Raspberry Pi, NAS or any server, with no cloud or internet required.

🔗 Resources:

- [Original post](https://x.com/TheZuza/status/2122712045267173588)
![Image](https://pbs.twimg.com/media/HXU6Jh7W8AA4vvI?format=jpg&name=small)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/devs-designers-devrel/carbon-runs-gemma-3-270m-in-printer-60s-per-token-310)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
