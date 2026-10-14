# Personal Website — Specifiche e Visione di Progetto

Documento centrale contenente la visione, le scelte di design, lo stack tecnologico, l'architettura di navigazione e la roadmap di sviluppo.

---

## 1. Obiettivo e Visione

Il progetto consiste nella realizzazione di un **sito web personale di alto livello**, pensato per:
1. **Personal Branding & Identità Digitale:** Mettere in risalto il background tecnico, informatico e digitale in modo autorevole, moderno e curato nei minimi dettagli.
2. **Showcase Completo dei Progetti & Dashboard:** Una vetrina dinamica con schede interattive, link ai siti creati, dashboard integrate o simulate e schede tecniche dettagliate di approfondimento.
3. **Curriculum & Percorso:** Sezione per raccontare il percorso di studi, la carriera, le esperienze passate e un CV interattivo e scaricabile.
4. **Esperienza Utente (UX/UI):** Coinvolgente per recruiter, colleghi e visitatori, con micro-interazioni, animazioni fluide e una forte impronta tecnologica.

---

## 2. Decisioni di Design System & Stile Visivo

- **Tema Generale:** **Dark Mode moderna e Tech**
  - **Sfondo:** Nero profondo / blu notte molto scuro (es. `#08090d` / `#0d1117`) con sottili pattern a griglia tech o gradient mesh sfumati.
  - **Contenitori & Schede:** Stile **Bento Grid** con bordi sottili semi-trasparenti (`border-white/10`), leggero effetto glassmorphism (backdrop blur) e angoli arrotondati moderni.
  - **Accenti Fluorescenti:** 
    - Neon Cyan / Ciano Elettrico (`#00f5ff` / `#38bdf8`)
    - Emerald Tech / Verde Smeraldo Digitale (`#10b981` / `#00ff9d`)
    - Violet / Purple di supporto per gradienti tech sofisticati (`#8b5cf6`)
  - **Dettagli "Developer / Tech":**
    - Micro-badge di stato (es. un pallino verde neon pulsante: *"Available for projects / Open to work"*).
    - Elementi in stile terminale / prompt comandi dove opportuno (es. `~/gioele $ whoami`).
    - Tipografia moderna: Sans-serif pulito (Geist Sans o Inter) abbinato a un font monospace per codice e metriche (Geist Mono o JetBrains Mono).
  - **Micro-interazioni:** Hover magnetici, bagliori luminosi (glow effect) al passaggio del mouse sulle schede, transizioni fluide senza appesantire la navigazione.

---

## 3. Stack Tecnologico Confermato

- **Framework:** **Next.js** (App Router, React, Node.js)
  - *Perché Next.js:* Massima flessibilità. Permette sia ottime performance e SEO (Server Components e pagine statiche generate), sia la potenza di React per le schede interattive, dashboard e animazioni sul client.
- **Styling:** **Tailwind CSS** (per un design system rapido, pulito e configurabile con i colori neon tech scelti).
- **Icone:** **Lucide React** (icone minimali, moderne e leggere).
- **Animazioni:** **Framer Motion** (o CSS puro per le animazioni più leggere e performanti).
- **Linguaggio:** **TypeScript** (garanzia di codice pulito, robusto e autocompletato).

---

## 4. Architettura di Navigazione Ibrida (One-Page + Multi-Page)

Abbiamo strutturato il sito con un approccio **ibrido**: una Home Page ricca e scorrevole per una visione d'insieme immediata, affiancata da sottopagine dedicate per gli approfondimenti tecnici che richiedono spazio.

```
                    ┌─────────────────────────┐
                    │        HOME PAGE        │
                    │   (One-Page Scroller)   │
                    └────────────┬────────────┘
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     │                           │                           │
┌────▼─────────────────┐   ┌─────▼──────────────────┐  ┌─────▼─────────────────┐
│  /progetti           │   │  /progetti/[slug]      │  │  /cv                  │
│  Archivio Completo   │   │  Dettaglio & Dashboard │  │  Curriculum Completo  │
│  Filtri & Ricerca    │   │  Approfondimento Tech  │  │  Visualizza & Scarica │
└──────────────────────┘   └────────────────────────┘  └───────────────────────┘
```

