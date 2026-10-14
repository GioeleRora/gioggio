import { CvData } from "@/types/cv";

export const cvData: CvData = {
  pdfDownloadUrl: "/cv-gioele.pdf",
  summary:
    "B.Sc. in Computer Engineering student at Politecnico di Torino (taught entirely in English) and IEEE-Eta Kappa Nu (IEEE-HKN) Honor Society member. Active embedded firmware engineering in Team Astra for an autonomous spherical lunar rover and quantum circuit simulation in Team QubiTo. 1st place winner at HackTurin with the EGG Edge-AI mesh project.",
  workExperiences: [
    {
      role: "IT Division – Spherical Lunar Rover",
      company: "Team Astra – Politecnico di Torino",
      location: "Turin, Italy",
      period: "Sept 2024 — Oct 2026",
      current: false,
      description:
        "Collaborating in the IT division for an autonomous spherical lunar rover powered by internal pendulum motion and robotic actuation.",
      achievements: [
        "Developing, profiling, and testing embedded C/C++ firmware for DC motor velocity regulation, PWM control, and temperature sensor integration.",
        "Optimizing motor management driver libraries for resource-constrained microcontrollers; validated actuation systems for public exhibitions.",
      ],
      technologies: ["C", "C++", "Embedded Firmware", "Zephyr RTOS", "STM32", "PWM Control", "DC Motors", "I2C/SPI"],
    },
    {
      role: "Software & Algorithms Division",
      company: "Team QubiTo – Politecnico di Torino",
      location: "Turin, Italy",
      period: "Oct 2026 — Present",
      current: true,
      description:
        "Contributing to quantum algorithm design and circuit simulation benchmarks within the university quantum computing student team.",
      achievements: [
        "Benchmarking quantum algorithm implementations and analyzing computational speedup over classical circuits.",
        "Collaborating on quantum state representation algorithms and hardware gate mapping.",
      ],
      technologies: ["Python", "Quantum Computing", "Algorithm Design", "Circuit Simulation"],
    },
    {
      role: "Independent STEM Tutor",
      company: "Mathematics, Physics & Computer Science",
      location: "Turin, Italy",
      period: "2021 — Present",
      current: true,
      description:
        "Instructing high school and early college students, translating complex theoretical formulas into practical, algorithmic problem-solving methodologies.",
      achievements: [
        "Guided dozens of students to academic success in calculus, linear algebra, physics, and algorithmic programming.",
      ],
      technologies: ["Mathematics", "Physics", "Computer Science", "Algorithms"],
    },
    {
      role: "Unit Leader (Capo Reparto)",
      company: "AGESCI Scout Group",
      location: "Turin, Italy",
      period: "Sept 2025 — Present",
      current: true,
      description:
        "Mentoring and directing a youth group of 30+ individuals; planning yearly educational pathways and executing national route logistics.",
      achievements: [
        "Leading team management, risk mitigation, and large-scale route logistics across Italy.",
      ],
      technologies: ["Leadership", "Team Coordination", "Logistics Planning", "Mentoring"],
    },
    {
      role: "Volunteer Worker",
      company: "Operazione Mato Grosso (OMG)",
      location: "Italy",
      period: "2015 — Present",
      current: true,
      description:
        "Supported infrastructure building, renovation, and operational maintenance at Rifugio delle Marmotte in high-altitude environments.",
      achievements: [
        "Collaborated in multidisciplinary volunteer teams on physical renovation and facility upkeep.",
      ],
      technologies: ["Teamwork", "Problem Solving", "Resilience"],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Engineering",
      institution: "Politecnico di Torino (Taught entirely in English)",
      location: "Turin, Italy",
      period: "Sept 2024 — Present",
      description:
        "Honors: Member, IEEE-Eta Kappa Nu (IEEE-HKN, Mu Nu Chapter) – IEEE Honor Society. Key Coursework: Mathematical Analysis I & II, Linear Algebra & Geometry, Computer Science Principles, Physics.",
    },
    {
      degree: "Diploma di Maturità (High School Diploma)",
      institution: "Liceo Scientifico (Applied Sciences)",
      location: "Italy",
      period: "Sept 2019 — July 2024",
      description:
        "Active participant in individual and team-based Mathematics, Physics, and Informatics Olympiad competitions.",
    },
  ],
  certifications: [
    {
      name: "Member, IEEE-Eta Kappa Nu (IEEE-HKN, Mu Nu Chapter)",
      issuer: "IEEE Honor Society",
      date: "2024",
    },
    {
      name: "1st Place @ HackTurin (EGG – Edge-AI Traffic Mesh Network)",
      issuer: "HackTurin Hackathon",
      date: "Oct 2026",
    },
  ],
  languages: [
    { language: "Italian", level: "Native" },
    { language: "English", level: "Professional Working Proficiency (B.Sc. taught entirely in English)" },
  ],
};
