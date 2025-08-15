---
layout:  /src/layouts/ProjectLayout.astro
title: 'DB Chat Agent'
pubDate: 2024-05-13
description: 'An interactive chat to perform read queries on databases using natural language, powered by AI agents.'
languages: ["python", "fastapi", "docker", "postgresql"]
image:
  url: "/images/projects/db_chat_initial.webp"
  alt: "DB Chat Agent Interface"
---

This system acts as an intelligent bridge between users and databases. Its purpose is to enable complex queries on available records using everyday, natural language, completely eliminating the need for SQL knowledge.

Through a simple chat interface, anyone can "converse" with the database, asking questions to obtain valuable information quickly and intuitively.

## 🧩 Key Features

-   **Web Chat Interface**: A clean and simple design to interact with the database conversationally.
-   **Natural Language to SQL Translation**: The system understands questions in plain language and automatically converts them into precise SQL queries.
-   **Configurable AI Agent**: Powered by the `FastAgent` framework, it allows for easy adaptation and swapping of the underlying language model (like Gemini, GPT, etc.) to fit different needs.
-   **Simple Deployment Environment**: Thanks to Docker, the entire system (API, database, and tools) can be launched with a single command.
-   **Extensible Architecture**: Designed with the MCP (Model Context Protocol), which facilitates the integration of new tools and capabilities into the agent, such as web search.

## 💡 Tech Stack
-   **FastAPI:** To build a robust, high-performance web API that serves as the system's backend.
-   **FastAgent:** The framework used for the creation and orchestration of the AI agent, managing conversation logic and tool execution.
-   **PostgreSQL:** Used as the example database on which the agent performs its queries.
-   **Docker & Docker Compose:** For the containerization and orchestration of all services, ensuring an easy, fast, and consistent deployment in any environment.

## 🎯 Objective

The primary goal of this project is to **democratize data access**. It seeks to eliminate the technical barrier that the SQL language represents, allowing users with no programming knowledge to explore and obtain valuable information from a database in a conversational way.

This approach not only speeds up the process of getting answers but also fosters greater autonomy and better decision-making within teams by making data accessible to everyone.

## 🌐 Repository

You can find the full source code and detailed setup instructions in the official GitHub repository.

👉 [Explore the code on GitHub](https://github.com/carlosDAC2020/db_agent)