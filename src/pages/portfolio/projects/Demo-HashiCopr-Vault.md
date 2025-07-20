---
layout:  /src/layouts/ProjectLayout.astro
title: 'HashiCorp-Vault-Demo'
pubDate: 2024-05-13
description: 'Dynamic Database Credentials with Django and HashiCorp Vault-'
languages: ["python", "django", "docker", "postgresql","hashicorp-vault"]
image:
  url: "/images/projects/vault-dj-demo.webp"
  alt: "HashiCorp-Vault-Demo"
--- 

A practical demonstration of how to dramatically improve application security by managing database credentials dynamically with HashiCorp Vault. This project showcases a simple Django application that, instead of using static, long-lived credentials, requests them on-demand from Vault.

## 🧩 Features

- **Dynamic Credential Generation:** Eliminates the need for static, long-lived database credentials that can be leaked or compromised.
- **Credential-less Application Configuration:** The Django application does not need to store sensitive database secrets in configuration files or environment variables.
- **Automatic Credential Rotation:** Vault handles the rotation of credentials automatically after their short Time-To-Live (TTL) expires, minimizing the window of opportunity for attackers.
- **Centralized Access Control:** Database access can be easily managed and instantly revoked from a central point (Vault), regardless of the number of applications or database instances.
- **Practical Django Integration:** Provides a clear, working example of how to implement this modern security pattern into a real-world Python web framework.

## 💡 Technologies Used

- **HashiCorp Vault:** For secret management and dynamic credential generation.
- **Django:** As the sample web application requesting credentials.
- **PostgreSQL:** The database for which credentials are being managed.
- **Docker:** To easily run the PostgreSQL database instance.

## 🎯 Objective

The primary goal of this project is to showcase a modern, secure pattern for managing database access. In traditional applications, database credentials are often static and stored in config files, making them a prime target. If leaked, they provide long-term access to sensitive data.

This demo illustrates a **Zero Trust** approach, where the application is never explicitly trusted with a permanent secret. Instead, it authenticates with Vault and receives temporary, short-lived credentials just in time to perform its database operations. This significantly reduces the attack surface and enhances the overall security posture of any application.

## 🌐 Repository

You can find the full source code and setup instructions for this demo in the official GitHub repository.

👉 [Explore the code on GitHub](https://github.com/carlosDAC2020/HashiCorp-Vault-Demo)
---