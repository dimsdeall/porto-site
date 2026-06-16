"use client";

import { ReactLenis } from "lenis/react";
import { LanguageProvider } from "./context/LanguageContext";

// HeroUI v3 is based on React Aria and does not require a global provider
// This file is kept for future extensibility (e.g. toast providers)
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
        {children}
      </ReactLenis>
    </LanguageProvider>
  );
}
