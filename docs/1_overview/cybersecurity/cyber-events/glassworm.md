---
title: GlassWorm
tags: CyberSecurity, CyberAttack, VulnerabilityManagement
---

# GlassWorm

An "invisible" [[virus|computer virus]] that hides inside the code developers write, spreading automatically by stealing their work passwords.

It is a highly advanced piece of [[malware|malware]] discovered on October 17, 2025 that targets software developers.

It specifically infects **Visual Studio Code (VS Code) extensions**, the little add-ons programmers use to make coding easier. What makes it terrifying is that the malicious code is written using **invisible characters**. A programmer can look directly at the infected file, and it will look like an empty line or normal whitespace, but the computer reads it as dangerous instructions.

Once inside a developer's computer, it steals their credentials (passwords for publishing code) to automatically infect *other* projects, spreading like a worm through the software supply chain.

## FAQs

*1. Why can't we just delete the hacker's server?*
GlassWorm is unique because it uses **Blockchain Command & Control (C2)**.
Usually, [[malware|malware]] connects to a specific website (e.g., `hacker-site.com`). If the police seize that website, the [[malware|malware]] dies.
GlassWorm instead looks at public transactions on the **Solana Cryptocurrency Blockchain**. The hacker sends a transaction with a "memo" containing instructions. Since no one can delete a transaction from a blockchain, the "server" can never be taken down.

*2. What is the "ZOMBI" Module?*
Once fully installed, GlassWorm deploys a payload often called the **ZOMBI module**. This turns the developer's high-powered computer into a proxy. Hackers can then route their own internet traffic through the developer's computer to attack *other* targets, making it look like the innocent developer did it.

### Further Reading

* **The Original Discovery:** Search for *["Koi Security GlassWorm Report October 2025"](https://www.koi.ai/blog/glassworm-returns-new-wave-openvsx-malware-expose-attacker-infrastructure)*.
* **The Technique:** Read about *"[Trojan Source Attacks](https://trojansource.codes/)"* (CVE-2021-42574) to understand how invisible characters work in code.
* **The Defense:** Look up *"[VS Code Restricted Mode](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_extension-recommendations)"* and how to audit your extensions.
