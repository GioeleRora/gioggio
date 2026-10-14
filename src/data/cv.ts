import { CvData } from "@/types/cv";

export const cvData: CvData = {
  pdfDownloadUrl: "/cv-gioele.pdf",
  summary:
    "Studente di Ingegneria Informatica al Politecnico di Torino (B.Sc. in lingua inglese) e membro dell'IEEE-Eta Kappa Nu (IEEE-HKN) Honor Society. Esperienza attiva nella divisione IT del Team Astra per lo sviluppo di firmware embedded di un rover lunare autonomo e nel Team QubiTo per la ricerca su quantum computing. Vincitore del 1° posto ad HackTurin con il progetto EGG.",
  workExperiences: [
    {
      role: "IT Division – Spherical Lunar Rover",
      company: "Team Astra – Politecnico di Torino",
      location: "Torino, Italia",
      period: "Sett 2024 — Ott 2026",
      current: false,
      description:
        "Sviluppo firmware embedded e integrazione sensori per un rover lunare sferico autonomo azionato da moto a pendolo interno e attuatori robotici.",
      achievements: [
        "Sviluppo, profiling e test di firmware embedded C/C++ per regolazione di velocità di motori DC, controllo PWM e integrazione sensori di temperatura.",
        "Ottimizzazione delle librerie driver di gestione motori per microcontrollori a risorse limitate.",
        "Validazione dei sistemi di attuazione robotica per esibizioni ed esposizioni pubbliche.",
      ],
      technologies: ["C", "C++", "Embedded Firmware", "Zephyr RTOS", "STM32", "PWM Control", "DC Motors", "Sensori I2C"],
    },
    {
      role: "Software & Algorithms Division",
      company: "Team QubiTo – Politecnico di Torino",
      location: "Torino, Italia",
      period: "Ott 2026 — Presente",
      current: true,
      description:
        "Divisione algoritmi e software del team studentesco universitario di quantum computing del Politecnico di Torino.",
      achievements: [
        "Contributo alla progettazione di algoritmi quantistici e benchmark di simulazione di circuiti quantistici.",
        "Analisi delle architetture di calcolo quantistico e modellazione computazionale.",
      ],
      technologies: ["Python", "Quantum Computing", "Algoritmi", "Circuit Simulation"],
    },
    {
      role: "STEM Private Tutor",
      company: "Tutor Indipendente",
      location: "Torino, Italia",
      period: "2021 — Presente",
      current: true,
      description:
        "Tutoraggio individuale in Matematica, Fisica e Informatica per studenti delle scuole superiori e dei primi anni universitari.",
      achievements: [
        "Traduzione di formule teoriche complesse in metodologie pratiche di problem-solving algoritmico.",
        "Preparazione mirata per verifiche ed esami universitari di analisi matematica e programmazione.",
      ],
      technologies: ["Matematica", "Fisica", "Informatica", "Problem Solving Algoritmico"],
    },
    {
      role: "Unit Leader (Capo Reparto)",
      company: "Gruppo Scout AGESCI",
      location: "Torino, Italia",
      period: "Sett 2025 — Presente",
      current: true,
      description:
        "Ruolo educativo di responsabilità, coordinamento e leadership per un gruppo giovanile di oltre 30 ragazzi.",
      achievements: [
        "Pianificazione dei percorsi educativi annuali e gestione della logistica sul campo per route ed eventi nazionali.",
        "Sviluppo di soft skills di leadership, gestione delle emergenze e lavoro di squadra.",
      ],
      technologies: ["Leadership", "Team Management", "Logistica", "Mentoring"],
    },
    {
      role: "Volontario",
      company: "Operazione Mato Grosso (OMG)",
      location: "Italia",
      period: "2015 — Presente",
      current: true,
      description:
        "Attività di volontariato ad alto impegno fisico e sociale in ambienti di alta montagna.",
      achievements: [
        "Supporto alla costruzione di infrastrutture, ristrutturazione e manutenzione operativa presso il Rifugio delle Marmotte.",
      ],
      technologies: ["Lavoro di squadra", "Problem Solving", "Manutenzione"],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Engineering (Ingegneria Informatica)",
      institution: "Politecnico di Torino (Taught entirely in English)",
      location: "Torino, Italia",
      period: "Sett 2024 — Presente",
      description:
        "Honors: Member, IEEE-Eta Kappa Nu (IEEE-HKN, Mu Nu Chapter) – IEEE Honor Society. Corsi chiave: Analisi Matematica I & II, Algebra Lineare & Geometria, Principi di Informatica, Fisica.",
    },
    {
      degree: "Diploma di Maturità Scientifica (Scienze Applicate)",
      institution: "Liceo Scientifico delle Scienze Applicate",
      location: "Italia",
      period: "Sett 2019 — Lug 2024",
      description:
        "Partecipante attivo a gare individuali e a squadre delle Olimpiadi della Matematica, della Fisica e dell'Informatica.",
    },
  ],
  certifications: [
    {
      name: "Member, IEEE-Eta Kappa Nu (IEEE-HKN, Mu Nu Chapter)",
      issuer: "IEEE Honor Society",
      date: "2024",
    },
    {
      name: "1° Posto @ HackTurin (Progetto EGG Edge-AI Traffic Mesh Network)",
      issuer: "HackTurin Hackathon",
      date: "Ottobre 2026",
    },
  ],
  languages: [
    { language: "Italiano", level: "Madrelingua" },
    { language: "Inglese", level: "Competenza Professionale Completa (B.Sc. in lingua inglese)" },
  ],
};
