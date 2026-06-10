export const locales = ["fr", "en", "es"] as const;

export const defaultLocale = "fr";

export type Locale = (typeof locales)[number];