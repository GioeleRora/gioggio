import { ProfileData } from "@/types/profile";

export const profileData: ProfileData = {
  name: "Gioele",
  surname: "Dev",
  role: "Full-Stack Developer & Software Engineer",
  headline: "Progetto e sviluppo applicazioni web scalabili, architetture cloud e interfacce moderne ad alte prestazioni.",
  statusBadge: {
    text: "Disponibile per nuovi progetti & opportunità",
    available: true,
  },
  shortBio:
    "Sviluppatore con una forte passione per l'ingegneria del software moderna, architetture performanti e interfacce utente curate nel dettaglio visivo e prestazionale.",
  fullBio: [
    "Benvenuto nel mio spazio digitale. Sono uno sviluppatore specializzato nell'ecosistema JavaScript/TypeScript, con un focus particolare su Next.js, React e architetture cloud moderne.",
    "Mi dedico alla costruzione di software solido, dal design system dell'interfaccia utente fino all'ottimizzazione del backend e dei database.",
    "Credo nell'approccio artigianale al codice: pulizia, tipizzazione rigorosa, testabilità e un'esperienza utente veloce, accessibile e memorabile.",
  ],
  location: "Italia",
  email: "gioele.contact@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com",
      iconName: "Github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "Linkedin",
    },
    {
      label: "Email",
      url: "mailto:gioele.contact@example.com",
      iconName: "Mail",
    },
  ],
  highlights: [
    {
      number: "3+",
      label: "Anni di Sviluppo Attivo",
      description: "Esperienza diretta su progetti full-stack complessi",
    },
    {
      number: "15+",
      label: "Progetti Realizzati",
      description: "Tra web application, API e strumenti open-source",
    },
    {
      number: "99%",
      label: "Focus su Performance & UX",
      description: "Lighthouse score medio e pulizia architetturale",
    },
  ],
};
