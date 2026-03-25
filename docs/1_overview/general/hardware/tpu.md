---
title: TPU (Tensor Processing Unit)
tags: AI, Hardware, Google
---

# TPU (Tensor Processing Unit)

The Specialist.

**A TPU** is a custom microchip designed by OpenAI/Google specifically to do *one thing* extremely fast: Matrix Multiplication (the math that powers Neural Networks).

Think of it like a **Dragster vs. a Sediment**.
*   **[[cpu|CPU]] (Sedan):** Can drive anywhere (grocery store, off-road, highway). Versatile, but slow max speed.
*   **[[gpu|GPU]] (Sports Car):** Faster. Good for racing (gaming) and carrying moderate loads (parallel tasks).
*   **TPU (Dragster):** Useless for going to the grocery store (can't run Windows). But on a straight line (Tensor math), it is unimaginably fast.
It strips away everything a general computer needs (cache, branch prediction) to make room for pure "number crunching" muscle.

## How it Works

1.  **Systolic Array:** Instead of moving data in and out of memory for every calculation (like a CPU), a TPU pumps data through a massive grid of calculator units like a heart pumps blood.
2.  **Low Precision:** It often uses "fuzzy" numbers (8-bit or bfloat16) because AI doesn't need perfect accuracy (3.14159...), it just needs to be close enough (3.14). This saves massive energy.

## FAQs

*1. Can I buy one?*
Not really. TPUs are mostly available only through Google Cloud. You rent them for a few dollars an hour.

*2. Is it better than a GPU?*
For specific AI tasks (like training Transformers), yes/faster. For general tasks or smaller models, GPUs are often more flexible and easier to use.

### Further Reading

*   **Article:** *[Cloud TPU](https://cloud.google.com/tpu/docs/intro-to-tpu)* (Official Google Docs).
*   **Video:** *[How Google's TPU works](https://www.youtube.com/watch?v=MXxN4fv01c8)*.
