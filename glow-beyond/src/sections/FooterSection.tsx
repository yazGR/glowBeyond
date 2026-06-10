"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/FadeIn";

export default function FooterSection() {
  const t = useTranslations("footer");
  return (
    <FadeIn>
      <footer
        id="contact"
        className="bg-[#E8DCCB] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

              <div className="grid gap-16 md:grid-cols-3">

                {/* Brand */}
                <div>

                  <h3 className="text-3xl font-light tracking-[0.25em] text-[#8B7355]">
                    GLOW BEYOND
                  </h3>

                  <p className="mt-6 max-w-sm leading-relaxed text-[#9C8668]">
                    {t("description")}
                  </p>

                </div>

                {/* Navigation */}
                <div>

                  <h4 className="mb-6 text-sm tracking-[0.3em] text-[#8B7355]">
                    {t("navigation")}
                  </h4>

                  <div className="flex flex-col gap-4 text-[#9C8668]">

                    <a
                      href="#collection"
                      className="transition hover:text-[#8B7355]"
                    >
                      {t("collection")}
                    </a>

                    <a
                      href="#about"
                      className="transition hover:text-[#8B7355]"
                    >
                      {t("about")}
                    </a>

                    <a
                      href="#contact"
                      className="transition hover:text-[#8B7355]"
                    >
                      Contact
                    </a>

                  </div>

                </div>

                {/* Contact */}
                <div>

                  <h4 className="mb-6 text-sm tracking-[0.3em] text-[#8B7355]">
                    {t("contact")}
                  </h4>

                  <div className="flex flex-col gap-4 text-[#9C8668]">

                    <p>Lévis, Quebec</p>

                    <a
                      href="mailto:glowbeyond.ca@gmail.com"
                      className="transition hover:text-[#8B7355]"
                    >
                      glowbeyond.ca@gmail.com
                    </a>

                    <a
                      href="https://instagram.com/glowbeyond.ca"
                      target="_blank"
                      className="transition hover:text-[#8B7355]"
                    >
                      {t("instagram")}
                    </a>

                  </div>

                </div>

              </div>

              {/* Bottom */}
              <div className="mt-20 border-t border-[#CBB79C] pt-8 text-center text-sm text-[#9C8668]">

                {t("rights")}

              </div>

            </div>
      </footer>
    </FadeIn>
  );
}