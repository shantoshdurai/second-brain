---
title: Kendall Tau Correlation Coefficient (τ)
tags: Statistics, DataScience, Correlation
---

# Kendall Tau Correlation Coefficient (τ)

Kendall Tau Correlation is like counting how many pairs of people agree on the order of a top 10 movie list versus how many pairs passionately disagree.

**Kendall Tau Correlation Coefficient ($\tau$)** is a non-parametric statistic used to measure the ordinal (rank-based) association between two measured quantities. It returns a value between `-1` and `1`.

Imagine you asked two different movie critics to rank the best 100 movies of the decade. Instead of looking at their overall lists, Kendall Tau logic compares specific pairs. It looks at Movie A and Movie B, and asks Critic 1: "Did you rank A above B?" Then it asks Critic 2: "Did you rank A above B?" If they both say yes (or both say no), that's a *concordant* (agreeing) pair. If one says yes and the other says no, that's a *discordant* (disagreeing) pair.

Kendall $\tau$ simply calculates the difference between the total number of agreeing pairs and disagreeing pairs, scaling the final answer between -1 (perfect disagreement upside down) and 1 (perfect identical ranking). Note that the basic version ($\tau$-a) does not correct for ties, while tie-adjusted variants ($\tau$-b or $\tau$-c) include specific mathematical corrections for tied ranks. This documentation refers to a tie-adjusted form, which is why it handles tied data far better.

It is often compared directly to the [[spearman-correlation|Spearman Rank Correlation Coefficient]], as both measure monotonic relationships based on ranks instead of raw continuous data. However, Kendall Tau approaches the math much differently and is generally preferred for smaller datasets or datasets with a massive amount of identical ties.

## Key Features

*   **Pairs-Based Logic:** Evaluates concordant vs. discordant pairs instead of converting the data points to numeric ranks and mapping them linearly like Spearman does.
*   **Monotonic Focus:** Like Spearman, it measures whether the relationship is consistently increasing or decreasing, not whether the relationship is perfectly linear; [[pearson-correlation|Pearson Correlation]] measures linear association, with perfect linearity only when |r| = 1.
*   **Robust to Small Samples:** Because the math is essentially based on probabilities of pairs matching, it is considered more statistically robust and accurate than Spearman when you have a very small data set or a large number of tied ranks.

## FAQs

*1. When should I choose Kendall Tau over Spearman?*
If you have a small dataset (e.g., $N$ < 30) or if a massive chunk of your data consists of tied scores (e.g., 50 people all ranked 1st place), Kendall Tau handles it significantly better. For large datasets with few ties, Spearman is computationally faster and incredibly similar in outcome. 

*2. Can it detect curved or complex relationships?*
No. Like the other classical non-parametric tests, it only detects monotonic trends. For detecting entirely non-monotonic relationships (e.g., going up, then down, then flat), you need the [[chatterjees-correlation|Chatterjee's Correlation]].

### Further Reading

*   **Related Concept:** *[[spearman-correlation|Spearman Rank Correlation Coefficient]]* (The other famous rank-based correlation method).
*   **Related Concept:** *[[pearson-correlation|Pearson Correlation Coefficient]]* (The linear correlation coefficient that fails on ranked data).
