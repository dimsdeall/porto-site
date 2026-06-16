"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeIn" | "stagger" | "scale3d";

interface UseGsapRevealOptions {
  type?: AnimationType;
  delay?: number;
  staggerItems?: string; // CSS selector for child elements to stagger
  duration?: number;
}

/**
 * A centralized GSAP reveal hook that replaces CSS-based reveal-on-scroll.
 * Uses ScrollTrigger for smooth, GPU-accelerated animations.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const { type = "fadeUp", delay = 0, staggerItems, duration = 1 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context;

    if (type === "stagger" && staggerItems) {
      const items = el.querySelectorAll(staggerItems);
      ctx = gsap.context(() => {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
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
          }
        );
      }, el);
    } else if (type === "fadeIn") {
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      }, el);
    } else if (type === "scale3d") {
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.92,
            rotateX: 8,
            transformPerspective: 800,
          },
          {
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
          }
        );
      }, el);
    } else {
      // Default: fadeUp
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
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
          }
        );
      }, el);
    }

    return () => {
      ctx.revert();
    };
  }, [type, delay, staggerItems, duration]);

  return ref;
}
