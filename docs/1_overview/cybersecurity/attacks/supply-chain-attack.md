---
title: Supply Chain Attack
tags: CyberSecurity, CyberAttack, SupplyChainAttack
---

# Supply Chain Attack

A **Supply Chain Attack** is a cyberattack where a hacker targets a company's *vendors* or *suppliers* rather than the company itself. 

Instead of trying to hack your highly secure computer, the attacker secretly infects a piece of software (like an update), hardware (like a microchip), or a service that you trust and use every day. Because you "trust" the supplier, your security systems let the infection in without checking it, giving the hacker a free ride into your network.

## How it Works

To understand this, we must look at **Trust Transitivity**:

| Principle | Explanation | The Vulnerability |
| :--- | :--- | :--- |
| **Interconnectedness** | No company builds everything alone. We use code, chips, and apps from others. | You inherit the security flaws of everyone you work with. |
| **Implicit Trust** | We assume "Official Updates" or "Brand New Hardware" are safe. | Hackers abuse this trust to bypass scanning tools. |
| **The Weakest Link** | A hacker will always attack the easiest target. | Why spend 100 days hacking Google when you can hack the small company that makes Google's office thermostats? |

---
<br>

## Types of Breaches (The "Vectors")

Supply chain attacks aren't just one thing; they come in different "flavors" depending on what part of the chain is broken:

| Type | How it works | Famous Example |
| :--- | :--- | :--- |
| **Software (Upstream)** | The hacker infects the *code* or *update server* of a software vendor. Every customer who downloads the "update" gets infected. | **SolarWinds (2020):** Hackers hid [[malware]] in a legitimate IT management tool update. |
| **Hardware** | The hacker tampers with physical components (chips, firmware, USBs) at the factory or during shipping before they reach you. | **Spy Chips:** Allegations of tiny spy chips added to server motherboards during manufacturing. |
| **Open Source** | The hacker uploads a malicious package to a public code library (like npm or PyPI) with a name similar to a popular tool, hoping developers accidentally use it. | **Typosquatting:** Creating a package named `requessts` instead of `requests`. |

---
<br>

## Further Reading

* **Case Study:** *[The SolarWinds Orion Hack](https://www.techtarget.com/whatis/feature/SolarWinds-hack-explained-Everything-you-need-to-know)* (The most famous example).
* **Concept:** *[Target Data Breach (2013)](https://redriver.com/security/target-data-breach)* (Happened because of a hacked HVAC/Air Conditioning vendor).
* **Deep Dive:** NIST's *"[Defending Against Software Supply Chain Attacks](https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508.pdf)".*
