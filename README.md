# create-nexter

> A modern and extensible CLI to scaffold your Next.js projects with a clean, scalable architecture.


![Lint](https://github.com/msz-tech/create-nexter/actions/workflows/lint.yaml/badge.svg?branch=main&style=flat-square)
![npm version](https://img.shields.io/badge/npm-coming--soon-lightgrey?style=flat-square)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

---

## Introduction

**`create-nexter`** is a zero-config CLI tool that helps you kickstart modern [Next.js](https://nextjs.org/) apps with an opinionated project structure.  
It integrates best practices for scalability, developer experience, and clean code — with optional [Tailwind CSS](https://tailwindcss.com/) setup.

Designed for frontend developers and teams who want consistency and speed when starting new projects.

---

## 🚀 Features

- Interactive CLI with project language selection (JS/TS)
- Uses `create-next-app` under the hood
- Clean project setup with future support for custom architecture and Tailwind CSS
- Designed for developers, scalable for teams



## Getting Started

To scaffold a new project, run:

```bash
npx create-nexter my-app
```

Follow the interactive prompts.

Once complete, your project will be ready to start:
```bash
cd my-app
npm run dev
```
## 🛠 Tech Stack
Node.js (ESM)

- prompts for interactive input

- create-next-app for project generation (Next.js 15+)

- Future integrations: Tailwind CSS, ESLint, CI/CD, templates...