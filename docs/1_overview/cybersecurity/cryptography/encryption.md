---
title: Encryption
tags: Security, Cryptography, Privacy
---

# Encryption

Putting your secret message in a locked safe.

**Encryption** is the process of scrambling readable key text ("plaintext") into unreadable nonsense ("ciphertext") using a mathematical formula. Only someone with the correct **Key** can unscramble (decrypt) it back to normal.

## Types

1.  **Symmetric (The House Key):** The *same* key locks and unlocks the data. Fast, but you have to safely share the key.
2.  **Asymmetric (The Mailbox):** Two keys. A **Public Key** (anyone can use it to lock a message/put mail in) and a **Private Key** (only you have it to unlock/take mail out). This is how the Internet (HTTPS) works.

## FAQs

*1. Can hackers break it?*
Modern encryption (like [[aes-256|AES-256]]) is practically unbreakable by brute force. Hackers don't break the math; they steal the **Key** (or guess your password) to bypass the lock.

*2. What is End-to-End Encryption?*
It means the company (e.g., WhatsApp) cannot read your messages. The message is locked on your phone and only unlocked on your friend's phone.

### Further Reading

*   **Video:** *[Encryption as Fast As Possible](https://www.youtube.com/watch?v=r4i7-q2k2B4)*
*   **Article:** *[What is Encryption? (Cloudflare)](https://www.cloudflare.com/learning/ssl/what-is-encryption/)*
