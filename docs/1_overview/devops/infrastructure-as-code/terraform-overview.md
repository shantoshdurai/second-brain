---
title: Terraform Overview
tags: DevOps, Infrastructure, Cloud, Terraform
---

# Terraform Overview

Terraform is like a universal general contractor who speaks every language in the world. You hand them a single set of English blueprints, and they can boss around the plumbers, the electricians, and the carpenters, no matter what country the building is in.

**Terraform**, created by HashiCorp, is the industry-standard [[infrastructure-as-code|Infrastructure as Code (IaC)]] tool that allows you to define, provision, and manage cloud infrastructure using a declarative configuration language.

Instead of writing custom scripts to talk to Amazon Web Services (AWS), a different script to talk to Google Cloud, and another script to manage your GitHub repositories, you just write a `.tf` (Terraform) file. You declare your desired end-state using HashiCorp Configuration Language (HCL), a human-readable text format.

When you run `terraform apply`, Terraform calculates the difference between what currently exists in the real world and what you asked for in your code. It then formulates a completely optimized plan and makes the necessary API calls to create, update, or destroy resources to match your blueprint exactly.

## How Terraform Works in Practice

1.  **Write:** You write configuration files (`main.tf`) defining the resources you want (e.g., "I want an AWS EC2 instance named 'Web-Server'").
2.  **Plan:** You run `terraform plan`. Terraform looks at your code, looks at the actual cloud provider, and prints out a dry-run list of *exactly* what it intends to change without actually touching anything yet.
3.  **Apply:** You run `terraform apply`. Terraform reaches out to the cloud APIs via its [[terraform-providers|Providers]] and provisions the infrastructure. 

## FAQs

*1. Is Terraform only for Cloud Infrastructure?*
No! While it is most famous for spinning up servers on AWS or Azure, Terraform can manage *anything* that has an API. You can write Terraform code to configure your Spotify playlists, order Domino's pizza, or manage user permissions in Okta.

*2. How does Terraform know what already exists in my cloud account?*
Terraform maintains a highly detailed tracking ledger called the [[terraform-state|Terraform State]] file. Before making any changes, it looks at this file to remember what it built last time.

### Further Reading

*   **Documentation:** *[What is Terraform?](https://developer.hashicorp.com/terraform/intro)* (The official HashiCorp introduction to the tool).
*   **Video:** *[Terraform in 100 Seconds](https://youtu.be/tomUWcQ0P3k)* (A rapid-fire overview of the Terraform workflow).
*   **Course:** *[Complete Terraform Course - Beginner to Pro](https://youtu.be/7xngnjfIlK4)* (A comprehensive, multi-hour deep dive into practical AWS deployment with Terraform).
