"use client";

import Image from "next/image";
import { RefObject } from "react";
import ButtonSlide from "./ButtonSlide";
import { RefProps } from "./HomePage";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  refChildren?: RefObject<HTMLDivElement | null>;
  onScroll: (args: RefProps) => void;
}

function Navbar({ refChildren, onScroll }: NavbarProps) {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <div
      className="px-2 md:px-10 py-2 grid md:grid-cols-3"
      ref={refChildren}
    >
      <div className="hidden md:block animate-fade-in">
        <Image
          alt="logo"
          src="/img/logo192.png"
          width={112}
          height={112}
          className="h-28 w-auto"
          priority
        />
      </div>
      <div className="grid col-span-2 md:justify-items-end items-center rounded-sm">
        <div className="flex gap-x-2 md:gap-x-3 p-4 md:p-7 bg-[#00061b]/60 rounded border border-[#39DFA3] backdrop-blur-[3px] animate-fade-in justify-center items-center flex-wrap gap-y-2 sm:gap-y-0">
          <ButtonSlide label={t("navExpertise")} onClick={() => onScroll("Tech")} />
          <ButtonSlide label={t("navProject")} onClick={() => onScroll("Project")} />
          <ButtonSlide label={t("navHome")} onClick={() => onScroll("Nav")} />
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 font-bold text-xs rounded border border-[#39DFA3] text-[#39DFA3] hover:bg-[#39DFA3] hover:text-[#00061b] transition-all duration-300 uppercase cursor-pointer tracking-wide whitespace-nowrap"
          >
            {locale === "en" ? "ID" : "EN"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
