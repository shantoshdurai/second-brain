---
title: Host-Guest File System (HGFS)
tags: 
---

# Host-Guest File System (HGFS)

Host-Guest File System (HGFS) is a proprietary file system protocol developed by VMware. It is designed to allow a virtual machine (the "Guest") to access files and directories stored on the physical computer (the "Host") seamlessly, without needing complex network setups like FTP or SMB.

![HGFS](../assets/images/hgfs.png)

### How It Works
- Think of HGFS as a specialized "tunnel" drilled through the wall that usually separates a virtual machine from the host.
- On the Host: You verify a specific folder (e.g., `C:\Documents`) to be "shared." The virtualization software (like VMware ESXi or Workstation) acts as an HGFS server for this folder.
- On the Guest: A driver (installed via VMware Tools) acts as the client. It mounts this shared folder so it looks like just another drive or directory inside the VM (e.g., `/mnt/hgfs/` on Linux or a Network Drive on Windows).
- The Transfer: When you copy a file to this folder inside the VM, HGFS intercepts the request and passes the data directly to the host's [[hard-drive|hard drive]].

### Resources

- [The Official Architecture (Technical Documentation)](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/tools/12-4-0/vmware-tools-administration-12-4-0/introduction-to-vmware-tools/vmware-tools-device-drivers.html): his is the primary source. It explains the `vmhgfs` driver role within the VMware Tools suite. It details how the file system redirector works to allow the Guest OS to communicate with the Host file system without using standard network protocols (like SMB or NFS).