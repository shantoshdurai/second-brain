---
title: Open Model
tags: ArtificialIntelligence, OpenSource, Transparency
---

# Open Model

A recipe that is shared with the world, not kept in a restaurant's safe.

In the AI world, there are two camps:
1.  **Closed Models (Proprietary):** Like ChatGPT (OpenAI) or Gemini (Google). You can *use* the model through their website, but you cannot see how it works, what it learned from, or run it on your own computer. It is a "Black Box."
2.  **Open Models ([[open-weights|Open Weights]]):** Like Llama (Meta) or Mistral. The creators publish the "brain" (the weights) of the AI. You can download it, inspect it, and run it on your own private server without asking for permission.

## Why does it matter?

It is the difference between **Rent** vs **Own**.
*   **Closed:** You rent intelligence. If the company shuts down or bans you, you lose everything.
*   **Open:** You own the intelligence. It runs on your hardware. No one can take it away.

## FAQs

*1. Is "[[open-source|Open-Source]]" the same as "Open Model"?*
Technically, no (though people use them interchangeably).
*   **True [[open-source|Open Source]]:** They share the Training Data, The Code, AND The Weights (Everything).
*   **Open Weights:** They share the ready-to-use Brain (Weights), but keep the Training Data secret. Most "Open" AI today (like Llama) is actually just "[[open-weights|Open-Weights]]."

*2. Can I run these at home?*
Yes! If you have a decent computer (especially with a [[gpu|GPU]] like NVIDIA), you can use tools like **Ollama** or **LM Studio** to run powerful AI models completely offline.

### Further Reading

*   **Tool:** *[Ollama](https://ollama.com/)* (The easiest way to run open models locally).
*   **Library:** *[Hugging Face](https://huggingface.co/)* (The "GitHub" of Open Models).
