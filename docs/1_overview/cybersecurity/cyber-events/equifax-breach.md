---
title: Equifax Data Breach
tags: DataBreach, CyberSecurityEvent
---

# Equifax Data Breach

The Equifax data breach is like leaving the master key to a giant bank vault sitting on the front doormat for months, allowing thieves to quietly walk in and photograph everyone's financial records without waking the guards.

**Equifax Data Breach** was a catastrophic 2017 cybersecurity incident where attackers accessed the highly sensitive personal data of nearly 150 million people due to unpatched software.

Equifax is a massive credit reporting agency that holds incredibly detailed financial profiles on citizens. In 2017, they failed to install a necessary software fix (a "patch") for a known vulnerability in their web application framework.

This oversight left a door wide open. Attackers used this known flaw to stroll right into Equifax's internal servers. Because of an expired security certificate on Equifax's end, the internal alarm systems failed to trigger, meaning the attackers could quietly siphon off millions of names, addresses, Social Security numbers, and birth dates for more than two months entirely undetected. 

## Key Failures in the Breach

*   **Missing Patches:** Equifax failed to apply a well-known security patch for Apache Struts that had been available months before the attack.
*   **Expired Certificates:** Internal monitoring tools that were supposed to detect anomalous data movement were broken because a critical SSL certificate had lapsed.
*   **Lateral Movement:** Once inside, attackers were able to navigate freely from server to server and database to database without being stopped.

## FAQs

*1. Was my credit card stolen in the Equifax breach?*
While some credit cards (about 209,000) were exposed, the real danger was the theft of Social Security numbers and birth dates, which attackers can use to open entirely new fraudulent accounts in your name.

*2. How could a massive financial company let this happen?*
It largely boiled down to basic IT mismanagement. Failing to update software in a timely manner and letting simple security certificates expire created a cascading failure that left the network defenseless.

### Further Reading

*   **Analysis:** *[The Equifax Hack: What Happened](https://breachsense.com/equifax-data-breach/)* (A thorough look at the timeline and technical failures leading to the breach).
*   **Report:** *[Federal Trade Commission Equifax Settlement](https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement)* (Official details on the legal settlement and compensation for consumers).
