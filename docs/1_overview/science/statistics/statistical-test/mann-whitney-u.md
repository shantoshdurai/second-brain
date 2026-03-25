---
title: Mann-Whitney U Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Mann-Whitney U Test

The Mann-Whitney U test is like deciding which of two decks of cards is "better" by drawing one card from each deck over and over, and counting how often Deck A beats Deck B.

**The Mann-Whitney U Test** (also known as the Wilcoxon rank-sum test) is a non-parametric statistical test used to determine whether there is a significant difference between two independent groups when the data is not normally distributed or represents ordinal rankings.

Imagine you have two rival schools, and you want to know if School A students are generally faster runners than School B students. A standard [[t-test|T-Test]] would just average their running times and compare the two averages. But what if one student in School A is an Olympic sprinter who runs so fast that they pull the whole school's average up, making School A look faster overall even if most of its students are quite slow? A T-Test gets fooled by that outlier.

The Mann-Whitney U test solves this by ignoring the raw running times and replacing them with **ranks** (1st place, 2nd place, 3rd place, etc.). It pools all students together, ranks them, and then checks if the ranks belonging to School A are consistently higher or lower than the ranks of School B. It asks: "If I pick a random student from School A and a random student from School B, what is the probability that Student A is faster than Student B?"

## Key Features

*   **Non-Parametric:** It works perfectly even if your data doesn't follow a neat "bell curve" (normal distribution).
*   **Rank-Based:** By converting raw numbers to ranks, it becomes highly resistant to extreme outliers.
*   **Independent Groups:** It requires that the two groups being compared are completely independent (e.g., Men vs. Women, Control vs. Treatment), not the same people measured twice.

## FAQs

*1. When should I use this instead of an Independent T-Test?*
Use Mann-Whitney U when your data is heavily skewed, has massive outliers, or is ordinal (like customer satisfaction surveys ranked 1 to 5). Use a [[t-test|T-Test]] if your data is numerical and looks roughly like a normal bell curve.

*2. How does this relate to correlation?*
If you want to measure the *strength* of the difference found by the Mann-Whitney U test, you would calculate the [[rank-biserial-correlation|Rank-Biserial Correlation]] as your effect size.

### Further Reading

*   **Related Concept:** *[[t-test|T-Test]]* (The parametric, average-based alternative to this test).
*   **Related Concept:** *[[wilcoxon-signed-rank|Wilcoxon Signed-Rank Test]]* (The version of this test used when the two groups are not independent, like "before" and "after" measurements of the same people).
