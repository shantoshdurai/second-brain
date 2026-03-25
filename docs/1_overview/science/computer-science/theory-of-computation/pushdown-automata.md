---
title: Pushdown Automata
tags: ComputerScience, TheoryOfComputation, FormalLanguages
---

# Pushdown Automata

Imagine a standard vending machine. It is a classic "Finite State Machine"; it requires 50 cents, and if you put in a quarter, its internal state shifts to "Waiting for 25 cents." Now, imagine installing a spring-loaded cafeteria tray dispenser inside that vending machine. The machine can now "remember" an infinite number of things by writing them on trays and pushing them down onto the stack, as long as it only ever reads the tray sitting at the very top.

A **Pushdown Automaton (PDA)** is a computational model that is essentially a Finite Automaton equipped with an extra component: a **Stack**. 

In formal computer science theory, a Pushdown Automaton is the mechanical, algorithmic equivalent of a [[context-free-grammars|Context-Free Grammar]]. If a CFG can generate a language, a PDA is the conceptual "machine" that can read a string and confirm whether it belongs in that language or not.

## The Power of the Stack

A stack is a Last-In, First-Out (LIFO) data structure. You can push symbols onto the top of the stack, and you can pop symbols off the top. You cannot look at or access the symbols buried at the bottom.

This addition of a stack gives the PDA a form of unlimited, yet highly restricted, memory. 

### Why is Memory Important?

Recall the classic language $0^n1^n$ (a string composed of some amount of zeros, followed by the *same number* of ones). A standard, memory-less Finite Automata cannot read this string, because it cannot "count" or remember how many zeros it passed before it reached the ones.

A Pushdown Automaton solves this easily:
1.  As it reads the $0$s from the input tape, it **pushes** a placeholder symbol (like `$`) onto the stack for every $0$ it sees.
2.  When it transitions to reading the $1$s, it **pops** one `$` off the stack for every $1$ it sees.
3.  If it finishes reading the input exactly as the stack becomes empty, the PDA inherently "knows" there were an equal number of both. It accepts the string!

## Non-Determinism

Unlike Finite Automata, where deterministic and non-deterministic machines are mathematically equal in power, **Non-Deterministic Pushdown Automata (NPDAs)** are strictly more powerful than Deterministic Pushdown Automata (DPDAs). 

While DPDAs are incredibly useful in modern computing (they form the backbone of the parsers that compile your programming code), it is the broader class of NPDAs that are equivalent in power to [[context-free-grammars|Context-Free Grammars]]. 

### Further Reading

*   **Sipser, Michael.** *Introduction to the Theory of Computation (Chapter 2.2: Pushdown Automata).*
