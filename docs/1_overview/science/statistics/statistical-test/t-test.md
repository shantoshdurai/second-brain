---
title: T-Test (Independent & Paired)
tags: Statistics, HypothesisTesting, Parametric
---

# T-Test (Independent & Paired)

A T-Test is like putting two entirely different recipes of chili on a scale; it doesn't care about the individual ingredients, it just tells you if one bowl mathematically weighs more than the other.

**The Student's T-Test** is a parametric statistical test used to determine if there is a significant difference between the average (mean) values of two groups, helping you figure out if the difference is real or just due to random chance.

Imagine you invent a new fertilizer and want to know if it makes tomatoes grow taller. You spray it on Field A, while Field B gets regular water. At the end, you measure all the tomatoes. Because of nature's randomness, the average height of Field A will rarely be *exactly* the same as Field B. Let's say Field A averages 10 inches and Field B averages 9.5 inches. Did your fertilizer actually work, or did Field A just happen to get slightly luckier seeds this time?

The T-Test takes the exact averages, factors in how spread out (messy) the data is, and calculates the probability that a 0.5-inch difference happened purely by random, dumb luck. If that probability (the p-value) is incredibly low (usually under 5%), you can confidently claim your fertilizer works. 

## Key Types of T-Tests

*   **Independent Samples T-Test:** Compares two completely separate groups of things (e.g., Field A vs. Field B, Men vs. Women).
*   **Paired (Dependent) Samples T-Test:** Compares the *same* group of things measured at two different times (e.g., measuring patients' blood pressure *before* a new pill, and then measuring those exact same patients' blood pressure *after*).
*   **One-Sample T-Test:** Compares your one group's average against a known standard (e.g., "Is our factory producing batteries that last longer than the industry standard of 50 hours?").

## FAQs

*1. What are the rules (assumptions) for using a T-Test?*
Your data must be continuous (like height or time, not categories), your data should look roughly like a normal "bell curve," and in the case of the independent test, the groups should have roughly the same amount of variance (spread).

*2. What do I do if my data doesn't make a bell curve or has crazy outliers?*
The T-Test gets confused by massive outliers because it relies on averages. If your data is heavily skewed, you should drop the T-Test and use the [[mann-whitney-u|Mann-Whitney U Test]] (for independent groups) or the [[wilcoxon-signed-rank|Wilcoxon Signed-Rank Test]] (for paired groups).

### Further Reading

*   **Related Concept:** *[[anova|[[anova|ANOVA]] (Analysis of Variance)]]* (What you use when you need to compare *three* or more groups instead of just two).
*   **Related Concept:** *[[point-biserial-correlation|Point-Biserial Correlation]]* (Used to measure the exact mathematical strength of the difference found by an independent T-Test).
