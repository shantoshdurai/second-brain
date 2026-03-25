---
title: Kubernetes Overview
tags: DevOps, Containerization, Kubernetes
---

# Kubernetes Overview

Kubernetes is like the air traffic controller at an incredibly busy airport; it doesn't build the airplanes or fly them, but it decides which runway they use, redirects them if there is a storm, keeps them from crashing into each other, and magically materializes new airplanes if one breaks down.

**Kubernetes** (often abbreviated as **K8s**) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

While tools like [[docker-overview|Docker]] are fantastic for creating [[docker-container|containers]], what happens when you need to run thousands of [[docker-container|containers]] across dozens of different servers for a massive app like Netflix or Spotify? You need a system to manage that complexity. Kubernetes acts as the automated brain holding it all together. You tell Kubernetes what you want the system to look like (e.g., "I always want 5 copies of my web server running"), and Kubernetes constantly monitors the servers to ensure that state is maintained.

## What Kubernetes Actually Does 

*   **Automated Scaling:** If a sudden spike of users hits your website, Kubernetes can automatically spin up extra containers to handle the load, and then shut them down when traffic drops to save money.
*   **Self-Healing:** If a container crashes, or an entire physical server catches fire, Kubernetes notices immediately and instantly recreates those containers on a healthy, unaffected server.
*   **Load Balancing:** It acts as a traffic cop. If ten thousand requests come in, Kubernetes intelligently distributes those requests across your available containers so none of them get overwhelmed.
*   **Automated Rollouts:** If you release an update with a bug, Kubernetes can smoothly roll back the application to the previous, working version without taking the entire website offline.

## FAQs

*1. Does Kubernetes replace Docker?*
No! They work together. Docker builds and runs the containers (the airplanes). Kubernetes is the orchestration system that directs and manages those containers at scale (the air traffic controller). *See: [[docker-vs-kubernetes|Docker vs Kubernetes]]*.

*2. Why is Kubernetes abbreviated as K8s?*
It's an old tech tradition. The '8' simply stands for the 8 letters between the 'K' and the 's' in the word "Kubernetes".

### Further Reading

*   **Video:** *[Kubernetes in 100 Seconds](https://youtu.be/PziYflu8cB8)* (A rapid-fire, high-level technical breakdown of K8s).
*   **Documentation:** *[What is Kubernetes?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)* (The official documentation explaining the "why" and "how" of K8s).
