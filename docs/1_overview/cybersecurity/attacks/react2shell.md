---
title: React2Shell
tags: CyberSecurity, CyberAttack, VulnerabilityManagement
---

# React2Shell

A critical security flaw in React that lets hackers trick a server into running dangerous shell commands just by sending a fake web request.

**React2Shell** (technically known as *[[CVE]]-2025-55182*) is a massive security vulnerability discovered in 3rd December 2025 affecting **React Server Components**.

It happens because of a mistake in how the server processes (or "deserializes") data sent from a user. If a hacker sends a specially crafted message, the server doesn't just read the message, it mistakenly **executes** it as code. This gives the attacker full control over the server (Remote Code Execution), allowing them to steal data or install [[malware|malware]] without even needing a password.

## FAQs

*1. Technical Details (For Developers)*
* **CVE ID:** CVE-2025-55182
* **Severity:** Critical (10/10)
* **Affected Tech:** React Server Components (RSC), Next.js (versions using RSC).
* **Mechanism:** The vulnerability exists in the `react-server-dom-webpack` (and similar) packages. It abuses the `resolve` logic in the Flight protocol deserializer. By manipulating the prototype chain (`__proto__`), an attacker can trigger the execution of arbitrary code via gadgets present in the runtime.

*2. How do I fix it?*

If you are a developer, you must patch immediately:
1.  **Update React/Next.js:** Upgrade to the latest patched versions (released Dec 2025).
2.  **Sanitize Inputs:** Ensure your WAF (Web Application Firewall) is blocking requests with suspicious serialized payloads.
3.  **Audit Logs:** Check server logs for strange outgoing shell commands.

### Further Reading

* **Official Advisory:** *[Google Cloud Blog: Multiple Threat Actors Exploit React2Shell](https://cloud.google.com/blog/topics/threat-intelligence/threat-actors-exploit-react2shell-cve-2025-55182)*
* **Technical Breakdown:** *[Sophos Analysis on React Server Components Deserialization](https://www.sophos.com/en-us/blog/react2shell-flaw-cve-2025-55182-exploited-for-remote-code-execution)*
* **Check your app:** Use tools like `react2shell-scanner` (from trusted sources like [Assetnote](https://github.com/assetnote/react2shell-scanner)) to see if you are vulnerable.
