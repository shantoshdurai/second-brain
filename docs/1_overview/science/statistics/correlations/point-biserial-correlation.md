---
title: Point-Biserial Correlation Coefficient
tags: Statistics, DataScience, Correlation
---

# Point-Biserial Correlation Coefficient

The Point-Biserial Correlation is like checking if owning a gym membership (a strict "yes" or "no") predicts exactly how many pushups someone can do (a continuous number).

**Point-Biserial Correlation Coefficient ($r_{pb}$)** is a mathematical variation of the [[pearson-correlation|Pearson Correlation]] used specifically when attempting to measure the relationship between one strictly continuous variable and one naturally dichotomous (binary) variable.

Imagine you are trying to figure out if drinking coffee before a test improves the final test score. "Test Score" is a continuous variable ranging from 0 to 100. "Drank Coffee?" is a pure binary variable: either Yes (1) or No (0). There is no "in-between" or fractional state.

If you want to know if these two variables are mathematically linked, you can't use standard scatterplot logic, because half your data is locked to the number 0 and the other half is locked to the number 1. The Point-Biserial coefficient is a mathematical shortcut designed exactly for this scenario. It effectively measures if the continuous scores belonging to the "Yes" group are significantly higher or lower than the continuous scores belonging to the "No" group.

## Key Features

*   **Continuous vs. Natural Binary:** It specifically pairs a continuous interval/ratio variable with a "naturally" dichotomous variable (e.g., Heads/Tails, Pass/Fail, Dead/Alive).
*   **Mathematically Identical to Pearson:** Under the hood, the formula used for $r_{pb}$ simplifies down to the exact same math as the [[pearson-correlation|Pearson correlation]] coefficient.
*   **Sign Doesn't Matter:** The resulting score ranges from -1 to 1, but the positive or negative sign is arbitrary based on which group you assigned as "0" and which as "1". The absolute value is what tells you the strength of the relationship.

## FAQs

*1. What is the difference between Point-Biserial and Biserial correlation?*
Point-Biserial is used for *naturally* binary variables (e.g., Left-handed vs. Right-handed). Biserial correlation is used for *artificially* binary variables; a continuous scale you manually chopped in half (e.g., grouping test scores into "High Scorers" vs "Low Scorers").

*2. How is this different from a T-Test?*
An independent T-Test determines if there's a *significant difference* between the means of the two groups. Point-Biserial gives you the *effect size* (the strength) of that relationship.

### Further Reading

*   **Related Concept:** *[[rank-biserial-correlation|Rank-Biserial Correlation Coefficient]]* (The nonparametric equivalent used for ranked data instead of continuous data).
*   **Related Concept:** *[[pearson-correlation|[[pearson-correlation|Pearson Correlation]] Coefficient]]* (The fundamental math driving this variation).
