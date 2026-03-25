---
title: Post-Quantum Cryptography (PQC)
tags: Cryptography, QuantumComputing, FutureProofing
---

# Post-Quantum Cryptography

Fixing the locks before the master key is built.

**Post-Quantum Cryptography (PQC)** refers to the development of new mathematical [[encryption|encryption]] methods that are secure against both classical computers and the future threat of **[[shors-algorithm|Quantum Computers]]**.

Currently, almost all internet security (RSA and ECC) can be broken by a large-scale quantum computer. PQC is the "patch" for the entire internet's plumbing.

## The Quantum Threat
Quantum computers use "[[qubits|Qubits]]" to perform calculations that are impossible for normal computers. **[[shors-algorithm|Shor's Algorithm]]** is a specific quantum recipe that can break the math behind our current [[asymmetric-encryption|Asymmetric Encryption]].

If a powerful quantum computer is built tomorrow, every bank account, government secret, and private message sent over the last 30 years could be unlocked.

## PQC Strategies (The New Math)
Since quantum computers are great at factoring numbers ([[rsa|RSA]]) and solving "discrete logs" ([[ecc|ECC]]), we need math problems that *don't* involve those. 

1.  **Lattice-based Cryptography:** Hiding data inside a massive, multi-dimensional grid of points. This is currently the most promising candidate.
2.  **Hash-based Signatures:** Using one-way mathematical "hashes" (like fingerprints) to verify identity.
3.  **Code-based Cryptography:** Based on error-correcting codes.

## The Race: NIST Standardization
The US National Institute of Standards and Technology (NIST) has been running a global competition since 2016 to pick the winners of the "Quantum-Safe" era.
*   **Current Winners:** Algorithms like **CRYSTALS-Kyber** (for encryption) and **CRYSTALS-Dilithium** (for signatures) are being rolled out globally (e.g., in Google Chrome and Cloudflare).

## FAQs

*1. Is this the same as "Quantum Cryptography"?*
No. 
*   **Quantum Cryptography (QKD):** Uses actual quantum physics (lasers and photons) to send secrets. Requires expensive hardware.
*   **Post-Quantum Cryptography:** Uses normal math that runs on your current phone/laptop, but is *designed* to be too hard for quantum computers to solve.

*2. Why do we need it now if quantum computers aren't ready?*
Because of **"Store Now, Decrypt Later"**. Attackers are currently stealing and storing encrypted government and corporate data today, hoping to use a quantum computer to unlock it 10 years from now. We need safe [[encryption|encryption]] *today* to protect the future.

### Further Reading

*   **Website:** *[NIST Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography)*
*   **Video:** *[The Quantum Apocalypse (Post-Quantum Cryptography)](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)*
