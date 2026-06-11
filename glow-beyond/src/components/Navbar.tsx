"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");

  return (
    <header className="fixed top-0 z-50 w-full bg-[#F8F4EE]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="text-xl tracking-[0.3em] text-[#8B7355]">
          GLOW BEYOND
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Navigation */}
          <div className="hidden gap-8 text-sm tracking-[0.2em] text-[#8B7355] md:flex">

            <a
              href="#collection"
              className="transition hover:opacity-70"
            >
              {t("collection")}
            </a>

            <a
              href="#about"
              className="transition hover:opacity-70"
            >
              {t("about")}
            </a>

            <a
              href="#contact"
              className="transition hover:opacity-70"
            >
              {t("contact")}
            </a>

          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />

        </div>

      </nav>
    </header>
  );
}