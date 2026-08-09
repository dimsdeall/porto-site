"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Card, CardContent } from "@heroui/react/card";
import { Link } from "@heroui/react/link";
import {
  SiNodedotjs,
  SiBootstrap,
  SiExpress,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiFirebase,
  SiAndroid,
  SiIos,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGo,
} from "react-icons/si";
import { useLanguage } from "../context/language-context";
import { useGsapReveal } from "../hooks/use-gsap-reveal";

// Re-export type for icon usage
type IconComponent = React.ComponentType<{ className?: string }>;

interface ProjectProps {
  refChildren: RefObject<HTMLDivElement | null>;
}

interface ProjectItem {
  titleEn: string;
  titleId: string;
  descriptionEn: string;
  descriptionId: string;
  techStack: { Icon: IconComponent; label: string }[];
  links?: { Icon?: IconComponent; href: string; label: string }[];
  isPrivate?: boolean;
  images: string[];
}

// Fullscreen lightbox dengan zoom (wheel/button), drag-pan saat zoom,
// dan swipe kiri/kanan untuk navigasi antar gambar dalam satu project.
function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  // Arah animasi slide saat ganti gambar: 'right' = masuk dari kanan (next), 'left' = dari kiri (prev)
  const [navDir, setNavDir] = useState<"right" | "left">("right");
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    moved: boolean;
    dragScale: number;
  } | null>(null);
  const { t } = useLanguage();

  const isOpen = lightboxIndex !== null;

  const reset = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  const openAt = (i: number) => {
    setLightboxIndex(i);
    reset();
  };

  const close = () => {
    setLightboxIndex(null);
    reset();
  };

  const zoomIn = () => setScale((s) => Math.min(4, +(s * 1.5).toFixed(2)));
  const zoomOut = () => setScale((s) => Math.max(1, +(s / 1.5).toFixed(2)));

  const next = () => {
    setNavDir("right");
    setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));
    reset();
  };

  const prev = () => {
    setNavDir("left");
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length
    );
    reset();
  };

  // Keyboard: Esc close, panah kiri/kanan navigasi, +/- zoom, 0 reset
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  // Lock body scroll saat lightbox terbuka
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const maxPan = (s: number) => (s - 1) * 500;
  const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v));

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
      moved: false,
      dragScale: scale,
    };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) + Math.abs(dy) > 5) d.moved = true;
    if (d.dragScale > 1) {
      const m = maxPan(d.dragScale);
      setPos({ x: clamp(d.origX + dx, m), y: clamp(d.origY + dy, m) });
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    dragRef.current = null;
    setDragging(false);
    if (!d) return;
    // Scale 1: drag kiri/kanan = navigasi antar gambar project
    if (d.dragScale === 1 && d.moved) {
      const dx = e.clientX - d.startX;
      if (dx < -40) next();
      else if (dx > 40) prev();
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Saat zoom: scroll = geser gambar (vertikal; Shift / trackpad = horizontal)
    if (scale > 1) {
      const dx = e.shiftKey ? -e.deltaY : -e.deltaX;
      const dy = e.shiftKey ? 0 : -e.deltaY;
      const m = maxPan(scale);
      setPos((p) => ({ x: clamp(p.x + dx, m), y: clamp(p.y + dy, m) }));
    } else if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  return (
    <>
      <div className="text-lg font-bold mb-2 text-white">{t("projectPhoto")}</div>
      <div className="flex flex-wrap items-start gap-1">
        {images.map((src, index) => (
          <button
            key={index}
            className="w-1/4 cursor-pointer hover:opacity-80 transition-opacity border-0 p-0 bg-transparent"
            onClick={() => openAt(index)}
          >
            <Image
              src={src}
              alt={`${title} ${index + 1}`}
              width={200}
              height={150}
              className="w-full h-auto rounded"
            />
          </button>
        ))}
      </div>

      {isOpen &&
        lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            onClick={close}
          >
            <div
              className="relative w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={close}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 z-10 bg-[#E820B0] hover:bg-[#5CE1E6] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors shadow-lg"
              >
                ✕
              </button>

              {/* Image area — fullscreen, zoomable, draggable */}
              <div
                className="flex-1 flex items-center justify-center overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onWheel={onWheel}
              >
                <div
                  key={lightboxIndex}
                  className={
                    navDir === "right"
                      ? "lightbox-slide-right"
                      : "lightbox-slide-left"
                  }
                >
                  <Image
                    src={images[lightboxIndex]}
                    alt={`${title} ${lightboxIndex + 1}`}
                    width={1600}
                    height={1000}
                    draggable={false}
                    className={`max-w-full max-h-full w-auto h-auto object-contain ${
                      dragging ? "" : "transition-transform duration-150 ease-out"
                    }`}
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                    }}
                  />
                </div>
              </div>

              {/* Toolbar navigasi + zoom — di BAWAH */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 bg-[#00061b]/90 border border-[#39DFA3]/40 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-lg">
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors text-lg font-bold"
                >
                  ‹
                </button>
                <span className="text-xs text-white/70 px-1 font-mono">
                  {lightboxIndex + 1} / {images.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors text-lg font-bold"
                >
                  ›
                </button>
                <div className="w-px h-4 bg-white/20 mx-1" />
                <button
                  onClick={zoomOut}
                  aria-label="Zoom out"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xl font-bold"
                >
                  −
                </button>
                <button
                  onClick={reset}
                  aria-label="Reset zoom"
                  className="px-2 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono min-w-[3rem]"
                >
                  {Math.round(scale * 100)}%
                </button>
                <button
                  onClick={zoomIn}
                  aria-label="Zoom in"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>

              {/* Hint */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[11px] text-white/50 bg-black/60 rounded-full px-3 py-1 pointer-events-none whitespace-nowrap font-mono">
                {scale > 1
                  ? "Scroll untuk geser • Drag untuk pan • + − zoom"
                  : "Geser kiri/kanan untuk navigasi • Scroll / + − untuk zoom"}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

const projects: ProjectItem[] = [
  {
    titleEn: "KanbanFlow",
    titleId: "KanbanFlow",
    descriptionEn:
      "Full-stack project & task management app — drag-and-drop kanban board with 4 views (Board, Table, Timeline, Calendar), task dependencies, real-time collaboration via WebSocket, automation rules, public forms, portfolios & goals. Built with Next.js 16, Go backend, PostgreSQL, and Redis.",
    descriptionId:
      "Aplikasi manajemen proyek & tugas full-stack — papan kanban drag-and-drop dengan 4 tampilan (Papan, Tabel, Timeline, Kalender), dependensi tugas, kolaborasi real-time via WebSocket, aturan otomatisasi, form publik, portofolio & tujuan. Dibangun dengan Next.js 16, backend Go, PostgreSQL, dan Redis.",
    techStack: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiTailwindcss, label: "Tailwind" },
      { Icon: SiGo, label: "Go" },
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: SiDocker, label: "Dockerize" },
    ],
    links: [
      { href: "https://kanban.dimsdeall.my.id/", label: "kanban.dimsdeall.my.id" },
    ],
    images: [
      "/img/kanban-flow/1.png",
      "/img/kanban-flow/2.png",
      "/img/kanban-flow/3.png",
    ],
  },
  {
    titleEn: "Example Retail",
    titleId: "Example Retail",
    descriptionEn:
      "Web-based retail management application — managing purchases, sales, inventory, receivables/payables, and general ledger in one system. Built with Next.js 16, HeroUI v3, Prisma ORM, and Next-Auth v5.",
    descriptionId:
      "Aplikasi manajemen retail berbasis web — mengelola pembelian, penjualan, persediaan, piutang/hutang, dan general ledger dalam satu sistem. Dibangun dengan Next.js 16, HeroUI v3, Prisma ORM, dan Next-Auth v5.",
    techStack: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiTailwindcss, label: "Tailwind" },
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: SiDocker, label: "Dockerize" },
    ],
    links: [
      { href: "https://retail.dimsdeall.my.id/", label: "retail.dimsdeall.my.id" },
    ],
    images: [
      "/img/example-retail/1.png",
      "/img/example-retail/2.png",
      "/img/example-retail/3.png",
      "/img/example-retail/4.png",
      "/img/example-retail/5.png",
    ],
  },
  {
    titleEn: "Dashboard Nyonyaa Laundry",
    titleId: "Dashboard Nyonyaa Laundry",
    descriptionEn:
      "React Application Nyonyaa Dashboard with backend Express JS using Ubuntu Compute",
    descriptionId:
      "Aplikasi React untuk Dashboard Nyonyaa Laundry dengan backend Express JS yang dijalankan pada instance Ubuntu Compute",
    techStack: [
      { Icon: SiReact, label: "React Js" },
      { Icon: SiBootstrap, label: "Bootstrap" },
      { Icon: SiNodedotjs, label: "Node Js" },
      { Icon: SiExpress, label: "Express Js" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: SiDocker, label: "Dockerize" },
    ],
    isPrivate: true,
    images: [
      "/img/nyonyaa-dashboard/1.png",
      "/img/nyonyaa-dashboard/2.png",
      "/img/nyonyaa-dashboard/3.png",
    ],
  },
  {
    titleEn: "Mobile Apps Nyonyaa (Android & iOS)",
    titleId: "Aplikasi Seluler Nyonyaa (Android & iOS)",
    descriptionEn: "Nyonyaa Laundry Consumer Application iOS and Android",
    descriptionId: "Aplikasi Konsumen Nyonyaa Laundry untuk platform iOS dan Android",
    techStack: [
      { Icon: SiReact, label: "React Native" },
      { Icon: SiFirebase, label: "Firebase" },
    ],
    links: [
      {
        Icon: SiAndroid,
        href: "https://play.google.com/store/apps/details?id=com.nyonyaa",
        label: "Google Play",
      },
      {
        Icon: SiIos,
        href: "https://apps.apple.com/id/app/nvonyaa-laundry/id6444783431?|=id",
        label: "App Store",
      },
    ],
    images: ["/img/nyonyaa-apps/1.png"],
  },
  {
    titleEn: "Mobile Android Nyonyaa Production",
    titleId: "Aplikasi Android Produksi Nyonyaa",
    descriptionEn: "Android application for Nyonyaa Laundry production team",
    descriptionId: "Aplikasi Android khusus untuk tim produksi Nyonyaa Laundry",
    techStack: [
      { Icon: SiReact, label: "React Native" },
      { Icon: SiFirebase, label: "Firebase" },
    ],
    links: [
      {
        Icon: SiAndroid,
        href: "https://play.google.com/store/apps/details?id=com.nyonyaa.produksi",
        label: "Google Play",
      },
    ],
    images: ["/img/nyonyaa-production/1.png"],
  },
  {
    titleEn: "Nyonyaa Stock Application",
    titleId: "Aplikasi Stok Nyonyaa",
    descriptionEn:
      "Nyonyaa Stock Management dashboard with a backend using Ubuntu compute",
    descriptionId:
      "Dashboard manajemen stok Nyonyaa Laundry dengan backend yang di-hosting pada instance Ubuntu compute",
    techStack: [
      { Icon: SiReact, label: "React Js" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiTailwindcss, label: "Tailwind" },
      { Icon: SiNodedotjs, label: "Node Js" },
      { Icon: SiExpress, label: "Express Js" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: SiDocker, label: "Dockerize" },
    ],
    isPrivate: true,
    images: ["/img/nyonyaa-stock/1.png", "/img/nyonyaa-stock/4.png"],
  },

];

