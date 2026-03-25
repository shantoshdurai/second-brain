---
title: EternalBlue
tags: CyberSecurity, Exploit, NSA
---

# EternalBlue

The master key stolen from the spy agency.

**EternalBlue** is a sophisticated software exploit created by the **NSA** (US National Security Agency) that allowed them to break into almost any Windows computer in the world undetected.

It was a cyber-weapon kept secret for years until 2017, when a hacker group called \"The Shadow Brokers\" stole it and released it to the public. Suddenly, every criminal in the world had a military-grade weapon to attack Windows PCs.

## How it Works

It attacked the **SMB Protocol** (File Sharing).
*   **The Flaw:** Windows computers \"talk\" to each other to share printers and files using SMB.
*   **The Exploit:** EternalBlue sent a specially crafted packet that confused this listener, allowing the attacker to run *any* code they wanted on the target machine without a password.

## FAQs

*1. Why was it so dangerous?*
Because it was **Wormable**. This means if *one* computer in an office got infected, EternalBlue automatically used that computer to attack *every other* computer on the network looking for the same flaw. It spread like a biological [[virus|virus]] in a crowded room.

*2. Is it still a threat?*
Microsoft fixed (patched) the hole in 2017 (MS17-010). If you update your computer, you are safe. But millions of old, unpatched computers (in hospitals and factories) are still vulnerable today.

### Further Reading

*   **Story:** *[The Shadow Brokers Leak](https://www.wired.com/story/eternalblue-leaked-nsa-spy-tool-hacker-history/)* (How the weapon got out).
*   **Technical:** *[MS17-010 Security Update](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)* (The official fix).
