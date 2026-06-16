"use client";

import {
  SiGmail,
  SiGitlab,
  SiGithub,
  SiInstagram,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@heroui/react/card";
import { Link } from "@heroui/react/link";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  { Icon: SiGmail, href: "mailto:dimsdeall@gmail.com", label: "Email", isExternal: false },
  { Icon: SiGitlab, href: "https://gitlab.com/dimsdeall", label: "GitLab", isExternal: true },
  { Icon: SiGithub, href: "https://github.com/dimsdeall", label: "GitHub", isExternal: true },
  { Icon: FaLinkedinIn, href: "https://linkedin.com/in/dimsdeall", label: "LinkedIn", isExternal: true },
  { Icon: SiInstagram, href: "https://instagram.com/dimsdeall", label: "Instagram", isExternal: true },
];

function Contact() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className={`mt-10 mb-10 mx-2 md:px-20 lg:px-44 xl:px-80 reveal-on-scroll ${
        inView ? "active" : ""
      }`}
      ref={ref}
    >
      <Card
        className="border border-[#E820B0]"
        style={{ background: "rgba(0,6,27,0.5)" }}
      >
        <CardContent className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="text-rainbow text-center text-base self-center">
              {t("thankYou")}
            </div>
            <div className="flex justify-center gap-x-7 flex-wrap gap-y-2">
              {socialLinks.map(({ Icon, href, label, isExternal }) => (
                <Link
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-3xl text-white hover:text-[#E820B0] transition-colors cursor-pointer"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
