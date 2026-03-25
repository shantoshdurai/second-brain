---
title: How to Refactor
tags: Refactoring, CleanCode, SoftwareDesign, Testing
---

# How to Refactor

The most critical rule of refactoring is that it must go unnoticed by the end user. You are changing the *internal structure* of the code, never the *external behavior*.

Because refactoring involves ripping apart the core foundation of an application, it is exceptionally dangerous. To mitigate this risk, refactoring must be done using a rigid, step-by-step checklist.

## The Refactoring Checklist

1.  **The Code Must Be Green (Passing Tests):** Do not ever attempt to refactor code that doesn't have an automated test suite. If you break something while refactoring and don't have tests to catch it, you will ship a highly destructive bug to production.
2.  **Take Tiny Steps:** Refactoring should never be a massive "rewrite" that takes three weeks. It should consist of dozens of microscopic, 5-minute changes. 
3.  **Run Tests After Every Step:** After you hit "Save" on your tiny change (like moving one variable into a new file), immediately run the entire test suite. If the tests turn "Red" (fail), you know *exactly* which tiny change broke the system, allowing you to instantly hit `Ctrl+Z` and fix it.
4.  **Do Not Add Features:** If you notice a bug while refactoring, or realize a feature is missing, **do not fix or add it yet**. Keep your refactoring "hat" on. Only after you have completely finished cleaning the structure and all tests are passing should you put your feature-building "hat" back on to make behavioral changes.

If you try to rewrite a massive 500-line function all at once without running tests in between, you will inevitably end up deeply confused, drowning in broken logic, and wasting days trying to debug your own "clean up."

### Further Reading

*   *[Refactoring.guru: How to Refactor](https://refactoring.guru/refactoring/how-to)*
