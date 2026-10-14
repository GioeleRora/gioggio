import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    slug: "egg-edge-ai",
    title: "EGG – Edge-AI Traffic Mesh Network",
    summary:
      "Nodo Edge-AI a basso costo (~€100) per il monitoraggio del traffico urbano in tempo reale che sostituisce sensori proprietari da €15k+, premiato al 1° posto a HackTurin.",
    fullDescription:
      "Progetto vincitore del 1° posto ad HackTurin. EGG è una rete mesh di nodi Edge-AI distribuita per il monitoraggio intelligente del traffico urbano. Combina elaborazione neurale a bordo camera (YOLOX-nano) e architettura firmware dual-core per garantire massima reattività, basso consumo ed elevata conformità GDPR (nessun flusso video grezzo trasmesso).",
    category: "edge-ai",
    categoryLabel: "Edge-AI & Embedded",
    featured: true,
    order: 1,
    tags: [
      "Zephyr RTOS",
      "C++",
      "Python",
      "Linux (Debian)",
      "Docker",
      "Arduino UNO Q",
      "YOLOX-nano",
      "SQLite",
      "RPC",
    ],
    architectureHighlights: [
      "Guidato il team al 1° posto ad HackTurin e ingegnerizzato il case hardware in stampa 3D; co-architettato un nodo edge-AI da ~€100 per rimpiazzare sensori proprietari da oltre €15k.",
      "Architettato firmware dual-core su Arduino UNO Q: offloaded del sensing real-time I2C e timer traffico su Zephyr RTOS (C++), interfacciato a Debian/Docker via RPC con latenza inferiore a 7ms.",
      "Integrata inferenza locale YOLOX-nano con modulo camera 8MP IMX219 per tracciamento anonimo GDPR-compliant e inoltro di alert pedoni e collisioni a una mappa web 3D live.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Eseguire modelli di computer vision in tempo reale su micro-hardware edge a basso costo mantenendo la determinazione temporale.",
        solution:
          "Separazione architetturale dual-core: task temporali critici e gestione dei sensori I2C isolati su Zephyr RTOS in C++, con bridge RPC verso l'ambiente Debian containerizzato su Docker.",
      },
      {
        challenge:
          "Garantire il rispetto rigoroso della privacy GDPR nel monitoraggio di strade pubbliche.",
        solution:
          "Elaborazione edge 100% locale: i fotogrammi della videocamera non vengono mai salvati né trasmessi in rete, convertendosi immediatamente in metadati vettoriali e statistiche anonimizzate.",
      },
    ],
    dashboard: {
      title: "EGG Telemetry & Sensor Mesh Feed",
      description: "Metriche di elaborazione edge e latenza RPC del nodo Arduino UNO Q.",
      kpis: [
        { label: "Latenza Bridge RPC", value: "< 7 ms", change: "Sub-10ms target", isPositive: true },
        { label: "Costo Hardware Nodo", value: "~€100", change: "-99% vs €15k sensori", isPositive: true },
        { label: "Modello Neurale", value: "YOLOX-nano", change: "8MP IMX219", isPositive: true },
        { label: "Privacy Status", value: "100% GDPR", change: "Zero video streamed", isPositive: true },
      ],
      chartData: [
        { date: "00:00", value: 14, secondaryValue: 5 },
        { date: "04:00", value: 6, secondaryValue: 6 },
        { date: "08:00", value: 142, secondaryValue: 7 },
        { date: "12:00", value: 189, secondaryValue: 6 },
        { date: "16:00", value: 175, secondaryValue: 6 },
        { date: "20:00", value: 98, secondaryValue: 5 },
        { date: "23:59", value: 28, secondaryValue: 5 },
      ],
      recentLogs: [
        { timestamp: "16:12:04", action: "Zephyr RTOS I2C sensor bus sync completed (latency: 4.8ms)", status: "success" },
        { timestamp: "16:11:45", action: "YOLOX-nano frame inferenced: 4 vehicles, 2 pedestrians detected", status: "info" },
        { timestamp: "16:10:12", action: "RPC message dispatched to Docker bridge endpoint", status: "success" },
        { timestamp: "16:08:50", action: "Live 3D web map alert telemetry refreshed", status: "info" },
      ],
    },
  },
  {
    slug: "drone-delivery-simulator",
    title: "Drone Delivery Simulator – 3D Aerodynamics & Systems Game",
    summary:
      "Simulatore di volo fisico in Unity con calcolo dell'aerodinamica in tempo reale, variazione dinamica della massa del carico e consumo della batteria.",
    fullDescription:
      "Simulatore di volo e sistemi dinamici ingegnerizzato in Unity con motore fisico 3D personalizzato. Modella il comportamento aerodinamico del multirotore considerando lo spostamento del centro di massa con carico utile, coefficienti di drag variabili e scarica realistica della batteria.",
    category: "simulation",
    categoryLabel: "3D Physics & Simulation",
    featured: true,
    order: 2,
    tags: [
      "Unity",
      "C#",
      "3D Physics Engine",
      "HLSL / Shader Graph",
      "Git",
    ],
    architectureHighlights: [
      "Ingegnerizzato simulatore di volo in Unity con calcolo in tempo reale di spostamento della massa del carico, aerodinamica e consumo dinamico della batteria.",
      "Architettata pipeline procedurale per generare missioni combinate a logica a stati e meccaniche di progressione per esplorazione verticale.",
      "Progettato framework di input analogico per gamepad a bassissima latenza e caricamento continuo dei livelli tramite shader glassmorphism in HLSL.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Simulare fedelmente le variazioni di manovrabilità al variare del carico utile agganciato al drone.",
        solution:
          "Ricalcolo dinamico a ogni frame del tensore d'inerzia e del centro di massa nel rigid body di Unity.",
      },
      {
        challenge:
          "Garantire un framerate elevato e stabile senza stuttering durante la transizione tra aree di gioco complesse.",
        solution:
          "Streaming asincrono dei livelli e shader ottimizzati con Shader Graph e HLSL dedicati.",
      },
    ],
  },
  {
    slug: "route-2025",
    title: "Route 2025 – Full-Stack Event Logistics Platform",
    summary:
      "Piattaforma centralizzata per la logistica di eventi Scout con tracking delle presenze in tempo reale e sincronizzazione per oltre 30 partecipanti contemporanei.",
    fullDescription:
      "Piattaforma web modulare progettata e implementata per la gestione logistica e il coordinamento sul campo di eventi Scout. Centralizza il monitoraggio delle presenze live, la gestione degli itinerari e la condivisione istantanea delle tappe tra gruppi regionali diversi.",
    category: "web-app",
    categoryLabel: "Full-Stack Web App",
    featured: true,
    order: 3,
    tags: [
      "Node.js",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Vercel",
      "Git CI/CD",
    ],
    liveUrl: "https://route2025.vercel.app",
    architectureHighlights: [
      "Architettata una piattaforma centralizzata per la logistica di eventi Scout, ottimizzando il tracking delle presenze live e il coordinamento tra molteplici gruppi regionali.",
      "Implementati endpoint REST modulari e una dashboard responsive per sincronizzare lo stato live tra oltre 30 partecipanti contemporanei.",
      "Mantenuta pipeline di deployment su Vercel con integrazione continua automatizzata e branch protection su GitHub.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Assicurare reattività e fruibilità del servizio anche con connettività mobile limitata durante le uscite all'aperto.",
        solution:
          "Interfaccia responsive ultra-leggera senza bundle pesanti e hosting su edge network Vercel per tempi di caricamento minimi.",
      },
    ],
  },
];
