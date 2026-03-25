---
title: SSH (Secure Shell)
tags: Networking, Tools, Encryption
---

# SSH

A secure, secret tunnel to a remote computer.

**SSH** (Secure Shell) is a tool that lets you control a computer completely different from the one you are sitting at. It creates a cryptographic tunnel over the internet so that no one can spy on what commands you are sending or what passwords you are typing.

It is the standard way developers and system administrators manage servers.

## How it Works

1.  **The Handshake:** Your computer and the server verify each other's identity.
2.  **The Tunnel:** They create an encrypted connection (like a lead pipe) that is transparent to you but opaque to hackers.
3.  **The Shell:** You get a command prompt on your screen, but the commands actually run on the *remote* server.

## Login Methods

*   **Password:** You type a password. (Simple, but can be guessed).
*   **SSH Keys (Better):** You have a unique digital "Key Card" (a file on your laptop). The server has the matching "Lock." You just show up, the lock opens, and you get in without typing a password. It is much harder to steal a file than to guess a password.

## FAQs

*1. Is SSH only for Linux?*
Historically, yes. But now Windows 10/11 has it built-in too! You can open PowerShell and type `ssh user@server` right now.

*2. What is the difference between SSH and VPN?*
*   **VPN:** Connects your *entire* computer to a private network (like moving your house to a different street). Everything you do goes through it.
*   **SSH:** connects a single *terminal window* to a specific server to run commands.

### Further Reading

*   **Tutorial:** *[DigitalOcean's SSH Essentials](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)*
*   **Visual Guide:** *[How SSH Public Key Authentication Works](https://www.youtube.com/watch?v=dPAw4opzN9g)* (Video)