function ProjectCard({ project }: { project: ProjectItem }) {
  const { locale, t } = useLanguage();
  const title = locale === "en" ? project.titleEn : project.titleId;
  const description = locale === "en" ? project.descriptionEn : project.descriptionId;
  const cardRef = useGsapReveal<HTMLDivElement>({ type: "scale3d", duration: 1 });

  return (
    <div ref={cardRef}>
      <Card
        className="backdrop-blur-sm rounded"
        style={{
          background: "rgba(0,6,27,0.5)",
          boxShadow: "0 0 0.5em 0.25em #39DFA3",
        }}
      >
        <CardContent className="p-5">
          <div className="text-3xl font-bold mb-4 text-center md:text-left text-rainbow">
            {title}
          </div>
          <div className="border-l-[5px] border-l-[#E820B0] grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="px-4">
              <div className="mb-2">
                <div className="text-lg font-bold text-white">{t("projectDesc")}</div>
                <div className="text-sm text-justify text-white/80">{description}</div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold text-white">{t("projectTech")}</div>
                <div className="text-5xl flex flex-wrap gap-x-5 px-3 pt-2 text-white">
                  {project.techStack.map(({ Icon, label }) => (
                    <div key={label} className="flex flex-col justify-center items-center gap-y-2">
                      <Icon className="w-12 h-12" />
                      <div className="text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold text-white">{t("projectLink")}</div>
                {project.isPrivate ? (
                  <div className="text-sm text-[#5CE1E6]">{t("projectPrivacy")}</div>
                ) : (
                  <ul className="list-disc px-8 text-sm">
                    {project.links?.map(({ Icon, href, label }) => (
                      <li key={label} className="flex items-center gap-x-2 text-white">
                        {Icon && <Icon />}
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rainbow hover:opacity-80 text-sm"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="px-4">
              <PhotoGallery images={project.images} title={title} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Project({ refChildren }: ProjectProps) {
  const { t } = useLanguage();
  const titleRef = useGsapReveal<HTMLDivElement>({ type: "fadeIn", duration: 1 });

  return (
    <div ref={refChildren}>
      <div className="flex justify-center mb-16 pt-24 md:pt-40">
        <div
          ref={titleRef}
          className="self-center font-bold border-b-4 box-light-neon"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl text-white">{t("projectTitle")}</div>
        </div>
      </div>
      <div className="px-5 sm:px-5 md:px-5 lg:px-10 xl:px-20 flex flex-col gap-y-10 pb-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
