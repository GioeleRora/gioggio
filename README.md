# Gioele's Personal Website & Portfolio

Sito personale e portfolio moderno sviluppato con **Next.js 16**, **TypeScript** e **Tailwind CSS v4**, progettato per il deploy serverless ad alte prestazioni su **Vercel**.

---

## 📁 Struttura del Progetto

Il progetto è organizzato in modo rigoroso per separare chiaramente pagine, componenti, dati e tipi:

```text
src/
├── app/                      # App Router: pagine e rotte del sito
│   ├── layout.tsx            # Root Layout (Dark Theme, Font Geist, Navbar e Footer fissi)
│   ├── page.tsx              # Home Page (One-page scrollable: Hero, About, Skills, Featured, Timeline)
│   ├── globals.css           # Design System Tailwind CSS v4, palette neon e bento-cards
│   ├── progetti/
│   │   ├── page.tsx          # Archivio completo progetti con filtri per categoria e ricerca
│   │   └── [slug]/
│   │       └── page.tsx      # Scheda tecnica di dettaglio e Dashboard interattiva del progetto
│   └── cv/
│       └── page.tsx          # Curriculum Vitae completo (visualizzazione, stampa e download PDF)
│
├── components/               # Componenti React modulari
│   ├── layout/               # Elementi strutturali globali (Navbar.tsx, Footer.tsx)
│   ├── home/                 # Sezioni della Home Page (HeroSection, BentoAbout, TechStackGrid, ecc.)
│   ├── projects/             # Componenti progetti (ProjectCard, ProjectsDirectory, ProjectDashboardPreview)
│   ├── cv/                   # Componenti CV (CvPrintButton)
│   └── ui/                   # Primitive grafiche riutilizzabili (Badge, Button, Icons)
│
├── data/                     # 📂 DATI LOCALI (Zero-cost, statici, compilati per Vercel)
│   ├── profile.ts            # Dati personali, biografia, contatti, link social e status badge
│   ├── skills.ts             # Competenze tecnologiche suddivise per categorie
│   ├── projects.ts           # Dati dei progetti, schede tecniche e metriche delle dashboard
│   └── cv.ts                 # Esperienze lavorative, istruzione, certificazioni e lingue
│
├── types/                    # Definizioni TypeScript per type-safety totale
│   ├── profile.ts
│   ├── skill.ts
│   ├── project.ts
│   └── cv.ts
│
└── lib/
    └── utils.ts              # Utility helper (cn per Tailwind)

public/
├── cv-gioele.pdf             # PDF del Curriculum scaricabile con un click
```

---

## 🚀 Avvio Locale

Per avviare il server di sviluppo:

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per visualizzare il sito.

---

## 🛠️ Comandi Utili

* `npm run dev`: Avvia il server di sviluppo locale.
* `npm run build`: Compila l'applicazione per la produzione e verifica tutti i tipi statici.
* `npm run lint`: Esegue il controllo di qualità del codice con ESLint.

---

## ☁️ Deploy su Vercel

1. Collega questo repository su [Vercel](https://vercel.com).
2. Vercel riconoscerà automaticamente il framework **Next.js**.
3. Clicca su **Deploy**: il sito verrà compilato ed erogato globalmente con CDN Edge ad altissime prestazioni a costo zero.
