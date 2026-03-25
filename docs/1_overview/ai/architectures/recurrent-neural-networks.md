---
title: Recurrent Neural Networks (RNN)
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Recurrent Neural Networks (RNN)

A Recurrent Neural Network is like reading a book while constantly keeping your finger on the previous page; it explicitly remembers what it just read a second ago so it can properly understand the current word in context.

**Recurrent Neural Networks (RNNs)** are a specialized class of [[artificial-neural-networks|Artificial Neural Networks]] designed explicitly to process sequential data, such as time-series data (stock prices), audio (speech recognition), or natural language (text).

Standard neural networks assume that every piece of incoming data is completely independent. If you feed a standard network a picture of a dog, and then a picture of a cat, the network doesn't care about the dog when looking at the cat. 

But imagine processing the sentence: *"I grew up in France, so I speak fluent ____."* If an AI processes that word by word, by the time it gets to the blank, it *must* remember the word "France" from earlier in the sequence to accurately guess "French." 

RNNs solve this by introducing an internal loop (a **hidden state**). When an RNN processes word #2, it doesn't just look at word #2; it looks at word #2 *plus* the mathematical "memory" of what it thought about word #1. This looping memory allows it to maintain an ongoing context as it moves through time or sequence.

## Key Features

*   **Sequential Processing:** They process data sequentially, step-by-step from beginning to end, carrying a running "memory" forward at each step.
*   **The Vanishing Gradient Problem:** As traditional RNNs process very long sequences, their "memory" of the early steps gets mathematically diluted and fades away. In the sentence about France, if there were 50 words between "France" and the blank space, a basic RNN would forget about France entirely.
*   **LSTMs and GRUs:** To fix the vanishing memory problem, researchers invented advanced RNN variations like [[lstm|Long Short-Term Memory (LSTM)]] networks, which use complex internal "gates" to explicitly decide what information is vital to keep stored in long-term memory and what to immediately forget.

## FAQs

*1. Are RNNs still the best for processing text?*
No. While they dominated AI language processing for years, they have largely been entirely replaced by the [[transformer-architecture|Transformer Architecture]].

*2. Why did Transformers replace RNNs?*
Because RNNs *must* process things sequentially (step 1, then step 2, then step 3), they cannot be sped up by throwing more computer chips at them. Transformers use the [[self-attention-mechanism|Self-Attention Mechanism]] to process the entire sequence simultaneously in parallel, allowing them to train infinitely faster and track much longer context windows without forgetting.

### Further Reading

*   **Core Concept:** *[[artificial-neural-networks|Artificial Neural Networks (ANN)]]* (The foundational technology that RNNs build upon).
*   **The Successor:** *[[transformer-architecture|Transformer Architecture]]* (The modern architecture that dethroned RNNs in Natural Language Processing).
