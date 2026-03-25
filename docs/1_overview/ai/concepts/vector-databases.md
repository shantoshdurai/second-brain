---
title: Vector Databases
tags: ArtificialIntelligence, Databases, Search, Embeddings, RAG
---

# Vector Databases

If [[embeddings|Embeddings]] are *what* an AI thinks, a **Vector Database** is *where* it stores those thoughts.

A Vector Database is a highly specialized database engineered to efficiently store, index, and query high-dimensional data (vectors/embeddings). 

## The Problem with Traditional Databases

Traditional relational databases (like PostgreSQL or MySQL) are built to find **exact matches**. If you search a SQL database for "Cat," it looks for the exact string `C-a-t`. It will completely miss a document titled "Feline characteristics" because the keywords don't match.

## The Solution: Semantic Search

AI models convert unstructured data (text, images, audio) into [[embeddings|mathematical vectors]] that capture the *semantic meaning* of the data. 

Vector databases don't look for exact string matches. Instead, when you run a search query, it converts your query into a vector, plots it on a massive mathematical map, and relies on a concept called **Approximate Nearest Neighbor (ANN)**. It returns the data points that are *physically closest* to your query across thousands of dimensions. 

Because of this, searching for "Cat" will successfully retrieve a document about "Felines."

## The Engine Behind RAG

Vector Databases are the absolute backbone of modern [[rag|RAG (Retrieval-Augmented Generation)]] pipelines. 

When you ask an enterprise AI chatbot a question about your company's HR policy:
1.  Your question is converted into an embedding.
2.  The Vector Database instantly searches millions of company documents and finds the "nearest neighbor" paragraphs that contain the answer.
3.  Those paragraphs are handed to the LLM to generate a grammatically correct, helpful response.

## Popular Vector Databases
*   **Pinecone** (Fully managed SaaS)
*   **Milvus / Zilliz** (Open source / Managed)
*   **Weaviate**
*   **MongoDB Atlas Vector Search** (Adding vector capabilities to an existing NoSQL structure)
*   **Cloudflare Vectorize** (Globally distributed, edge-native vector database)

### Further Reading
*   **Article:** *[MongoDB: What Are Vector Databases?](https://www.mongodb.com/resources/basics/databases/vector-databases)*
*   **Article:** *[Cloudflare: What is a Vector Database?](https://developers.cloudflare.com/vectorize/reference/what-is-a-vector-database/)*
