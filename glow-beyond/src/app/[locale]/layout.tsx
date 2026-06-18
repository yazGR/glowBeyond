import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { locales } from "@/i18n/routing";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = (
    await import(`@/locales/${locale}.json`)
  ).default;

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <CartProvider>

        <Navbar />

        <main>
          {children}
        </main>

      </CartProvider>
    </NextIntlClientProvider>
  );
}