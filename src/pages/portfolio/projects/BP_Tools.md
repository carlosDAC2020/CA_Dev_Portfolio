Of course. I've refined and condensed the article to make it more impactful for a portfolio, focusing on the key achievements, technical challenges, and business impact. The structure is now more scannable for recruiters and technical leads.

Here is the improved version:

---
layout: /src/layouts/ProjectLayout.astro
title: 'BP Tools'
pubDate: 2025-10-04
description: 'A production-level automation platform developed during my internship at Tenaris. It transformed key HR workflows, reducing manual processing time by over 85% and is still in active use.'
languages: ["python", "django", "javascript", "bootstrap", "sqlite", "rest-api", "power-automate", "gemini-api"]
image:
  url: "/images/projects/BP_Tools/Vista inicio.png" 
  alt: "BP Tools - Automation Platform"
---

**BP Tools** is a production-level web platform I developed from the ground up during my professional internship at **Tenaris** (2024). The project's mission was to solve a critical business need for the Industrial Business Partners (BP) team: automating highly repetitive, error-prone manual workflows that consumed hours each week.

The platform serves as an intelligent data processing engine, ingesting raw information from disparate internal systems like **Kronos**, **My People**, and **Univers**, and transforming it into structured, actionable outputs. The solution was so successful that it was fully adopted by the team and **remains in active daily use** long after my internship concluded.

## 🎯 The Challenge & The Solution

The BP team was mired in manual data consolidation: merging employee absences from three different systems, generating weekly overtime reports for over 50 managers, tracking missed clock-ins, and creating formal organizational documents. These tasks were time-consuming and fraught with the risk of human error.

I designed and built **BP Tools**, an integrated suite of web applications that automated these core processes end-to-end. The platform **slashed weekly processing times by over 85%** and virtually eliminated data transcription errors, freeing the team to focus on high-value strategic work.

## 🧩 Key Features & Innovations

The platform is a collection of purpose-built tools, each targeting a specific pain point:

#### 1. Kronos News Management
Automated the consolidation of employee absences (vacations, leaves) into a single file ready for bulk upload to Kronos. Its intelligent dashboard proactively categorized records into "Ready for Upload," "Manual Review," and "Potential Errors," reducing a 4-hour weekly task to under 15 minutes.

![Results Dashboard for Kronos News](/images/projects/BP_Tools/novedades_kronos/v_resultado.png)

#### 2. Overtime & Omitted Clock-in Reports
These tools ingested raw reports from Kronos and Power BI, automatically generating individualized Excel summaries for each supervisor. The workflow was fully integrated with **Power Automate**, which distributed the finalized reports via email to the correct recipients.

![Individual Report Preview for Supervisors](/images/projects/BP_Tools/horas_extras/v_modal_report.png)

#### 3. AI-Powered Work Organization
Generated formal organizational structure documents and featured an interactive **OpenStreetMap** to visualize work locations. This tool offered two generation modes: a fast, regex-based local process, and an advanced mode using the **Gemini API** to intelligently rewrite and format job descriptions. I implemented a smart JSON cache to minimize API calls, optimizing for cost and speed.

![AI Generation Modal for Work Organization Documents](/images/projects/BP_Tools/Organizacion_del_Trabajo/v_modal.png)

#### 4. BP_Agent - Integrated Virtual Assistant
An intelligent chatbot I built with **Microsoft Copilot Studio** and trained on the project's own documentation. It provided users with real-time, in-app guidance on how to use the tools, troubleshoot issues, and understand technical details.

![BP_Agent providing in-app user support](/images/projects/BP_Tools/Chat_bot.png)

## 🏗️ Architectural Approach & Methodology

I architected BP Tools as a **modular monolith** using Django. Each tool was developed as a distinct Django app, ensuring separation of concerns and making the system clean, maintainable, and scalable. This design choice laid the groundwork for a future migration to a microservices architecture, supported by a **Django REST Framework** API I implemented.

My development process followed a **"Notebook-to-App" methodology**:
1.  **Prototype:** I first validated the complex data transformation logic for each tool in Jupyter Notebooks.
2.  **Encapsulate:** I then refactored this validated logic into clean, reusable Python classes.
3.  **Integrate:** Finally, I built the Django views and templates to provide a user-friendly interface for the underlying processing engine.

This approach allowed for rapid iteration while maintaining a robust and testable codebase.

## 🛠️ Technology Stack

-   **Backend:** Python, Django, Django REST Framework
-   **Frontend:** Django Templates, Bootstrap 5, Vanilla JavaScript, Leaflet.js
-   **Database:** SQLite
-   **AI & Automation:** Google Gemini API, Microsoft Copilot Studio, Power Automate
-   **Integrations:** SharePoint (File Storage), Power BI (Data Source)
-   **DevOps:** Git, Dockerfile for containerization readiness

## 📊 Impact & Key Accomplishments

-   **Successfully automated 4 critical, high-volume HR workflows**, saving the team dozens of hours per month.
-   **Achieved over 85% reduction in manual processing time** and near-zero data entry errors.
-   **Drove 100% user adoption** across the entire 15-person BP team.
-   **Engineered a multi-platform solution**, orchestrating data flows between Django, SharePoint, and Power Automate.
-   **Delivered the first AI-integrated tool in the area**, demonstrating the value of modern technology in a corporate setting.

## 🌐 Repository Note

As this was an internal project developed for **Tenaris**, the source code is proprietary and not publicly available. The documentation and images presented here have been authorized for use in my professional portfolio.
---