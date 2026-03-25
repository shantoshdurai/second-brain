---
title: ATM Jackpotting
tags: CyberSecurity, Malware, PhysicalSecurity, Finance
---

# ATM Jackpotting

The merging of digital [[malware|malware]] and physical crime, where hackers compromise an ATM's software to force it to rapidly dispense all of its physical cash.

**ATM Jackpotting** is an attack vector where criminals gain unauthorized access to an Automated Teller Machine; often by picking a lock or drilling a hole to access the internal USB ports or network cables; and then install specialized [[malware]] or attach a "black box" (a rogue computer). 

Once the machine's software layer is compromised, the attackers can bypass standard banking networks and send a manual command straight to the cash dispenser, causing the ATM to literally spit out its entire cash reserve in minutes, akin to hitting the jackpot on a slot machine.

## The Threat Landscape

Jackpotting requires a high degree of coordination, as it merges physical break-ins with sophisticated software exploitation. Because attackers are manipulating the hardware/software directly, no stolen debit cards or PINs are required.

*   **Surging Incident Rates:** In 2025 alone, the FBI reported over 700 distinct "ATM Jackpotting" incidents in the United States, allowing coordinated theft rings to net over $20 million USD.
*   **The Cartel Connection:** The barrier to entry for digital crime is lowering. Organized physical crime rings, such as Mexican drug cartels, have increasingly embraced cyber-physical attack vectors like jackpotting and drone surveillance to modernize their operations and secure rapid funding.

## Defenses against Jackpotting

To stop ATM jackpotting, banks must secure both the physical hardware and the internal software:
1.  **Physical Hardening:** Upgrading ATM chassis to prevent easy access to internal ports.
2.  **Firmware [[encryption|Encryption]]:** Ensuring that the cash dispenser will simply shut down if it receives an unencrypted or unauthenticated command from an unrecognizable internal computer.
3.  **Network Segmentation:** Preventing ATMs from communicating broadly, limiting their data flow strictly to the core banking servers.

### Further Reading

*   **Related Concept:** *[[malware|Malware]]*
*   **Related Concept:** *[[ransomware|Ransomware]]*
