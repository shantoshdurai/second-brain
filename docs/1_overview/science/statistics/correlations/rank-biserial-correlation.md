---
title: Rank-Biserial Correlation Coefficient
tags: Statistics, DataScience, Correlation
---

# Rank-Biserial Correlation Coefficient

The Rank-Biserial Correlation is like checking whether answering "Yes" or "No" to hiring a private tutor reliably predicts whether you finish 1st, 2nd, or 100th place in a spelling bee.

**Rank-Biserial Correlation Coefficient ($r_{rb}$)** is a non-parametric measure of association used when one variable is strictly binary (dichotomous) and the other variable consists of ordered ranks (ordinal data). 

Imagine you are looking at the final standings of a marathon (1st place, 2nd place, 3rd place... 500th place). This is ranked, ordinal data, so you don't know the exact time difference between the runners, only the order they finished in. Now, you want to see if wearing a specific brand of shoe (Brand A vs. Brand B) correlated with finishing higher in the race. 

Because one variable is ordinal (Rankings) and the other is binary (Brand A or B), continuous mapping tools like the [[pearson-correlation|Pearson Correlation]] or even the [[point-biserial-correlation|Point-Biserial Correlation]] won't work correctly. The Rank-Biserial coefficient is the specialized tool designed specifically to bridge a binary category with a ranked list. It evaluates whether the ranks associated with one binary group are consistently higher or lower than the ranks associated with the other group.

## Key Features

*   **Ordinal vs. Binary:** It pairs a ranked categorical variable (ordinal) with a two-option categorical variable (dichotomous).
*   **Proportion of Favorable Pairs:** The math essentially works by comparing every person in Group 0 against every person in Group 1, counting how many times the person in Group 1 outranked the person in Group 0, and converting that into a correlation score between -1 and 1.
*   **Non-Parametric:** It makes no assumptions about the data following a normal "bell curve" distribution, making it highly robust for skewed data.

## FAQs

*1. How is this different from the Point-Biserial correlation?*
[[point-biserial-correlation|Point-Biserial]] expects actual continuous numbers (like exact test scores or exact race times in seconds). Rank-Biserial expects ranked positions (like 1st place, 2nd place). 

*2. How is this related to Mann-Whitney U?*
The Rank-Biserial correlation is often used as the "effect size" metric following a Mann-Whitney U statistical test. The Mann-Whitney U tells you *if* a difference exists; Rank-Biserial tells you *how strong* that difference is.

### Further Reading

*   **Related Concept:** *[[point-biserial-correlation|Point-Biserial Correlation Coefficient]]* (The parametric, continuous-data version).
*   **Related Concept:** *[[spearman-correlation|Spearman Rank Correlation Coefficient]]* (Another rank-based correlation tool for when *both* variables are ranked).
