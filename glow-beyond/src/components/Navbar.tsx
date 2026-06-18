"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const t = useTranslations("navbar");

  const { totalItems } = useCart();

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
              {t("shop")}
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
          <div className="flex items-center gap-6">

            <LanguageSwitcher />

            <button
              className="
                relative
                flex
                items-center
                justify-center
                text-[#8B7355]
                transition
                hover:opacity-70
              "
            >
              <ShoppingBag size={22} />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B89B7A]
                    text-[10px]
                    text-white
                  "
                >
                  {totalItems}
                </span>
              )}
            </button>

          </div>

        </div>

      </nav>
    </header>
  );
}