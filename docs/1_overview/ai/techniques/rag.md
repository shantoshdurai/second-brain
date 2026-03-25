---
title: RAG (Retrieval Augmented Generation)
tags: ArtificialIntelligence, LLM, KnowledgeManagement
---

# RAG

Giving the robot a textbook during the exam.

Standard AI (like ChatGPT) relies on its **Training Memory** (what it learned months ago). It's like a student taking a closed-book exam; if they forgot the fact, they might guess ([[ai-hallucination|hallucinate]]).

**RAG** (Retrieval Augmented Generation) connects the AI to your *live* documents. Before answering, it looks up the specific information in your files.

## How it Works

The acronym itself perfectly describes the pipeline:
1.  **Retrieval:** The system searches a specialized database (a [[vector-databases|Vector Database]]) containing your live documents to find chunks of text exactly relevant to the user's question.
2.  **Augmentation:** The system combines the user's original question *with* the retrieved factual text chunks to create an "augmented prompt".
3.  **Generation:** The AI language model reads this massive new prompt and uses both its internal logic and the provided factual context to generate a highly accurate, grounded answer.

*Example:*
1.  **User Asks:** "How much vacation time do I have?"
2.  **Retrieval:** The system searches your company's HR Handbook PDF and finds a paragraph about PTO.
3.  **Augmentation:** It builds a prompt: "Using the following handbook excerpt, answer how much vacation time the user has: [insert handbook paragraph here]."
4.  **Generation:** "According to the handbook excerpt provided, you have 15 days of vacation."

### The Indexing Pipeline
Before the "Lookup" can happen, developers must prepare the documents using a standard **Indexing Pipeline** (frequently built with frameworks like [LangChain](https://www.langchain.com/)):
1.  **Load:** Ingest raw data from a source (a local directory, a website, an AWS S3 bucket) using a Document Loader.
2.  **Split:** Break large documents into small, manageable "chunks" (e.g., 500 words each). A language model has a finite memory window, so it cannot read a 1,000-page PDF at once.
3.  **Store:** Convert those text chunks into mathematical arrays ([[embeddings|Embeddings]]) and save them inside a specialized **[[vector-databases|Vector Database]]**. When a user asks a question, the system mathematically compares the question against this database to find the most relevant chunks.

### RAG Agents
Traditionally, RAG is a rigid, one-way pipeline. However, by combining RAG with [[agentic-ai|Agentic AI]], you create a **RAG Agent**. 
Instead of forcing the AI to read a document every single time, the developer gives the AI a "Search Database" *tool*. The AI can then reason: *"The user just asked me how my day is going; I don't need to search the HR handbook for that."* Or, *"The user asked a complex question about holiday pay. Let me trigger my Search tool to find the answer."* This creates a vastly more dynamic and conversational system.

## FAQs

*1. Why is this better than [[ai-fine-tuning|fine-tuning]]?*
*   **RAG** is cheaper and instant. If you update the HR handbook, the AI knows immediately.
*   **Fine-tuning** is expensive and slow. You have to "re-train" the brain every time facts change.

*2. Does it stop hallucinations?*
Drastically reduces them. Because the AI is grounded in the text you gave it, it is much less likely to make things up (Hallucinate).

### Further Reading

*   **Article:** *[DataCamp: What is Retrieval-Augmented Generation?](https://www.datacamp.com/blog/what-is-retrieval-augmented-generation-rag)* (Great breakdown of how RAG fixes LLM hallucinations and limits).
*   **Article:** *[Google Cloud: RAG Use Cases](https://cloud.google.com/use-cases/retrieval-augmented-generation)* (Google's overview of using RAG with tools like Vertex AI and BigQuery).
*   **Guide:** *[Oracle: What is RAG?](https://www.oracle.com/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/)*
*   **Tutorial:** *[RAG for Beginners](https://python.langchain.com/docs/use_cases/question_answering/)*
