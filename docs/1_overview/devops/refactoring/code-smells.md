---
title: Code Smells
tags: Refactoring, CleanCode, SoftwareDesign
---

# Code Smells

A "Code Smell" is like discovering a weird, fuzzy green spot on a slice of bread in your pantry. The bread might still be technically edible today, and it still functions as a sandwich holder, but the smell and the fuzz indicate a much deeper, underlying rotting problem. If you ignore the smell and eat it anyway (or build a feature on top of it), you are going to get incredibly sick (introduce catastrophic bugs) down the road.

A **Code Smell** is a surface indication that usually corresponds to a deeper problem in the system. They are the classic warning signs that your codebase has accrued serious [[technical-debt|Technical Debt]] and is desperately in need of **Refactoring**.

## Categories of Code Smells

Code Smells are generally clumped into several distinct categories:

### 1. Bloaters
These are code, methods, or classes that have increased to such gargantuan proportions that they are impossible to maintain. They rarely happen immediately; they slowly bloat over years of feature additions without any refactoring.
*   *Examples:* Long Method (a function that spans hundreds of lines), Large Class, Long Parameter List.

### 2. Object-Orientation Abusers
These smells occur when developers incompletely or incorrectly apply object-oriented programming principles, making the code stiff and brittle.
*   *Examples:* Switch Statements (instead of polymorphism), Refused Bequest (a child class inheriting methods from a parent that it explicitly doesn't want or need).

### 3. Change Preventers
These smells mean that if you need to change something in one place in your code, you have to hunt down and make changes in 10 other scattered places too. 
*   *Examples:* Divergent Change, Shotgun Surgery.

### 4. Dispensables
This is something pointless and unneeded whose absence would make the code cleaner, shorter, and easier to understand.
*   *Examples:* Duplicate Code, Dead Code, Lazy Classes (classes that do almost nothing).

### 5. Couplers
These smells signify that two classes or modules are too deeply tied together. If you change one, the other breaks.
*   *Examples:* Feature Envy (when a method accesses the data of another object more than its own data).

### Further Reading

*   *[Refactoring.guru: Code Smells](https://refactoring.guru/refactoring/smells)*
