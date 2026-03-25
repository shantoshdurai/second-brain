---
title: Morris Worm
tags: Malware, Worm, CyberSecurityHistory
---

# Morris Worm

The Morris Worm is like a census worker who knocks on every door in a neighborhood, but due to a misunderstanding, he ends up knocking on the same doors thousands of times until the entire street is in gridlock.

**Morris Worm** is one of the first computer [[worms|worms]] distributed via the early internet in 1988, which self-replicated and accidentally crippled thousands of computers.

Created by university student Robert Tappan Morris to gauge the size of the internet (ARPANET), the program had a fatal mathematical flaw. Rather than just checking into a machine and moving on, it kept checking in. 

Imagine our aggressive census worker who refuses to believe you've already answered his questions, deciding to forcefully ask you again and again. Computers infected by the worm were bombarded with multiple copies of the program, completely consuming their memory and processing power until they crashed. It exploited known vulnerabilities in popular UNIX services to sneak into the systems.

## How it Worked

*   **Exploitation:** It targeted weaknesses in standard network services like `sendmail`, `finger`, and `rsh/rexec`.
*   **Password Guessing:** It tried to crack weak or obvious user passwords to gain further access.
*   **Flawed Replication:** It was designed to copy itself around the network, but a coding error caused it to re-infect machines repeatedly.

## FAQs

*1. What was the motive behind the Morris Worm?*
It wasn't meant to be destructive. The creator originally intended it as an intellectual experiment to measure how vast the internet was at the time.

*2. Why is the Morris Worm so famous?*
It was the first major [[malware|malware]] to garner widespread media attention, affecting about 10% of the internet at the time. It completely changed how the world viewed cybersecurity and led to the first criminal conviction for computer fraud in the US.

### Further Reading

*   **Article:** *[The Morris Worm, 30 Years Later](https://www.fbi.gov/news/stories/morris-worm-30-years-since-first-major-attack-on-internet-110218)* (An excellent overview by the FBI on the historical impact of the worm).
*   **Blog Post:** *[The Morris Worm: How it changed cybersecurity forever](https://www.radware.com/security/trends-and-insights/morris-worm/)* (Explores the technical flaws and the enduring legacy of this early cyber incident).
