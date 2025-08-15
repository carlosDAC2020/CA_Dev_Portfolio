---
layout:  /src/layouts/ProjectLayout.astro
title: 'DB Chat Agent with MCP'
pubDate: 2025-08-10
description: 'An interactive chat agent, built on the Model Context Protocol (MCP), to perform database queries using natural language.'
languages: ["python", "fastapi", "docker", "postgresql", "mcp"]
image:
  url: "/images/projects/db-chat-agent.webp"
  alt: "DB Chat Agent Interface"
---

This system acts as an intelligent bridge between users and databases, powered by an advanced AI agent built fundamentally on the **Model Context Protocol (MCP)**. Its purpose is to enable complex queries on available records using natural language, removing the need for SQL knowledge.

The architecture of this project is a deliberate showcase of how **MCP** can be used to create modular, scalable, and powerful AI agents. Through a simple chat interface, users interact with an agent whose capabilities are dynamically provided by distinct MCP-compliant tool servers.

## 🧩 Key Features

-   **Extensible MCP-Based Architecture**: The agent's core is designed around the **Model Context Protocol (MCP)**. This makes it incredibly modular, allowing new tools and capabilities (like web search, API integrations, etc.) to be added simply by running new MCP servers, without altering the agent's main code.
-   **Natural Language to SQL Translation**: The system understands plain language questions and translates them into precise SQL queries, a capability provided through a dedicated **MCP tool server**.
-   **Web Chat Interface**: A clean and simple interface to interact conversationally with the **MCP-powered** agent.
-   **Configurable AI Agent**: Powered by the `FastAgent` framework, which leverages the **Model Context Protocol (MCP)** to seamlessly integrate with any language model (like Gemini, GPT, etc.).

## 💡 The Role of the Model Context Protocol (MCP)

A primary goal of this project is to demonstrate the power and flexibility of the **Model Context Protocol (MCP)** in building sophisticated AI agents.

MCP provides a standardized interface for AI models to discover and interact with external tools. Instead of a monolithic design, this agent's skills are defined as independent, discoverable **MCP servers**. For instance, the ability to query the database is one MCP server, and the ability to search the web is another.

This architectural choice, centered around **MCP**, means the agent is not just a chatbot but a scalable platform. It showcases a modern, robust, and future-proof approach to AI agent development, where capabilities can be added, removed, or updated independently.

## 🛠️ Tech Stack
-   **FastAPI:** Builds the high-performance web API that serves as the user-facing entry point to the agent.
-   **FastAgent:** The framework used for creating the AI agent. Its native support for the **Model Context Protocol (MCP)** is central to this project's design, enabling modular tool integration.
-   **PostgreSQL:** The database that the agent interacts with via its specialized **MCP tool server**.
-   **Docker & Docker Compose:** Used for containerizing and orchestrating all services, including the API, the database, and the various **MCP tool servers**.

## 🎯 Objective

The main objective is twofold: first, to **democratize data access** by allowing non-technical users to query databases conversationally.

Second, and more importantly, this project serves as a technical demonstration of a cutting-edge architectural pattern using the **Model Context Protocol (MCP)**. It illustrates how to build AI systems that are not only intelligent but also extensible, maintainable, and ready for future expansion by design.

## 🌐 Repository

You can find the full source code and detailed setup instructions in the official GitHub repository.

👉 [Explore the code on GitHub](https://github.com/carlosDAC2020/db_agenta)