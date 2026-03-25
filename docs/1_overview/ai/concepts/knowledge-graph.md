---
title: Knowledge Graph
tags: AI, DataStructures, InformationRetrieval, NLP
---

# Knowledge Graph

A massive web of interconnected facts, rather than just a rigid table of numbers.

A **Knowledge Graph** (or Semantic Network) is a data structure that represents information by capturing the relationships between different entities (objects, events, situations, or abstract concepts). Instead of storing data in isolated rows and columns like a traditional relational database, a knowledge graph stores data as **nodes** (the entities) connected by **edges** (the relationships).

For example, a knowledge graph wouldn't just store "Leonardo da Vinci" and "Mona Lisa" in separate text columns. It would map: [Leonardo da Vinci] --(painted)--> [Mona Lisa].

## Why are they important?

As data becomes more complex, simply searching for keywords is no longer enough. Knowledge graphs provide context and semantics, allowing systems to understand the *meaning* behind the data. 

*   **Context for AI:** While a [[vector-database|Vector Database]] is excellent at finding *similar* text via [[embeddings]], a knowledge graph excels at finding *logical relationships*. Modern RAG (Retrieval-Augmented Generation) systems often combine both to give [[llm|LLMs]] highly accurate, structured facts to prevent [[ai-hallucination|hallucinations]].
*   **Search Engine Optimization (SEO):** Google's transition from a "string matching" search engine to a "thing matching" search engine was driven by the Google Knowledge Graph. This is why searching for a famous person gives you a detailed infobox on the right side of your screen summarizing their life, family, and direct relationships.

## Key Components

A knowledge graph is built on a specific structure often referred to as an RDF triple:
1.  **Subject:** The main entity (e.g., "Paris").
2.  **Predicate:** The relationship (e.g., "is the capital of").
3.  **Object:** The related entity (e.g., "France").

## FAQs

*1. Is it the same as a graph database?*
Not exactly. A graph database (like Neo4j) is the physical database management system used to store and query the graph data. A Knowledge Graph is the actual map of interconnected data and the ontology (the rules defining what things mean) built *on top* of that database.

*2. How does an AI build them?*
Through Natural Language Processing (NLP). AI models can be trained to read vast amounts of unstructured text (like Wikipedia), identify the entities, extract the relationships between them, and automatically map them into a knowledge graph.

### Further Reading

*   **Complementary Tech:** *[[vector-databases|Vector Databases]]*
*   **Core Concept:** *[[generative-ai|Generative AI]]*
