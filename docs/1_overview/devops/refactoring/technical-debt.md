---
title: Technical Debt
tags: Refactoring, CleanCode, SoftwareDesign, Management
---

# Technical Debt

Writing bad code to ship a feature quickly is like taking out a high-interest loan from a bank. The loan allows you to buy a house (ship the feature) faster than if you had saved up cash. However, every day you wait to pay off that loan, you accrue interest. Eventually, the interest payments become so massive that you can't afford to buy groceries (build new features); all of your energy is spent just servicing the debt.

**Technical Debt** (a metaphor coined by Ward Cunningham) describes the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.

No programmer starts a project intending to write awful code. But under pressure, clean code inevitably accrues debt.

## Causes of Technical Debt

1.  **Business Pressure:** A manager demands a feature be released before an impossible deadline. The developer hard-codes values and skips writing tests just to hit the date.
2.  **Lack of Understanding:** The team doesn't truly understand the business domain yet, so they build a rigid database structure that becomes cripplingly difficult to change when the real requirements are discovered later.
3.  **Lack of Collaboration:** Knowledge is siloed. A junior developer writes a massive, tangled function (a [[code-smells|Code Smell]]) because a senior developer didn't mentor them or review their pull request. 
4.  **Delayed Refactoring:** The team says, "We will clean this up later." (Spoiler: They rarely do, until the system breaks).

## Paying Off the Debt

You pay off the "principal" of technical debt by **Refactoring** the codebase; spending a week writing tests, breaking down massive classes, and renaming variables so they make sense to the rest of the team.

If you don't pay off the debt, development velocity will slowly grind to a halt. Every new feature will take three times longer to build because developers have to carefully navigate around the fragile, messy "debt-ridden" areas of the application.

### Further Reading

*   *[Refactoring.guru: Technical Debt](https://refactoring.guru/refactoring/technical-debt)*
