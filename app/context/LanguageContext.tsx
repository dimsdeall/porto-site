"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "en" | "id";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navbar
    navHome: "Home",
    navExpertise: "Expertise",
    navProject: "Project",
    navContact: "Contact",
    // Header
    heyIm: "Hey, I'm",
    introText: "This site design is inspired by Coldplay and Neon themes. Built with Next.js and TypeScript, styled with Tailwind CSS and HeroUI, and deployed on Vercel. Check the repository below for more details.",
    repoSite: "Repository Site",
    seeExpertise: "See My Expertise",
    // TechStack
    expertiseTitle: "My Expertise",
    // Project
    projectTitle: "My Project",
    projectDesc: "Description",
    projectTech: "Tech Stack",
    projectLink: "Link",
    projectPrivacy: "Privacy",
    projectPhoto: "Photo",
    // Contact
    thankYou: "Thank you for reviewing, contact me",
  },
  id: {
    // Navbar
    navHome: "Beranda",
    navExpertise: "Keahlian",
    navProject: "Proyek",
    navContact: "Kontak",
    // Header
    heyIm: "Halo, Saya",
    introText: "Desain situs ini terinspirasi oleh tema Coldplay dan Neon. Dibangun dengan Next.js dan TypeScript, ditata dengan Tailwind CSS dan HeroUI, serta dideploy di Vercel. Lihat repositori di bawah ini untuk detail lebih lanjut.",
    repoSite: "Repositori Situs",
    seeExpertise: "Lihat Keahlian Saya",
    // TechStack
    expertiseTitle: "Keahlian Saya",
    // Project
    projectTitle: "Proyek Saya",
    projectDesc: "Deskripsi",
    projectTech: "Teknologi",
    projectLink: "Tautan",
    projectPrivacy: "Privasi",
    projectPhoto: "Foto",
    // Contact
    thankYou: "Terima kasih telah meninjau, hubungi saya",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  // Load language from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Locale;
    if (saved === "en" || saved === "id") {
      setLocale(saved);
    }
  }, []);

  const toggleLocale = () => {
    const next = locale === "en" ? "id" : "en";
    setLocale(next);
    localStorage.setItem("portfolio_lang", next);
  };

  const t = (key: string) => {
    return translations[locale][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
