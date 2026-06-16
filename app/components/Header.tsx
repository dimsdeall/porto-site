"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { SiGitlab } from "react-icons/si";
import { RefProps } from "./HomePage";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  onScroll: (args: RefProps) => void;
}

function Header({ onScroll }: HeaderProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div ref={ref} className="h-auto px-2 pt-0 md:px-8 sm:pt-5 md:pt-10">
      <section
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#00061b]/70 h-full py-5 px-5 sm:px-7 md:px-10 rounded-lg border border-[#F6D213] backdrop-blur-sm gap-x-2 reveal-on-scroll ${
          inView ? "active" : ""
        }`}
      >
        <div className="flex flex-col justify-center order-last md:order-first lg:col-span-2 gap gap-y-4">
          <div className="text-lg text-rainbow lg:text-3xl">{t("heyIm")}</div>
          <div className="text-3xl text-rainbow lg:text-5xl xl:text-7xl">
            Dimas Nurcahyo Putra
          </div>
          <div className="text-justify text-rainbow">
            {t("introText")}
          </div>
          <div className="flex flex-row items-center justify-center font-extrabold gap-x-2 text-[#5CE1E6] hover:text-[#389AFF] md:justify-normal transition-colors">
            <SiGitlab />
            <a
              href="https://gitlab.com/server-dimsdeall/home-react-type"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("repoSite")}
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <Image
            alt="dimas"
            src="/img/dimas.png"
            width={300}
            height={300}
            className="rounded-full h-auto lg:h-auto w-48 lg:w-64 border-[3px] border-[#5CE1E6] mb-3 object-cover"
            priority
          />
          <button className="button-light" onClick={() => onScroll("Tech")}>
            {t("seeExpertise")}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Header;
