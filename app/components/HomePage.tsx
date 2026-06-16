"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import TechStack from "./TechStack";
import Project from "./Project";
import Contact from "./Contact";

export type RefProps = "Nav" | "Tech" | "Project";

function HomePage() {
  const navRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [hState, sethState] = useState(false);

  useEffect(() => {
    const heightScreen = window.screen.height - 300;
    const handleScroll = () => {
      const y = window.scrollY;
      if (heightScreen > y) sethState(false);
      if (heightScreen < y) sethState(true);
    };
    window.addEventListener("scroll", handleScroll);
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
    <div className="h-auto">
      <Navbar refChildren={navRef} onScroll={onScroll} />
      <Header onScroll={onScroll} />
      <TechStack refChildren={techRef} />
      <Project refChildren={projectRef} />
      <Contact />

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
