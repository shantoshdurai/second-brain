---
title: Exceedance Probability Curve
tags: [RiskModeling, ProbabilityAnalysis]
---

# Exceedance Probability Curve

**Exceedance Probability (EP) Curve** is like a flood map that tells you your house has a 1% chance of flooding every year (the "100-year flood").

**Exceedance Probability (EP) Curve** is a graph that shows the probability that an annual loss will exceed a specific dollar amount. It answers the question: "What are the odds of losing more than $X this year?"

You use it to visualize the entire range of potential disasters, from the common $10k losses (high probability) to the catastrophic $100M losses (low probability).

## How it Works

*   **The X-Axis:** Represents the loss amount in dollars.
*   **The Y-Axis:** Represents the probability (percentage) of exceeding that loss.
*   **The Curve:** It usually drastically slopes down; small losses are very likely, but massive losses are very unlikely.

## Real-World Analogies

| Context | Analogy |
| :--- | :--- |
| **General** | **Flood Maps:** A map showing zones: Zone A floods every 10 years (10% EP), Zone B floods every 100 years (1% EP), Zone C floods every 500 years (0.2% EP). The curve just plots these points on a graph. |
| **Cyber Risk** | **The "Breach Lottery":** There is a 90% chance you'll lose >$10k this year (minor incident), but only a 2% chance you'll lose >$10M (massive data exfiltration). The EP curve visualizes this "risk tail." |

## FAQs

*1. What is a "1-in-100 year" even?*
It doesn't mean it happens heavily once every 100 years. It means there is a **1% probability** of it happening *in any given year*. You could hit the jackpot two years in a row (unlikely, but possible).

*2. How do I use this curve?*
You pick a comfort level. If you can survive a $1M loss, you look at the curve to see how likely that is. If it's 50%, you better improve security. If it's 0.01%, maybe you can live with the risk.

### Further Reading

*   **[Risk Assessment]:** *[VaR (Value at Risk)](value-at-risk.md)* (A specific point on this curve).
