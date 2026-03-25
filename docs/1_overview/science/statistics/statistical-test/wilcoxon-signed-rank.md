---
title: Wilcoxon Signed-Rank Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Wilcoxon Signed-Rank Test

The Wilcoxon Signed-Rank Test is like weighing a group of people before and after a diet, totally ignoring the exact pound amounts, and just noticing that almost everyone lost weight rather than gained it.

**The Wilcoxon Signed-Rank Test** is a non-parametric statistical hypothesis test used to compare two conceptually related (paired or dependent) samples to assess whether their population mean ranks differ.

Imagine you invent a powerful new study drug to help students pass a massive final exam. You give 50 students a practice exam, record their scores, and then wait a week. You give them the drug, have them take the exact same practice exam again, and record those new scores. 

Because you are measuring the *exact same students* twice, you cannot use an independent test like the [[mann-whitney-u|Mann-Whitney U Test]]. Additionally, if their test scores are incredibly skewed or chaotic (not a normal bell curve), the parametric **Paired [[t-test|T-Test]]** will mathematically fail. 

The Wilcoxon Signed-Rank Test solves this by looking safely at the differences. For each student, it calculates how much their score changed ("+5 points," "-2 points," "+15 points"). It strips away the raw numbers, ranks the absolute size of those changes from 1st to last, and then re-assigns the positive or negative signs to those ranks. If the drug worked, the massive pile of positive ranks will wildly outnumber the few negative ones.

## Key Features

*   **Paired Data Only:** This test is exclusively used for dependent, paired, or matched datasets (e.g., Before/After measurements, Left Eye/Right Eye measurements).
*   **Non-Parametric:** It makes no assumptions about the data forming a bell curve distribution.
*   **Zeroes are Dropped:** If a student scores exactly the same on both the Before and After test (a difference of zero), they are mathematically dropped from the ranks entirely, reducing the overall sample size used in the final calculation.

## FAQs

*1. What is the parametric equivalent of this test?*
If your data forms a perfect, clean bell curve without massive outliers, you should use the **Paired [[t-test|T-Test]]** instead, as it retains the power of the exact raw numbers.

*2. How is this different from the Wilcoxon Rank-Sum Test?*
This is incredibly confusing due to naming. The Wilcoxon **Signed-Rank** Test is for *paired* (dependent) data. The Wilcoxon **Rank-Sum** Test is exactly the same math as the [[mann-whitney-u|Mann-Whitney U Test]] and is used for *independent* (completely separate) groups.

### Further Reading

*   **Related Concept:** *[[mann-whitney-u|Mann-Whitney U Test]]* (The independent version of this test).
*   **Related Concept:** *[[t-test|T-Test (Paired)]]* (The parametric alternative used when data is normally distributed).
