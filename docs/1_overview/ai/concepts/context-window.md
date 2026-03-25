---
title: Context Window
tags: ArtificialIntelligence, LLMs, Concepts
---

# Context Window

A context window is like a person's short-term memory during a conversation. If you have a highly intelligent friend with a tiny short-term memory, they can give brilliant answers to your immediate question, but they will completely forget what you were talking about five minutes ago. 

The **Context Window** of a [[llm|Large Language Model (LLM)]] is the maximum amount of text (measured in "tokens") that the model can process, "remember," and consider at any single given time when generating a response.

Everything outside of this window simply does not exist to the model.

## Tokens vs. Words

A context window's size is measured in **tokens**, not words. A token can be a single character, a chunk of a word, or an entire word depending on the language and tokenizer used. As a rough rule of thumb for English text, 1 token $\approx$ $\frac{3}{4}$ of a word (or 100 tokens $\approx$ 75 words).

## Why Size Matters

The size of the context window radically defines what an AI model is capable of doing.

*   **Small Window (e.g., 4k tokens):** Good for simple Q&A, translating a few paragraphs, or summarizing a short article. The model will "forget" the beginning of a long conversation.
*   **Medium Window (e.g., 32k - 128k tokens):** Capable of analyzing an entire research paper, a long podcast transcript, or a medium-sized codebase all at once.
*   **Massive Window (e.g., 1M - 2M+ tokens):** Can process multiple full-length books, an entire corporate financial history, or massive repositories of code simultaneously. This allows the AI to draw connections across vast amounts of data that a human could never hold in their working memory.

## The Technical Bottleneck

*Why not just make every context window infinitely large?*

Because computing costs scale quadratically with the size of the context window. The underlying [[self-attention-mechanism|Self-Attention Mechanism]] requires the model to compare every single token against every other token in the window. 

If you double the context window size, the computational power and memory required to process it roughly quadruples. This makes exceptionally large context windows incredibly expensive and slow to process compared to shorter prompts.

### Further Reading

*   **Underlying Technology:** *[[llm|Large Language Models]]*
*   **Memory Mechanism:** *[[self-attention-mechanism|Self-Attention Mechanism]]*
