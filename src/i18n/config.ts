export const locales = ['hy', 'en', 'ru', 'de', 'fa', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'hy';

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  hy: 'ltr',
  en: 'ltr',
  ru: 'ltr',
  de: 'ltr',
  fa: 'rtl',
  ar: 'rtl',
};

export const localeNames: Record<Locale, string> = {
  hy: 'Հայերեն',
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  fa: 'فارسی',
  ar: 'العربية',
};

export const localeCodes: Record<Locale, string> = {
  hy: 'HY',
  en: 'EN',
  ru: 'RU',
  de: 'DE',
  fa: 'FA',
  ar: 'AR',
};

export const localeFlags: Record<Locale, string> = {
  hy: '🇦🇲',
  en: '🇬🇧',
  ru: '🇷🇺',
  de: '🇩🇪',
  fa: '🇮🇷',
  ar: 'العربية',
};

export const ogLocales: Record<Locale, string> = {
  hy: 'hy_AM',
  en: 'en_US',
  ru: 'ru_RU',
  de: 'de_DE',
  fa: 'fa_IR',
  ar: 'ar',
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
