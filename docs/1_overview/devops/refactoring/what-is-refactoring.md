---
title: What is Refactoring?
tags: Refactoring, CleanCode, SoftwareDesign
---

# What is Refactoring?

Refactoring is like cleaning up a messy workshop. You aren't building a new car and you aren't fixing the engine; you are simply sweeping the floor and putting the tools back on the pegboard. You do this so that when you *do* decide to build your next car (write a new feature), you won't trip over a stray hammer and break your ankle (introduce a bug).

**Refactoring** is the systematic process of improving code without creating new functionality. It's about transforming a massive, tangled mess of logic into clean code and simple design. 

The primary goal of refactoring is to fight [[technical-debt|Technical Debt]].

## What is "Clean Code"?

Refactoring aims to produce "clean code," which is universally characterized by the following traits:

1.  **It is Obvious:** It shouldn't require a Ph.D. to understand what a variable does. Poor variable naming, bloated classes, and "magic numbers" make code sloppy. Clean code reads like well-written prose.
2.  **No Duplication:** If you have to fix a bug in three different places because you copy-pasted a function three times, your code is dirty. Refactoring aims to consolidate logic so you only ever have to update it once.
3.  **Minimal Moving Parts:** Code is a liability, not an asset. The more code you write, the more you have to maintain, test, and debug. Clean code keeps classes tight and focused on a single responsibility.
4.  **It Passes Tests:** You know your code is dirty if only 95% of your unit tests pass. 

## What Refactoring Is *Not*

It is crucial to understand that refactoring **does not change the observable behavior of the software**. 

If you add a new "login" button while you are refactoring the authentication module, you are no longer strictly refactoring; you are feature building. Refactoring should always be done as an isolated, deliberate step before or after adding a feature, never at the exact same time.

### Further Reading

*   *[Refactoring.guru: What is Refactoring?](https://refactoring.guru/refactoring/what-is-refactoring)*
