"use client";

import { RefObject } from "react";
import { IoLogoReact, IoLogoNodejs, IoLogoDocker } from "react-icons/io5";
import { Card, CardContent } from "@heroui/react/card";
import { useLanguage } from "../context/LanguageContext";
import { useGsapReveal } from "../hooks/useGsapReveal";

interface TechStackProps {
  refChildren: RefObject<HTMLDivElement | null>;
}

const techCards = [
  {
    Icon: IoLogoReact,
    titleEn: "Frontend & Mobile Engineer",
    titleId: "Frontend & Mobile Engineer",
    descriptionEn:
      "Experienced in both React JS and React Native with strong knowledge of TypeScript and Special Concepts:",
    descriptionId:
      "Berpengalaman dalam React JS dan React Native dengan pemahaman mendalam tentang TypeScript dan Konsep Khusus:",
    items: ["Redux (Redux-Thunk)", "React Hook", "Atomic Design", "SEO Website", "PWA", "SPA"],
  },
  {
    Icon: IoLogoNodejs,
    titleEn: "Backend Node JS & Express JS",
    titleId: "Backend Node JS & Express JS",
    descriptionEn:
      "Create API and RESTful API with JWT concept for authentication with Express JS, Adonis and Strapi. Knowledge special concepts:",
    descriptionId:
      "Membuat API dan RESTful API dengan konsep JWT untuk autentikasi menggunakan Express JS, Adonis, dan Strapi. Memiliki pengetahuan tentang konsep khusus:",
    items: [
      "Authentication and Authorization",
      "SQL and NoSQL",
      "PostgreSQL, MySQL and MongoDB",
      "Firebase Serverless Concept",
      "SOLID",
      "Storage (MinIO & Firebase Storage)",
    ],
  },
  {
    Icon: IoLogoDocker,
    titleEn: "DevOps and Docker Containerize",
    titleId: "DevOps & Docker Containerize",
    descriptionEn:
      "Build Image and Containerize Node, Laravel and Vercel hosting for pipeline, many knowledge special concepts:",
    descriptionId:
      "Membangun Image dan melakukan Containerisasi untuk Node, Laravel, dan hosting Vercel untuk pipeline CI/CD, serta menguasai konsep-konsep khusus:",
    items: ["Docker (Image & Container)", "CI/CD", "GitLab Pipeline", "SSH", "Linux Server Operation"],
  },
];

function TechStack({ refChildren }: TechStackProps) {
  const { locale, t } = useLanguage();

  // Title fade-in
  const titleRef = useGsapReveal<HTMLDivElement>({ type: "fadeIn", duration: 1 });
  // Cards stagger animation
  const cardsRef = useGsapReveal<HTMLDivElement>({
    type: "stagger",
    staggerItems: ".tech-card",
    duration: 0.9,
  });

  return (
    <div ref={refChildren}>
      <div className="pt-24 md:pt-40">
        <div className="flex justify-center mb-16">
          <div
            ref={titleRef}
            className="self-center font-bold border-b-4 box-light-neon"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl text-white">{t("expertiseTitle")}</div>
          </div>
        </div>
      </div>
      <div className="pt-0 sm:pt-2 md:pt-5 lg:pt-7 xl:pt-10 mb-14 lg:mb-10 xl:mb-0">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 md:px-8 lg:px-10 xl:px-32 mb-5"
        >
          {techCards.map((card, index) => {
            const Icon = card.Icon;
            const title = locale === "en" ? card.titleEn : card.titleId;
            const description = locale === "en" ? card.descriptionEn : card.descriptionId;

            return (
              <div key={index} className="tech-card">
                <Card
                  className="border border-[#39DFA3] min-h-[400px] backdrop-blur-sm hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-[#39DFA3] duration-500 w-full"
                  style={{ background: "rgba(0,6,27,0.5)" }}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-row gap-3 justify-center items-center mb-3">
                      <div className="text-8xl text-white">
                        <Icon />
                      </div>
                      <div className="text-2xl font-bold text-center text-white">
                        {title}
                      </div>
                    </div>
                    <div className="px-4 py-3">
                      <div className="text-justify text-white/80 mb-2">{description}</div>
                      <ul className="list-disc px-8 text-white/90">
                        {card.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
