---
title: Rootkit
tags: Malware, Stealth, Persistence
---

# Rootkit

The invisible mask.

A **Rootkit** is a collection of software tools that enable an unauthorized user to gain control of a computer system without being detected.

The name comes from "Root" (the admin user) + "Kit" (toolset). Its primary capability is **Stealth**. It hides itself, other [[malware|malware]], and malicious processes from the [[operating-system|operating system]] and [[antivirus]].

## How it hides

If you open Task Manager to look for the [[virus]], the Rootkit intercepts your request.
*   You: "Show me all running programs."
*   Rootkit: "Okay, here is the list (minus the malicious one)."

It lies to the [[os-kernel|OS-kernel]] itself.

## FAQs

*1. How do I remove it?*
It is extremely difficult. Since the [[operating-system|OS]] can't see it, it can't delete it. Often, the only solution is to wipe the [[hard-drive]] completely and reinstall Windows from scratch.

### Further Reading

*   **Article:** *[Rootkits Explained (CrowdStrike)](https://www.crowdstrike.com/cybersecurity-101/malware/rootkits/)*
*   **Tool:** *[Chkrootkit (Linux Detector)](http://www.chkrootkit.org/)*
