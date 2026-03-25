---
title: Model Context Protocol (MCP)
tags: AI, Integrations, OpenSource, LLMs
---

# Model Context Protocol (MCP)

The Model Context Protocol is like a universal USB-C port for an AI brain. Instead of engineers having to invent a custom-shaped cable every single time they want an AI to read a new book, search a specific database, or send an email, MCP provides one standard plug. If a tool has an "MCP plug," the AI can instantly connect to it, understand it, and use it.

The **Model Context Protocol (MCP)** is an open standard introduced by Anthropic. It dictates a universal way for AI applications (like Claude or conversational agents) to securely connect to external data sources and tools.

A major historical limitation of Large Language Models (LLMs) is that they are trapped in silos; they only know what they were trained on up to a certain date. If an AI tries to answer a question about a live stock price or a private document on your computer without access to that data, it will likely guess and "hallucinate" an incorrect answer. MCP solves this isolation.

## The Client-Server Architecture

MCP operates on a simple Client-Server model to bridge the AI and the external world.

*   **The MCP Client:** This is the AI application itself (e.g., the Claude Desktop App or your custom AI agent). It is the entity that *needs* information or *wants* to take an action.
*   **The MCP Server:** This is a lightweight program acting as a specialized assistant. An engineer builds an "MCP Server" specifically to interact with a single tool or database (like a Slack MCP Server, a Google Drive MCP Server, or a local SQL Database MCP Server).

When the AI needs to answer a prompt, the **Client** asks the appropriate **Server** for the context. The Server translates that request into a language the specific database understands, retrieves the data, and hands it securely back to the AI Client. 

## Why is a "Universal Standard" Important?

Before MCP, if a developer wanted their AI app to read from Jira, fetch from GitHub, and search the web, they had to write three entirely different, complex lines of custom integration code. 

With MCP, the integration is standardized. An engineer builds an MCP Server for GitHub *once*, and then *any* AI application that speaks the MCP standard can instantly connect to GitHub without additional custom coding. It shifts AI from being a standalone brain in a jar to a highly connected [[operating-system|operating system]].

## FAQs

*1. Does MCP give the AI access to read everything on my computer?*
No. MCP is built heavily around user consent and security. The AI client can only access the specific MCP Servers you explicitly install and authorize, and the server restricts the AI exactly to the parameters set by the administrator.

*2. Who "owns" the MCP standard?*
It is entirely open-source. While Anthropic spearheaded its creation to make models like Claude more useful, they open-sourced the protocol so that the entire AI industry (OpenAI, Google, independent developers) could adopt it and build a unified ecosystem of tools.

### Further Reading

*   **Official Documentation:** *[modelcontextprotocol.io](https://modelcontextprotocol.io/)* (The official open-source hub for building and using MCP Servers).
*   **Announcement:** *[Anthropic: Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)* (The launch post detailing the rationale behind standardizing AI tool use).
