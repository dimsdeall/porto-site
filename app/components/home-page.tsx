"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "./navbar";
import Header from "./header";
import TechStack from "./tech-stack";
import Project from "./project";
import Contact from "./contact";

export type RefProps = "Nav" | "Tech" | "Project";

function HomePage() {
  const navRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [hState, sethState] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0);
      setShowTop(y > 600);
      const threshold = techRef.current ? techRef.current.offsetTop - 300 : window.innerHeight;
      sethState(y > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onScroll = (view: RefProps) => {
    if (view === "Nav")
      return navRef.current?.scrollIntoView({ behavior: "smooth" });
    if (view === "Tech")
      return techRef.current?.scrollIntoView({ behavior: "smooth" });
    if (view === "Project")
      return projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-auto page-entrance">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 z-[999] h-[2px] bg-gradient-to-r from-[#39DFA3] via-[#5CE1E6] to-[#E820B0] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar refChildren={navRef} onScroll={onScroll} />
      <Header onScroll={onScroll} />
      <TechStack refChildren={techRef} />
      <Project refChildren={projectRef} />
      <Contact />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border border-[#39DFA3]/50 text-[#39DFA3] flex items-center justify-center backdrop-blur-sm bg-[#00061b]/60 transition-all duration-300 hover:bg-[#39DFA3] hover:text-[#00061b] ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      {hState && (
        <div className="absolute top-0 left-0 z-50">
          <div className="fixed min-w-full bg-[#00061b]/80 border-b border-[#39DFA3]/40 shadow shadow-[#39DFA3] backdrop-blur-sm">
            <Navbar onScroll={onScroll} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
