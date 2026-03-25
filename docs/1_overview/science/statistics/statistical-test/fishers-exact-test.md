---
title: Fisher's Exact Test
tags: Statistics, HypothesisTesting, NonParametric
---

# Fisher's Exact Test

Fisher's Exact Test is like painstakingly writing out every possible winning hand in a card game to prove exactly how lucky your opponent's royal flush was, rather than just guessing based on general odds.

**Fisher's Exact Test** is a statistical significance test used in the analysis of contingency tables. It is typically used as an alternative to the [[chi-square|Chi-Square Test]] when sample sizes are extremely small or when the expected frequencies in your data table are too low for Chi-Square math to work reliably.

Imagine you are testing a brand new, highly experimental medicine on a tiny group of 10 hospital patients. You give 5 of them the medicine and 5 of them a placebo. In the medicine group, 4 get better and 1 stays sick. In the placebo group, 1 gets better and 4 stay sick. 

If you try to run a standard **Chi-Square test** on this data, the math will break. Chi-Square relies on an approximation of a massive, continuous bell curve, and it usually requires at least 5 "expected" people in every single category to be accurate. 

Fisher's Exact Test doesn't approximate anything. Instead of checking a bell curve, it uses brute-force math to literally calculate the exact probability of getting that specific arrangement of sick/healthy patients (and every arrangement more extreme than it), assuming the medicine did absolutely nothing. Because it calculates exact probabilities rather than estimating them, it is flawlessly accurate for tiny sample sizes.

## Key Features

*   **Exact, Not Approximated:** It calculates the exact probability (p-value), rather than an approximation based on large-number theory.
*   **Small Sample Sizes:** It is the universally preferred test over Chi-Square when your total sample size is small or when any expected cell count in your data table is less than 5.
*   **Computationally Heavy:** Historically, calculating exact probabilities for large numbers by hand (involving massive factorials) was impossible. Today, computers handle it instantly for small to medium datasets, but it can still be mathematically exhausting for massive contingency tables.

## FAQs

*1. Can I use Fisher's Exact Test for large sample sizes?*
Yes, absolutely. Because it calculates the *exact* probability, it is technically always accurate. However, for massive datasets, a [[chi-square|Chi-Square Test]] will give you practically the exact same answer in a fraction of the computing power. 

*2. Does it only work on 2x2 tables?*
Originally, yes (e.g., Medicine/Placebo vs. Sick/Healthy). Modern software can run Fisher's Exact Test on larger tables (like 3x3 or 4x2), but the sheer number of factorial calculations grows exponentially, sometimes causing computers to struggle or default back to Chi-Square approximations.

### Further Reading

*   **Related Concept:** *[[chi-square|Chi-Square Test]]* (The approximation used when your sample size is comfortably large).
*   **Related Concept:** *[[anova|ANOVA]]* (What to use if your outcome isn't categorical "Sick/Healthy," but rather a continuous number like blood pressure).
