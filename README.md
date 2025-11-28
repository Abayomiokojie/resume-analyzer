<div align="center">
  <br />
      <h1 align="center">AI-Powered Resume Analyzer</h1>
      <img src="public/readme/resume_analyzer.png" alt="Project Banner">

  <br />

  <div>
    <img alt="Static Badge" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white">
        <img src="https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
        <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img alt="Static Badge" src="https://img.shields.io/badge/Puter.js-181758?style=for-the-badge&logoColor=white">
  </div>

<div align="center">
     <a href="https://zand-resume-analyzer-jkb6ll.puter.site"> click here to view Demo</a>
    </div>
<a href="https://zand-resume-analyzer-jkb6ll.puter.site"> click here to view Demo</a>

</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">✨ Introduction</a>

This is Zand, an AI-powered Resume Analyzer built with React, React Router, and Puter.js. Features seamless authentication, secure resume upload and storage, and intelligent candidate-job matching through AI evaluations. Provides tailored feedback and ATS scores for each listing, all within a clean, reusable UI.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[React](https://react.dev/)** is a popular open‑source JavaScript library for building user interfaces using reusable components and a virtual DOM, enabling efficient, dynamic single-page and native apps.

- **[React Router v7](https://reactrouter.com/)** is the go‑to routing library for React apps, offering nested routes, data loaders/actions, error boundaries, code splitting, and SSR support—all with a smooth upgrade path from v6.

- **[Puter.com](https://jsm.dev/resumind-puter)** is an advanced, open-source internet operating system designed to be feature-rich, exceptionally fast, and highly extensible. Puter can be used as: A privacy-first personal cloud to keep all your files, apps, and games in one secure place, accessible from anywhere at any time.

- **[Puter.js](https://jsm.dev/resumind-puterjs)** is a tiny client‑side SDK that adds serverless auth, storage, database, and AI (GPT, Claude, DALL·E, OCR…) straight into your browser app—no backend needed and costs borne by users.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.

- **[Vite](https://vite.dev/)** is a fast build tool and dev server using native ES modules for instant startup, hot‑module replacement, and Rollup‑powered production builds—perfect for modern web development.

- **[Zustand](https://github.com/pmndrs/zustand)** is a minimal, hook-based state management library for React. It lets you manage global state with zero boilerplate, no context providers, and excellent performance through selective state subscriptions.

## <a name="features">🔋 Features</a>

👉 **Easy & convenient auth**: Handle authentication entirely in the browser using Puter.js—no backend or setup required.

👉 **Resume upload & storage**: Let users upload and store all their resumes in one place, safely and reliably.

👉 **AI resume matching**: Provide a job listing and get an ATS score with custom feedback tailored to each resume.

👉 **Reusable, modern UI**: Built with clean, consistent components for a great-looking and maintainable interface.

👉 **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.

👉 **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.

👉 **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Abayomiokojie/resume-analyzer
cd resume-analyzer
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
