---
title: Positional Encoding
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Positional Encoding

Positional Encoding is like handing an alien a giant pile of randomly shuffled books, but mathematically printing page numbers and chapter numbers onto the spine of every single book so the alien automatically knows what order they should be read in.

**Positional Encoding** is the vital mathematical trick used in the [[transformer-architecture|Transformer Architecture]] to give the otherwise order-blind neural network a strict sense of sequence, time, and word order.

Older language models, like [[recurrent-neural-networks|Recurrent Neural Networks]] (RNNs) and [[lstm|LSTMs]], read sentences linearly from left to right. They natively understood that word #2 came after word #1 simply because they processed it second.

Transformers completely abandoned sequential reading to gain massive speed and power. A Transformer swallows every single word in an entire book simultaneously (using the [[self-attention-mechanism|Self-Attention Mechanism]]). The fatal problem? Mathematically, if you feed a Transformer the sentence *"The dog chased the cat"* versus *"The cat chased the dog,"* the model processes them as the exact same unordered soup of words because it isn't reading left-to-right. 

To fix this fatal flaw without losing parallel processing speed, researchers invented Positional Encoding. Before a word enters the Transformer, the system injects a complex mathematical signal (a specific cocktail of sine and cosine waves) directly into the word's data vector. This signal acts like an invisible, permanent timestamp. When the Transformer ingests all the words simultaneously, those timestamps allow it to instantly calculate the exact distance and order between every word in the sequence.

## Key Features

*   **Sine and Cosine Waves:** The original 2017 paper uses sinusoidal functions of varying frequencies. This allows the model to easily learn to attend by relative positions, because the "distance" between any two positions can be represented as a predictable linear function.
*   **Additive, Not Appended:** The positional signal isn't just slapped onto the end of the word data. It has the exact same dimensions as the word data itself and is literally added (summed) *into* the word vector, smoothly combining "meaning" and "position" before it enters the model.
*   **Absolute and Relative:** While the original paper used fixed, absolute timestamps, modern variations often use *Relative* Positional Encoding (focusing entirely on the distance *between* tokens rather than their absolute index number in the text).

## FAQs

*1. Does it work for non-text data?*
Yes! Positional encoding is a huge reason why the [[transformer-architecture|Transformer architecture]] eventually conquered [[computer-vision|computer vision]] (e.g., Vision Transformers). An image is split into hundreds of grid patches, and positional encodings timestamp each patch so the model knows which patch is the "top-left" corner and which is the "bottom-right."

*2. What happens if you take it out?*
An AI without positional encoding essentially becomes a glorified "Bag-of-Words" model. It knows exactly *what* vocabulary was used, but fails completely at understanding syntax, grammar, or narrative structure.

### Further Reading

*   **Core Application:** *[[transformer-architecture|Transformer Architecture]]* (The neural network that specifically requires this fix).
*   **Core Mechanism:** *[[self-attention-mechanism|Self-Attention Mechanism]]* (The parallel processing engine that caused the sequence problem in first place).
