---
title: CVSS (Common Vulnerability Scoring System)
tags: CyberSecurity, VulnerabilityManagement, Metrics
---

# CVSS

A credit score for security bugs.

When a new security hole (vulnerability) is found, security teams need to know: "Should we panic now, or can we fix this next week?" **CVSS** provides a number from **0.0 to 10.0** to answer that question.

## The Scorecard

| Score Range | Severity | Meaning |
| :--- | :--- | :--- |
| **0.0** | None | No risk. |
| **0.1 - 3.9** | Low | Hard to exploit, or very little impact. |
| **4.0 - 6.9** | Medium | Needs fixing, but requires specific conditions to work. |
| **7.0 - 8.9** | High | Dangerous. Hackers can likely use this to harm the system. |
| **9.0 - 10.0** | Critical | **Drop everything.** The door is wide open for attackers. |

## FAQs

*1. How is the score calculated?*
It looks at three main things (The "CIA Triad" impact + Exploitability):
*   **Exploitability:** How easy is it? (Can a kid do it, or do you need a [[supercomputer|supercomputer]]?)
*   **Impact:** What gets hurt? Confidentiality (secrets stolen), Integrity (data changed), or Availability (system crashes).
*   **Privileges:** Do you need a login to do it, or can a stranger do it from the internet?

*2. Is a 10.0 always worse than a 7.0?*
Technically, yes. But context matters. A "Critical 10.0" bug on a server that isn't connected to the internet might be less urgent than a "High 8.0" bug on your public website.

### Further Reading

*   **Tool:** *[CVSS Calculator](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator)* (Try creating your own score).
*   **Reference:** *[First.org CVSS Specification](https://www.first.org/cvss/)*
