import { describe, expect, it } from 'vitest';
import { canonicalUrl, hreflang } from '../../src/lib/seo';
import {
  breadcrumbJsonLd,
  organizationJsonLd,
} from '../../src/lib/structured-data';

describe('seo utilities', () => {
  it('generates canonical URLs', () => {
    expect(canonicalUrl('en', 'about')).toBe(
      'https://www.heavens.am/en/about/',
    );
  });

  it('generates hreflang including x-default', () => {
    const links = hreflang('en', 'technology');
    expect(links).toContainEqual({
      lang: 'fa',
      href: 'https://www.heavens.am/fa/technology/',
    });
    expect(links).toContainEqual({
      lang: 'ar',
      href: 'https://www.heavens.am/ar/technology/',
    });
    expect(links.at(-1)?.lang).toBe('x-default');
  });

  it('generates parseable structured data', () => {
    const organization = JSON.parse(JSON.stringify(organizationJsonLd()));
    expect(organization['@type']).toBe('Organization');
    expect(organization.sameAs).toContain(
      'https://www.instagram.com/heavens_holding/',
    );
    expect(
      JSON.parse(JSON.stringify(breadcrumbJsonLd('en', 'about', 'About')))[
        '@type'
      ],
    ).toBe('BreadcrumbList');
  });
});
