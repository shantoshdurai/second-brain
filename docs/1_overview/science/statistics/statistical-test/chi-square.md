---
title: Chi-Square Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Chi-Square Test

A Chi-Square Test is like counting how many people bought red versus blue shirts in your store, and mathematically checking if you genuinely sold way more blue ones than you originally predicted.

**The Chi-Square Test of Independence ($\chi^2$)** is a non-parametric statistical test used to determine if there is a mathematically significant association between two categorical (nominal) variables.

Unlike an [[anova|ANOVA]] or a [[t-test|T-Test]], the Chi-Square test doesn't look at continuous numbers or averages (like height or test scores). It only cares about **counts** and **categories**.

Imagine you flip a coin 100 times. You *expect* around 50 heads and 50 tails. If you get 52 heads and 48 tails, that's normal statistical noise. But what if you get 80 heads and 20 tails? Is the coin rigged? The Chi-Square test compares your *Observed Frequencies* (what you actually counted) against your *Expected Frequencies* (what math says should have happened by pure luck). By adding up the differences across all possible categories, Chi-Square outputs a massive single number ($\chi^2$). If the score is huge, your coin is heavily rigged.

## Key Types of Chi-Square

*   **Test of Independence:** Checks if two categorical variables (e.g., Eye Color and Hair Color) are related to one another.
*   **Goodness of Fit:** Checks a single categorical variable against a theoretical distribution (e.g., checking if M&M's actually produce exactly 20% blue candies as they claim).
*   **The Big Rule:** The math absolutely depends on raw counts (frequencies). You cannot use percentages, fractions, or negative numbers inside the Chi-Square formula. 

## FAQs

*1. Are there limits to the Chi-Square test?*
Yes. Because it uses raw counts to estimate probabilities, the math starts to break down if any of your categories have fewer than 5 expected responses (e.g., only 3 people out of 1000 have green hair and blue eyes). For those tiny datasets, statisticians switch to a more precise, brute-force calculation called **[[fishers-exact-test|Fisher's Exact Test]]**.

*2. How does this compare to Correlation?*
Chi-Square is used when *both* variables are categorical (e.g., Gender vs. Voted/Did Not Vote). [[pearson-correlation|Pearson Correlation]] requires continuous numbers (e.g., Age vs. Salary). [[point-biserial-correlation|Point-Biserial]] mixes one of each.

### Further Reading

*   **Related Concept:** *[[anova|ANOVA]]* (What to use when your categories need to predict a continuous number instead of raw counts).
*   **Related Concept:** *[[kruskal-wallis|Kruskal-Wallis Test]]* (What to use for ranked categories).
