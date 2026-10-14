import { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Creazione di interfacce veloci, accessibili e modulari con design system moderni.",
    skills: [
      { name: "React", category: "frontend", level: "Avanzato", highlight: true },
      { name: "Next.js (App Router)", category: "frontend", level: "Avanzato", highlight: true },
      { name: "TypeScript", category: "frontend", level: "Avanzato", highlight: true },
      { name: "Tailwind CSS", category: "frontend", level: "Avanzato", highlight: true },
      { name: "HTML5 / Semantic Web", category: "frontend", level: "Avanzato" },
      { name: "Framer Motion", category: "frontend", level: "Intermedio" },
      { name: "State Management (Zustand/Context)", category: "frontend", level: "Avanzato" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Architetture API",
    description: "Sviluppo di API resilienti, microservizi e business logic sicura.",
    skills: [
      { name: "Node.js", category: "backend", level: "Avanzato", highlight: true },
      { name: "Express / Fastify", category: "backend", level: "Avanzato" },
      { name: "RESTful API Design", category: "backend", level: "Avanzato", highlight: true },
      { name: "Next.js Route Handlers", category: "backend", level: "Avanzato" },
      { name: "Authentication (JWT, OAuth, NextAuth)", category: "backend", level: "Avanzato" },
      { name: "Python", category: "backend", level: "Intermedio" },
    ],
  },
  {
    id: "database",
    title: "Database & Data Modeling",
    description: "Modellazione dati relazionali e NoSQL con query ottimizzate.",
    skills: [
      { name: "PostgreSQL", category: "database", level: "Avanzato", highlight: true },
      { name: "Prisma ORM / Drizzle", category: "database", level: "Avanzato", highlight: true },
      { name: "MongoDB", category: "database", level: "Intermedio" },
      { name: "Redis (Caching & Pub/Sub)", category: "database", level: "Intermedio" },
      { name: "SQL Query Optimization", category: "database", level: "Intermedio" },
    ],
  },
  {
    id: "devops-cloud",
    title: "Cloud & DevOps",
    description: "Continuous integration, deployment automatizzato e hosting scalabile.",
    skills: [
      { name: "Vercel Platform", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Git & GitHub Workflows", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Docker & Containerization", category: "devops-cloud", level: "Intermedio" },
      { name: "CI/CD Pipelines", category: "devops-cloud", level: "Intermedio" },
      { name: "Linux / Bash Scripting", category: "devops-cloud", level: "Intermedio" },
    ],
  },
  {
    id: "tools-methodologies",
    title: "Strumenti & Metodologie",
    description: "Best practice di sviluppo, testing, code quality e standard di team.",
    skills: [
      { name: "Clean Code & Refactoring", category: "tools-methodologies", level: "Avanzato" },
      { name: "VS Code & AI Pair-Programming", category: "tools-methodologies", level: "Avanzato" },
      { name: "Postman / Bruno API Client", category: "tools-methodologies", level: "Avanzato" },
      { name: "Figma (UI Implementation)", category: "tools-methodologies", level: "Intermedio" },
      { name: "Performance & SEO Audit", category: "tools-methodologies", level: "Avanzato" },
    ],
  },
];
