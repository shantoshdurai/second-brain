---
title: Monolithic Architecture
tags: DevOps, Architecture, SoftwareDesign
---

# Monolithic Architecture

A monolithic architecture is like a massive department store where everything, shoes, groceries, electronics, and the employee cafeteria, is built under one single, massive roof. It's simple for customers to find because there is only one front door, but if the main electrical panel breaks or the roof leaks, the entire store has to shut down until it is fixed.

**Monolithic Architecture** is the traditional, unified model for designing a software program. In this approach, all components of the application, such as the user interface, the business logic, and the database access layer, are deeply interconnected and packaged together as a single executable file or database directory.

For decades, the standard way to build a web application was to write all the code in a single repository and deploy it to a single server. 

## Advantages of the Monolith

Despite its current reputation as "legacy" architecture, monoliths are actually the optimal choice for many new projects:

*   **Simple to Develop:** You open your code editor, and the entire app is right there. You don't have to worry about different parts of the app communicating over a network.
*   **Simple to Deploy:** You simply copy the single built application file over to a server, start the process, and your application is live.
*   **Simple to Test:** End-to-end testing is incredibly straightforward because everything runs in one place.

## Why Do They Break Down? 

A monolith only becomes a problem when it becomes too successful. As a company scales, the monolith becomes massive (often millions of lines of code) codebase:

1.  **The Blast Radius:** In a monolith, a severe bug in the "photo upload" module can crash the entire application, breaking the "checkout" and "messaging" features as well.
2.  **Slow Deployments:** For a developer to fix a tiny typo, the entire massive application must be compiled, tested, and redeployed, which can take hours.
3.  **Inefficient Scaling:** If your application is experiencing heavy traffic entirely because of the "search" feature, you cannot just scale up the search feature. You have to duplicate the entire massive monolith across multiple servers, wasting memory and CPU on features that don't need it.

When these pain points begin to drastically slow down a development team, businesses usually look to break the monolith apart by adopting a [[microservices-architecture|Microservices Architecture]].

## FAQs

*1. Is it bad practice to build a monolith today?*
Not at all. "Start monolith, extract microservices later" is actually a widely respected engineering philosophy. Building microservices requires a massive amount of infrastructure overhead that a startup simply doesn't need when trying to find product-market fit.

### Further Reading

*   **Engineering Blog:** *[Monolith First (Martin Fowler)](https://martinfowler.com/bliki/MonolithFirst.html)* (Fowler's famous essay arguing why almost all successful microservice architectures started as a monolith).
