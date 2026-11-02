

# Sentient Design Studio

An AI-focused interface design project exploring how natural language prompts can be used to generate and preview user interface concepts.

## Overview

Sentient Design Studio is a web-based interface prototype designed around AI-assisted UI creation.

The project provides a prompt-driven experience where users can describe an interface idea and explore how an AI-powered design workflow could look and feel.

The current implementation focuses on the frontend experience and visual presentation. It should be considered a prototype rather than a fully connected AI generation service.

## Features

- Modern, responsive user interface
- Prompt-based interface design workflow
- Design generation preview experience
- Component-based frontend architecture
- Reusable UI components
- Modern styling and icon integration

## Technologies

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI
- Lucide Icons
- Cloudflare Vite Plugin

## Project Structure

```text
sentient-design-studio/
├── src/
│   ├── components/
│   │   ├── landing/
│   │   └── ui/
│   ├── routes/
│   └── ...
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## Requirements

Before running the project, make sure you have installed:

- Node.js
- Bun or npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Laca1234/sentient-design-studio.git
cd sentient-design-studio
```

Install dependencies using Bun:

```bash
bun install
```

Alternatively, use npm:

```bash
npm install
```

## Development

Start the development server:

```bash
bun run dev
```

Or with npm:

```bash
npm run dev
```

The development server will provide a local URL in the terminal.

## Available Scripts

| Script | Description |
|---|---|
| `dev` | Starts the development server |
| `build` | Creates a production build |
| `build:dev` | Creates a development build |
| `preview` | Previews the production build |
| `lint` | Runs code linting |
| `format` | Formats the source code |

## Project Status

The project currently focuses on the frontend prototype and user experience.

An operational AI backend and actual interface-generation functionality would require additional implementation and integration.

## Author

Developed by [Laca1234](https://github.com/Laca1234).

## License

No license has been specified for this project.

