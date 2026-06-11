import { existsSync } from 'node:fs';

const locales = ['hy', 'en', 'ru', 'de', 'fa'];
const slugs = [
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
  'contact/success',
];

for (const locale of locales) {
  for (const slug of slugs) {
    const file = slug
      ? `dist/${locale}/${slug}/index.html`
      : `dist/${locale}/index.html`;
    if (!existsSync(file)) {
      throw new Error(`Missing built route: ${file}`);
    }
  }
}

console.log('route validation passed');
