---
title: Antivirus
tags: CyberSecurity, Defense, Tools
---

# Antivirus

The immune system of your computer.

**Antivirus** (AV) is software that runs in the background, scanning files and programs to detect, block, and remove malicious software ([[malware|Malware]]).

It works like a bouncer at a club checking IDs against a "Banned List." If a file looks like a known troublemaker, it doesn't get in.

## How it Detects Threats

1.  **Signature Based (The Mugshot):** It compares every file on your PC to a massive database of verified [[virus|virus]] "signatures" (hashes). If it matches, it's deleted. *Weakness: Can't catch brand new viruses.*
2.  **Heuristic / Behavioral (The Profiler):** It watches what a program *does*. If a Notepad file suddenly tries to delete your System32 folder, the AV shouts "Hey! That's suspicious!" and kills it. *Strength: Catches unknown ([[zero-day|Zero-Day]]) threats.*

## FAQs

*1. Is Windows Defender enough?*
Nowadays? **Yes.**
Ten years ago, it was garbage. Today, Microsoft Defender is one of the top-rated AVs in the world because it sees data from billions of Windows PCs instantly.

*2. Do I need separate AV for Mac?*
It is recommended. Macs *can* get viruses, though they are less targeted than Windows.

### Further Reading

*   **Comparison:** *[AV-TEST Rankings](https://www.av-test.org/en/)* (Independent lab that tests all AVs).
*   **Article:** *[How Antivirus Software Works](https://us.norton.com/internet-security-malware-how-does-antivirus-software-work.html)*.
