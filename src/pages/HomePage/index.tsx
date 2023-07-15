import Header from "./render/Header";
import TechStack from "./render/TechStack";
import Navbar from "./render/Navbar";
import Project from "./render/Project";
import Contact from "./render/Contact";
import { useEffect, useRef, useState } from "react";

export type RefProps = "Nav" | "Tech" | "Project";

function HomePage() {
  const navRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [hState, sethState] = useState(false);

  useEffect(() => {
    // const lastVal = 144;
    const heightScreen = window.screen.height - 300;
    window.onscroll = function () {
      const y = window.scrollY;

      if (heightScreen > y) {
        sethState(false);
      }
      if (heightScreen < y) {
        sethState(true);
      }
    };
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
        <div className="absolute top-0 left-0">
          <div className="fixed min-w-full bg-background bg-opacity-80 border-b-[0.4px] shadow shadow-green">
            <Navbar onScroll={onScroll} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
