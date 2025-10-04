---
layout:  /src/layouts/ProjectLayout.astro
title: 'BP Tools'
pubDate: 2025-10-04
description: 'Comprehensive web platform developed during my internship at Tenaris to automate data processing and normalization for the Business Partners team, transforming information from multiple internal systems into actionable reports.'
languages: ["python", "django", "javascript", "bootstrap", "sqlite", "rest-api", "power-automate"]
image:
  url: "/images/projects/BP_Tools/Vista inicio.png" 
  alt: "BP Tools - Automation Platform"
---

## 📋 Project Context

**BP Tools** was a comprehensive web platform I developed during my professional internship at **Tenaris** (2024), specifically for the Industrial Business Partners area. This project was born from the need to automate repetitive manual processes that consumed a significant amount of the team's time, converting tasks that took hours into processes that took minutes.

The system acted as a critical bridge between various internal data sources —such as **Kronos**, **My People**, **Univers**, and corporate documents— transforming inconsistent and dispersed data into structured information ready for decision-making. Although the project was developed in 2024, the platform **continues to be actively used** by the BP team for their daily operations.

![Main Interface](/images/projects/BP_Tools/Vista inicio.png)

## 🎯 Problem and Solution

### The Challenge
The BP team handled multiple critical processes manually:
- Consolidation of employee absences (vacations, leaves, disabilities) from 3+ different systems
- Weekly generation of overtime reports for more than 50 supervisors and managers
- Tracking of missed clock-ins/outs and notification to responsible parties
- Creation of formal work organization documentation

Each process required:
- Manual download of multiple reports
- Normalization of inconsistent formats
- Cross-system validations
- Generation of documents in specific formats
- Manual email distribution

### The Solution
I developed an integrated suite of web tools that completely automated these workflows, reducing processing time by **more than 85%** and virtually eliminating human errors.

## 🧩 Developed Tools

### 1. Kronos News Management

**Purpose:** Automate the consolidation and bulk loading of employee absences into the Kronos system.

![Loading Interface](/images/projects/BP_Tools/novedades_kronos/v_inicial.png)

**Implemented Workflow:**

Users uploaded multiple source files through an intuitive modal, selected a cut-off date, and the tool automatically processed all the information:

![Processing Modal](/images/projects/BP_Tools/novedades_kronos/v_modal.png)

**Result:** An organized dashboard that intelligently categorized the records into:

![Results Dashboard](/images/projects/BP_Tools/novedades_kronos/v_resultado.png)

- **New Records:** Ready for automatic CSV upload
- **Manual Validations:** Special cases requiring human intervention
- **Potential Errors:** Proactive detection of date inconsistencies
- **Complete History:** Accumulated log for audits

**Impact:** Reduced processing time from 3-4 hours per week to less than 15 minutes.

### 2. Overtime Reports

**Purpose:** Automate the generation and distribution of individualized overtime reports.

![Overtime Interface](/images/projects/BP_Tools/horas_extras/v_inicial.png)

**Implemented Methodology:**

1. **Data Ingestion:** Consolidation of reports from Kronos, SAP, and headcount
2. **Processing:** Cross-referencing information and calculating totals per employee
3. **Generation:** Creating individualized Excel reports per supervisor/manager

![Configuration Modal](/images/projects/BP_Tools/horas_extras/v_modal.png)

The interface allowed previewing each individual report before download:

![Results View](/images/projects/BP_Tools/horas_extras/v_resultado.png)

![Report Preview](/images/projects/BP_Tools/horas_extras/v_modal_report.png)

**Power Automate Integration:** Consolidated files were updated in SharePoint and an automated flow distributed the reports via email to each corresponding leader.

### 3. Omitted Clock-ins/outs

**Purpose:** Automatically track and report unregistered clock-ins/outs.

![Clock-ins Interface](/images/projects/BP_Tools/Timbradas_omitidas/v_inicial.png)

**Process:**

The system extracted data from Power BI, processed omissions, and generated consolidated reports:

![Configuration](/images/projects/BP_Tools/Timbradas_omitidas/v_modal.png)

![Power BI Data](/images/projects/BP_Tools/Timbradas_omitidas/get data PBI.png)

![PBI Export](/images/projects/BP_Tools/Timbradas_omitidas/get data PBI type export.png)

**Results Visualization:**

![Final Report](/images/projects/BP_Tools/Timbradas_omitidas/v_resultado.png)

Similar to the overtime module, it integrated Power Automate for automatic notification to supervisors.

### 4. Work Organization

**Purpose:** Automated generation of formal organizational structure documentation.

**Unique Feature:** Interactive map based on OpenStreetMap to visualize physical locations of work positions in the plant:

![Interactive Map](/images/projects/BP_Tools/Organizacion_del_Trabajo/v_inicial.png)

**Two Generation Modes:**

![Generation Modal](/images/projects/BP_Tools/Organizacion_del_Trabajo/v_modal.png)

1. **Manual Mode:** Local processing with regex for fast structuring
2. **AI Mode:** Integration with **Gemini API** for intelligent rewriting of descriptions

