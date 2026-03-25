---
title: OS Kernel
tags: Software, Core, Admin
---

# OS Kernel

The bridge between software and metal.

The **Kernel** is the absolute core of an [[operating-system|Operating System]]. It is the very first program that loads when you turn on your computer.

Think of the computer as a **Restaurant**:
*   **Hardware:** The Kitchen (Stoves, Fridges).
*   **Applications:** The Customers (Ordering food).
*   **The Kernel:** The **Waiter**.

The Customer (App) cannot just walk into the kitchen (Hardware) and grab a steak. It must ask the Waiter (Kernel), "May I have memory?" The Kernel checks if there is any free, grabs it, and serves it to the App.

## What it Controls

1.  **Memory Management:** Deciding who gets to use the RAM.
2.  **Process Scheduling:** Deciding which app gets to use the CPU right now.
3.  **Device Drivers:** Translating signals from your mouse/keyboard so the CPU understands them.

## FAQs

*1. What is a "Kernel Panic" (or "Blue Screen of Death")?*
It means the Waiter dropped a tray or slipped on the floor.
Because the Kernel controls *everything*, if the Kernel crashes, the entire computer crashes instantly to prevent hardware damage.

*2. Can I see the Kernel?*
Not really. It runs in "Kernel Space" (a VIP area of memory). Your apps run in "User Space." This strict separation prevents a buggy video game from crashing your entire system.

### Further Reading

*   **Video:** *[How a Kernel Works](https://www.youtube.com/watch?v=mUVmV4H5B6k)*.
*   **Deep Dive:** *[Linux Kernel Architecture](https://developer.ibm.com/articles/l-linux-kernel/)*.
