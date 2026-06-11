import { locales, type Locale } from '../i18n/config';

export const routeSlugs = [
  '',
  'about',
  'business',
  'technology',
  'media',
  'brands',
  'brands/zeghch',
  'contact',
  'legal',
  'privacy',
  'cookies',
  'terms',
] as const;

export const nonIndexableRouteSlugs = ['contact/success'] as const;

export type RouteSlug = (typeof routeSlugs)[number];
export type NonIndexableRouteSlug = (typeof nonIndexableRouteSlugs)[number];
export type AnyRouteSlug = RouteSlug | NonIndexableRouteSlug;

export function isRouteSlug(value: string): value is RouteSlug {
  return routeSlugs.includes(value as RouteSlug);
}

export function isAnyRouteSlug(value: string): value is AnyRouteSlug {
  return (
    routeSlugs.includes(value as RouteSlug) ||
    nonIndexableRouteSlugs.includes(value as NonIndexableRouteSlug)
  );
}

export function localizedPath(locale: Locale, slug: AnyRouteSlug = ''): string {
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function getRouteMatrix(
  includeNoindex = false,
): Array<{ locale: Locale; slug: AnyRouteSlug }> {
  const slugs: AnyRouteSlug[] = includeNoindex
    ? [...routeSlugs, ...nonIndexableRouteSlugs]
    : [...routeSlugs];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export function getEquivalentPaths(slug: AnyRouteSlug): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizedPath(locale, slug)]),
  ) as Record<Locale, string>;
}
