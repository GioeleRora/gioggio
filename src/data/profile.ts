import { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  name: "Gioele",
  surname: "Rora",
  role: "Computer Engineering Student @ Politecnico di Torino",
  headline:
    "B.Sc. Computer Engineering student at Politecnico di Torino (taught entirely in English) and IEEE-HKN Honor Society member. Developing embedded firmware, Edge-AI nodes, and high-performance software systems.",
  statusBadge: {
    text: "Open to internship & project opportunities",
    available: true,
  },
  shortBio:
    "Passionate about embedded systems engineering, aerospace robotics, quantum computing, and game physics simulation.",
  fullBio: [
    "I am an undergraduate Computer Engineering student at Politecnico di Torino, studying in a curriculum taught entirely in English, and an inducted member of the IEEE-Eta Kappa Nu (IEEE-HKN) Honor Society.",
    "I actively contribute to university engineering student teams: Team Astra (IT Division, developing embedded C/C++ firmware for an autonomous spherical lunar rover) and Team QubiTo (Politecnico di Torino's quantum computing student team).",
    "I led the team that won 1st Place at HackTurin with the EGG project (Edge-AI Traffic Mesh Network) and continuously engineer complex technical systems spanning embedded firmware, Agentic AI architectures, Unity 3D physics engines, and modern full-stack software platforms.",
  ],
  location: "Turin, Italy",
  email: "gioelerora05@gmail.com",
  github: "https://github.com/GioeleRora",
  linkedin: "https://www.linkedin.com/in/gioelerora",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/GioeleRora",
      iconName: "Github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gioelerora",
      iconName: "Linkedin",
    },
    {
      label: "Email",
      url: "mailto:gioelerora05@gmail.com",
      iconName: "Mail",
    },
  ],
  highlights: [
    {
      number: "PoliTo",
      label: "B.Sc. Computer Engineering",
      description: "Taught entirely in English",
    },
    {
      number: "IEEE-HKN",
      label: "Honor Society Member",
      description: "Mu Nu Chapter",
    },
    {
      number: "1st Place",
      label: "@ HackTurin",
      description: "EGG Edge-AI Project",
    },
  ],
};
