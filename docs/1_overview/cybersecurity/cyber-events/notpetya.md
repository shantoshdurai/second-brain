---
title: NotPetya
tags: CyberSecurity, Malware, Wiper
---

# NotPetya

A disguised assassin pretending to be a kidnapper.

**NotPetya** (2017) was a devastating cyberattack that looked like [[ransomware|Ransomware]] but was actually a **[[wipers|Wiper]]**.

[[ransomware|Ransomware]] locks your files and asks for money to unlock them. NotPetya locked the files, asked for money, but **deleted the key**. Even if you paid, you could never get your data back. Its goal wasn't money; it was pure destruction.

## The Target

It was a targeted attack against **Ukraine** by Russian military hackers (Sandworm).
*   They hacked a popular Ukrainian accounting software (**M.E.Doc**) that every business used to pay taxes.
*   They pushed a malicious \"Update\" to everyone.
*   Boom. Banks, airports, and power companies in Ukraine went dark.
*   *Collateral Damage:* It spread globally (via [[eternalblue|EternalBlue]]), costing companies like Maersk and FedEx over **$10 billion**.

## FAQs

*1. Why call it \"NotPetya\"?*
When it first appeared, it looked exactly like an older criminal [[ransomware|ransomware]] called \"Petya.\" Security researchers said, \"Oh, it's Petya again.\"
Then they realized the code was different and purely destructive. So they named it \"Not-Petya.\"

*2. What did we learn?*
It showed the danger of **[[supply-chain-attack|Supply Chain Attacks]]**. You can have the best [[firewalls|firewall]] in the world, but if the software you *trust* (like your accounting app) sends you a [[virus|virus]], you let it right in.

### Further Reading

*   **Deep Dive:** *[The Untold Story of NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)* (Wired Article - A Must Read).
*   **Analysis:** *[Difference between Petya and NotPetya](https://www.kaspersky.com/resource-center/definitions/petya-notpetya)*.
