"use client";

import { useState, RefObject } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@heroui/react/card";
import { Link } from "@heroui/react/link";
import {
  SiMysql,
  SiLaravel,
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
} from "react-icons/si";
import { LuRabbit } from "react-icons/lu";
import { useLanguage } from "../context/LanguageContext";

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

// Photo Gallery with lightbox using native HTML dialog (no useDisclosure needed)
function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <>
      <div className="text-lg font-bold mb-2 text-white">{t("projectPhoto")}</div>
      <div className="flex flex-wrap items-start gap-1">
        {images.map((src, index) => (
          <button
            key={index}
            className="w-1/4 cursor-pointer hover:opacity-80 transition-opacity border-0 p-0 bg-transparent"
            onClick={() => setSelectedImg(src)}
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

      {/* Native dialog lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 z-10 bg-[#39DFA3] text-[#00061b] rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-[#5CE1E6] transition-colors"
            >
              ✕
            </button>
            <div className="border border-[#39DFA3] rounded-lg overflow-hidden">
              <Image
                src={selectedImg}
                alt={title}
                width={900}
                height={600}
                className="w-full h-auto object-contain max-h-[85vh] bg-[#00061b]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const projects: ProjectItem[] = [
  {
    titleEn: "Infotech Retail Web Application",
    titleId: "Aplikasi Web Infotech Retail",
    descriptionEn:
      "Infotech Retail applications include Purchase, Sales, Master, Accounts Payable, Accounts Receivable and GL",
    descriptionId:
      "Aplikasi Ritel Infotech meliputi Pembelian, Penjualan, Master, Utang Dagang, Piutang Dagang, dan Buku Besar (GL)",
    techStack: [
      { Icon: SiLaravel, label: "Laravel" },
      { Icon: SiMysql, label: "MySQL" },
    ],
    links: [
      { href: "http://v2.infotechbdg.com/login", label: "http://v2.infotechbdg.com/login" },
    ],
    images: [
      "/img/infotech-laravel/1.png",
      "/img/infotech-laravel/2.png",
      "/img/infotech-laravel/3.png",
      "/img/infotech-laravel/4.png",
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
  {
    titleEn: "Event-Driven Architecture Demo",
    titleId: "Demo Arsitektur Event-Driven",
    descriptionEn:
      "Simple case tutorial demonstrating Event-Driven Architecture utilizing Node.js, Express, RabbitMQ, PostgreSQL, and MySQL.",
    descriptionId:
      "Tutorial kasus sederhana yang mendemonstrasikan Arsitektur Event-Driven menggunakan Node.js, Express, RabbitMQ, PostgreSQL, dan MySQL.",
    techStack: [
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiExpress, label: "Express" },
      { Icon: LuRabbit, label: "RabbitMQ" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: SiMysql, label: "MySQL" },
      { Icon: SiTypescript, label: "TypeScript" },
    ],
    links: [
      { href: "https://github.com/dimsdeall/event-driven-simple-case", label: "GitHub Repository" },
    ],
    images: ["/img/event-driven.png"],
  },
  {
    titleEn: "RabbitMQ Integration Demo",
    titleId: "Demo Integrasi RabbitMQ",
    descriptionEn:
      "A simple project showcasing how to integrate and use RabbitMQ for message passing inside Node.js applications with TypeScript.",
    descriptionId:
      "Proyek sederhana yang menunjukkan cara mengintegrasikan dan menggunakan RabbitMQ untuk pengiriman pesan di dalam aplikasi Node.js dengan TypeScript.",
    techStack: [
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: LuRabbit, label: "RabbitMQ" },
      { Icon: SiTypescript, label: "TypeScript" },
    ],
    links: [
      { href: "https://github.com/dimsdeall/rabbitmq-simple-case", label: "GitHub Repository" },
    ],
    images: ["/img/rabbitmq.png"],
  },
];

function ProjectCard({
  project,
  inView,
}: {
  project: ProjectItem;
  inView: boolean;
}) {
  const { locale, t } = useLanguage();
  const title = locale === "en" ? project.titleEn : project.titleId;
  const description = locale === "en" ? project.descriptionEn : project.descriptionId;

  return (
    <div className={`reveal-on-scroll ${inView ? "active" : ""}`}>
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
  const option = { triggerOnce: true, threshold: 0.1 };
  const titleView = useInView(option);

  // Dynamic creation of hooks is not allowed by React, but we can manage standard list observers.
  // Since we added 2 projects, total is now 7. Let's create observers for 7 items.
  const view0 = useInView(option);
  const view1 = useInView(option);
  const view2 = useInView(option);
  const view3 = useInView(option);
  const view4 = useInView(option);
  const view5 = useInView(option);
  const view6 = useInView(option);

  const views = [view0, view1, view2, view3, view4, view5, view6];

  return (
    <div ref={refChildren}>
      <div
        className="flex justify-center mb-16 pt-24 md:pt-40"
        ref={titleView.ref}
      >
        <div
          className={`self-center font-bold border-b-4 box-light-neon reveal-fade-in ${
            titleView.inView ? "active" : ""
          }`}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl text-white">{t("projectTitle")}</div>
        </div>
      </div>
      <div className="px-5 sm:px-5 md:px-5 lg:px-10 xl:px-20 flex flex-col gap-y-10 pb-10">
        {projects.map((project, index) => (
          <div key={index} ref={views[index]?.ref}>
            <ProjectCard
              project={project}
              inView={views[index]?.inView ?? false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
