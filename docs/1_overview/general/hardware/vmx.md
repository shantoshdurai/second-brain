---
title: VMX (Virtual Machine Extension)
tags: Virtualization, VMware, Configuration
---

# VMX File

The blueprint for a virtual machine.

When you create a Virtual Machine (VM) using VMware, it isn't just one magic blob. It's a folder full of files. The **.vmx** file is the text file that describes the VM's hardware configuration.

It tells the software: "This VM should have 4GB of RAM, 2 CPU cores, and use *this* specific [[hard-drive|hard drive]] file."

## Inside the File

It is just a text file. If you open it with Notepad, it looks like this:

```ini
memsize = "4096"
numvcpus = "2"
ethernet0.virtualDev = "e1000"
scsi0.virtualDev = "lsilogic"
```

*   `memsize`: How much RAM (Memory) it gets.
*   `numvcpus`: How many Processors it gets.
*   `ethernet0`: What kind of Network Card it has.

## FAQs

*1. Can I edit this file?*
Yes, but be careful. Experts edit it to tweak settings that aren't available in the usual settings menu. If you make a typo, the VM won't start effectively "breaking" the machine blueprint.

*2. Is VMX the [[hard-drive|hard drive]]?*
No.
*   **.VMX:** The *Blueprint* (Text file, tiny size).
*   **.VMDK:** The *Hard Drive* (Data file, huge size).

*3. Is this used by all virtualization software?*
No. `.vmx` is specific to **VMware** (Fusion, Workstation, Player, ESXi).
*   VirtualBox uses `.vbox`.
*   Hyper-V uses `.xml` or `.vmcx`.

### Further Reading

*   **Documentation:** *[VMware VMX File Parameters](https://sanbarrow.com/vmx/vmx-parameters.html)* (Unofficial but excellent guide).
*   **Official:** *[Editing the .vmx file for your VMware Fusion virtual machine](https://kb.vmware.com/s/article/1014782)*
