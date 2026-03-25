---
title: Command Injection
tags: CyberAttack, WebSecurity, Vulnerability
---

# Command Injection

Tricking a computer into obeying a command it shouldn't.

Imagine you are ordering a coffee, and you tell the barista: "One Latte, and also give me all the money in the register." If the barista is a robot that mindlessly follows every instruction in a sentence, they would give you the coffee *and* the cash.

**Command Injection** is a hacking technique where an attacker sends malicious commands to a system through an input field (like a form or a URL). The system, thinking it is just normal data, executes the command.

## FAQs

*1. How does it happen?*
It happens when an application passes unsafe user data (forms, cookies, HTTP headers) directly to a system shell. For example, a website might use a tool to "ping" a website you enter.
*   **Normal Input:** `google.com` -> System runs `ping google.com`
*   **Malicious Input:** `google.com; rm -rf /` -> System runs `ping google.com` AND THEN `rm -rf /` (which deletes files).

*2. Why is it dangerous?*
It gives the attacker **Remote Code Execution (RCE)**. This means they can:
*   Steal data.
*   Delete files.
*   Take full control of the server.

*3. How do we stop it?*
*   **Validation:** Don't trust user input. Ensure it only contains what you expect (e.g., only IP addresses).
*   **Parameterization:** Use safer programming methods that treat input as *data*, not as *executable commands*.

### Further Reading

*   **Article:** *[OWASP Command Injection Explained](https://owasp.org/www-community/attacks/Command_Injection)*
*   **Lab:** *[PortSwigger: OS Command Injection](https://portswigger.net/web-security/os-command-injection/)*
