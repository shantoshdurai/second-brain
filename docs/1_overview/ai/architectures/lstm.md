---
title: Long Short-Term Memory (LSTM)
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Long Short-Term Memory (LSTM)

An LSTM is like reading a massively long novel while constantly deciding what to write down in a notebook, what to scribble over in the notebook because it's no longer relevant, and what to keep in your active memory for the very next sentence.

**Long Short-Term Memory (LSTM)** is a highly complex, specialized type of [[recurrent-neural-networks|Recurrent Neural Network (RNN)]] designed explicitly to fix the fatal "short-term memory loss" flaw of traditional RNNs over long sequences of data.

Standard RNNs process data in sequence (like a sentence) and pass a "hidden state" (a mathematical memory) from one word to the next. However, as the sequence gets longer, the math doing the passing physically breaks down; a phenomenon known as the **Vanishing Gradient Problem**. By the time a standard RNN reads the 100th word in a paragraph, it has entirely forgotten the 1st word. 

LSTMs solve this by fundamentally redesigning the "memory cell" inside the network. Instead of just passing a single blended blob of memory forward, an LSTM creates a dedicated "cell state" (the notebook); a clean highway running straight through the entire sequence. Alongside this highway, the LSTM acts like an extremely picky editor using three mathematical "gates" to strictly control what enters and exits the notebook.

## Key Features

*   **Forget Gate:** This looks at the new word and the recent past, and actively decides what information in the long-term notebook should be permanently erased (e.g., if the sentence subject changes from "Alice" to "Bob", it erases the pronoun rules for Alice).
*   **Input Gate:** This decides what new, relevant information from the current word is actually important enough to be written into the long-term notebook.
*   **Output Gate:** This decides what specific pieces of the long-term notebook and the current word should be actively pushed forward as the "short-term memory" to predict the very next step.

## FAQs

*1. If LSTMs fixed RNNs, why don't we still use them for everything?*
While LSTMs successfully solved the memory limit, they are still fundamentally sequential (they must read word 1, then word 2, then word 3). Because of this, they are extremely slow to train. The [[transformer-architecture|Transformer Architecture]] eventually replaced them in NLP because Transformers process the entire sequence simultaneously in parallel.

*2. Are there simpler versions of LSTMs?*
Yes. A popular variant is the **Gated Recurrent Unit (GRU)**, which essentially merges the "forget" and "input" gates into a single mechanism, making the network slightly less complex and faster to train while retaining most of the memory benefits.

### Further Reading

*   **The Foundation:** *[[recurrent-neural-networks|Recurrent Neural Networks (RNN)]]* (The architecture that LSTMs evolved from to fix the vanishing gradient problem).
*   **The Successor:** *[[transformer-architecture|Transformer Architecture]]* (The parallel-processing architecture that eventually dethroned LSTMs).
