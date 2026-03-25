---
title: RSA (Rivest-Shamir-Adleman)
tags: Cryptography, AsymmetricEncryption, Math
---

# RSA

The math of very large prime numbers.

**RSA** is the world's first and most famous [[asymmetric-encryption|Asymmetric Encryption]] algorithm. Created in 1977, it remains the foundation for much of the internet's security, including digital signatures and email [[encryption|encryption]].

## How it Works: The Prime number trapdoor
The security of RSA relies on one simple mathematical fact: **it is very easy to multiply two large prime numbers together, but extremely hard for a computer to do the reverse (factoring).**

Imagine you have two massive prime numbers, `P` and `Q`.
*   **The Easy Direction:** Multiply `P * Q` to get `N`. (A calculator does this in a millisecond).
*   **The Hard Direction (The Trapdoor):** Give a computer the number `N` and ask it to find `P` and `Q`. If `N` is huge (e.g., 2048 bits long), even a [[supercomputer|supercomputer]] would take billions of years to guess the answer.

## The Keys
*   **Public Key:** Shared with the world. It contains the number `N`. Anyone can use this to encrypt a message for you.
*   **Private Key:** Kept secret by you. It contains the original prime numbers `P` and `Q`. Because only you know the "ingredients," only you can undo the math to read the message.

## FAQs

*1. Is it secure?*
Yes, but only if the keys are long enough. Today, 1024-bit RSA is considered weak. The industry standard is **2048-bit** or **4096-bit**.

*2. What is the "Quantum Threat" to RSA?*
RSA is the primary target of **[[shors-algorithm|Shor's Algorithm]]**. A large-scale quantum computer could factor the prime numbers in hours, rendering all RSA [[encryption|encryption]] useless. This is why the world is moving toward **[[post-quantum-cryptography|Post-Quantum Cryptography]]**.

### Further Reading

*   **Video:** *[RSA [[encryption|Encryption]] (Computerphile)](https://www.youtube.com/watch?v=M7kEpw1tn50)*
*   **Article:** *[How RSA works](https://en.wikipedia.org/wiki/RSA_(cryptosystem))*
