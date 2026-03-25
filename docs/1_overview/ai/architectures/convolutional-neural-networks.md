---
title: Convolutional Neural Networks (CNN)
tags: AI, DeepLearning, NeuralNetworks, ComputerVision
---

# Convolutional Neural Networks (CNN)

A Convolutional Neural Network is like looking at a massive painting through a tiny magnifying glass, scanning it row by row to find edges, moving backwards to find shapes, and finally zooming all the way out to realize you're looking at a picture of a dog.

**Convolutional Neural Networks (CNNs)** are a highly specialized class of [[artificial-neural-networks|Artificial Neural Networks]] designed specifically to process grid-like data, making them the absolute undisputed kings of [[computer-vision|Computer Vision]] and image processing.

Imagine feeding a standard neural network a 1000x1000 pixel image. If you flatten that image into a single line, it's 1,000,000 pixels long. A standard network would try to connect every single one of those 1,000,000 pixels to every single neuron in the next layer, resulting in trillions of mathematical connections that would instantly overload the computer. More importantly, flattening the image destroys the spatial relationship (the fact that pixel A is right next to pixel B) which is vital for understanding what the picture actually is.

CNNs fix this by using **Convolutional Layers**. Instead of looking at the whole image at once, a CNN passes a tiny digital "filter" (like a 3x3 pixel magnifying glass) over the image, sliding it left to right, top to bottom. 

## Key Features

*   **Filters (Kernels):** These tiny sliding windows mathematically scan the image looking for specific tiny features. The first layer might have a filter specifically looking for vertical edges, and another looking for horizontal edges. 
*   **Spatial Hierarchies:** As the image moves deeper into the network, the layers zoom out. Layer 1 finds raw edges. Layer 2 combines those edges into simple shapes like circles or corners. Layer 3 combines the shapes into textures or specific features like an eye or a wheel. The final layer combines it all to classify the whole image.
*   **Pooling (Downsampling):** To save computer memory, CNNs aggressively shrink the image as it moves through the network. A "Max Pooling" layer might look at a 2x2 chunk of pixels, throw away three of them, and keep only the brightest pixel, drastically reducing the data size while preserving the most important features.

## FAQs

*1. Are CNNs only used for pictures?*
Mostly, but not exclusively. Since they look for localized patterns in grid spaces, they can be used for 1D sequences (like audio waves or ECG heartbeats) or even 3D medical scans like MRIs.

*2. Are CNNs losing to Transformers?*
Partially. In recent years, Vision Transformers (ViTs) have started applying the [[transformer-architecture|Transformer]] logic to images (by hacking the image into tiny squares and treating each square like a "word"). ViTs often beat CNNs at massive scales, but CNNs are still massively popular because they require far less data and computing power to train effectively.

### Further Reading

*   **Core Concept:** *[[artificial-neural-networks|[[artificial-neural-networks|Artificial Neural Networks]] (ANN)]]* (The foundational technology that CNNs build upon).
*   **The Challenger:** *[[transformer-architecture|Transformer Architecture]]* (The text-based architecture that recently invaded the [[computer-vision|computer vision]] space).
