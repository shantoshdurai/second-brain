---
title: LOIC (Low Orbit Ion Cannon)
tags: CyberSecurity, AttackTool, DDoS, Hacktivism, ScriptKiddie
---

# LOIC (Low Orbit Ion Cannon)

The digital battering ram.

**LOIC (Low Orbit Ion Cannon)** is an open-source network stress testing and [[ddos|[[ddos|DDoS]] (Distributed Denial of Service)]] attack tool. It is famous for its extreme simplicity: it features a big "Fire" button that floods a target website with so much junk traffic that the site crashes and becomes unavailable to everyone else.

It is the weapon of choice for [[script-kiddies|Script Kiddies]] and amateur hacktivist groups (like Anonymous) because it requires almost zero technical knowledge to use.

## How it Works

LOIC doesn't use any fancy exploits or "magic" code. It uses brute force:

*   **TCP/UDP Flooding:** It sends thousands of requests per second to a target IP address.
*   **The "Hive Mind":** A single person running LOIC is annoying but rarely crashes a major site. However, LOIC has a "IRC" mode where a central leader can control thousands of "volunteer" computers at once. When thousands of people press "Fire" at the same moment, it creates a massive digital tidal wave that can knock almost any server offline.

## The Risks of Using It

LOIC is notoriously "noisy" and dangerous for the attacker:

1.  **No Anonymity:** Unlike advanced tools, LOIC does nothing to hide your IP address. It's like throwing a brick through a window while holding up your ID card. It is very easy for ISPs and law enforcement to trace the attack back to the user's home.
2.  **Illegal Activity:** Engaging in a [[ddos|DDoS]] attack, even for "protest" reasons, is a felony in most countries (like the Computer Fraud and Abuse Act in the US).

## FAQs

*1. Is there a "High Orbit" version?*
Yes, there is a successor called **HOIC (High Orbit Ion Cannon)**. It is much more powerful and designed to bypass some basic [[ddos|DDoS]] protections that caught the original LOIC.

*2. Can simple [[firewalls|firewalls]] stop it?*
Standard [[firewalls|firewalls]] struggle with LOIC because the traffic looks like "normal" (but extremely fast) requests. Most modern websites use specialized services like Cloudflare to filter out this flood before it hits their servers.

### Further Reading

*   **History:** *[The Story of Anonymous and LOIC](https://web.archive.org/web/20101211115852/https://www.theguardian.com/technology/2010/dec/08/anonymous-low-orbit-ion-cannon)* - How a tool was used for global digital protest.
*   **Technical:** *[How [[ddos|DDoS]] Protection Works](https://www.cloudflare.com/learning/ddos/ddos-mitigation/)* - How modern sites survive LOIC attacks.
