# Heavens Website

Official multilingual corporate website for Heavens LLC, built as a static Astro site for Netlify.

## Prerequisites

- Node.js `24.16.0` or newer in the Node 24 line
- npm

The repository includes `.nvmrc` and an `engines` field to keep builds aligned.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Validation

```bash
npm run format:check
npm run lint
npm run check
npm run test
npm run build
npm run validate:content
npm run validate:routes
npm run validate:seo
npm run validate:production
npm run check:budgets
npm run ci
```

## Build And Preview

```bash
npm run build
npm run preview
```

The build output is `dist/`.

## Environment Variables

Copy `.env.example` only for local notes. Do not commit real values.

The public company email is intentionally controlled by typed company configuration and remains hidden from production pages until verified.

## Content Architecture

Localized page routes are generated from the route registry in `src/config/routes.ts`. UI strings live in `src/i18n/`. Page and legal content should use Astro Content Collections as implementation expands.

Supported locales:

- `hy` Armenian, LTR
- `en` English, LTR
- `ru` Russian, LTR
- `de` German, LTR
- `fa` Persian, RTL
- `ar` Arabic, RTL

## Deployment Overview

The target host is Netlify. The site is static, uses Netlify Forms for `premium-contact`, and does not use the Netlify Astro adapter unless a future documented feature requires it.

## Contact Form Testing Limitations

Local builds can verify static form markup and encoding. Netlify form detection, verified submissions, spam classification, notifications, reply-to behavior, and retention must be tested after deployment in the actual Netlify project.

## Current Production Blockers

- Official domain and email are not confirmed.
- Mailbox owner, provider, SPF, DKIM, and DMARC are not confirmed.
- Zeghch legal relationship is not confirmed.
- Translations are implementation drafts until professional review.
- Legal pages are drafts until legal review.
- Logo, favicon, photography, fonts, analytics, Netlify retention, and final CSP must be approved or verified before launch.
