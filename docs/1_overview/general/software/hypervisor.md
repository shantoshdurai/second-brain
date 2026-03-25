---
title: Hypervisor
tags: Virtualization, CloudComputing, Infrastructure
---

# Hypervisor

The landlord of the digital apartment building.

If a physical computer is a building, the **Hypervisor** is the property manager that divides it into separate apartments (Virtual Machines).

It is a layer of software that sits between the physical hardware (metal) and the virtual operating systems. It allows one physical computer to pretend to be many different computers at once.

## Types of Hypervisors

There are only two main types you need to know:

### Type 1: Bare Metal (The Heavy Lifter)
This runs **directly** on the hardware, replacing the [[operating-system|operating system]] (like Windows). It's very fast and efficient.
*   *Analogy:* The building manager lives in the lobby and controls everything directly.
*   *Examples:* VMware ESXi, Microsoft Hyper-V (Server), KVM.

### Type 2: Hosted (The App)
This runs **inside** an [[operating-system|operating system]], just like a regular app (like Chrome or Spotify). It's easier to use but slower.
*   *Analogy:* You are subletting a room inside someone's existing apartment.
*   *Examples:* VMware Workstation, Oracle VirtualBox.

## FAQs

*1. Why do we use them?*
*   **Efficiency:** Instead of buying 10 small servers that are mostly idle, you buy 1 powerful server and run 10 virtual servers on it.
*   **Safety:** If one "apartment" (VM) catches fire (gets a virus), the others are safe because the walls (Hypervisor) are fireproof.

*2. What is the difference between a Hypervisor and a Container (Docker)?*
*   A **Hypervisor** virtualizes the *Hardware* (giving you a full, heavy computer).
*   A **Container** virtualizes the *Operating System* (giving you a lightweight space to run just an app).

### Further Reading

*   **Comparison:** *[Hypervisor vs. Containers Explained](https://www.redhat.com/en/topics/containers/containers-vs-vms)*
*   **Deep Dive:** *[VMware's "What is a Hypervisor?"](https://www.vmware.com/topics/glossary/content/hypervisor)*
