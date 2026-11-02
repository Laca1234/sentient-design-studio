

# Sentient Design Studio — Technical Documentation

## 1. Project Overview

Sentient Design Studio is a web-based interface design project built around the concept of AI-assisted user interface generation.

The product concept allows users to describe an interface in natural language and explore a generated design preview.

The repository contains a modern frontend application with a landing page, reusable UI components, and a presentation of the proposed generation workflow.

The current implementation should be considered a frontend prototype. The presence of AI-generation messaging and preview components does not by itself establish that a working AI generation backend is connected.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| TypeScript | Application logic and type safety |
| TanStack Start | Full-stack React application framework |
| TanStack Router | File-based routing |
| Vite | Development server and build tooling |
| Tailwind CSS 4 | Styling |
| Radix UI | Accessible interface primitives |
| Lucide React | Icons |
| React Hook Form | Form management |
| Zod | Schema validation |
| Recharts | Data visualization components |
| Framer-style UI patterns | Visual interaction and presentation |

The project also includes Cloudflare's Vite plugin in its dependencies.

## 3. Project Structure

```text
sentient-design-studio/
├── src/
│   ├── components/
│   │   ├── landing/
│   │   └── ui/
│   ├── routes/
│   │   └── index.tsx
│   └── ...
├── public/
├── package.json
├── vite.config.ts
└── ...
```

### `src/routes/`

Contains the application's route definitions.

- `index.tsx` — main landing page route.

### `src/components/landing/`

Contains the main landing page sections:

- `Navbar`
- `Hero`
- `GenerationPreview`
- `HowItWorks`
- `Features`
- `CodeShowcase`
- `Templates`
- `Testimonials`
- `Pricing`
- `Faq`
- `Footer`

These components are assembled by the root route to form the complete landing page.

### `src/components/ui/`

Contains reusable interface components and UI primitives.

## 4. Main Application Components

### Navigation

The navigation component provides the main entry points to the product experience.

### Hero Section

Introduces the natural-language interface generation concept and communicates the primary product proposition.

### Generation Preview

Presents the visual concept of generating an interface from a user prompt.

### How It Works

Explains the proposed workflow from describing an interface to viewing the resulting design.

### Features and Code Showcase

Present the product's intended capabilities and the relationship between generated interfaces and frontend code.

### Templates

Showcases predefined interface concepts and design directions.

### Pricing and FAQ

Present the proposed subscription model and answer common product questions.

## 5. Styling and Design System

The application uses Tailwind CSS 4 and reusable UI components.

Radix UI provides accessible primitives for common interface patterns, while Lucide React supplies icons.

The design system is intended to provide a consistent visual language across the landing page and its individual sections.

## 6. Installation

### Requirements

- Node.js
- Bun or npm

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

## 7. Development

Start the development server using Bun:

```bash
bun run dev
```

Or with npm:

```bash
npm run dev
```

Vite will provide the local development address in the terminal.

## 8. Available Scripts

| Script | Description |
|---|---|
| `dev` | Starts the Vite development server. |
| `build` | Creates a production build. |
| `build:dev` | Creates a development-mode build. |
| `preview` | Previews the production build. |
| `lint` | Runs ESLint. |
| `format` | Formats the project using Prettier. |

## 9. Current Implementation Scope

The inspected application route assembles the landing page and its presentation components.

The repository's frontend architecture provides a foundation for an AI interface design product, but an actual generation workflow requires additional implementation, including:

- Prompt submission and processing.
- AI model or service integration.
- Generated interface rendering.
- Code generation and export.
- Project persistence.
- User accounts and authentication.
- Backend infrastructure.

These capabilities should not be assumed to be operational based solely on the current landing page.

## 10. Future Development Areas

Potential development stages include:

1. Implementing a functional prompt editor.
2. Connecting an AI generation service.
3. Rendering generated interfaces in a preview environment.
4. Supporting React and Tailwind code export.
5. Adding editable design controls.
6. Implementing user projects and saved generations.
7. Introducing account management and project history.

## 11. Project Scope

Sentient Design Studio explores how natural-language interaction and modern frontend tooling can be combined into an AI-assisted interface design experience.

