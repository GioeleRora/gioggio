import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    slug: "nexus-analytics",
    title: "Nexus Cloud & Real-time Analytics",
    summary:
      "Piattaforma di telemetria e monitoraggio per applicazioni distribuite con dashboard analitica in tempo reale e allarmi intelligenti.",
    fullDescription:
      "Nexus Analytics è una piattaforma completa per aggregare log, metriche di performance e telemetria di sistemi distribuiti. Fornisce viste sintetiche per i team di ingegneria, evidenziando colli di bottiglia, tempi di risposta e throughput in tempo reale.",
    category: "dashboard",
    categoryLabel: "Analytics & Dashboard",
    featured: true,
    order: 1,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PostgreSQL"],
    liveUrl: "https://demo.nexus-analytics.example.com",
    repoUrl: "https://github.com/gioele/nexus-analytics",
    architectureHighlights: [
      "Architettura ibrida Server/Client Components per un primo rendering istantaneo",
      "Elaborazione delle metriche con aggiornamento incrementale ogni 5 secondi",
      "Isolamento delle query analitiche pesanti per non impattare le prestazioni delle transazioni",
      "Design System scuro con palette ciano ed emerald per massima leggibilità dei grafici",
    ],
    challengesAndSolutions: [
      {
        challenge: "Rendering fluido di flussi di dati ad alta frequenza senza freeze dell'interfaccia.",
        solution: "Adozione di memoizzazione granulare in React e throttling sul flusso di campionamento dati.",
      },
      {
        challenge: "Mantenere bassi i consumi energetici su dispositivi mobili pur visualizzando grafici SVG complessi.",
        solution: "Ottimizzazione del numero di nodi DOM renderizzati tramite virtualizzazione degli assi e campionamento aggregato.",
      },
    ],
    dashboard: {
      title: "Nexus Telemetry Live Monitor",
      description: "Metriche di sistema aggregate nelle ultime 24 ore.",
      kpis: [
        { label: "Throughput Richieste", value: "24.8k / min", change: "+14.2%", isPositive: true },
        { label: "Tempo di Risposta Medio", value: "48 ms", change: "-6.5%", isPositive: true },
        { label: "Uptime Globale", value: "99.98%", change: "+0.02%", isPositive: true },
        { label: "Error Rate (5xx)", value: "0.012%", change: "-0.004%", isPositive: true },
      ],
      chartData: [
        { date: "00:00", value: 120, secondaryValue: 42 },
        { date: "04:00", value: 85, secondaryValue: 38 },
        { date: "08:00", value: 240, secondaryValue: 52 },
        { date: "12:00", value: 310, secondaryValue: 49 },
        { date: "16:00", value: 290, secondaryValue: 46 },
        { date: "20:00", value: 220, secondaryValue: 44 },
        { date: "23:59", value: 160, secondaryValue: 41 },
      ],
      recentLogs: [
        { timestamp: "14:52:10", action: "Cluster node eu-central-1 autoscaled to 4 replicas", status: "success" },
        { timestamp: "14:48:32", action: "Database connection pool refreshed (latency: 1.2ms)", status: "info" },
        { timestamp: "14:35:19", action: "High traffic spike detected on endpoint /api/v1/metrics", status: "warning" },
        { timestamp: "14:20:05", action: "Backup incremental snapshot completed", status: "success" },
      ],
    },
  },
  {
    slug: "hyper-commerce",
    title: "HyperCommerce Headless Storefront",
    summary:
      "E-commerce ad altissime prestazioni con architettura headless, checkout ultra-rapido e Lighthouse score 100/100.",
    fullDescription:
      "Una soluzione e-commerce progettata specificamente per massimizzare il tasso di conversione grazie a tempi di caricamento inferiori a 300ms, transizioni di pagina istantanee e una gestione del carrello completamente persistente e reattiva.",
    category: "web-app",
    categoryLabel: "Web Application",
    featured: true,
    order: 2,
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Stripe API", "Zustand"],
    liveUrl: "https://hypercommerce.example.com",
    repoUrl: "https://github.com/gioele/hypercommerce",
    architectureHighlights: [
      "Rigenerazione statica incrementale (ISR) per il catalogo prodotti con zero attese per gli utenti",
      "Integrazione sicura con Stripe Checkout e webhooks asincroni",
      "Stato del carrello salvato su local storage con sincronizzazione serverless ottimistica",
    ],
    challengesAndSolutions: [
      {
        challenge: "Evitare il layout shift durante il caricamento dinamico delle immagini ad alta risoluzione.",
        solution: "Utilizzo di Next/Image con placeholder sfocati (blur data URL) e aspect-ratio rigorosi.",
      },
    ],
    dashboard: {
      title: "Store Performance & Conversions",
      description: "Metriche e volume transazioni dell'ambiente demo.",
      kpis: [
        { label: "Conversione Checkout", value: "4.85%", change: "+0.8%", isPositive: true },
        { label: "Carrello Medio", value: "€ 84.50", change: "+12%", isPositive: true },
        { label: "First Contentful Paint", value: "0.4s", change: "Top 1%", isPositive: true },
        { label: "Ordini Processati (oggi)", value: "342", change: "+28", isPositive: true },
      ],
      chartData: [
        { date: "Lun", value: 45, secondaryValue: 3200 },
        { date: "Mar", value: 52, secondaryValue: 3900 },
        { date: "Mer", value: 49, secondaryValue: 3600 },
        { date: "Gio", value: 68, secondaryValue: 4800 },
        { date: "Ven", value: 85, secondaryValue: 6100 },
        { date: "Sab", value: 92, secondaryValue: 7200 },
        { date: "Dom", value: 74, secondaryValue: 5400 },
      ],
    },
  },
  {
    slug: "core-api-gateway",
    title: "Edge API Gateway & Microservices Hub",
    summary:
      "Gateway API distribuito con rate limiting distribuito, validazione schema runtime e caching multilivello.",
    fullDescription:
      "Hub per microservizi che gestisce l'autenticazione tramite JWT con rotazione delle chiavi, routing dinamico e monitoraggio centralizzato delle anomalie per servizi eterogenei.",
    category: "api-backend",
    categoryLabel: "Backend & API",
    featured: true,
    order: 3,
    tags: ["Node.js", "TypeScript", "Redis", "Docker", "JWT"],
    repoUrl: "https://github.com/gioele/core-api-gateway",
    architectureHighlights: [
      "Rate-limiting token bucket basato su Redis distribuito",
      "Validazione rigorosa del payload con schema Zod a runtime",
      "Struttura a middleware componibili con gestione centralizzata delle eccezioni",
    ],
    challengesAndSolutions: [
      {
        challenge: "Prevenire attacchi DDoS e abusi di richieste concorrenti senza penalizzare gli utenti legittimi.",
        solution: "Algoritmo sliding window su Redis con latenza di verifica sub-millisecondo.",
      },
    ],
  },
  {
    slug: "dev-matrix-cli",
    title: "DevMatrix CLI Automation Suite",
    summary:
      "Strumento a riga di comando per velocizzare lo scaffolding, l'analisi del codice e il deployment di progetti web moderni.",
    fullDescription:
      "Un toolkit CLI sviluppato per sviluppatori per ridurre i tempi di configurazione iniziale di nuovi progetti, standardizzare le configurazioni di linting, commit convenzionali e pipeline di build.",
    category: "tool",
    categoryLabel: "Developer Tooling",
    featured: false,
    order: 4,
    tags: ["TypeScript", "Node.js", "Commander.js", "Chalk", "GitHub Actions"],
    repoUrl: "https://github.com/gioele/devmatrix-cli",
    architectureHighlights: [
      "Architettura a plugin modulari per estendere i comandi",
      "Supporto a template personalizzati con sincronizzazione remota",
    ],
    challengesAndSolutions: [
      {
        challenge: "Garantire l'esecuzione cross-platform su Windows, macOS e Linux con gestione unificata dei percorsi.",
        solution: "Normalizzazione dei path con Node.js path standard e gestione accurata dei ritorni a capo (CRLF vs LF).",
      },
    ],
  },
];
