---
title: Reinforcement Learning from Human Feedback (RLHF)
tags: ArtificialIntelligence, MachineLearning, LLM, Alignment
---

# Reinforcement Learning from Human Feedback (RLHF)

A raw [[llm|Large Language Model]] that has only finished pre-training is chaotic. It simply wants to predict the next word, meaning it might generate toxic, unhelpful, or wildly inaccurate text. 

**RLHF** is the vital technique used to align that chaotic brain with human values, ensuring it becomes polite, safe, and genuinely useful.

## How the RLHF Loop Works

To improve the model’s usefulness and ensure it behaves in desirable ways, AI labs use a brilliant 4-step training loop:

1.  **Generate Options:** The AI model is given a prompt (e.g., "Write a polite email declining a meeting") and it generates several possible responses.
2.  **Human Ranking:** Human reviewers ("Labelers") read these responses and rank them from best to worst based on strict criteria like accuracy, helpfulness, and safety alignment.
3.  **The Reward Model:** Using these thousands of human rankings, a separate, secondary AI; called a **"Reward Model"**; is trained to learn human preferences so that it can autonomously predict the absolute quality of any future response.
4.  **Fine-Tuning (PPO):** The original AI model is then fine-tuned using automated reinforcement learning techniques. Every time it generates an answer during this phase, the Reward Model "scores" it. Over time, the main AI learns to mathematically maximize its score by only generating outputs humans would love.

*(Note: RLHF is highly effective with just hundreds to thousands of high-quality human-rated examples. The emphasis is on quality over quantity, as each example is carefully judged by a human’s exact preferences).*

## Real-World Example

If you want a language model for **customer support**:
1. You might first [[ai-fine-tuning|fine-tune]] it on transcripts of past customer service interactions (so it learns the vocabulary).
2. Then, you use **RLHF** to ensure it actually responds politely and effectively resolves customer issues, rather than just impersonating a confusing prior interaction. 

*Increasingly, AI is also used to generate initial content and humans actively help refine it through this continuous feedback loop.*

## Advanced Variation: Hierarchical Reinforcement Learning (HRL)

While RLHF is about human alignment, **HRL** is a structural technique used to solve massively complex environments (often used in robotics or advanced [[agentic-ai|Agentic AI]]). 

In HRL, massive goals are broken down into sub-policies (often called "Options"). Instead of choosing individual actions (like "move joint 2 degrees left"), the highest-level controller simply tells a lower-level controller to execute a "macro-action" or sub-policy (like "walk to the door"). This drastically speeds up learning because the AI doesn't have to relearn how to walk every time its main goal changes.

### Further Reading

*   **Article:** *[Google: What is RLHF?](https://cloud.google.com/use-cases/rlhf)*
*   **Deep Dive:** *[Towards Data Science: Hierarchical Reinforcement Learning](https://towardsdatascience.com/hierarchical-reinforcement-learning-56add31a21ab/)*
