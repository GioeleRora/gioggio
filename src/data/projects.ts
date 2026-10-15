import { ProjectItem } from "@/types/project";

export const projectsData: ProjectItem[] = [
  {
    slug: "egg-edge-ai",
    title: "EGG – Edge-AI Traffic Mesh Network",
    summary:
      "Low-cost (~€100) Edge-AI node for real-time urban traffic monitoring replacing €15k+ proprietary sensors. Awarded 1st Place at HackTurin.",
    fullDescription:
      "Awarded 1st place at HackTurin. EGG is a distributed Edge-AI mesh node network for real-time traffic monitoring. It combines on-camera neural inference (YOLOX-nano) and an energy-efficient dual-core firmware architecture to deliver sub-7ms latency while maintaining strict GDPR compliance without streaming raw video.",
    category: "edge-ai",
    categoryLabel: "Edge-AI & Embedded",
    featured: true,
    order: 1,
    tags: [
      "C++",
      "Python",
      "Linux",
      "Docker",
      "Arduino UNO Q",
      "YOLOX-nano",
      "SQLite",
      "RPC",
    ],
    architectureHighlights: [
      "Led team to 1st place and engineered the 3D-printed hardware enclosure; co-architected a ~€100 edge-AI node to replace €15k+ proprietary traffic sensors.",
      "Architected dual-core firmware on Arduino UNO Q: offloaded real-time I2C sensing and traffic timers to low-level C++ microcontroller firmware, bridging to Linux/Docker via RPC with <7 ms latency.",
      "Integrated local YOLOX-nano inference on 8MP IMX219 camera for GDPR-compliant tracking; relayed pedestrian and collision alerts to a live 3D web map.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Running real-time neural computer vision models on low-power edge hardware without thermal throttling or latency spikes.",
        solution:
          "Dual-core architectural split: critical real-time sensing and timer tasks isolated in low-level C++ firmware, with high-level processing in Docker containers on Linux bridged via RPC.",
      },
      {
        challenge:
          "Ensuring full GDPR privacy compliance for public road monitoring.",
        solution:
          "100% on-device edge processing: video frames are never stored or transmitted over the network, converting immediately into anonymous vector coordinates and aggregate counts.",
      },
    ],
    dashboard: {
      title: "EGG Telemetry & Sensor Mesh Feed",
      description: "Edge processing performance and RPC bridge latency on Arduino UNO Q.",
      kpis: [
        { label: "RPC Bridge Latency", value: "< 7 ms", change: "Sub-10ms target", isPositive: true },
        { label: "Hardware Unit Cost", value: "~€100", change: "-99% vs €15k sensors", isPositive: true },
        { label: "Neural Model", value: "YOLOX-nano", change: "8MP IMX219", isPositive: true },
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
        { timestamp: "16:12:04", action: "I2C sensor bus sync completed (latency: 4.8ms)", status: "success" },
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
      "Physics flight simulator in Unity featuring real-time aerodynamics, dynamic payload center-of-mass shifts, and battery drain modeling.",
    fullDescription:
      "A flight and systems simulator engineered in Unity featuring a custom 3D physics engine. Accurately simulates multirotor aerodynamic behavior under varying payload masses, drag coefficients, and battery discharge rates.",
    category: "simulation",
    categoryLabel: "3D Physics & Simulation",
    featured: true,
    order: 2,
    thumbnailUrl: "/projects/drone-delivery.png",
    screenshots: [
      {
        url: "/projects/drone-delivery.png",
        title: "Multirotor Flight Workbench & Hardware Inspection",
        caption: "High-detail multirotor drone model on the workshop testing bench in Unity, visualizing component placement and aerodynamic prop guards.",
      },
    ],
    tags: [
      "Unity",
      "C#",
      "3D Physics Engine",
      "HLSL / Shader Graph",
      "Git",
    ],
    architectureHighlights: [
      "Engineered a physics flight simulator in Unity featuring real-time payload mass shifts, drag calculations, and dynamic battery drain.",
      "Architected procedural mission pipelines combined with branching state logic and unlocking mechanics for vertical exploration.",
      "Designed a low-latency analog gamepad input framework and continuous, loading-free level deployment using modern glassmorphism shaders.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Simulating authentic aerodynamic turbulence and instantaneous center-of-mass displacement upon payload release.",
        solution:
          "Mathematical aerodynamic force modeling computed every physics tick in Unity, dynamically updating moment-of-inertia tensors.",
      },
      {
        challenge:
          "Maintaining a stable high frame-rate without stuttering during seamless level transitions.",
        solution:
          "Asynchronous level streaming and optimized shaders built with Shader Graph and HLSL.",
      },
    ],
  },
  {
    slug: "route-2025",
    title: "Route 2025 – Full-Stack Scout Logistics & Heatmap Platform",
    summary:
      "Modern zero-build web platform and algorithmic continuous slot planner built for Scout groups with Neon PostgreSQL and interactive heatmaps.",
    fullDescription:
      "A zero-build web application engineered for Clan & Fuoco scout groups to eliminate messy chat polls. Features a touch-optimized 62-day summer calendar, PostgreSQL persistence on Neon Serverless, and an automated continuous window algorithm calculating the highest-attendance route dates.",
    category: "web-app",
    categoryLabel: "Full-Stack Web App",
    featured: true,
    order: 3,
    thumbnailUrl: "/projects/route2025-results.png",
    screenshots: [
      {
        url: "/projects/route2025-results.png",
        title: "Attendance Heatmap & Optimal Continuous Window",
        caption: "Color-graded calendar heatmap computing the highest common attendance interval across all registered participants with 1-click WhatsApp sharing.",
      },
      {
        url: "/projects/route2025-calendar.png",
        title: "Touch-Optimized Interactive Calendar",
        caption: "Custom 62-day mobile calendar with smart touch recognition distinguishing between taps (<8px) and vertical page scrolling.",
      },
      {
        url: "/projects/route2025-home.png",
        title: "Multi-Clan Group Dashboard",
        caption: "Centralized coordination hub with multi-clan data isolation, live participant counts, and individual response badges.",
      },
    ],
    tags: [
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "JavaScript (ES6+)",
      "Zero-Build Architecture",
      "Vercel",
    ],
    architectureHighlights: [
      "Engineered a zero-build client architecture (pure semantic HTML5 and vanilla CSS/JS) ensuring instant load times over remote 3G/4G mountain networks.",
      "Implemented an optimal continuous window algorithm that calculates maximum concurrent attendance intervals (customizable from 2 to 31 days).",
      "Architected multi-clan tenant isolation backed by Neon Serverless PostgreSQL with atomic upserts and indexed query resolution.",
      "Designed an intelligent touch interaction engine on mobile distinguishing tap events from scroll gestures for seamless calendar selection.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Eliminating unintentional date selections while scrolling through the 62-day calendar on small mobile screens.",
        solution:
          "Implemented a custom touch threshold listener that tracks pixel displacement, executing date toggles only when finger movement is under 8px.",
      },
      {
        challenge:
          "Computing the optimal continuous route window when no single date has 100% attendance across all members.",
        solution:
          "Engineered a resilient sliding-window algorithm that optimizes for maximum joint availability and daily average presence, dynamically extending adjacent matches.",
      },
    ],
  },
];
