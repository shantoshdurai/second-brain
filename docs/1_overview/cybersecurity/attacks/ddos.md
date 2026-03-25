---
title: DDoS
tags: Cybersecurity, Networking, Attacks
---

# DDoS (Distributed Denial of Service)

The Digital Traffic Jam.

**A DDoS Attack** is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target with a flood of Internet traffic.

Think of a **Shop Door**.
*   **Normal Traffic:** Customers enter and exit one by one. The shop runs smoothly.
*   **DoS (Denial of Service):** One big guy stands in the doorway, blocking anyone else from entering.
*   **DDoS (Distributed):** The bad guy pays 1,000 random people (a Botnet) to crowd the doorway at the exact same time. Real customers physically cannot get in because the crowd is too dense.
The shop isn't "broken" or "robbed"; it just can't serve anyone.

## How it Works

1.  **The Mastermind:** The attacker wants to shut down a site (e.g., a bank or game server).
2.  **The Army (Botnet):** The attacker secretly infects thousands of computers (IoT devices, laptops) with [[malware|malware]], turning them into "zombie" soldiers.
3.  **The Attack:** On command, all 50,000 zombie computers try to visit the victim's website simultaneously.
4.  **The Crash:** The website's server gets overloaded (CPU maxes out, bandwidth runs dry) and stops responding to *everyone*, including real users.

## FAQs

*1. Is my computer part of a DDoS?*
Possibly. If your computer is infected with [[malware|malware]] (part of a Botnet), it could be attacking a website right now without you knowing, running silently in the background.

*2. How do you stop it?*
It's hard. You can't just "block the bad guy" because the traffic is coming from 50,000 different real IP addresses. You usually need a "Traffic Filter" (like Cloudflare) that stands in front of your shop and checks IDs, letting vast crowds be filtered out.

### Further Reading

*   **Article:** *[What is a DDoS Attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)* (Cloudflare's definition).
*   **Video:** *[DDoS Attacks Explained in 2 minutes](https://youtu.be/Rt4rna2LBZE)*.
