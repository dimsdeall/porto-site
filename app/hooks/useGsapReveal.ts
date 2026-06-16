"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeIn" | "stagger" | "scale3d" | "slideInRight" | "slideInLeft";

interface UseGsapRevealOptions {
  type?: AnimationType;
  delay?: number;
  staggerItems?: string; // CSS selector for child elements to stagger
  duration?: number;
}

/**
 * A centralized GSAP reveal hook.
 * Uses useLayoutEffect to set the initial hidden state BEFORE the browser paints,
 * then animates with ScrollTrigger — preventing any flash of visible content.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const { type = "fadeUp", delay = 0, staggerItems, duration = 1 } = options;
  const ref = useRef<T>(null);

  // Step 1: Set initial hidden state BEFORE first paint (no flicker)
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (type === "stagger" && staggerItems) {
      const items = el.querySelectorAll(staggerItems);
      gsap.set(items, { opacity: 0, y: 50 });
    } else if (type === "fadeIn") {
      gsap.set(el, { opacity: 0 });
    } else if (type === "scale3d") {
      gsap.set(el, { opacity: 0, scale: 0.92, rotateX: 8, transformPerspective: 800 });
    } else if (type === "slideInRight") {
      gsap.set(el, { opacity: 0, x: 300 });
    } else if (type === "slideInLeft") {
      gsap.set(el, { opacity: 0, x: -300 });
    } else {
      // fadeUp
      gsap.set(el, { opacity: 0, y: 40 });
    }
  }, [type, staggerItems]);

  // Step 2: Animate to final state using ScrollTrigger
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context;

    if (type === "stagger" && staggerItems) {
      const items = el.querySelectorAll(staggerItems);
      ctx = gsap.context(() => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    } else if (type === "fadeIn") {
      ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    } else if (type === "scale3d") {
      ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: duration * 1.2,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    } else if (type === "slideInRight") {
      ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    } else if (type === "slideInLeft") {
      ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    } else {
      // Default: fadeUp
      ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    }

    return () => {
      ctx.revert();
    };
  }, [type, delay, staggerItems, duration]);

  return ref;
}
