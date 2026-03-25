---
title: Generative Adversarial Networks (GANs)
tags: AI, Architectures, DeepLearning, GenerativeAI
---

# Generative Adversarial Networks (GANs)

A counterfeiter trying to print fake money, and a detective trying to spot the fakes. They both train against each other until the counterfeiter's money is completely indistinguishable from the real thing.

**Generative Adversarial Networks (GANs)** are a class of [[machine-learning|Machine Learning]] frameworks designed by Ian Goodfellow in 2014. They consist of two separate neural networks; a **Generator** and a **Discriminator**; that are pitted against each other in a zero-sum game. This architecture is a cornerstone of modern [[generative-ai|Generative AI]], particularly for images, video, and audio.

## The Architecture

1.  **The Generator (The Counterfeiter):** This network takes in random noise and attempts to output data that looks like the real training data (e.g., trying to generate a photo of a human face).
2.  **The Discriminator (The Detective):** This network is fed both *real* data from the training set and *fake* data from the Generator. Its only job is to simply answer: "Is this real or fake?"

As training progresses, the Generator gets incredibly good at creating realistic data to fool the Discriminator, while the Discriminator gets incredibly good at detecting subtle flaws. Eventually, the Generator produces synthetic data so perfect that the Discriminator’s accuracy drops to 50% (meaning it is basically just guessing). 

At this point, the Generator has successfully learned how to create hyper-realistic data from mathematical scratch.

## Use Cases and Implications

*   **Synthesis:** Creating photorealistic images, upscaling old video game textures (DLSS/FSR), or generating missing frames in a video stream.
*   **The Ethics Problem:** GANs are the primary engine behind **[[deepfakes|Deepfakes]]**. Because the Discriminator trains the Generator on how to perfectly match a specific person's likeness, GANs can be utilized for malicious identity spoofing, revenge porn, and political disinformation.

## FAQs

*1. Are GANs better than Diffusion networks?*
Not necessarily. While GANs are incredibly fast and sharp, their training is notoriously unstable (they often suffer from "mode collapse," where the Generator just figures out one single trick that fools the Discriminator and only outputs that one image forever). Modern image generators like Midjourney and DALL-E heavily rely on Diffusion models instead, though GANs remain highly relevant for real-time video generation and manipulation.
