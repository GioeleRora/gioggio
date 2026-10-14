import { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Programming Languages",
    description: "Systems programming, low-level firmware, simulation physics, and software logic.",
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
    title: "Systems & Embedded",
    description: "Microcontroller architectures, real-time sensing, edge computing, and Linux environments.",
    skills: [
      { name: "STM32 Microcontrollers", category: "devops-cloud", level: "Intermedio", highlight: true },
      { name: "Arduino (UNO Q)", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Linux (Debian, CLI)", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Edge-AI & YOLOX-nano", category: "devops-cloud", level: "Avanzato", highlight: true },
      { name: "Docker", category: "devops-cloud", level: "Intermedio" },
      { name: "I2C / SPI Communication", category: "devops-cloud", level: "Avanzato" },
      { name: "DC Motor Control & PWM", category: "devops-cloud", level: "Avanzato" },
    ],
  },
  {
    id: "tools-methodologies",
    title: "Tools, AI & Architecture",
    description: "Agentic AI orchestration, 3D physics engines, version control, and modern workflows.",
    skills: [
      { name: "Agentic AI Architecture & Management", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Deep Agentic AI Workflows", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Unity Engine (3D Physics)", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Node.js", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Git & GitHub Actions", category: "tools-methodologies", level: "Avanzato", highlight: true },
      { name: "Vercel Platform", category: "tools-methodologies", level: "Avanzato" },
      { name: "SQLite", category: "tools-methodologies", level: "Intermedio" },
      { name: "RPC & Low-Latency IPC", category: "tools-methodologies", level: "Intermedio" },
    ],
  },
];
