import { CvData } from "@/types/cv";

export const cvData: CvData = {
  pdfDownloadUrl: "/cv-gioele.pdf",
  summary:
    "Software Engineer con solida esperienza nello sviluppo di applicazioni web full-stack, architetture a componenti e servizi cloud. Specializzato nell'ecosistema React/Next.js e Node.js/TypeScript, con un approccio focalizzato su pulizia del codice, scalabilità e user experience di alta qualità.",
  workExperiences: [
    {
      role: "Full-Stack Developer",
      company: "Tech Solutions & Web Lab",
      location: "Italia",
      period: "2023 — Presente",
      current: true,
      description:
        "Progettazione e sviluppo di piattaforme web e dashboard per clienti aziendali, curando sia l'architettura frontend che le integrazioni backend e database.",
      achievements: [
        "Sviluppo di portali interattivi con Next.js e Tailwind CSS, riducendo i tempi di caricamento del 45%",
        "Progettazione di REST API scalabili e pipeline di integrazione continua su Vercel e GitHub Actions",
        "Collaborazione alla definizione dei design system e delle componenti riutilizzabili per team multidisciplinari",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      role: "Frontend Developer & UI Specialist",
      company: "Digital Studio",
      location: "Italia",
      period: "2022 — 2023",
      current: false,
      description:
        "Realizzazione di interfacce web responsive, web application dinamiche e ottimizzazione dell'esperienza utente.",
      achievements: [
        "Implementazione di interfacce ad alta fedeltà a partire da prototipi Figma",
        "Ottimizzazione SEO e accessibilità (a11y), raggiungendo punteggi Lighthouse superiori a 95",
        "Integrazione di sistemi di pagamento e API di terze parti",
      ],
      technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Git"],
    },
  ],
  education: [
    {
      degree: "Formazione Specialistica in Informatica & Sviluppo Software",
      institution: "Percorso Tecnico Superiore / Informatica",
      location: "Italia",
      period: "2020 — 2023",
      description:
        "Approfondimento su architetture software, algoritmi, strutture dati, programmazione orientata agli oggetti e sviluppo di sistemi web moderni.",
    },
    {
      degree: "Diploma di Istruzione Secondaria Superiore ad Indirizzo Tecnologico / Informatico",
      institution: "Istituto Tecnico",
      location: "Italia",
      period: "2015 — 2020",
      description: "Basi di programmazione, reti di calcolatori, sistemi operativi e database relazionali.",
    },
  ],
  certifications: [
    {
      name: "Next.js & React Full-Stack Architecture",
      issuer: "Professional Certification",
      date: "2023",
    },
    {
      name: "TypeScript Advanced Patterns & Clean Architecture",
      issuer: "Code Mastery Institute",
      date: "2023",
    },
  ],
  languages: [
    { language: "Italiano", level: "Madrelingua" },
    { language: "Inglese", level: "Professionale (B2/C1 Tecnico)" },
  ],
};
