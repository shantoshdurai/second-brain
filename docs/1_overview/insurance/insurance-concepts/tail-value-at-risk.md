---
title: Tail Value at Risk (TVaR)
tags: [RiskMetric, TailRisk]
---

# Tail [[value-at-risk|Value at Risk]] (TVaR)

**Tail [[value-at-risk|Value at Risk]] (TVaR)** asks the terrifying question: "If the dam *does* break (which VaR ignores), how deep will the water get?"

**Tail [[value-at-risk|Value at Risk]] (TVaR)** (also known as Conditional VaR or Expected Shortfall) is the average of all losses that exceed the VaR threshold.

While VaR tells you the "best of the worst" outcomes, TVaR tells you the average of the *absolute worst* outcomes. It focuses entirely on the "tail" of the risk distribution; the disasters.

## How it Works

*   **The Condition:** It only looks at scenarios where losses are *greater* than the VaR cutoff (e.g., the worst 1% or 5%).
*   **The Average:** It calculates the average dollar amount of those specific worst-case scenarios.
*   **The "Fat Tail":** It captures the severity of extreme events that VaR might miss or underestimate.

## Real-World Analogies

| Context | Analogy |
| :--- | :--- |
| **General** | **The Storm Aftermath:** VaR says, "We are 99% sure the storm won't cause >$1M damage." TVaR asks, "Okay, but in the 1% chance it *does* cause >$1M damage, what’s the average bill? Is it $1.1M or $100M?" |
| **Cyber Risk** | **The "Big One":** If a catastrophic cloud outage *does* happen (exceeding your 99% VaR), TVaR estimates the financial bleeding. It accounts for the cascading failures; lawsuits, regulatory fines, and stock drops; that happen in the worst 1% of scenarios. |

## FAQs

*1. Why is TVaR better than VaR?*
VaR can be misleading. You might have a "low" VaR ($50k) but a massive cliff right after it where losses jump to $50M. TVaR sees that cliff; VaR doesn't.

*2. Is this used for pricing insurance?*
Yes. Reinsurers (who ensure insurance companies) care deeply about TVaR because they are the ones paying for the catastrophes.

### Further Reading

*   **[Comparison]:** *[VaR vs TVaR](value-at-risk.md)* (Compare the "threshold" to the "average tail").
