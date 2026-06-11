import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const currentLocale =
    locale && locales.includes(locale as (typeof locales)[number])
      ? locale
      : defaultLocale;

  return {
    locale: currentLocale,
    messages: (
      await import(`../locales/${currentLocale}.json`)
    ).default,
  };
});