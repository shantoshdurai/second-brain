---
title: Root Access
tags: OperatingSystem, AccessControl, Privileges
---

# Root Access

God mode for your computer.

In every [[operating-system|operating system]], there is a hierarchy of users. Normal users have limits (they can't delete system files or install big programs). **Root** (also called "Administrator" or "Superuser") is the user with **Zero Limits**.

If you have Root Access, you can do anything: read any file, delete the entire [[operating-system|operating system]], or change the rules of how the computer works.

## Why is it called Root?
Think of the file system like a tree.
*   **Branches/Leaves:** Normal users live here. They can only affect their own little branch.
*   **The Root:** The base of the tree. If you control the root, you control the entire tree.

## The Danger

Running your computer as Root all the time is like driving a car without a seatbelt and with the doors removed.
If you (or a virus) make a mistake while you are Root, nothing stops you.
*   **As a Normal User:** [[malware|Malware]] might delete your photos.
*   **As Root:** [[malware|Malware]] can wipe the [[hard-drive|hard drive]], install a permanent spy, and lock you out forever.

## FAQs

*1. How do I get Root access safely?*
On Linux/Mac, you use the command `sudo` ("SuperUser DO").
*   `rm file` -> "Permission Denied."
*   `sudo rm file` -> "Okay, boss. Deleted."
It asks for your password to confirm "Are you sure you want to use your God powers for this?"

*2. Is Root different from Admin?*
Conceptually, no.
*   **Root:** The name used in Linux/Unix/MacOS.
*   **Administrator:** The name used in Windows.
*   **Jailbreak/Rooting:** Gaining these rights on phones (iPhones/Androids) that normally block you from having them.

### Further Reading

*   **Article:** *[What is Sudo?](https://www.linux.com/training-tutorials/linux-101-introduction-sudo/)*
*   **Definition:** *[Ubuntu's Root Sudo](https://help.ubuntu.com/community/RootSudo)*
