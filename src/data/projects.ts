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
    videoUrl: "https://youtu.be/gVzeYpoJ9_o?si=tZUxdF2cDVS-mbpG",
    thumbnailUrl: "/projects/egg-banner.png",
    screenshotAspect: "portrait",
    screenshots: [
      {
        url: "/projects/egg/egg-prototype.jpg",
        title: "Physical 3D-Printed Enclosure Prototype",
        caption: "Aerodynamic egg enclosure engineered and 3D-printed to house the dual-core Arduino UNO Q microcontroller, 8MP IMX219 sensor, and custom I2C telemetry bus.",
      },
      {
        url: "/projects/egg/egg-hackturin-award.jpg",
        title: "1st Place Award Ceremony @ HackTurin",
        caption: "Team award presentation at Centro Congressi Unione Industriali di Torino, securing 1st Place overall with the functional EGG smart city mesh prototype.",
      },
    ],
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
    slug: "tapout-alarm",
    title: "⚡ TapOut – Commercial-Grade Unstoppable Alarm & Physical App Blocker",
    summary:
      "Commercial-grade native Android app built with Kotlin and Jetpack Compose featuring hardware-enforced volume lock, NFC tag physical disarm, on-device ML Kit pose detection, and accessibility-based focus app blocker.",
    fullDescription:
      "TapOut is an advanced native Android application designed to definitively eradicate chronic snooze and morning smartphone distraction. Combining an unkillable, high-priority alarm engine with physical disarming mechanics, TapOut requires users to physically tap an NFC transponder placed across the room or complete an active dance mission analyzed 100% in volatile RAM via Google ML Kit Pose Detection. It further integrates a zero-overhead physical app blocker leveraging AccessibilityService window monitoring, alongside comprehensive Room v5 persistence tracking wake-up streaks and focus hours.",
    category: "mobile-app",
    categoryLabel: "Native Android & Systems",
    featured: true,
    order: 2,
    thumbnailUrl: "/projects/tapout-banner.png",
    screenshotAspect: "portrait",
    screenshots: [
      {
        url: "/projects/tapout/01_dashboard_sveglie.png",
        title: "Alarms Dashboard & Single-Touch Controls",
        caption: "Cyber Dark interface in Electric Pink (#FF2A85) featuring quick toggle switches, ringtone selector, and NFC disarm method indicator.",
      },
      {
        url: "/projects/tapout/02_blocco_app.png",
        title: "Physical App Blocker & Focus Sessions",
        caption: "Vibrant Purple (#7C4DFF) focus interface with instant 30m/1h/2h lock chips, night focus schedules (23:00 - 07:30), and per-app interception (BurgerKing, Clash Royale).",
      },
      {
        url: "/projects/tapout/03_statistiche_streak.png",
        title: "Wake-Up Analytics & 7-Day Consecutive Streak",
        caption: "Amber Gold (#FFAB00) morning performance dashboard showing an active 7-day streak, 16s average response speed, 3h 45m focus time, and custom Canvas daily bar chart.",
      },
      {
        url: "/projects/tapout/04_impostazioni_nfc.png",
        title: "Hardware NFC Management & VIP Licensing",
        caption: "Slate Blue (#38BDF8) systems panel with physical NFC UID hardware registration (UID: 53:84:D8:83:B6:00:01) and active freemium VIP entitlement manager.",
      },
      {
        url: "/projects/tapout/05_onboarding_welcome.png",
        title: "Onboarding Wizard — Welcome & Core Pillars",
        caption: "First-run setup wizard outlining the three architectural pillars: Unstoppable STREAM_ALARM audio, anti-distraction app blocking, and physical NFC/Dance disarm.",
      },
      {
        url: "/projects/tapout/06_onboarding_permissions.png",
        title: "Onboarding Wizard — Reliability & OEM Hardening",
        caption: "Real-time verification for high-priority notifications, exact lockscreen alarms, unrestricted battery optimization, and OnePlus autostart integration.",
      },
      {
        url: "/projects/tapout/07_onboarding_accessibility.png",
        title: "Google Play Compliant Accessibility Disclosure",
        caption: "Prominent disclosure dialog for AccessibilityService, informing users that foreground window monitoring is used exclusively for app blocking with zero data logging.",
      },
      {
        url: "/projects/tapout/08_onboarding_methods.png",
        title: "Onboarding Wizard — Disarm Methods & NFC Pairing",
        caption: "Configuration of on-device ML Kit Dance Mission camera analysis (100% volatile RAM) and instantaneous NFC transponder hardware registration.",
      },
    ],
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Android 15 (API 35)",
      "Google ML Kit",
      "CameraX",
      "NFC (ReaderMode)",
      "AccessibilityService",
      "Room Database",
      "Material 3",
      "Clean Architecture",
    ],
    architectureHighlights: [
      "Unstoppable Alarm & AudioGuard Engine: Routes audio strictly over STREAM_ALARM hardware channel at continuous 100% volume; bypasses volume-down tampering via real-time interception, operates over Keyguard via showWhenLocked/turnScreenOn, and implements AlarmManager.setAlarmClock() with boot-persistence receivers.",
      "Universal Physical NFC Disarm: Leverages NfcAdapter.enableReaderMode to extract low-level hexadecimal serial UIDs from NTAG213/215/216, Mifare Classic/Ultralight, and corporate/university RFID badges (ISO/IEC 14443-A/B/F/V), backed by 1-tap Settings.Panel quick prompts.",
      "Zero-Disk On-Device Dance Mission: Integrates CameraX ImageAnalysis with Google ML Kit Pose Detection; calculates kinetic torso variance normalized against shoulder span to render phone-shaking cheats ineffective, processing frames strictly in volatile RAM with zero disk writes or cloud offloading.",
      "Physical & Scheduled App Blocker: Intercepts TYPE_WINDOW_STATE_CHANGED via AppBlockerAccessibilityService with O(1) in-memory blacklist checks, displaying an unbreakable BlockerOverlayActivity disarmable only through physical NFC tap or kinetic dance challenge.",
      "OEM Hardening & Play Store Compliance: Integrates customized OEM routing (OemHelper) for autostart and popup permissions across Xiaomi (HyperOS), OnePlus/Oppo (ColorOS), and Samsung (OneUI), alongside a compliant Prominent Disclosure onboarding wizard.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Ensuring the alarm rings reliably and is impossible to dismiss or mute by drowsy users, even with lock screen or hardware volume buttons.",
        solution:
          "Enforced audio routing through STREAM_ALARM with a continuous background audio monitor neutralizing volume cuts; disabled snooze UI and used showWhenLocked and turnScreenOn with exact kernel alarm clocks.",
      },
      {
        challenge:
          "Preventing anti-cheat false triggers when users must unlock their device to activate the system NFC antenna on locked screens.",
        solution:
          "Engineered a controlled 20-second Keyguard Safe Pause that temporarily suspends the anti-cheat guard during biometric authentication without closing the active alarm activity.",
      },
      {
        challenge:
          "Performing real-time human pose detection on mobile camera frames without battery drain, lag, or privacy risks.",
        solution:
          "Configured CameraX ImageAnalysis to pipeline frames directly into Google ML Kit Pose Detection in volatile RAM; computed torso-normalized displacement tensors with deadband filters and immediately invoked imageProxy.close() without saving a single byte to disk.",
      },
      {
        challenge:
          "Maintaining zero latency and battery efficiency while intercepting unauthorized app launches on modern Android versions.",
        solution:
          "Implemented an ultra-lightweight AccessibilityService filtering exclusively on TYPE_WINDOW_STATE_CHANGED with pre-cached in-memory package lookups, strictly whitelisting core system UI and emergency dialers.",
      },
    ],
    dashboard: {
      title: "TapOut Telemetry & Hardware Engine",
      description: "Live on-device metrics from physical testing: AudioGuard enforcement, hardware NFC disarm, and focus sessions.",
      kpis: [
        { label: "Active Wake Streak", value: "7 Days", change: "Record: 7G", isPositive: true },
        { label: "Avg Response Speed", value: "16s", change: "Alarm to physical disarm", isPositive: true },
        { label: "Total Focus Time", value: "3h 45m", change: "App blocker active", isPositive: true },
        { label: "Hardware NFC Tag", value: "NTAG/Mifare", change: "UID 53:84:D8:83:B6:00:01", isPositive: true },
      ],
      chartData: [
        { date: "Mon", value: 14, secondaryValue: 3.5 },
        { date: "Tue", value: 19, secondaryValue: 4.0 },
        { date: "Wed", value: 23, secondaryValue: 3.8 },
        { date: "Thu", value: 16, secondaryValue: 3.75 },
        { date: "Fri", value: 28, secondaryValue: 4.2 },
        { date: "Sat", value: 12, secondaryValue: 2.5 },
        { date: "Sun", value: 13, secondaryValue: 3.0 },
      ],
      recentLogs: [
        { timestamp: "07:30:00", action: "Alarm triggered via AlarmManager.setAlarmClock() — AudioGuard 100% volume locked", status: "success" },
        { timestamp: "07:30:16", action: "NFC ReaderMode: UID verified [53:84:D8:83:B6:00:01] — Alarm disarmed in 16s", status: "success" },
        { timestamp: "07:30:17", action: "Room v5 WakeUpLog recorded: streak advanced to 7 consecutive days", status: "success" },
        { timestamp: "17:19:00", action: "AppBlocker AccessibilityService: intercepted blocked package [com.supercell.clashroyale]", status: "warning" },
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
    order: 3,
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
    order: 4,
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
