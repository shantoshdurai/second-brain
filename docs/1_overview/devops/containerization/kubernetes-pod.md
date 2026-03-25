---
title: Kubernetes Pod
tags: DevOps, Containerization, Kubernetes
---

# Kubernetes Pod

A Kubernetes Pod is like a single peapod; it almost always contains just one pea (a [[docker-container|container]]), but sometimes it contains two peas that are completely inseparable and need to share the exact same pod to survive.

A **[[kubernetes-overview|Kubernetes]] Pod** is the smallest, most basic deployable object in Kubernetes. You do not deploy raw [[docker-container|containers]] directly to a Kubernetes cluster you wrap the container inside a Pod first.

A Pod represents a single instance of a running process in your cluster. While a Pod can technically hold multiple containers, 99% of the time, the "one-container-per-Pod" model is the standard. If you want to scale your application, you don't shove more containers into a single Pod; instead, Kubernetes creates entirely new Pods.

## Key Concepts of a Pod

*   **Atomic Unit:** The Pod is the base unit of scheduling. Kubernetes spins up, shuts down, or moves entire Pods, not the individual containers inside them.
*   **Shared Resources:** If a Pod *does* contain multiple containers (often called a "sidecar" pattern, like having one container run your app while a second container in the same pod handles logging), those containers share the same network IP address, the same port space, and the same storage volumes.
*   **Mortal Nature:** Pods are ephemeral. If a Pod dies, or the server it is running on dies, Kubernetes does not attempt to resurrect it. It simply spawns a replacement Pod on a healthy machine.

## FAQs

*1. Why wrap a container in a Pod instead of just deploying the container directly?*
Wrapping it in a Pod gives Kubernetes an abstraction layer. It allows Kubernetes to manage different types of container runtimes (like Docker, containerd, CRI-O) uniformly, and it provides a way to easily pair secondary helper containers (sidecars) with your primary application without rewriting its code.

*2. Does my app scale by adding more containers into a Pod?*
No! To scale an application to handle more website traffic, Kubernetes creates more replicas of the *entire Pod*.

### Further Reading

*   **Documentation:** *[Understanding Kubernetes Pods](https://kubernetes.io/docs/concepts/workloads/pods/)* (The official documentation on the mechanics of Pods).