### A. Home Page (`/`) — One-Page a Scorrimento Fluido
La pagina principale permette a chiunque arrivi sul sito di avere una panoramica completa in 60 secondi:
1. **Hero Section:**
   - Nome e titolo ("Full Stack Developer", "Software Engineer & Builder").
   - Badge di stato live (verde neon).
   - Headline che definisce la passione per l'informatica e il digitale.
   - Pulsanti di azione rapidi: *"Esplora Progetti"*, *"Scarica CV"*, *"Contattami"*.
2. **About Me (Bento Grid Highlights):**
   - Breve introduzione personale e filosofia di sviluppo.
   - 2-3 schede bento con metriche (es. anni di esperienza, linguaggi preferiti, cosa sto studiando/approfondendo ora).
3. **Tech Stack & Competenze:**
   - Griglia tech divisa per categorie (Frontend, Backend, Database, Cloud/DevOps, Tools).
   - Card interattive con effetto hover glow fluorescente.
4. **Featured Projects (Top 3-4 Progetti):**
   - Schede grandi e interattive dei progetti migliori.
   - Tag tecnologici, anteprima grafica, link rapido a live demo / repository GitHub.
   - Tasto call-to-action: *"Leggi l'analisi tecnica completa $\rightarrow$"* che porta alla pagina dedicata del progetto.
5. **Timeline / Percorso in Sintesi:**
   - Tappe principali (studi, progetti chiave, posizioni lavorative).
6. **Footer & Canali di Contatto:**
   - Link rapidi: GitHub, LinkedIn, Email, Telegram/Twitter.

---

### B. Pagine Dedicate (Multi-Page)
Sezioni che hanno bisogno di respiro e non appesantiscono la Home:
- **`/progetti` — Archivio Completo:**
  - Tutti i progetti realizzati nel tempo, categorizzati e ricercabili per tecnologia o tipo (Web App, API, Dashboard, Mobile, Strumenti).
- **`/progetti/[slug]` — Scheda Dettaglio & Dashboard:**
  - Dedicata a ciascun progetto.
  - Include: problema risolto, architettura del software, tecnologie usate, screenshot in alta definizione, e per progetti analitici una **dashboard interattiva** o un widget live / simulazione embeddata.
- **`/cv` — Curriculum Vitae Dedicato:**
  - Versione estesa del curriculum strutturata ad hoc per recruiter e aziende.
  - Pulsante ben visibile per il download del PDF del CV ufficiale e versione stampabile pulita.

---

## 5. Roadmap e Prossimi Passi

- [x] **Fase 1.1:** Definizione del ruolo dell'AI (`AGENTS.md`) e visione (`PROJECT.md`).
- [x] **Fase 1.2:** Scelta dello stile visivo (Dark mode tech con accenti fluorescenti e schede Bento).
- [x] **Fase 1.3:** Definizione dell'architettura di navigazione (Ibrido Home one-page + pagine dedicate).
- [x] **Fase 1.4:** Inizializzazione del progetto Next.js 16 (TypeScript, Tailwind CSS v4, icone, struttura cartelle pulita e modulare).
- [x] **Fase 1.5:** Configurazione del Design System in Tailwind (Dark Mode `#08090d`, neon cyan `#00f5ff`, neon emerald `#10b981`, bento cards e glow).
- [x] **Fase 2:** Creazione del Layout base (Navbar fissa tech, Footer) e sviluppo della Home Page (Hero, Bento About, Tech Stack, Featured Projects, Timeline).
- [x] **Fase 3:** Setup dell'infrastruttura dati dei Progetti locali tipizzati e pagine `/progetti` + `/progetti/[slug]` (con dashboard interattiva).
- [x] **Fase 4:** Pagina `/cv` con visualizzazione completa, download del PDF da `/public/cv-gioele.pdf` e stampa.
- [ ] **Fase 5:** Inserimento dei contenuti definitivi forniti dall'utente e deploy su Vercel.
