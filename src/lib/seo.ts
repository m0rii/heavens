import { getEquivalentPaths, type AnyRouteSlug } from '../config/routes';
import { site } from '../config/site';
import { locales, ogLocales, type Locale } from '../i18n/config';

export function canonicalUrl(locale: Locale, slug: AnyRouteSlug): string {
  return `${site.origin}${getEquivalentPaths(slug)[locale]}`;
}

export function hreflang(
  locale: Locale,
  slug: AnyRouteSlug,
): Array<{ lang: string; href: string }> {
  const equivalents = getEquivalentPaths(slug);
  return [
    ...locales.map((lang) => ({
      lang,
      href: `${site.origin}${equivalents[lang]}`,
    })),
    { lang: 'x-default', href: `${site.origin}${equivalents[locale]}` },
  ];
}

export function ogLocale(locale: Locale): string {
  return ogLocales[locale];
}
