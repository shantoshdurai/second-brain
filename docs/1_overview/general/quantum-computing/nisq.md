---
title: NISQ (Noisy Intermediate-Scale Quantum)
tags: Physics, Quantum, Hardware
---

# NISQ (Noisy Intermediate-Scale Quantum)

A NISQ computer is like a prototype race car; it runs at speeds unimaginable to ordinary vehicles, but parts frequently vibrate loose or break down during the drive. You can't rely on it for a cross-country road trip, but engineers use it for short, intense test laps to learn how to build the perfect car of the future.

**NISQ (Noisy Intermediate-Scale Quantum)** is the current era of [[quantum-computing|quantum computing]] development. Coined by physicist John Preskill in 2018, the acronym perfectly describes both the promise and the physical limitations of modern [[quantum-computing-revolution|Quantum Computers]].

Unlike your laptop, which is incredibly stable and rarely makes a basic math error, quantum computers operate using delicate subatomic principles. Because these systems are so sensitive, the slightest change in temperature, a stray electromagnetic wave, or even building vibrations can cause a qubit to suddenly lose its state; a phenomenon known as "decoherence."

## Breaking Down the Acronym

*   **Noisy:** The computers lack robust error-correction. When a qubit decoheres due to environmental interference, it introduces an error (noise) into the calculation. In classical computing, if a bit accidentally flips, other bits immediately detect and correct it. We don't yet have enough [[qubits|qubits]] to dedicate millions of them solely to error-checking.
*   **Intermediate-Scale:** Today's quantum processors contain anywhere from a few dozen to a few hundred [[qubits|qubits]]. This is "intermediate." It is large enough to perform calculations that classical [[supercomputer|Supercomputers]] cannot simulate, but it is far too small to run massive, world-changing algorithms (like Shor's Algorithm) entirely fault-free.

## Current Uses for NISQ

Because NISQ computers cannot be trusted to run a billion steps flawlessly, researchers use them for "shallow" circuits; short algorithms that can be completed before the noise overwhelms the system. 

The most common application is hybrid computing. A classical computer handles 99% of a problem, and it hands the absolute hardest 1% to the NISQ processor, using it essentially as a highly specialized [[quantum-coprocessor|Quantum Coprocessor]].

## FAQs

*1. When will the NISQ era end?*
The goal of the industry is "Fault-Tolerant [[quantum-computing|Quantum Computing]]." This will happen when engineers successfully build systems with enough physical [[qubits|qubits]] (likely in the millions) to implement perfect, real-time error correction, effectively silencing the "noise." 

*2. Are NISQ computers useless right now?*
Not at all. They are essential stepping stones. Researchers use them constantly in fields like [[quantum-machine-learning|Quantum Machine Learning]] and molecular simulation, trying to extract usefulness from "noisy" data while simultaneously learning how to build better hardware.

### Further Reading

*   **Industry Standards:** *[Google Quantum AI: The NISQ Era](https://quantumai.google/learn/map)* (Google's perspective on extracting value from intermediate-scale devices).
