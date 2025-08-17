---
layout:  /src/layouts/ProjectLayout.astro
title: 'Automated Microservices Deployment on AWS'
pubDate: 2024-08-17
description: 'A fully automated CI/CD pipeline to build, provision, and deploy a microservices architecture on AWS.'
languages: ["terraform", "ansible", "docker", "aws", "django", "angular"]
image:
  url: "/images/projects/TI_project.webp"
  alt: "CI/CD Architecture Diagram for Microservices on AWS"
---

This project implements a robust and automated system that manages the entire lifecycle of a microservices application, from building the code to its deployment on a scalable cloud infrastructure on **Amazon Web Services (AWS)**.

The architecture is designed to showcase a modern DevOps workflow, where continuous integration (CI) and continuous delivery (CD) are orchestrated through a specialized toolchain. The system takes an application composed of a **Django** backend, an API, and an **Angular** frontend, containerizes it, and deploys it without manual intervention.

## 🧩 Key Features

-   **Automated CI/CD Pipeline**: Uses **GitHub Actions** as the central engine to automate all phases, from building Docker images to executing deployment scripts.
-   **Infrastructure as Code (IaC)**: Provisions and manages all AWS infrastructure (EC2 Instances, RDS Database, etc.) in a declarative and reproducible way using **Terraform**.
-   **Configuration Management with Ansible**: Automatically configures the target servers (EC2 instances) by installing dependencies like Docker and deploying the application containers.
-   **Containerized Microservices Architecture**: Each application component (backend, API, frontend) is isolated in its own **Docker** container, ensuring consistency and portability.
-   **Secure Secret Management**: Integrates **GitHub Secrets** to securely handle AWS, Docker Hub, and database credentials, preventing their exposure in the source code.

## 💡 The Power of the DevOps Toolchain

The core of this project is to demonstrate the synergy between leading tools in the DevOps ecosystem to create a resilient and efficient deployment workflow.

Instead of a monolithic and manual process, responsibility is clearly divided:

1.  **GitHub Actions** acts as the orchestrator, detecting code changes.
2.  **Docker** encapsulates the application, eliminating environment-related issues.
3.  **Terraform** is responsible for building the "where" (the infrastructure), ensuring it is always correct.
4.  **Ansible** defines "what" runs on that infrastructure, configuring services and deploying the containers.

This modular approach not only automates the process but also makes it observable, repeatable, and easy to scale. It's a practical demonstration of how modern DevOps practices translate into agility and reliability.

## 🛠️ Tech Stack
-   **CI/CD Orchestration:** GitHub Actions
-   **Infrastructure as Code:** Terraform
-   **Configuration Management:** Ansible
-   **Containers:** Docker & Docker Hub
-   **Cloud Platform:** Amazon Web Services (AWS) - EC2, RDS PostgreSQL, IAM
-   **Application Frameworks:** Django (Backend), Angular (Frontend)

## 🎯 Objective

The main objective is twofold: first, to **build an end-to-end, production-ready deployment pipeline** that serves as a template for microservices projects.

Second, this project serves as a technical demonstration of how to integrate key DevOps tools (CI/CD, IaC, Config Management) into a cohesive workflow. It illustrates how automation drastically reduces the risk of human error and accelerates the delivery time for new features.

## 🌐 Repository

You can find the full source code, Terraform configuration files, and Ansible playbooks in the official GitHub repository.

👉 [Explore the code on GitHub](https://github.com/carlosDAC2020/TI_proyect)