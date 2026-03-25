---
title: Shor's Algorithm
tags: CyberSecurity, QuantumComputing, Threats
---

# Shor's Algorithm

The doomsday clock for internet privacy.

**Shor's Algorithm** is a quantum math formula that can break the [[encryption|encryption]] protecting the entire internet.

Currently, our security (RSA Encryption) relies on the fact that computers are really bad at factoring massive numbers. It would take a [[supercomputer|supercomputer]] millions of years to guess the factors.
**Peter Shor** proved that a **[[quantum-computing|Quantum Computer]]** running his algorithm could do it in *hours*.

## The Hook

Imagine a lock that requires you to guess a number between 1 and Infinity.
*   **Classic Computer:** Guesses 1, then 2, then 3... (Takes forever).
*   **Shor's Algorithm:** Guesses *all numbers at once* and finds the pattern that leads to the answer.

## FAQs

*1. Why hasn't the internet crashed yet?*
Because we don't have a Quantum Computer big enough to run it. Yet.
We are currently in the "[[nisq|NISQ]]" era (Noisy Intermediate-Scale Quantum). We need thousands of perfect [[qubits|Qubits]] to break RSA. We currently have hundreds of noisy ones.

*2. What are we doing about it?*
The world is racing to switch to **Post-Quantum Cryptography (PQC)**. These are new math problems (like Lattice-based cryptography) that even quantum computers can't solve easily. NIST is currently standardizing them.

### Further Reading

*   **Video:** *[How Quantum Computers Break [[encryption|Encryption]] (Veritasium)](https://www.youtube.com/watch?v=lvTqbM5Dq4Q)*.
*   **Standard:** *[NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)*.
