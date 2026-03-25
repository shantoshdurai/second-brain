---
title: Infrastructure as Code
tags: DevOps, Infrastructure, Cloud
---

# Infrastructure as Code (IaC)

Infrastructure as Code (IaC) is like handing an architect a precise digital blueprint instead of handing fifty different construction workers a massive pile of bricks; the architect reads the file and automatically builds everything perfectly to spec without human error.

**Infrastructure as Code (IaC)** is the practice of managing and provisioning computer data centers (like servers, networking, and databases) through machine-readable definition files, rather than through physical hardware configuration or interactive configuration tools (like clicking buttons in a web console).

Historically, setting up a new server online meant a human systems administrator had to log into a cloud provider's web console (like AWS) and manually click through menus; creating a network, provisioning a database, setting up a [[firewalls|firewall]], and launching the virtual machine. This is commonly referred to derisively as "ClickOps."

ClickOps is dangerous because it's slow, prone to human error, and almost impossible to replicate perfectly if the server crashes or needs to be duplicated in a different region. Infrastructure as code solves this by allowing developers to write a configuration file (like a text document) describing exactly what they want. They run the file, and the IaC tool talks to the cloud provider's API to build it all instantly.

## Key Benefits

*   **Version Control:** Because your entire data center is defined in text files, you can store it in Git. You can track exactly who changed a [[firewalls|firewall]] rule, when, and why.
*   **Idempotency:** A good IaC tool is idempotent. This means if you run the same blueprint file 100 times, it won't accidentally spin up 100 servers. It will realize "Ah, this server already exists exactly as described," and do nothing.
*   **Disaster Recovery:** If your entire cloud environment is accidentally deleted, you don't panic. You simply run your IaC script again, and your entire architecture is rebuilt from scratch in minutes.

## FAQs

*1. What is the difference between IaC and a bash script?*
A bash script is *imperative* (you tell the computer *how* to do something, step-by-step: "Create a folder, then download this, then start this service"). Most robust IaC is *declarative* (you simply declare *what* the final state should be: "I want a server with these specs"). The IaC engine figures out the necessary API calls to make that happen.

*2. Who are the major players in IaC?*
**[[terraform-overview|Terraform]]** by HashiCorp is the undisputed industry standard because it works across almost every cloud provider. Other notable tools include AWS CloudFormation (AWS only), Ansible, and Pulumi.

### Further Reading

*   **Concepts:** *[What is Infrastructure as Code?](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac)* (A fantastic breakdown by Red Hat of the philosophy of IaC).
