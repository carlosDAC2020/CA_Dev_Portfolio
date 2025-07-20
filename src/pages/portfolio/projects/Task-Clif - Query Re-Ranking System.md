---
layout:  /src/layouts/ProjectLayout.astro
title: 'Task-Clif: Query Re-Ranking System'
pubDate: 2024-03-10
description: 'An Information Retrieval system to evaluate and re-rank search results from PubMed using models like BM25 and PubMedBERT.'
languages: ["python"]
image:
  url: "/images/projects/Task-Clif Project.webp"
  alt: "Task-Clif Project"
---

An advanced Information Retrieval project that demonstrates how to improve the relevance of search results in the biomedical domain. This system processes natural language queries, performs searches on PubMed, and applies different re-ranking algorithms to optimize the classification of the retrieved documents.

## 🧩 Features

- **Multiple Re-Ranking Strategies:** Implements and compares various re-ranking algorithms, from classic models like TF-IDF and BM25 to advanced semantic models like PubMedBERT.
- **AI-Powered Keyword Extraction:** Uses Google's Gemini API to analyze the user's query and extract the most relevant keywords, improving the precision of the initial search.
- **Automated Evaluation Pipeline:** Includes scripts to calculate and analyze standard Information Retrieval performance metrics (like P@k, MAP, MRR), allowing for a quantitative evaluation of each model.
- **PubMed Integration:** Connects directly to the PubMed database via its API to retrieve scientific articles and relevant biomedical literature.
- **Configurable System:** Allows for easy switching between datasets (train/test), query types, and re-ranking models through a `.env` configuration file, facilitating experimentation.

## 💡 Technologies Used

- **Python:** As the primary language for the system's logic and data analysis.
- **Google Gemini API:** For natural language processing and keyword extraction.
- **PubMed API:** For retrieving documents from the PubMed repository.
- **Re-Ranking Models:**
    - **TF-IDF:** A classic vector model that scores relevance based on word frequency.
    - **BM25:** A state-of-the-art probabilistic ranking algorithm, a standard in many modern search engines for its effectiveness.
    - **PubMedBERT:** A language model based on Transformers (BERT) pre-trained specifically on biomedical texts to understand context and semantics.
- **Pandas & Scikit-learn:** For data manipulation and the calculation of evaluation metrics.

## 🎯 Objective

The objective of this project is to address a fundamental challenge in search systems: the initial results returned by a general search engine (like PubMed) are not always the most useful for the user. This is the essence of the **re-ranking task in Information Retrieval**.

This project demonstrates how to build a "second-pass" system that takes an initial list of results and reorders it by applying more sophisticated relevance models. On a theoretical level, two approaches are explored:

1.  **Lexical Relevance (BM25):** This model doesn't just count words; it calculates a relevance score that considers term frequency within the document and across the entire collection, avoiding bias towards longer documents. It is an industry standard for its robustness.
2.  **Semantic Relevance (PubMedBERT):** Unlike lexical models, PubMedBERT understands the *meaning* behind the words. Having been trained on millions of biomedical texts, it can determine if a document is relevant to a query even if they don't share the exact same keywords, capturing the user's intent much more deeply.

The goal is to illustrate how these re-ranking techniques can dramatically improve the quality of search results, delivering more precise and relevant information to the end-user.

## 🌐 Repository

You can find the full source code and setup instructions for this demo in the official GitHub repository.

👉 [Explore the code on GitHub](https://github.com/carlosDAC2020/Task-Clif)
---