---
title: Docker Image
tags: DevOps, Containerization, Docker
---

# Docker Image

A Docker Image is like an uneditable, master recipe for a very specific type of cake; it contains exactly what ingredients are needed, what temperature to bake at, and what the frosting looks like, but it isn't the cake itself until you put it in the oven.

A **Docker Image** is a read-only, immutable template that contains the application's source code, libraries, dependencies, tools, and other files needed for an application to run. 

Because an image is immutable (it cannot be changed once created), it ensures the image contents are identical, but the runtime environment may vary due to volumes, environment variables, host kernel, platform/architecture, and runtime configuration. Developers create these images using a simple text file called a `Dockerfile`, which acts as a list of instructions: "Start with a basic Linux system, add Python, download my code, and open port 8000."

## How Docker Images Work

*   **Immutability:** Once an image is built, its contents are locked. If you need to change your app's code, you don't change the image, you build a brand new image.
*   **Layers:** Images are built in layers. If you have an image for your web app, the bottom layer might be the [[operating-system|operating system]] (like Ubuntu), the next layer might be the runtime (like Node.js), and the top layer is your specific app code. If you just change your app code, Docker only rebuilds that top layer, saving time and storage.
*   **Registries:** Images are stored and shared in registries. The most famous public registry is Docker Hub, where you can download official and community images for almost any piece of software imaginable. It is recommended to verify image provenance and scan images for vulnerabilities before use.

## FAQs

*1. What is the difference between an Image and a Container?*
If the Image is the written recipe, the [[docker-container|Container]] is the physical cake you baked from that recipe. You can bake (spin up) as many identical cakes (containers) as you want from a single recipe (Image).

*2. How big is a Docker Image?*
It depends on what is inside it. A basic "Alpine Linux" OS layer might be only 5 Megabytes, whereas a complex image bundled with massive machine learning libraries might be several Gigabytes.

### Further Reading

*   **Documentation:** *[Docker Images and Containers](https://docs.docker.com/get-started/02_our_app/)* (A practical guide on how to build your first image).
