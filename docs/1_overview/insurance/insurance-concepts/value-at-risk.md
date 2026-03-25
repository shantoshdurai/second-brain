---
title: Value at Risk (VaR)
tags: [RiskMetric, FinancialRisk]
---

# Value at Risk (VaR)

**Value at Risk (VaR)** is like asking, "On a really bad day, how much money could I lose?" and being 95% sure it won't be worse than that.

**Value at Risk (VaR)** is a statistical technique used to measure the level of financial risk within a firm or investment portfolio over a specific time frame.

It gives you a single dollar number that represents your maximum expected loss at a specific confidence level (e.g., 95% or 99%). It puts a fence around your "normal" bad days.

## How it Works

*   **Confidence Level:** Usually 95% or 99%. A 95% VaR means "We are 95% confident our losses won't exceed this amount."
*   **Time Horizon:** Over what period? Analysis for one day is different than for one year.
*   **The Cutoff:** VaR ignores the absolute worst-case scenarios (the furthest 1% or 5% of the tail). It focuses on the boundary between "normal" risk and "extreme" risk.

## Real-World Analogies

| Context | Analogy |
| :--- | :--- |
| **General** | **Stock Portfolio:** "I am 95% confident that my portfolio won't lose more than $5,000 in a single day." If it loses $6,000, that was a "tail event" (the other 5%). |
| **Cyber Risk** | **The "Bad Quarter":** A CISO might say, "Our Cyber VaR (95%) is $2M." This means in 19 out of 20 years, cyber incidents will cost less than $2M. If costs hit $10M, you're in the 5% "outlier" zone. |

## FAQs

*1. Does VaR tell me my maximum possible loss?*
**No!** This is the most dangerous misconception. VaR only tells you the maximum loss *within the confidence interval*. It tells you nothing about how bad things get if you breach that threshold (for that, see **TVaR**).

*2. Why use 95% vs 99%?*
95% is standard for general [[risk-management|risk management]]. 99% is essentially saying "Prepare for the really, really rare stuff." Banks often required to use 99% by regulators.

### Further Reading

*   **[Tail Risk]:** *[TVaR (Tail Value at Risk)](tail-value-at-risk.md)* (What happens when you exceed the VaR limit?).
