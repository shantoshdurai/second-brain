---
title: Fine-Tuning
tags: ArtificialIntelligence, Training, Specialization
---

# Fine-Tuning

Sending the generalist to medical school.

A standard Large Language Model (like GPT-4) is a **Generalist**. It has read the entire internet, so it knows a little bit about everything (coding, poetry, history, baking), but isn't an expert in your specific company's data.

**Fine-Tuning** is the process of taking that pre-trained "Graduate" model and giving it extra training on a specific subject (like medical records, legal documents, or your company's emails) to turn it into a **Specialist**.

## How it Works

1.  **Pre-Training (The Degree):** The model learns English, grammar, and world facts (Cost: Millions of dollars).
2.  **Fine-Tuning (The Residency):** You show it thousands of examples of *specific* questions and answers in your field. "When a user asks X, you should answer Y." (Cost: Hundreds of dollars).
3.  **Result:** The model gets slightly worse at general poetry, but extremely good at your specific topic.

## FAQs

*1. Is this the same as [[rag|RAG]]?*
No.
*   **RAG (Retrieval Augmented Generation):** Giving the robot a textbook to read *during* the exam. (Good for facts that change often).
*   **Fine-Tuning:** Studying the textbook *before* the exam until it is memorized. (Good for learning a specific *style* or *format* of speaking).

*2. When should I use it?*
Use Fine-Tuning when you want the AI to sound like you (tone, voice, format). Use RAG when you want the AI to know new facts (prices, news, documents).

### Further Reading

*   **Article:** *[Augment LLMs with RAG or Fine-Tuning](https://learn.microsoft.com/en-us/azure/developer/ai/augment-llm-rag-fine-tuning)* (Microsoft).
*   **Guide:** *[OpenAI: Fine-Tuning Guide](https://platform.openai.com/docs/guides/fine-tuning)*