**Smart Cache System:** I implemented a cache system (`cache_descripciones.json`) that only made API calls when it detected changes in descriptions, optimizing costs and response times.

![Generation Result](/images/projects/BP_Tools/Organizacion_del_Trabajo/v_resultado.png)

![Data Retrieval](/images/projects/BP_Tools/Organizacion_del_Trabajo/get_data_from_list.png)

### 5. BP_Agent - Virtual Assistant

**Innovation:** Intelligent chatbot developed with **Microsoft Copilot Studio**, trained specifically with the project's complete documentation.

![Chatbot](/images/projects/BP_Tools/Chat_bot.png)

**Capabilities:**
- Step-by-step guidance on tool usage
- Technical architecture explanations
- Information on Colombian labor regulations
- Real-time troubleshooting

### 6. Administration Panel

Standard Django panel for system data management:

![Admin Panel](/images/projects/BP_Tools/admin.png)

![Navigation](/images/projects/BP_Tools/nav.png)

Allowed managing API keys, growth schemas, and configurations without direct database access.

## 🏗️ Architecture and Methodologies

### Technical Architecture

I implemented a **monolithic MVC architecture** with Django, prioritizing modularity and rapid iteration:

```
BP_tools/
├── config/              # Django central configuration
├── main/                # System core app
├── kronos_novedades/    # News module
├── HE_reports/          # Overtime module
├── Stampings_omitted/   # Clock-ins module
├── org_work/            # Organization module
├── templates/           # HTML templates
├── static/              # Static assets
└── mediafiles/          # Generated files
```

**Architectural Decision:** Each tool as an independent Django app, facilitating:
- Parallel development
- Isolated testing
- Future scalability towards microservices

### "Notebook-to-App" Methodology

**Development Process:**

1. **Prototyping in Jupyter Notebooks:** Fast validation of business logic
2. **Encapsulation in Classes:** Migration to Python classes in `utils.py`
3. **Django Integration:** Views as thin controllers

**Advantages:**
```python
# Typical structure in utils.py
class OvertimeProcessor:
    def __init__(self, input_files):
        self.files = input_files
        
    def process_data(self):
        # Isolated business logic
        pass
        
    def generate_reports(self):
        # Output generation
        pass
        
    def run(self):
        # Workflow orchestration
        self.process_data()
        self.generate_reports()
        return self.results
```

This separation kept the business logic **clean, testable, and reusable**.

### REST API for Future Decoupling

I implemented REST endpoints with **Django REST Framework**, preparing the ground for an eventual migration to microservices architecture:

![API Documentation](/images/projects/BP_Tools/v_docs.png)

## 🛠️ Complete Technology Stack

### Backend
- **Framework:** Django 4.x
- **Language:** Python 3.12+
- **API:** Django REST Framework
- **Database:** SQLite (development), prepared for PostgreSQL (production)

### Frontend
- **Template System:** Django Templates
- **CSS Framework:** Bootstrap 5
- **JavaScript:** Vanilla JS for interactivity
- **Maps:** OpenStreetMap / Leaflet.js

### External Integrations
- **AI:** Google Gemini API (document generation)
- **Chatbot:** Microsoft Copilot Studio
- **Automation:** Power Automate (report distribution)
- **Storage:** SharePoint (shared files)
- **BI:** Power BI (data source)

### DevOps and Deployment
- **Version Control:** Git
- **Virtual Environment:** venv
- **Deployment Scripts:** `.bat` scripts for simplified installation and execution
- **Docker Ready:** Dockerfile included for future containerization

## 🎓 Technical Learnings

### Overcome Challenges

1. **Inconsistent Data Normalization:** Developed robust parsers capable of handling variable formats across systems
2. **Sensitive Data Handling:** Implemented security practices for employee information management
3. **Performance Optimization:** Identification and refactoring of bottlenecks in large file processing
4. **Multi-System Integration:** Orchestration of workflows spanning Django, SharePoint, and Power Automate

### Applied Methodologies

- **Agile Development:** Rapid iterations with continuous feedback from the BP team
- **Clean Code:** Separation of concerns, classes with single responsibility
- **Documentation-Driven:** Comprehensive README as project source of truth
- **User-Centric Design:** Interfaces designed alongside end users

## 📊 Measurable Impact

- **Time Reduction:** 85-90% in manual processes
- **Error Elimination:** Virtually 0% manual transcription errors
- **Adoption:** 100% of BP team (15+ active users)
- **Automated Processes:** 4 critical workflows fully automated
- **Generated Reports:** 50+ individualized reports per cycle
- **AI Integration:** First tool in the area with AI capabilities

## 🔮 Documented Improvement Proposals

As part of the final delivery, I documented future improvements:

1. **Performance Optimization:** Implementation of parallel processing with Celery
2. **State Persistence:** Session system to maintain context between reloads
3. **Dynamic Tool Creation:** Automated scaffolding of new tools from UI
4. **Automated Testing:** Test suite with pytest for CI/CD

## 🌐 Repository Note

This was an internal project developed during my internship at **Tenaris**. The source code is **corporate property** and is not publicly available. The images and descriptions presented have been authorized for professional portfolio purposes.
