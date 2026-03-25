---
title: Multi-Head Attention
tags: AI, DeepLearning, NeuralNetworks, NLP
---

# Multi-Head Attention

Multi-Head Attention is like having five different literary critics read the exact same poem; one focuses entirely on the rhyming, another on the emotional subtext, and a third purely on grammatical structure, then they combine their notes to truly understand the whole text.

**Multi-Head Attention** is an architectural extension of the [[self-attention-mechanism|Self-Attention Mechanism]] inside the [[transformer-architecture|Transformer Architecture]]. Instead of forcing a neural network to calculate one single, massive matrix of mathematical relationships between the words in a sentence, it splits the calculation into multiple parallel tracks (or "heads").

Imagine the sentence *"The boy sprinted to the bank because he needed cash quickly."*

If the model only had a single "Attention Head," it would have to calculate every single relationship at once. It might decide the word "bank" is heavily related to "cash" (defining its meaning as a financial institution instead of a river bank). But in doing so, it might completely miss the grammatical relationship connecting "bank" to the pronoun "he" or the action "sprinted."

By slicing the data into pieces and running it through multiple "heads" in parallel, the model basically assigns jobs. Head 1 might unknowingly specialize in tracking noun-verb relationships. Head 2 might become obsessed with tying pronouns to their actors. Head 8 might track emotional tone. After all the heads do their separate math, the Transformer concatenates (smushes) all their findings back together before passing it to the final layer, resulting in a rich, multi-dimensional understanding of the sentence.

## Key Features

*   **Parallel Representation Subspaces:** By projecting the original Queries, Keys, and Values into smaller dimensions multiple times, it allows the model to attend to information from completely separated representation subspaces simultaneously.
*   **No Extra Processing Cost:** Because it splits the data into smaller chunks (e.g., splitting a 512-dimension vector into eight 64-dimension heads), mathematical processing time actually remains identical to what it would be if it ran a single massive attention head.
*   **Ensemble-Like Redundancy:** Having multiple heads provides a failsafe mechanism; if one attention head latches onto irrelevant noise in the sentence, the other heads are still functioning healthily on different tasks.

## FAQs

*1. Are the "Heads" genuinely doing different tasks on purpose?*
Not explicitly. The programmers don't manually assign "Grammar" to Head 1 and "Emotion" to Head 2. The network organically discovers these specializations mathematically over billions of rounds of training. When researchers "look under the hood," they find these patterns naturally emerging.

*2. How does this connect to older models?*
In older RNN models, the network only had a single "hidden state" squeezing all the information through a tight bottleneck. Multi-Head Attention essentially shatters that bottleneck by replacing it with a parallel processing highway.

### Further Reading

*   **Core Logic:** *[[self-attention-mechanism|Self-Attention Mechanism]]* (The fundamental math that every single head uses).
*   **Paper:** *[Attention Is All You Need](https://arxiv.org/abs/1706.03762)* (Vaswani et al., 2017).
