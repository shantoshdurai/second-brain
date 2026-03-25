---
title: Embeddings
tags: ArtificialIntelligence, MachineLearning, DataRepresentation, VectorDatabases
---

# Embeddings

**Embeddings** are the "language" that AI models use to understand the world.

[[machine-learning|Machine learning]] models (like [[llm|LLMs]]) cannot read english text, see pixels in an image, or hear audio waves. They can only process numbers. An embedding is mathematical translation: it transforms a complex, real-world object (like a word, image, or document) into a **vector** (a long list of floating-point numbers).

These lists of numbers plot the object on a massive, multi-dimensional map. 

## The Core Rule: Distance = Similarity

The magic of embeddings is that they capture *semantic meaning and context*. 

Unlike traditional databases that only look for exact keyword matches, embeddings map concepts. If you plot two embedding vectors on a graph:
* **Small Distance:** The concepts are highly related. (The embedding for "Cat" will sit right next to "Dog" or "Kitten").
* **Large Distance:** The concepts are unrelated. ("Cat" will be very far away from "Carburetor").

For example, IBM illustrates word vectors like this:
* `dad` = [0.1548, 0.4848, …, 1.864]
* `mom` = [0.8785, 0.8974, …, 2.794]
* Because the concepts are related, the math ensures the word `father` would calculate out to live in extremely close proximity to `dad` in the vector space.

## Common Use Cases

Because embeddings represent *meaning* rather than exact strings, they are the foundation for many modern AI capabilities:
1.  **Search and Retrieval (Semantic Search):** Finding a document about "felines" when you search for "cats." This is the foundational first step of [[rag|RAG (Retrieval-Augmented Generation)]].
2.  **Recommendation Systems:** Mapping a User's latent preferences to an Item's characteristics. If the User Embedding and Movie Embedding are close together, the system recommends the movie.
3.  **Classification & Clustering:** Automatically grouping similar documents or images together based on how tightly clustered their vectors are in the data space.
4.  **Anomaly Detection:** Finding a data point that is plotted extremely far away from the rest of the normal herd (e.g., fraud detection).

## Where do they live?

Because these multi-dimensional vectors are incredibly complex (often having thousands of dimensions), standard SQL databases struggle to search them quickly. Therefore, embeddings are stored and searched inside specialized [[vector-databases|Vector Databases]].

### Further Reading
*   **Article:** *[IBM: What is Embedding?](https://www.ibm.com/think/topics/embedding)*
*   **Article:** *[Cloudflare: What are Embeddings?](https://www.cloudflare.com/learning/ai/what-are-embeddings/)*
