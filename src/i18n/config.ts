export const locales = ['hy', 'en', 'ru', 'de', 'fa'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'hy';

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  hy: 'ltr',
  en: 'ltr',
  ru: 'ltr',
  de: 'ltr',
  fa: 'rtl',
};

export const localeNames: Record<Locale, string> = {
  hy: 'Հայերեն',
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  fa: 'فارسی',
};

export const localeCodes: Record<Locale, string> = {
  hy: 'HY',
  en: 'EN',
  ru: 'RU',
  de: 'DE',
  fa: 'FA',
};

export const localeFlags: Record<Locale, string> = {
  hy: '🇦🇲',
  en: '🇬🇧',
  ru: '🇷🇺',
  de: '🇩🇪',
  fa: '🇮🇷',
};

export const ogLocales: Record<Locale, string> = {
  hy: 'hy_AM',
  en: 'en_US',
  ru: 'ru_RU',
  de: 'de_DE',
  fa: 'fa_IR',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return localeDirections[locale];
}

export function matchBrowserLanguage(language: string | undefined): Locale {
  if (!language) return defaultLocale;

  const normalized = language.toLowerCase();
  const [primary] = normalized.split('-');

  if (primary === 'am') return 'hy';
  if (isLocale(primary)) return primary;

  return defaultLocale;
}
