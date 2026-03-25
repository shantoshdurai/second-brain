---
title: Asymmetric Encryption (Public Key Cryptography)
tags: Cryptography, Security, Web, TLS
---

# Asymmetric [[encryption|Encryption]]

The mailbox of the digital world.

**Asymmetric [[encryption|Encryption]]** (also called Public Key Cryptography) uses a pair of mathematically related keys: a **Public Key** and a **Private Key**. 

Think of it like a **Mailbox**.
*   **Public Key (The Slot):** Anyone can walk up to your mailbox and drop a letter in the slot. Everyone knows where the slot is.
*   **Private Key (The Key):** Only the owner of the mailbox has the physical key to open the back and read the letters.
*   Even if the person who dropped the letter in the slot changes their mind, they cannot get it back out. Only the holder of the Private Key can access the contents.

## How it Works

1.  **You generate two keys:** One you keep secret (Private), and one you give to everyone (Public).
2.  **Sender:** Someone wants to send you a secret. They look up your Public Key and use it to scramble their message.
3.  **Receiver:** You receive the scrambled mess. You use your Private Key to unscramble it.
4.  **The Magic:** Even though the Public Key *locked* the message, it cannot *unlock* it. Only the Private Key can.

## Why it's Important
It solves the **Key Exchange Problem**. You don't have to meet someone in a dark alley to share a secret password. You can post your Public Key on your website, and anyone can safely send you data.

## Famous Examples
*   **[[rsa|RSA]]:** The oldest and most famous asymmetric algorithm.
*   **[[ecc|ECC (Elliptic Curve Cryptography)]]:** A newer, more efficient method used for SSL/TLS (HTTPS) on almost every website.

## FAQs

*1. Is it slower than Symmetric?*
Yes, much slower. The math is much more complex. This is why it is rarely used to encrypt large files. Instead, it is used to encrypt a small "Session Key" which is then used for [[symmetric-encryption|Symmetric Encryption]].

*2. What is a Digital Signature?*
It's Asymmetric [[encryption|encryption]] in reverse. You "lock" a message with your *Private* key. If someone can unlock it with your *Public* key, they know for 100% certainty that it came from you and hasn't been changed.

### Further Reading

*   **Video:** *[Public Key Cryptography: RSA Encryption](https://www.youtube.com/watch?v=vgTtMqs66_A)*
*   **Article:** *[How SSL/TLS works](https://www.cloudflare.com/learning/ssl/what-is-ssl/)*
