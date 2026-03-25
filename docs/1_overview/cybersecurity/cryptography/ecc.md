---
title: ECC (Elliptic Curve Cryptography)
tags: Cryptography, AsymmetricEncryption, Efficiency
---

# ECC (Elliptic Curve Cryptography)

Smaller keys, bigger security.

**ECC** is a modern form of [[asymmetric-encryption|Asymmetric Encryption]] that is faster and more efficient than older methods like [[rsa|RSA]]. It is the primary way your smartphone and web browser stay secure today.

## How it Works: Bouncing a ball on a curve
Instead of using massive prime numbers (like RSA), ECC uses the complex math of geographic curves.

Imagine a specific "Elliptic Curve" on a graph.
1.  **The Trapdoor:** You pick a starting point on the curve and "bounce" a digital ball around the curve a specific number of times (this number is your **Private Key**).
2.  **The Result:** The final landing spot of the ball is your **Public Key**.
3.  **The Problem:** For an observer, it is impossible to look at the final landing spot and figure out exactly how many "bounces" it took to get there. They would have to guess every possibility, which takes trillions of years.

## The Advantage: Size Matters
The biggest benefit of ECC is that it provides the same level of security as RSA but with **much smaller keys**.

| Security Level | RSA Key Size | ECC Key Size |
| :--- | :--- | :--- |
| Standard | 3072 bits | 256 bits |
| Maximum | 15360 bits | 512 bits |

Because the keys are smaller, they require less battery life, less storage, and less internet bandwidth. This is why ECC is the standard for mobile devices and the "Padlock" icon in your browser (HTTPS).

## FAQs

*1. Is ECC secure against Quantum Computers?*
No. Just like [[rsa|RSA]], ECC can be broken by **[[shors-algorithm|Shor's Algorithm]]**. While ECC is more efficient for today, the future will require **[[post-quantum-cryptography|Post-Quantum Cryptography]]**.

*2. Where else is ECC used?*
**Bitcoin** and other cryptocurrencies use ECC (specifically a curve called `secp256k1`) to generate wallet addresses and sign transactions.

### Further Reading

*   **Video:** *[Elliptic Curve Cryptography (Computerphile)](https://www.youtube.com/watch?v=NF1pwjL9-DE)*
*   **Article:** *[A Relatively Easy-to-Understand Guide to ECC](https://blog.cloudflare.com/ecc-quic-tls/)*
