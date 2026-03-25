---
title: Pearson Correlation Coefficient (r)
tags: Statistics, DataScience, Correlation
---

# Pearson Correlation Coefficient (r)

Pearson's Correlation is like a synchronized swimming score; it measures how perfectly two divers stretch and dive in a straight, perfectly timed line together.

**Pearson Correlation Coefficient ($r$)** is a statistical measure that calculates the strength and direction of the linear relationship between two continuous variables. It returns a value between `-1` and `1`.

Imagine you are tracking how many hours a student studies versus their test score. If every extra hour studied perfectly matches a specific, steady increase in their score, that relationship forms a straight, upward line on a graph. This is where Pearson's coefficient shines. It asks one simple question: "If I draw the best possible straight line through this data, how tightly do all the dots cluster around it?"

A score of `1` means they move in perfect "straight-line" lockstep upwards. A score of `-1` means they move perfectly in opposite directions (e.g., as speed increases, travel time decreases). A score of `0` means finding a straight line is impossible. 

However, Pearson is famously "blind" to anything that isn't a straight line. If your data curves like a smiley face (e.g., stress vs. performance: too little is bad, a medium amount is great, and too much is terrible), Pearson will confidently return a `0`, missing the meaningful relationship completely.

## Key Features

*   **Linear Only:** Only measures straight-line relationships between variables.
*   **Continuous Data:** Both variables must be continuous (like height, weight, or temperature), rather than categorical (like "yes/no" or rankings).
*   **Outlier Sensitive:** A single massive outlier (like one person studying 0 hours but scoring 100%) can severely distort the entire Pearson score.

## FAQs

*1. If my Pearson score is 0, does that mean the variables are unrelated?*
Not necessarily! It only means there is no *linear* relationship. They could still be deeply connected in a curved or complex way (like a U-shape). To catch complex relationships, you'd want something like [[chatterjees-correlation|Chatterjee's Correlation]].

*2. When should I use Pearson over Spearman?*
Use Pearson when both of your variables are continuous numerical values, and you are specifically looking for a straight-line relationship. If your data consists of "ranks" (1st place, 2nd place) or has heavy outliers, use [[spearman-correlation|Spearman Correlation]] instead.

### Further Reading

*   **Related Concept:** *[[spearman-correlation|Spearman Rank Correlation Coefficient]]* (For monotonic relationships and ranked data).
*   **Related Concept:** *[[point-biserial-correlation|Point-Biserial Correlation]]* (A variation of Pearson when one variable is true/false).
