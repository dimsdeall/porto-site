"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function useSlideInRight<T extends HTMLElement = HTMLDivElement>() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return;

    gsap.fromTo(
      el,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, [visible]);

  return ref;
}
