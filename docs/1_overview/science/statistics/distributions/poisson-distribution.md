---
title: Poisson Distribution
tags: Statistics, Math, Time
---

# Poisson Distribution

The Waiting Game.

**The Poisson Distribution** models the probability of a specific number of events happening in a fixed interval of time or space, assuming these events happen with a known constant mean rate and independently of the time since the last event.

Think of it like **The Call Center**.
*   **The Average:** We get 5 calls per minute.
*   **The Question:** What are the odds we get exactly 8 calls in the next minute? Or 0 calls?
*   **The Shape:** It is skewed. You can't have fewer than 0 calls, but you could theoretically have 100.

## How it Works

1.  **Rare Events:** It works best for things that don't happen often but *could* happen at any moment.
2.  **Independence:** One call doesn't cause the next call.
3.  **Lambda ($\lambda$):** The valid rate (e.g., 5 calls/min). If you know Lambda, you know the whole curve.

## Real World Use Cases

*   **Bus Arrivals:** How many buses arrive in an hour?
*   **Decay:** Radioactive atoms decaying per second.
*   **IT:** How many 404 errors will the server log in the next hour?

## Analysis

This is used for **Capacity Planning**. "If we average 5 calls, but there's a 10% chance of 12 calls, do we have enough staff for 12?"

### Further Reading

*   **Contrast:** *[[binomial-distribution|Binomial Distribution]]* (Yes/No trials vs. Counting events).
