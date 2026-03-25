---
title: Symmetric Encryption
tags: Cryptography, Security, AES
---

# Symmetric [[encryption|Encryption]]

One key to rule them all.

**Symmetric [[encryption|Encryption]]** is a method of [[encryption|encryption]] where the *same* secret key is used both to encrypt (lock) the data and decrypt (unlock) it. It is the oldest and simplest form of cryptography.

Think of it like a **House Key**.
*   You use the key to lock the front door when you leave.
*   You use the same key to unlock the front door when you return.
*   If you want a friend to get in, you have to give them a copy of that exact same key.

## The Pros and Cons

| Feature | Description |
| :--- | :--- |
| **Speed** | Extremely fast. Modern computers can encrypt gigabytes of data in seconds. |
| **Efficiency** | Requires very little computing power. |
| **The Key Problem** | If you need to send a secret to someone far away, you must first find a way to get the key to them without a spy stealing it. |

## Famous Examples
*   **[[aes-256|AES (Advanced [[encryption|Encryption]] Standard)]]**: The world standard for securing data at rest (hard drives, databases).
*   **Caesar Cipher**: The ancient (and very weak) method of shifting letters by a certain number.

## FAQs

*1. When should I use it?*
Use it for "Storage." If you are encrypting your own [[hard-drive|hard drive]] or phone, you are the only one who needs the key, so there is no "sharing" problem.

*2. How is the key sharing problem solved?*
On the internet, we usually use **[[asymmetric-encryption|Asymmetric Encryption]]** just to safely send a symmetric key to the other person. Once both sides have the key, they switch to Symmetric [[encryption|encryption]] for the rest of the conversation because it is faster.

### Further Reading

*   **Video:** *[Symmetric vs Asymmetric Encryption](https://www.youtube.com/watch?v=ERp842ooXls)*
*   **Concept:** *[Diffie-Hellman Key Exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)* (The math trick used to share keys).
