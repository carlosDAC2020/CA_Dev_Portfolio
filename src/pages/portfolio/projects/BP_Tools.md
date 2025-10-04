---
layout:  /src/layouts/ProjectLayout.astro
title: 'BP Tools'
pubDate: 2025-10-04
description: 'A comprehensive web platform designed to automate data processing and normalization for the Tenaris BP team, transforming raw data from internal systems into actionable reports and insights.'
languages: ["python", "django", "javascript", "bootstrap", "sqlite", "rest-api"]
image:
  url: "/images/projects/BP_Tools/Vista inicio.png" 
  alt: "BP Tools Kronos News Interface"
---

BP Tools is an integrated web platform built to automate, centralize, and optimize key processes for the Business Partner (BP) team at Tenaris. The system serves as a crucial bridge between diverse internal data sources—such as Kronos, My People, and Univers—and the valuable insights needed for effective decision-making.

The platform's core purpose is to ingest raw, often inconsistent, data from various reports, apply complex normalization and processing rules, and automatically generate standardized outputs like carga masiva files, management reports, and official documents. This automation significantly reduces repetitive manual tasks, minimizes human error, and accelerates the delivery of critical information, fostering a culture of efficiency and continuous improvement.

## 🧩 Key Features

The platform is a suite of specialized tools, each designed to tackle a specific operational bottleneck.

#### Kronos News Management
This is the flagship tool, designed to streamline the consolidation of employee absences (vacations, leaves, disabilities) from different sources like **My People** and **Univers**. The tool guides the user through uploading the necessary files, setting a crucial "cut-off date" to differentiate between new and historical data, and then processes everything.



The result is a clean, organized dashboard that segments the data into:
-   **New Records**: Ready for automatic upload into Kronos.
-   **Manual Validations**: Items that require human intervention, such as specific medical appointments.
-   **Potential Errors**: Proactively flags records that might fail in Kronos, saving significant troubleshooting time.
-   **Complete History**: A full log of all processed records.

From here, users can download the final `CO_Novedades.csv` for bulk upload.

#### Overtime Reporting
This module automates the entire overtime reporting workflow. It ingests raw time reports from Kronos and SAP, cross-references them with the company headcount, and generates tailored Excel summaries for both **Supervisors** and **Managers**. The platform provides an interface to preview each individual report before downloading the consolidated files. The final step integrates with a **Power Automate** flow, which reads the updated Excel files from a shared SharePoint site and automatically emails the reports to the corresponding leaders.



#### Omitted Clock-in/out Tracking
Addresses the tedious task of tracking employees who forget to clock in or out. The tool takes data exported from a specific Power BI report and generates a consolidated report ready for distribution. Similar to the Overtime tool, this process concludes with updating a master file on SharePoint, which triggers a **Power Automate** flow to notify supervisors of their team's incidents.



#### Work Organization Tool
A unique tool that provides both a visual and documentary representation of the plant's job structure. It features an interactive map built with **OpenStreetMap** that pinpoints the physical location of different work areas. Its main function is to generate a formal `Organización de Trabajo.docx` document.



This tool offers two generation modes:
1.  **Manual/Regex-based**: A fast, local process that structures job descriptions using predefined rules.
2.  **AI-Powered**: Leverages the **Gemini API** to intelligently parse and rewrite job descriptions into a much cleaner and more professional format. It uses a smart caching system to avoid redundant API calls, only processing new or modified descriptions.

#### BP_Agent 
An AI chatbot, built with **Microsoft Copilot Studio**, integrated directly into the platform. Trained on the project's own extensive `README.md` documentation, the agent can answer user queries in real-time about how to use any tool, explain technical aspects of the architecture, and even provide information on related Colombian labor laws.



#### Admin Panel
A standard Django admin panel provides an interface for performing CRUD (Create, Read, Update, Delete) operations on the system's database models. This is essential for managing underlying data like API keys for the Gemini tool or modifying growth schemas without direct database access.


## 💡 Architectural Philosophy

The architecture of BP Tools is a pragmatic **MVC monolith** built with Django, reflecting a focus on rapid development and high modularity. Each major function (Kronos News, Overtime Reports, etc.) is encapsulated within its own dedicated Django app. This structure is a direct translation of the project's origins: many of the tools began as Jupyter notebooks designed for specific, linear data processing tasks.

This "notebook-to-app" methodology involved encapsulating the core logic of each workflow into a self-contained Python class within a `utils.py` file. This class handles all the data ingestion, transformation, and output generation. The Django `views.py` then simply acts as a controller that instantiates this class and presents the results to the user. This approach keeps the business logic clean, isolated, and highly reusable, while making the system easy to maintain and extend with new tools.

## 🛠️ Tech Stack
-   **Backend:** Python, Django
-   **API:** Django REST Framework
-   **Database:** SQLite
-   **Frontend:** Django Templates, HTML, CSS, JavaScript
-   **Styling:** Bootstrap
-   **AI Integration:** Gemini API, Microsoft Copilot Studio
-   **Automation:** Integrates with external Power Automate workflows for report distribution.

## 🎯 Objective

The primary objective of BP Tools is to **drive the digital transformation** of the BP team's operations. By converting complex, multi-source data processing tasks into simple, guided web interfaces, the platform aims to drastically reduce manual effort, eliminate data-entry errors, and empower the team with reliable, on-demand insights. It stands as a testament to how targeted internal development tools can solve critical business problems and foster a more agile, data-driven culture.

## 🌐 Repository Access

Please note that this was an internal project developed during my tenure at **Tenaris**. As such, the source code is proprietary and is **not publicly available** in a repository.