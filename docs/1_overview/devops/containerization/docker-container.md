---
title: Docker Container
tags: DevOps, Containerization, Docker
---

# Docker Container

A Docker container is like a soundproof glass room inside a crowded office; the people working inside the room can't interact with the rest of the office and have their own dedicated desk and phone, even though they technically exist inside the same building.

A **Docker Container** is a lightweight, standalone, and executable package of software that includes everything needed to run an application. It is the running instance of a [[docker-image|Docker Image]].

Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging. Because they don’t require a bulky [[operating-system|Operating System]] to be booted up for each application (like a Virtual Machine does), containers are incredibly fast, often starting up in a fraction of a second. 

## Key Features of Containers

*   **Isolation:** A container runs in a secure, isolated environment. It has its own private filesystem, networking, and process space. It doesn't know what other processes are running on the host machine.
*   **Ephemeral:** Containers are designed to be temporary and disposable. If a container crashes, you don't usually try to "fix" it; you simply delete it and spin up a perfect, brand new container from the original Image.
*   **Lightweight:** Because multiple containers on the same server share the server's single [[operating-system|operating system]] kernel, they use a fraction of the memory and CPU power that traditional Virtual Machines require.

## FAQs

*1. Where is my data saved if a container is meant to be disposable?*
If you delete a container, any data saved directly *inside* it is deleted too. To save permanent data (like a database), developers use "Volumes," which act like a USB drive plugged into the container. The container writes to the volume; if the container dies, the data on the volume is safe.

*2. How many containers can I run on one computer?*
Because they are so lightweight, a standard server can easily run dozens or even hundreds of containers simultaneously, compared to only a handful of Virtual Machines. 

### Further Reading

*   **Documentation:** *[Use Containers to Build, Share and Run Your Applications](https://www.docker.com/resources/what-container)* (Docker’s official explanation of the running phase of their pipeline).
