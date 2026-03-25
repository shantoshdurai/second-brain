---
title: When to Refactor
tags: Refactoring, CleanCode, SoftwareDesign
---

# When to Refactor

Refactoring shouldn't be a special event explicitly scheduled on a calendar (e.g., "Refactoring Sprint"). It should be a continuous, ongoing habit woven directly into the daily software development lifecycle. 

There are three primary triggers that should signal a developer that it is time to clean up the code.

## 1. The Rule of Three

The most famous heuristic for refactoring is the "Rule of Three":

1.  When you're doing something for the first time, just get it done.
2.  When you're doing something similar for the second time, cringe at having to repeat yourself, but do it anyway.
3.  **When you're doing something for the third time, start refactoring.** Extract that duplicated code into its own reusable function or class.

## 2. When Adding a Feature

Before you add a new feature, look at the existing code you have to interact with. If that code is a massive, tangled mess, *do not add the feature yet*. 

First, refactor the existing messy code so that it is clean, modular, and easy to understand. Only *after* the codebase is clean should you add the new feature. As the saying goes: *"For each desired change, make the change easy (warning: this may be hard), then make the easy change."*

## 3. During a Code Review

Code reviews are the final line of defense before messy code merges into the `main` repository and becomes official [[technical-debt|Technical Debt]]. 

If a senior reviewer spots a [[code-smells|Code Smell]] (like a method that is 400 lines long), they should require the author to pause, refactor the code using techniques like *Extract Method*, and update the pull request before it is approved for production.

### Further Reading

*   *[Refactoring.guru: When to Refactor](https://refactoring.guru/refactoring/when)*
