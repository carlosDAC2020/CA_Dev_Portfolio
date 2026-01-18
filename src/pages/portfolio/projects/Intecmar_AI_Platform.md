---
layout: /src/layouts/ProjectLayout.astro
title: 'Intecmar AI Platform'
pubDate: 2026-01-18
description: 'A comprehensive microservices platform powered by Generative AI to automate technological surveillance and digital publishing workflows. Features autonomous R&D agents and an automated magazine layout engine.'
languages: ["python", "fastapi", "langchain", "docker", "postgresql"]
image:
  url: "/images/projects/intecmar_ai/mag_home.png" 
  alt: "Intecmar AI Platform - Dashboard"
---

**Intecmar AI Platform** is an integral solution designed to modernize and automate the complex processes of technological surveillance and digital publication management for **Cotecmar**. The platform combines a robust distributed microservices architecture with advanced Generative AI capabilities to drastically reduce the time between information discovery and knowledge dissemination.

Its value proposition rests on two fundamental pillars: **Autonomous Technological Surveillance**, capable of digesting official calls for proposals and generating scientific project ideas, and a **Digital Magazine Management System**, which streamlines the layout and distribution of interactive newsletters.

## 🤖 Module 1: The R&D Surveillance Agent (Wizard I+D+i)

At the heart of the platform is an intelligent agent designed to act as a virtual R&D consultant. Unlike standard chatbots, this module uses a **LangGraph-based state machine** to guide the user through a complex lifecycle:

### 1. Discovery & Ingestion
The user starts by selecting official calls from national or international sources. The agent automatically ingests PDF documents, extracting critical data such as funding limits, deadlines, and strategic objectives using semantic analysis.

![Agent Discovery View](/images/projects/intecmar_ai/agent_home.png)
![AI Evaluation Sheet](/images/projects/intecmar_ai/agent_ingest.png)

### 2. Ideation & Co-Creation
Using the extracted context, the LLM proposes 3-4 unique project ideas aligned with the specific requirements of the call. This grid allows for a "human-in-the-loop" workflow where researchers can edit titles and objectives before proceeding.

![Ideas Grid](/images/projects/intecmar_ai/agent_ideas.png)

### 3. Deep Research & Delivery
Once an idea is selected, the agent acts autonomously. It queries academic sources (Arxiv, Semantic Scholar), synthesizes the state of the art, and generates a full technical report. It even creates custom diagrams and conceptual images using a specialized image generation subgraph.

![Final Technical Report](/images/projects/intecmar_ai/agent_final.png)

---

## 📚 Module 2: Magazine Management Center

The second major component addresses the need for rapid knowledge dissemination. This module turns a tedious manual design process into a fluid, one-click workflow.

### Intelligent Curation & Automation
Users can select multiple surveillance findings and add them to a "shopping cart." The system then consolidates these items into a single publication. With one click, the **Automated Design Engine** renders a professional PDF, strictly adhering to corporate identity guidelines (cover, internal layout, and closing), ready for distribution.

<div align="center">
  <img src="/images/projects/intecmar_ai/mag_curaduria_intelogente.png" alt="Content Curation" style="border-radius: 8px; margin-bottom: 20px;">
</div>

### Distribution
The platform includes an integrated email dispatcher capable of sending the generated magazines directly to subscriber lists, ensuring efficient delivery without leaving the interface.

![Email Distribution Interface](/images/projects/intecmar_ai/mag_email_send.png)

---

## 🧠 Deep Dive: AI & Retrieval-Augmented Generation (RAG)

The true power of Intecmar AI lies in its "State and Contextual Memory" architecture. It goes beyond simple prompting:

*   **LangGraph Orchestration:** The agent operates on a State Graph. It remembers the context from "Step 1" while generating the report in "Step 5," and can reason cyclically—looping back if it needs more information.
*   **RAG (Retrieval-Augmented Generation):** When users upload external documents, the system fragments and vectorizes them into **ChromaDB**. The agent then uses semantic search tools to query these documents, ensuring that generated proposals are grounded in factual data rather than hallucinated.
*   **Visual Intelligence:** A dedicated sub-graph analyzes the text of the generated project, extracts "visual metaphors," and prompts an image generation model to create diagrams that accompany the final PDF.

## 🏗️ Architecture & Stack

The system utilizes a **Distributed Architecture based on the Orchestration Pattern** to ensure a Zero-Blocking UI experience. Heavy AI tasks do not freeze the interface; instead, they are offloaded to background workers.

*   **Backend:** Python 3.10+ with **FastAPI** for high-performance async endpoints.
*   **Orchestration:** **Celery** and **Redis** handle the distributed task queue (PDF generation, AI reasoning).
*   **AI Core:** **Google Gemini Pro** for reasoning, **LangChain** for flow management, and **ChromaDB** for vector memory.
*   **Storage:** **PostgreSQL** for relational data and **MinIO** (S3 compatible) for scalable object storage.
*   **Infrastructure:** Fully containerized using **Docker Compose** for replicable deployments.

## 🌐 Repository Note

This project was developed as a bespoke enterprise solution for **Cotecmar (Corporación de Ciencia y Tecnología para el Desarrollo de la Industria Naval Marítima y Fluvial)**. Consequently, the source code is proprietary and not publicly available. The architecture diagrams and screenshots presented here are shared to demonstrate the technical complexity and functional scope of the work performed.