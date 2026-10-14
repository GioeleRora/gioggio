import { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Linguaggi di Programmazione",
    description: "Linguaggi per sviluppo di sistemi, firmware a basso livello, simulazioni e backend.",
    skills: [
      { name: "C", category: "backend", level: "Avanzato", highlight: true },
      { name: "C++", category: "backend", level: "Avanzato", highlight: true },
      { name: "C#", category: "backend", level: "Avanzato", highlight: true },
      { name: "Python", category: "backend", level: "Avanzato", highlight: true },
      { name: "Java", category: "backend", level: "Intermedio" },
      { name: "JavaScript (ES6+)", category: "backend", level: "Avanzato", highlight: true },
      { name: "HTML5 / CSS3", category: "backend", level: "Avanzato" },
      { name: "SQL", category: "backend", level: "Intermedio" },
    ],
  },
  {
    id: "devops-cloud",
    title: "Sistemi & Sistemi Embedded",
    description: "Sviluppo real-time, microcontrollori, automazione robotica e ambienti Linux.",
    skills: [
      { name: "Zephyr RTOS", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Linux (Debian, CLI)", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "STM32 Microcontrollers", category: "devops-cloud", level: "Intermedio", highlight: true },
      { name: "Arduino (UNO Q)", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Edge-AI & YOLOX", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Docker", category: "devops-cloud", level: "Intermedio" },
      { name: "I2C / SPI Communication", category: "devops-cloud", level: "Avanzato" },
      { name: "DC Motor Control & PWM", category: "devops-cloud", level: "Avanzato" },
    ],
  },
  {
    id: "tools-methodologies",
    title: "Strumenti, Frameworks & Simulazione",
    description: "Motori fisici 3D, runtime web e workflow di Continuous Integration.",
    skills: [
      { name: "Unity Engine (3D Physics)", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Node.js", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Git & GitHub Actions", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Vercel Platform", category: "tools-methodologies", level: "Avanzato" },
      { name: "SQLite", category: "tools-methodologies", level: "Intermedio" },
      { name: "RPC & Low-Latency IPC", category: "tools-methodologies", level: "Intermedio" },
    ],
  },
];
