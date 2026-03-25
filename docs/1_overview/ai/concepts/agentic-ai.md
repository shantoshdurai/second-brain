---
title: Agentic AI
tags: ArtificialIntelligence, AgenticAI
---

# Agentic AI

### In a nutshell
Agentic AI is an artificial intelligence that doesn't just answer your questions; it actively uses tools and takes steps to complete goals for you.

**Agentic AI** has **Agency**. It is given a broad goal (e.g., "Plan and book my vacation"), and it figures out the necessary sub-tasks, executes them one by one, checks its own work, and keeps going until the job is done. It is an AI with "hands" (tools) and a "brain" (planning capabilities).

### How it Works

To understand Agentic AI, we break it down into a loop of three core components:

1. **Perception (The Input):** The agent observes the current state of things.
2. **Reasoning (The Brain):** It decides what to do next based on the goal.
3. **Action (The Tools):** It executes a command (searching the web, running code, sending an email).

<img src="https://d3a7ykdi65m4cy.cloudfront.net/en/s3fs-public/inline-images/805x540_How-Does-Agentic-AI-Work.png" alt="Agentic AI Flow"/>

### How the Agent thinks
<details>
<summary><strong>Click to expand</strong></summary>

One of the most popular methods for Agentic AI is called **ReAct** (Reasoning + Acting).

1.  **Thought:** "The user wants to buy a stock. First, I need to check the current price."
2.  **Action:** *Trigger Tool: Stock_Market_API(Symbol='AAPL')*
3.  **Observation:** "The API returned $150.00."
4.  **Thought:** "That is within the user's budget. I should execute the buy order now."
5.  **Action:** *Trigger Tool: Brokerage_Buy(Symbol='AAPL', Qty=1)*

</details>

---
<br>


### The Analogy: Librarian vs. Assistant

| Feature | Standard AI (Generative) | Agentic AI |
| :--- | :--- | :--- |
| **The Persona** | Librarian | Assistant |
| **Interaction** | You ask: *"How do I bake a cake?"* <br> They hand you a recipe book. | You ask: *"I need a cake for Saturday."* <br> They find a bakery, order it, and pay for it. |
| **Capability** | Knowledge Retrieval *(It knows information.)* | Task Execution *(It performs actions.)* |
| **Autonomy** | Low. Needs a prompt for every output. | High. Can loop multiple times on one prompt. |

---
<br>

## The 7 Types of AI Agents

As AI agents evolve, they possess varying degrees of complexity and autonomy. The seven primary types, from simplest to most advanced, are:

1. **Simple Reflex Agents:** React immediately to basic environmental inputs using predefined rules (e.g., smart sprinklers that turn on when smoke is detected). They possess no memory.
2. **Model-Based Reflex Agents:** Use an internal "world model" to track unobserved parts of their environment (e.g., self-driving cars knowing a pedestrian is still behind a truck).
3. **Goal-Based Agents:** Execute multi-step planning and evaluate future consequences to reach a specific objective (e.g., warehouse robots finding the most efficient path to pack a pallet).
4. **Learning Agents:** Use feedback (a "critic" mechanism) to improve their own performance over time through trial and error (e.g., Netflix's recommendation engine).
5. **Utility-Based Agents:** Handle tradeoffs between competing goals by mathematically evaluating which outcome provides the maximum "utility" or benefit (e.g., stock trading bots balancing risk vs. reward).
6. **Hierarchical Agents:** Operate in a tiered command structure where high-level manager agents break down complex goals and delegate subtasks to lower-level worker agents (e.g., automated manufacturing floors). Uses concepts from [[rlhf#Advanced Variation Hierarchical Reinforcement Learning (HRL)|Hierarchical Reinforcement Learning]].
7. **Multi-Agent Systems (MAS):** Swarms of independent agents that collaborate or compete to solve massive problems, communicating with each other dynamically.

---
<br>

### Further Reading

* **Concept:** *“[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/pdf/2210.03629)”* (The foundational paper).
* **Frameworks to try:** [LangChain](https://www.langchain.com/) or [AutoGPT](https://news.agpt.co/).

