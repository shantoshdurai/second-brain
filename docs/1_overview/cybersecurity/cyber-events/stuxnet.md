---
title: Stuxnet
tags: CyberSecurity, CyberEvent, Malware, ICS, Air-Gap
---

# Stuxnet

The digital spark that caused a physical fire.

**Stuxnet** is a extremely sophisticated malicious [[worms|computer worm]], first uncovered in 2010, that was specifically designed to sabotage Iran's nuclear program. It is widely considered the world's first "cyber-physical weapon"; a piece of code designed not just to steal data, but to reach out and physically destroy machinery.

Unlike most [[malware|malware]] that steals credit cards or locks files for ransom, Stuxnet was a precision-guided missile made of 1s and 0s.

## How it Works

Stuxnet was designed with a very specific "kill chain" to target the Natanz uranium enrichment facility:

1.  **Jumping the Air-Gap:** The facility was not connected to the internet (an "air-gap"). Stuxnet spread via infected USB sticks. When a worker plugged a stick into a target computer inside the facility, the worm jumped the gap.
2.  **The Hunt:** Once inside, it didn't do anything to normal PCs. It looked for a specific type of **PLC (Programmable Logic Controller)** made by Siemens that controlled the speed of uranium-enrichment centrifuges.
3.  **The Sabotage:** It took control of the centrifuges and forced them to spin at wildly fluctuating speeds; first dangerously fast, then dangerously slow. This physical stress caused the centrifuges to vibrate until they literally shattered.
4.  **The Camouflage:** While destroying the machines, Stuxnet "replayed" normal sensor data to the control room monitors. The operators saw everything as "perfectly normal" while their machines were actually tearing themselves apart.

## FAQs

*1. Who made it?*
While no one has officially claimed credit, the complexity of the code (utilizing four "Zero-Day" exploits) suggests a nation-state. Analysts generally point to a joint operation between the **US and Israel** (Operation Olympic Games).

*2. Why is it a "turning point" in history?*
Before Stuxnet, cyber-attacks were mostly about virtual damage (deleted files, downtime). Stuxnet proved that a hacker in one country could physically destroy a factory in another without ever firing a bullet or crossing a border.

### Further Reading

*   **Documentary:** *[Zero Days (2016)](https://www.imdb.com/title/tt5446124/)* - A comprehensive look at the discovery and impact of Stuxnet.
*   **Book:** *[Countdown to Zero Day](https://www.kimzetter.com/countdown-to-zero-day)* by Kim Zetter - The definitive investigative account of the worm.
*   **Technical:** *[Symantec's W32.Stuxnet Dossier](https://www.broadcom.com/support/security-center/publications/archive/whitepapers-reports/stuxnet-dossier)* (The original deep dive into the code).
