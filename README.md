# create-nexter

> A modern and extensible CLI to scaffold your Next.js projects with a clean, scalable architecture.


![CI](https://github.com/msz-tech/create-nexter/actions/workflows/ci.yaml/badge.svg?branch=main&style=flat-square)
[![npm version](https://img.shields.io/npm/v/create-nexter?style=flat-square)](https://www.npmjs.com/package/create-nexter)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

## Table of Contents

- [Introduction](#introduction)
- [Features](#-features)
- [Getting Started](#getting-started)
- [Tech Stack](#-tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

**`create-nexter`** is a zero-config CLI tool that helps you kickstart modern [Next.js](https://nextjs.org/) apps with an opinionated project structure.  
It integrates best practices for scalability, developer experience, and clean code — with optional [Tailwind CSS](https://tailwindcss.com/) setup.

Designed for frontend developers and teams who want consistency and speed when starting new projects.

---

## 🚀 Features

- Interactive CLI with project language selection (JS/TS)
- Uses `create-next-app` under the hood
- Designed for developers, scalable for teams
- Supports TypeScript and JavaScript  
- Preconfigured Tailwind CSS (optional, can be customized)  
- Includes professional base components like Hero  
- Modular architecture with clean folder structure



## Getting Started

To scaffold a new project, run:

```bash
npx create-nexter my-app
```

You will be prompted to select your preferred language: TypeScript or JavaScript.

Once complete, start your development server:

```bash
cd my-app
npm run dev
```
## Project Structure Example

After generation, your project will have the following structure:

```bash

    my-app/
    ├── public/
    ├── src/
    │ ├── components/
    │ │ └── Hero.tsx
    │ ├── pages/
    │ │ └── index.tsx
    │ └── styles/
    │ └── global.css
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json

```


## 🛠 Tech Stack
Node.js (ESM)

- prompts for interactive input

- create-next-app for project generation (Next.js 15+)

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/msz-tech/create-nexter/issues).
