"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type Language = "en"

type LanguageContextType = {
  language: Language
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Abdelwahab Azhary",
    heroSubtitle: "Senior React Frontend Developer",
    heroDescription:
      "Passionate Frontend Developer specializing in React & Next.js, creating exceptional user experiences and interactive web applications with modern technologies.",
    contactMe: "Contact Me",
    downloadCV: "Download CV",

    // About Section
    aboutTitle: "About Me",
    aboutGreeting: "Hello, I'm Abdelwahab! 👋",
    aboutDescription1:
      "A passionate Frontend Developer with expertise in modern web technologies, especially React and Next.js. I love transforming designs into interactive and responsive web applications.",
    aboutDescription2:
      "I have experience building complete web applications from scratch, focusing on user experience and application performance. I enjoy continuous learning and keeping up with the latest technologies.",
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    clientSatisfaction: "Client Satisfaction",

    // Skills
    skillsTitle: "Technical Skills",

    // Projects
    projectsTitle: "Featured Projects",
    viewCode: "View Code",
    liveDemo: "Live Demo",

    // Contact
    contactTitle: "Let's Work Together",
    contactDescription: "Have a project in mind? Want to discuss a work opportunity? Don't hesitate to reach out!",

    // Footer
    footerText: "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
