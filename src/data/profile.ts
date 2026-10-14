import { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  name: "Gioele",
  surname: "Rora",
  role: "Computer Engineering Student @ Politecnico di Torino",
  headline:
    "Studente di Ingegneria Informatica al Politecnico di Torino (corso interamente in lingua inglese) e membro dell'IEEE-HKN Honor Society. Sviluppo firmware embedded, algoritmi, sistemi Edge-AI e piattaforme web moderne.",
  statusBadge: {
    text: "Aperto a opportunità di stage & progetti",
    available: true,
  },
  shortBio:
    "Appassionato di ingegneria dei sistemi embedded, robotica aerospaziale, quantum computing e sviluppo software ad alte prestazioni.",
  fullBio: [
    "Sono uno studente di Computer Engineering al Politecnico di Torino, con un percorso accademico svolto interamente in lingua inglese e riconosciuto dall'IEEE-Eta Kappa Nu (IEEE-HKN) Honor Society.",
    "Faccio parte dei team studenteschi d'eccellenza del Politecnico: Team Astra (Divisione IT per lo sviluppo di firmware embedded di un rover lunare sferico autonomo) e Team QubiTo (Software & Algorithms Division per quantum computing).",
    "Ho vinto il 1° posto ad HackTurin con il progetto EGG (Edge-AI Traffic Mesh Network) e mi dedico costantemente a progetti tecnici complessi, spaziando da sistemi real-time con Zephyr RTOS e C/C++ a simulatori fisici 3D in Unity e piattaforme full-stack.",
  ],
  location: "Torino, Italia",
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
      label: "B.Sc. Computer Engineering (in English)",
      description: "Politecnico di Torino",
    },
    {
      number: "IEEE-HKN",
      label: "IEEE Honor Society Member",
      description: "Mu Nu Chapter",
    },
    {
      number: "1° Posto",
      label: "@ HackTurin",
      description: "Progetto EGG Edge-AI",
    },
  ],
};
