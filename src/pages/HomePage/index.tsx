import Header from "./render/Header";
import TechStack from "./render/TechStack";
import Navbar from "./render/Navbar";
import Project from "./render/Project";
import Contact from "./render/Contact";
import { useRef } from "react";

export type RefProps = "Nav" | "Tech" | "Project";

function HomePage() {
  const navRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

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
      <Navbar ref={navRef} onScroll={onScroll} />
      <Header onScroll={onScroll} />
      <TechStack refChildren={techRef} />
      <Project refChildren={projectRef} />
      <Contact />
    </div>
  );
}

export default HomePage;
