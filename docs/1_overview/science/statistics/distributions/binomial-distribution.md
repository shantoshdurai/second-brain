---
title: Binomial Distribution
tags: Statistics, Math, CoinFlip
---

# Binomial Distribution

The Coin Flip.

**The Binomial Distribution** models the number of "Successes" in a fixed number of independent "Trials", where each trial has the same probability of success.

Think of it like **Free Throws**.
*   **The Trial:** You shoot the ball.
*   **The Result:** You make it (Success) or miss it (Failure). No "half-points".
*   **The Question:** If you shoot 10 times, and you are a 50% shooter, what are the odds you make exactly 7?

![Binomial Distribution Chart](https://media.geeksforgeeks.org/wp-content/uploads/20250723182638251176/frame_3051.webp)

## How it Works

1.  **Binary Outcome:** Yes/No, Pass/Fail, Heads/Tails.
2.  **Fixed N:** You decide beforehand "I will flip 10 times." (If you flip until you stop, that's different).
3.  **Fixed P:** The probability of success (e.g., 0.5) is the same for every flip.

## Real World Use Cases

*   **Quality Control:** Testing 1000 chips. How many are defective?
*   **Elections:** Surveying 100 voters. How many vote Yes?
*   **Medical:** Treating 50 patients. How many recover?

## Analysis

The Binomial converges into the **Normal Distribution** if you do enough trials. (If you flip 1,000,000 coins, the graph looks like a Bell Curve).

### Further Reading

*   **Sibling:** *[[poisson-distribution|Poisson Distribution]]* (Counting events over time, not trials).
