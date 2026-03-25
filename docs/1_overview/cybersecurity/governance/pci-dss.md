---
title: PCI DSS (Payment Card Industry Data Security Standard)
tags: CyberSecurity, Governance, Compliance, Finance
---

# PCI DSS

Securing the swipe.

**PCI DSS** is a set of security standards designed to ensure that ALL companies that accept, process, store, or transmit credit card information maintain a secure environment.

## Why it Exists
The goal is simple: **Reduce payment card fraud.** Unlike [[gdpr|GDPR]] or [[hipaa|HIPAA]], PCI DSS is NOT a government law. It is a private standard created by major credit card companies (Visa, Mastercard, Amex, etc.). However, if you want to accept credit cards, you *must* follow it.

## Key Requirements
1.  **Build and Maintain a Secure Network**: Using [[firewalls|firewalls]] and not using vendor-supplied default passwords.
2.  **Protect Cardholder Data**: Encrypting card data when it is stored and when it is sent across networks.
3.  **Maintain a Vulnerability Management Program**: Using and regularly updating [[antivirus|antivirus]] software.
4.  **Implement Strong Access Control Measures**: Restricting access to cardholder data on a "need to know" basis.
5.  **Regularly Monitor and Test Networks**: Tracking and monitoring all access to network resources and cardholder data.

## Scope
PCI DSS applies to both the physical hardware (card readers) and the software (POS systems, websites) involved in a transaction.
