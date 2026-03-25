---
title: AI Hallucination
tags: ArtificialIntelligence, LargeLanguageModels, Risks
---

# AI Hallucination

When a smart robot confidently answers a question with a convincing lie.

**AI Hallucination** is when a Large Language Model ([[llm|LLM]]) perceives patterns that aren't actually there and generates false information as if it were absolute fact. It doesn't *know* it's lying; it just thinks it's completing the pattern.

It is like seeing a face in the clouds. The face isn't real, but your brain insists on connecting the dots to make it look like one.

## Why does it happen?

[[llm|LLMs]] are not "Knowledge Databases" (like Wikipedia); they are "Prediction Engines" (like Autocomplete).
*   **Autocomplete:** It guesses the next mostly likely word.
*   **The Gap:** If it doesn't know the answer, it guesses the most *plausible-sounding* words to fill the silence, prioritizing "sounding correct" over "being correct."

## FAQs

*1. Can we fix it?*
Not entirely yet. We can reduce it (using techniques like [[rag|RAG]] - Retrieval Augmented Generation), but because [[llm|LLMs]] are probabilistic (based on chance), there is always a tiny chance they will roll the wrong dice.

*2. Is it dangerous?*
Yes, because it is **Confident**.
If you ask an AI "Who is the CEO of Apple?", it might say "Tim Cook" (True).
If you ask "Who is the King of Mars?", it might invent a name and a backstory instead of saying "I don't know."

### Further Reading

*   **Article:** *[IBM: What are AI Hallucinations?](https://www.ibm.com/topics/ai-hallucinations)*
*   **Deep Dive:** *[Why LLMs Hallucinate (Zapier)](https://zapier.com/blog/ai-hallucinations/)*
