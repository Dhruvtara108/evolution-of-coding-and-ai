# Evolution of Coding & AI

> An interactive research experience about how software development evolved—and how the meaning of developer productivity changed with it.

**Evolution of Coding & AI** is being built as a digital research story rather than a conventional landing page. It traces the changing boundary between writing instructions, designing systems, collaborating with teams, generating code, reviewing software, and operating intelligent development tools.

The project asks:

> **How did software development evolve from traditional programming into AI-assisted software engineering, and how has our understanding of developer productivity evolved along the way?**

The central premise is deliberately cautious: software development did not simply become “faster.” The abstraction level, tools, workflows, feedback loops, and ways of measuring engineering work changed over time. AI adds another shift to that history, but it does not make the research question simpler.

---

## Contents

- [Project status](#project-status)
- [Research principles](#research-principles)
- [Experience direction](#experience-direction)
- [Current foundation](#current-foundation)
- [Architecture](#architecture)
- [Repository structure](#repository-structure)
- [Getting started](#getting-started)
- [Backend and local services](#backend-and-local-services)
- [Research data model](#research-data-model)
- [Planned experience](#planned-experience)
- [Development workflow](#development-workflow)
- [Quality and accessibility](#quality-and-accessibility)
- [Roadmap](#roadmap)

---

## Project status

**Current phase: foundation and research architecture**

The repository currently contains:

- A working React, TypeScript, and Vite frontend
- A responsive editorial application shell
- Initial sections for the hero, central question, timeline, productivity, AI-assisted development, and open questions
- Typed local research contracts and starter data
- A FastAPI API boundary for future content delivery
- PostgreSQL Docker development configuration
- Frontend linting and production build configuration

The visual foundation is intentionally usable before the full evidence layer is complete. Historical dates, research citations, quantitative findings, and product claims are not presented as verified unless they have a source attached. Unverified material is labeled directly in the UI and data files.

---

## Research principles

This project is a research-oriented educational artifact. Accuracy is more important than filling every card.

### Claims are classified

Content will distinguish between:

| Category | Meaning |
| --- | --- |
| **Historical fact** | A claim supported by an appropriate primary or authoritative historical source |
| **Empirical finding** | A result reported by a study, experiment, survey, or other documented research |
| **Industry or vendor claim** | A claim made by a company or industry source and labeled as such |
| **Interpretation** | An explanation that connects evidence without presenting itself as direct evidence |
| **Project synthesis** | A clearly identified conclusion assembled from multiple sources |
| **Open research question** | A question where the evidence is incomplete, mixed, or still developing |

### No fabricated evidence

The project must not invent:

- Authors, papers, dates, or historical events
- Statistics, benchmarks, productivity percentages, or sample sizes
- Company claims or experimental results
- Citation URLs or source metadata
- Conclusions that are not supported by the research material

When verification is incomplete, use `TODO: VERIFY SOURCE` or the typed `needs-verification` status rather than filling the gap with an assumption.

### Productivity is multidimensional

The experience avoids treating lines of code, commits, tickets, or generated output as complete measures of developer productivity. It will examine dimensions such as:

- Speed and delivery
- Quality and reliability
- Developer experience and well-being
- Flow and focus
- Collaboration and communication
- Engineering outcomes
- Sustainable development

Frameworks such as DORA and SPACE will be represented as lenses for asking better questions—not as a universal productivity score.

---

## Experience direction

The final product is intended to feel like a combination of:

- Interactive timeline
- Digital museum
- Technical documentary
- Research explorer
- Productivity laboratory
- Data visualization

The primary interaction is a timeline-driven journey through changing levels of abstraction and engineering practice:

```text
Early programming
      ↓
Higher-level languages and abstraction
      ↓
Software engineering practices
      ↓
Agile and iterative development
      ↓
DevOps and continuous delivery
      ↓
Modern productivity measurement
      ↓
DORA and SPACE
      ↓
AI-assisted programming
      ↓
LLM coding assistants
      ↓
Coding agents and agentic workflows
      ↓
Current research questions
```

The interface should remain editorial and evidence-led: strong typography, restrained motion, useful diagrams, clear source status, and enough space for the reader to understand the argument.

---

## Current foundation

### Frontend

- React
- TypeScript
- Vite
- Lucide React
- CSS design tokens and responsive layout
- ESLint with TypeScript and React rules

### Backend boundary

- FastAPI
- Pydantic-compatible dependency foundation
- CORS configured for local frontend development
- Initial API routes for health, timeline, and framework resources

### Local infrastructure

- PostgreSQL 16 development service
- Docker Compose configuration
- Backend Dockerfile
- `.env.example` for local database configuration

The backend currently exposes empty resource collections by design. The frontend uses local typed data while the research and persistence layers are being developed.

---

## Architecture

The application is being developed as a frontend-first experience with a backend that can grow without coupling React components directly to database models.

```text
┌──────────────────────────────┐
│ React / TypeScript experience │
│ sections, components, hooks   │
└──────────────┬───────────────┘
               │ service layer (planned)
┌──────────────▼───────────────┐
│ FastAPI REST API              │
│ schemas, services, routes     │
└──────────────┬───────────────┘
               │ repository layer (planned)
┌──────────────▼───────────────┐
│ PostgreSQL                    │
│ research and evidence data   │
└──────────────────────────────┘
```

The architecture intentionally leaves room for future capabilities such as:

- Research source filtering
- Era and concept exploration
- Evidence comparison
- Citation navigation
- Framework comparison
- AI tool and workflow comparison
- Interactive experiments

These are future extensions, not promises that are already implemented.

---

## Repository structure

```text
.
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   └── main.py
│   ├── Dockerfile
│   └── requirements.txt
├── public/
├── src/
│   ├── data/
│   │   ├── ai-era.ts
│   │   ├── frameworks.ts
│   │   └── timeline.ts
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   └── research.ts
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── docker-compose.yml
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

As the application grows, larger sections will be separated into focused components and modules rather than allowing `App.tsx` or a single data file to become monolithic.

---

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm
- Python 3.12 or newer for backend work
- Docker Desktop if you want to run PostgreSQL and the API through Compose

### Install frontend dependencies

```bash
npm install
```

### Start the frontend

```bash
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

### Build the frontend

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Preview a production build

```bash
npm run preview
```

---

## Backend and local services

### Run the FastAPI app directly

From the repository root:

```bash
python -m pip install -r backend/requirements.txt
python -m uvicorn app.main:app --app-dir backend --reload --port 8000
```

The API will be available at `http://localhost:8000`.

Useful endpoints currently available:

| Endpoint | Purpose |
| --- | --- |
| `GET /api/health` | Confirms the API is running |
| `GET /api/timeline` | Initial timeline resource boundary |
| `GET /api/frameworks` | Initial framework resource boundary |

FastAPI also provides local interactive documentation at:

- `http://localhost:8000/docs`
- `http://localhost:8000/redoc`

### Run PostgreSQL and the API with Docker Compose

```bash
docker compose up --build
```

The development database uses the credentials in `docker-compose.yml`. They are local development values only and must not be reused in production.

To stop the services:

```bash
docker compose down
```

To remove the local database volume as well:

```bash
docker compose down -v
```

The database schema and persistence layer are planned for a later milestone. No production credentials or secrets belong in this repository.

---

## Research data model

The initial TypeScript contracts live in `src/types/research.ts`.

### `TimelineEra`

Represents a meaningful period or conceptual transition:

- `id`
- `title`
- `period`
- `description`
- `technologicalShift`
- `productivityConcept`
- `tags`
- `sourceIds`

### `ResearchSource`

Represents the evidence behind a claim:

- `id`
- `title`
- `authors`
- `year`
- source `type`
- verification `status`
- optional `url`
- optional research note

### `ProductivityFramework`

Represents a framework without flattening it into a single score:

- `id`
- `name`
- `description`
- `dimensions`
- `sourceIds`

### `AIDevelopmentStage`

Represents a stage in the changing human/AI workflow:

- `id`
- `title`
- `description`
- `humanWork`
- `aiWork`
- verification `status`

The future backend schema is expected to normalize related entities such as timeline eras, events, research sources, findings, frameworks, metrics, AI stages, citations, and open questions.

---

## Planned experience

### 1. Introduction

Establish the central question and invite the user into the evolution rather than presenting AI as the starting point.

### 2. Historical timeline

Show how programming moved through changing abstraction levels, tools, collaboration models, and engineering practices.

### 3. Productivity measurement

Explain why simplistic output measures can be misleading and how measurement expanded toward delivery systems, quality, experience, collaboration, and flow.

### 4. Framework explorer

Present DORA and SPACE with verified terminology and source links. SPACE must retain its five dimensions:

- Satisfaction and well-being
- Performance
- Activity
- Communication and collaboration
- Efficiency and flow

### 5. AI-assisted development

Trace a progression from autocomplete to chat assistance, repository-aware tools, code generation, coding agents, and agentic workflows—without implying that newer tools eliminate earlier ones.

### 6. Human and AI collaboration

Make the workflow visible:

```text
Human intent
    ↓
AI generation or assistance
    ↓
Human review
    ↓
Testing and debugging
    ↓
Deployment and operation
    ↓
Feedback
```

### 7. Evidence explorer

Research cards will show title, authors, year, research type, population or context, finding, limitations, and source. Quantitative claims must be traceable to their evidence.

### 8. Open questions

The experience should end with questions such as:

- Does AI improve developer productivity?
- For whom and on which tasks?
- How do code review and debugging change?
- What happens to developer learning?
- Does faster generation improve software outcomes?
- How should organizations measure AI-assisted engineering?

These are questions for investigation, not predetermined conclusions.

---

## Development workflow

Work is organized into meaningful milestones:

1. Project foundation
2. Design system
3. Backend architecture
4. Database schema
5. API layer
6. Hero and navigation
7. Interactive timeline engine
8. Verified historical content
9. Productivity measurement section
10. DORA and SPACE visualization
11. AI evolution experience
12. Research evidence explorer
13. Open questions
14. Frontend/API integration
15. Responsive and mobile refinement
16. Accessibility and performance
17. Testing and final polish

Each milestone should be small enough to review, runnable on its own, and represented by a descriptive Git commit.

---

## Quality and accessibility

The implementation is expected to preserve:

- Semantic HTML and meaningful heading hierarchy
- Keyboard-accessible interaction
- Visible focus states
- Readable contrast
- Responsive layouts for desktop, tablet, and mobile
- Reduced-motion support through `prefers-reduced-motion`
- Explicit loading, empty, and error states as data sources are integrated
- Strong TypeScript types without unnecessary `any` casts
- Research status labels wherever evidence is incomplete

Animation should explain progression or relationships. Decorative motion that competes with reading is out of scope.

---

## License and attribution

The repository does not yet declare a project license. Research sources, excerpts, visual assets, and external materials will need appropriate attribution and usage review before publication.
