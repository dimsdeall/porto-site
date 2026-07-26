"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanguageProvider } from "./context/language-context";

gsap.registerPlugin(ScrollTrigger);

function LenisScrollTrigger() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    return () => { lenis.off("scroll", ScrollTrigger.update); };
  }, [lenis]);
  return null;
}

// HeroUI v3 is based on React Aria and does not require a global provider
// This file is kept for future extensibility (e.g. toast providers)
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
        <LenisScrollTrigger />
        {children}
      </ReactLenis>
    </LanguageProvider>
  );
}
