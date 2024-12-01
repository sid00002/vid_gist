# VidGist - Video Summarizer App

**VidGist** is a powerful web application that allows users to input YouTube and Spotify URLs to get AI-generated video summaries. Built with cutting-edge technologies like **Next.js**, **TypeScript**, **Langchain**, **OpenAPI**, **PostgreSQL**, and **NextAuth**, VidGist offers a seamless and responsive user experience while handling complex video summarization tasks.

---

## Features

- **Video Summarization**: Input YouTube or Spotify video URLs, and VidGist summarizes the content into concise and readable text summaries.
- **User Authentication**: Secure login and user management via **NextAuth** with support for popular OAuth providers (Google, GitHub, etc.).
- **Database Management**: All user data, URLs, and summaries are stored and managed in a **PostgreSQL** database.
- **AI-Powered Summaries**: Summaries are generated using **Langchain** and integrated with **OpenAPI** for high-quality text extraction.
- **Responsive UI**: Optimized user interface built with **Next.js**, providing a smooth experience across devices.
  
---

## Tech Stack

- **Next.js**: A React-based framework for server-side rendering, static site generation, and full-stack applications.
- **TypeScript**: A strongly typed language to ensure better code quality and development experience.
- **PostgreSQL**: A relational database system to store video URLs, user information, and generated summaries.
- **Langchain**: A framework to handle natural language processing and AI-powered summarization.
- **OpenAPI**: Provides integration with external APIs, enhancing the functionality of the summarization service.
- **NextAuth**: Used for user authentication with support for multiple providers.

---

## Getting Started

To set up VidGist locally for development, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/VidGist.git
cd VidGist
