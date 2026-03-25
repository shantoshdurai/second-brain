---
title: Tukey's HSD (Honest Significant Difference)
tags: Statistics, HypothesisTesting, PostHoc
---

# Tukey's HSD (Honest Significant Difference)

Tukey's HSD is like a forensic detective called to the scene after a security alarm goes off; the alarm only tells you *someone* broke in, but Tukey's job is to interrogate every single suspect one-by-one to find exactly *who* did it.

**Tukey's HSD (Honest Significant Difference)** is a post-hoc statistical test used after an [[anova|ANOVA]] to determine exactly which specific groups in your data have statistically distinct means.

Imagine running an **ANOVA** to test three different racing fuels: Fuel X, Fuel Y, and Fuel Z. Your [[anova|ANOVA]] test alerts you to a mathematically significant difference in lap times. However, [[anova|ANOVA]] is an "omnibus" test; it only throws the flag to say, "Hey, at least one of these fuels is different from the others!" It absolutely refuses to tell you if Fuel X is better than Fuel Y, or if Fuel Z is just uniquely terrible.

You might be tempted to just run three separate [[t-test|T-Tests]] (X vs Y, Y vs Z, X vs Z) to find out. But doing that is statistically dangerous, because every repeated test artificially inflates your chance of finding a "false positive" (Type I error). 

Tukey's HSD fixes this. It compares all the possible pairs simultaneously, but mathematically protects you by enforcing a stricter threshold for what counts as "different." It ensures that your overall, family-wise error rate across all those comparisons stays firmly locked at your chosen confidence level (usually 5%).

## Key Features

*   **Post-Hoc Necessity:** It is incredibly rare to run Tukey's HSD on its own. It is almost exclusively run as "Step 2" immediately following a significant [[anova|ANOVA]] result.
*   **Error Protection:** It mathematically controls the *family-wise error rate*. If you compare 10 different groups in 45 different pairs, Tukey ensures your chance of *any* false positive across the entire family of 45 tests stays at 5%.
*   **Honest Difference:** The test calculates a specific "HSD" value. If the distance between two groups' averages is larger than this HSD value, those groups are officially declared significantly different.

## FAQs

*1. What if my [[anova|ANOVA]] says there is no significant difference?*
If your overall [[anova|ANOVA]] is non-significant, you stop. You pack up and go home. You do not run Tukey's HSD. The security alarm never went off, so you don't call the detective. 

*2. Why not use Bonferroni instead of Tukey?*
A Bonferroni correction is another way of protecting against false positives by ruthlessly dividing your significance threshold. However, Bonferroni is extremely conservative and heavily punishes you if you have a huge number of groups. Tukey's HSD is perfectly balanced and specifically mathematically designed for pairwise [[anova|ANOVA]] follow-ups.

### Further Reading

*   **Related Concept:** *[[anova|ANOVA (Analysis of Variance)]]* (The required primary test you must run before using Tukey's HSD).
*   **Related Concept:** *[[t-test|T-Test]]* (The basic pairwise comparison tool that Tukey upgrades to prevent false positive inflation).
