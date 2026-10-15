import { CvData } from "@/types/cv";

export const cvData: CvData = {
  pdfDownloadUrl: "/cv-gioele.pdf",
  summary:
    "B.Sc. in Computer Engineering student at Politecnico di Torino (taught 100% in English) and selected member of the IEEE-Eta Kappa Nu (IEEE-HKN, Mu Nu Chapter) Honor Society. Active embedded firmware engineer in Team Astra (autonomous spherical lunar rover), software division member in Team QubiTo (quantum computing), and 1st place winner at HackTurin with the EGG Edge-AI mesh project.",
  workExperiences: [
    {
      role: "Embedded Firmware Engineer — IT Division (Spherical Lunar Rover)",
      company: "Team Astra — Politecnico di Torino",
      location: "Turin, Italy",
      period: "Sept. 2024 — Present",
      current: true,
      description:
        "Collaborating in the IT division for an autonomous spherical lunar exploration rover powered by internal pendulum motion and robotic arm manipulation.",
      achievements: [
        "Developing, profiling, and testing embedded C/C++ firmware for DC motor velocity regulation, PWM control, and environmental temperature sensor integration.",
        "Optimizing and refactoring motor management driver libraries for resource-constrained microcontrollers; successfully validated actuation systems for public technical exhibitions.",
      ],
      technologies: ["C", "C++", "Embedded Firmware", "STM32", "PWM Control", "DC Motors", "I2C/SPI"],
    },
    {
      role: "Software Division Member — Quantum Computing Student Team",
      company: "Team QubiTo — Politecnico di Torino",
      location: "Turin, Italy",
      period: "Oct. 2026 — Present",
      current: true,
      description:
        "Contributing to quantum computing exploration, algorithm design, circuit optimization paradigms, and simulation benchmarks within the university student team.",
      achievements: [
        "Collaborating on quantum algorithm design, exploring quantum circuit optimization paradigms and simulation benchmarks.",
      ],
      technologies: ["Python", "Quantum Computing", "Circuit Optimization", "Simulation Benchmarks"],
    },
    {
      role: "Independent STEM Private Tutor",
      company: "Mathematics, Physics & Computer Science",
      location: "Turin, Italy",
      period: "2021 — Present",
      current: true,
      description:
        "Instructing high school and early college students, translating complex theoretical formulas into structured, practical, algorithmic problem-solving methodologies.",
      achievements: [
        "Guided dozens of students to academic success in calculus, linear algebra, physics, and algorithmic programming.",
      ],
      technologies: ["Mathematics", "Physics", "Computer Science", "Algorithms"],
    },
    {
      role: "Unit Leader (Capo Reparto) — Youth Leadership & National Event Logistics",
      company: "AGESCI Scout Group",
      location: "Alba, Italy",
      period: "Sept. 2025 — Present",
      current: true,
      description:
        "Mentoring and directing a youth group of 30+ individuals; planning yearly educational pathways, managing emergency risk protocols, and executing complex national route logistics.",
      achievements: [
        "Leading team management, risk mitigation, and large-scale route logistics across Italy.",
      ],
      technologies: ["Leadership", "Team Coordination", "Logistics Planning", "Mentoring"],
    },
    {
      role: "International STEM & Intercultural Exchange",
      company: "Erasmus+ Program",
      location: "Opava, Czech Republic",
      period: "Feb. 2023",
      current: false,
      description:
        "Participated in an intensive international academic program, collaborating with European peers on STEM workshops and intercultural seminars.",
      achievements: [
        "Collaborated with European student teams on applied STEM workshops, problem solving, and intercultural communication.",
      ],
      technologies: ["International Collaboration", "STEM Workshops", "Intercultural Communication"],
    },
    {
      role: "Volunteer Worker — High-Altitude Infrastructure & Shelter Maintenance",
      company: "Operazione Mato Grosso (OMG)",
      location: "Rifugio delle Marmotte, Italy",
      period: "2015 — Present",
      current: true,
      description:
        "Supported infrastructure building, structural renovation, and operational maintenance at Rifugio delle Marmotte in high-altitude alpine environments.",
      achievements: [
        "Collaborated in multidisciplinary volunteer teams on physical renovation and facility upkeep in alpine conditions.",
      ],
      technologies: ["Teamwork", "Problem Solving", "Resilience"],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Engineering",
      institution: "Politecnico di Torino (Taught 100% in English)",
      location: "Turin, Italy",
      period: "Sept. 2024 — Present",
      description:
        "Honors: Selected Member & Inductee-Elect, IEEE-Eta Kappa Nu (Mu Nu Chapter) — IEEE Honor Society. Academic Merits: Computer Science Principles (30L/30), Digital Electronics Design (30/30), Mathematical Analysis I & II, Linear Algebra & Geometry, Physics. Language Certification: Certified English proficiency level B2 (Cambridge English Assessment).",
    },
    {
      degree: "Diploma di Maturità (High School Diploma)",
      institution: "Liceo Scientifico (Applied Sciences)",
      location: "Alba, Italy",
      period: "Sept. 2019 — July 2024",
      grade: "Final Grade: 80/100",
      description:
        "Active participant in individual and team-based Mathematics, Physics, and Informatics Olympiad competitions.",
    },
    {
      degree: "Interdisciplinary Biotech & Electronics Program",
      institution: "Fondazione Golinelli — Summer Science Academy",
      location: "Italy",
      period: "July 2022",
      description:
        "Engineered an Arduino-based automated thermocycler, integrating hardware microcontrollers with experimental biological protocols.",
    },
  ],
  certifications: [
    {
      name: "Selected Member & Inductee-Elect, IEEE-Eta Kappa Nu (Mu Nu Chapter)",
      issuer: "IEEE Honor Society",
      date: "2024",
    },
    {
      name: "1st Place @ HackTurin (EGG – Edge-AI Smart City Mesh Node)",
      issuer: "HackTurin Hackathon",
      date: "Oct. 2026",
    },
    {
      name: "Academic Merits: Computer Science (30L/30), Digital Electronics (30/30)",
      issuer: "Politecnico di Torino",
      date: "2025",
    },
    {
      name: "Certified English Proficiency Level B2",
      issuer: "Cambridge English Assessment",
      date: "2024",
    },
  ],
  languages: [
    { language: "Italian", level: "Native" },
    { language: "English", level: "B2 Certified — Cambridge English Assessment / Full Professional Working Proficiency" },
  ],
};
