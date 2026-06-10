"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["fr", "en", "es"];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const segments = pathname.split("/");

  const currentLocale = locales.includes(segments[1])
    ? segments[1]
    : "fr";

  const getHref = (locale: string) => {
    const newSegments = [...segments];

    if (locales.includes(newSegments[1])) {
      newSegments[1] = locale;
    } else {
      newSegments.splice(1, 0, locale);
    }

    return newSegments.join("/") || "/";
  };

  return (
    <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#8B7355]">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getHref(locale)}
          className={`transition hover:opacity-70 ${
            currentLocale === locale
              ? "font-semibold"
              : "opacity-50"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}