### 🤖 TurboFieldfare runs Gemma 4 26B on 8GB Mac with ~2GB RAM

TurboFieldfare runs Gemma 4 26B on an 8GB Mac using about 2GB of RAM. It keeps a 1.35GB shared core and KV cache in memory and streams needed experts from SSD. The Swift-Metal runtime provides a native Mac app, CLI and local server, and the author recorded 103 measured experiments.

Key Points:

- Runtime written in Swift and Metal, not a wrapper around MLX or llama.cpp.

- Measured decode speed on an 8GB M2 MacBook Air is 5.1-6.3 tokens per second.

🔗 Resources:

- [Original post](https://x.com/dextune/status/2118251978073514079)
- [drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare) - Linked page
![Image](https://pbs.twimg.com/media/HWV4mJLa4AABmNo?format=jpg&name=900x900)

---

### 🤖 Strata 0.2.11 adds auto split engine, decode 186.8 tps

Strata 0.2.11 automatically selects its split engine for Qwen3.8-Flash-Next IQ3_S across four Radeon AI PRO R9700 cards. Decode speed rises from 104.2 to 186.8 tokens per second with layer splitting. Eight concurrent users reach 364.6 tps combined. Seven new Unsloth Dynamic v3.1 GGUF sets from 1- to 4-bit are supported, sized 68.0GB to 93.7GB.

Key Points:

- Automatic split engine for Qwen3.8-Flash-Next IQ3_S on 4 Radeon AI PRO R9700.

- Decode speed increase from 104.2 tps to 186.8 tps with layer splitting.

- Eight concurrent users achieve 364.6 tps combined, up from 320.7 tps.

- Support for seven new Unsloth Dynamic v3.1 GGUF sets, 1- to 4-bit, 68.0GB-93.7GB.

🔗 Resources:

- [Original post](https://x.com/dextune/status/2118348861605659012)
- [Release Strata 0.2.11](https://github.com/Niko1221/Strata/releases/tag/v0.2.11) - Linked page
![Image](https://pbs.twimg.com/media/HWXd6kEakAAQe8V?format=jpg&name=900x900)

---

### 🤖 Jeff Studio Scene adds 24-hour cycle and nine building styles

Jeff Studio Scene is a Godot plugin for HD-2D pixel towns that now includes a 24-hour day and night cycle and nine building styles. It also provides 35 ground textures, 14 presets, and GLB export to Blender.

Key Points:

- 24-hour day and night cycle

- Nine building styles ranging from Japanese machiya to Gothic town

🔗 Resources:

- [Original post](https://x.com/dextune/status/2118324954181599596)
- [Jeff Studio Godot 场景插件](https://github.com/Smidle/jeff-studio-scene) - Linked page
![Image](https://pbs.twimg.com/media/HWW593FawAA7N9u?format=jpg&name=900x900)

---

### 🤖 Artisan – multi-agent pipeline for articulated 3D assets, $15 budget per case

Artisan generates articulated 3D assets from text and optional images using three AI agents and physics feedback. The default run uses GPT-6 Astra with high reasoning effort and a $15 cost limit. A benchmark evaluates appearance, geometry, materials, collisions, stability and mass.

Key Points:

- **Three agents**: Design plans, Coding builds procedural code, Review checks with physics simulation.

- **Default configuration**: model = "gpt-6-astra", thinking = "high", max_cost_usd = 15.0.

🔗 Resources:

- [Original post](https://x.com/dextune/status/2118350120538255664)
- [physicalvision/artisan](https://github.com/physicalvision/artisan) - Linked page
![Image](https://pbs.twimg.com/media/HWXXl2gbYAAElmB?format=jpg&name=900x900)

---

### 🤖 Universal LPC Spritesheet Character Generator launches web tool

Universal LPC Spritesheet Character Generator builds a game character sprite sheet in the browser from open-licensed LPC art. The tool outputs a combined sheet and a CSV or text file with authors and licenses for each asset. It notes that commercial games can use the art but must credit all authors except for CC0 assets.

Key Points:

- Generates a combined sprite sheet from all LPC character art created so far.

- Provides a CSV or text file listing authors and licenses of every selected asset.

🔗 Resources:

- [Original post](https://x.com/dextune/status/2118357418904101286)
- [LiberatedPixelCup/Universal-LPC-Spritesheet-Character-Generator](https://github.com/LiberatedPixelCup/Universal-LPC-Spritesheet-Character-Generator) - Linked page
![Image](https://pbs.twimg.com/media/HWXYZlNaMAAFNVd?format=jpg&name=900x900)

---

### 🤖 Live2D Widget adds mascot with one script line

Live2D Widget adds a Live2D mascot to a web page with a single script line and no runtime dependency beyond Live2D Cubism Core. It can be configured via initWidget options and runs entirely in the browser since version 1.0.

Key Points:

- No runtime dependency besides Live2D Cubism Core.

- Since version 1.0 the model features run in the browser, so you no longer need a backend API.

🔗 Resources:

- [Original post](https://x.com/dextune/status/2118274626199384424)
- [github.com](https://github.com/stevenjoezhang/live2d-widget) - Linked in the post
![Image](https://pbs.twimg.com/media/HWWF4X5b0AAENOR?format=jpg&name=900x900)

---

### Read More & Connect

**Interactive version:** [blogs.drix10.com](https://blogs.drix10.com/articles/ai-in-real-estate-and-property-tech/turbofieldfare-runs-gemma-4-26b-on-8gb-mac-with-2gb-ram-263)

Written by **[Drishtant Ghosh (Drix10)](https://drix10.com)**, a technical founder and engineer working across AI systems, developer infrastructure, and cybersecurity.

- **Blog:** [blogs.drix10.com](https://blogs.drix10.com)
- **Portfolio:** [drix10.com](https://drix10.com)
- **GitHub:** [github.com/Drix10](https://github.com/Drix10)
- **LinkedIn:** [linkedin.com/in/drix10](https://www.linkedin.com/in/drix10)
- **X:** [@DrishtantGhosh](https://x.com/DrishtantGhosh)
- **Email:** [ggdrishtant@gmail.com](mailto:ggdrishtant@gmail.com)
