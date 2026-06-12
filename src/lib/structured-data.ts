import { brandAssets } from '../config/brand';
import { company } from '../config/company';
import { localizedPath, type AnyRouteSlug } from '../config/routes';
import { site } from '../config/site';
import { organizationSameAs } from '../config/social';
import type { Locale } from '../i18n/config';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    alternateName: company.brandName,
    url: site.origin,
    logo: `${site.origin}${brandAssets.logo.src}`,
    sameAs: organizationSameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.streetAddress,
      addressLocality: company.address.locality,
      addressCountry: company.address.country,
    },
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  slug: AnyRouteSlug,
  label: string,
) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Heavens',
      item: `${site.origin}${localizedPath(locale)}`,
    },
  ];

  if (slug) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: label,
      item: `${site.origin}${localizedPath(locale, slug)}`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
