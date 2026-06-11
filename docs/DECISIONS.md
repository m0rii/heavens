# Decisions

## 2026-06-11 - Static Astro Architecture

Astro 6 static output is used because the site is a corporate marketing site without authentication, payments, dashboards, databases, or custom runtime APIs. This reduces operational complexity and supports strong performance.

## 2026-06-11 - No Frontend Framework Runtime

React, Vue, Svelte, Preact, and similar runtimes are intentionally excluded. Astro components, semantic HTML, CSS, and small native TypeScript modules cover the current requirements.

## 2026-06-11 - No Netlify Adapter

`@astrojs/netlify` is not installed. The project is fully static and does not currently require adapter-only Netlify features.

## 2026-06-11 - Form Name Resolution

The stable internal Netlify form name is `premium-contact` for every locale, resolving any generic `contact` naming in favor of the security architecture and master prompt.

## 2026-06-11 - Email Placeholder Strategy

The recommended `info@heavens.am` address is not rendered until verified. A typed company configuration stores the public email with explicit verification status, and production validation fails when an official email is required but unconfirmed.

## 2026-06-11 - Translation And Legal Status

Non-English content may be implemented as draft localization only. Legal pages are implementation-aligned drafts and remain blocked for production until legal review.

## 2026-06-11 - CSP Approach

The initial Netlify configuration uses conservative response headers and a report-only CSP while implementation sources stabilize. Enforced production CSP remains a launch blocker until verified against deployed responses.

## 2026-06-11 - Analytics

No analytics provider is selected or loaded during initial development. Analytics requires a documented provider decision and consent behavior.

## 2026-06-11 - Font Strategy

System font stacks are used initially to avoid unlicensed or poorly subsetted font files. Final self-hosted multilingual font files require licensing and metrics verification.

## 2026-06-11 - Image Strategy

No fabricated company photography is used. Temporary visuals must be abstract, local, and tracked until final brand assets are approved.

## 2026-06-11 - Brand Placeholder Strategy

Temporary local placeholders exist for the logo, hero graphic, and draft palette. Components read paths and color references from `src/config/brand.ts` where practical, so final approved assets can replace placeholders without scattering hard-coded paths. Placeholder assets must not be treated as approved brand identity.

## 2026-06-11 - Initial Performance Budgets

Initial budgets are intentionally conservative for a static corporate site: no third-party requests, no framework runtime, JavaScript under 80 KB per route after build, CSS under 120 KB total, font transfer under 180 KB, largest initial image under 250 KB, and total estimated initial transfer under 700 KB.

## 2026-06-11 - Node 24 And Latest Compatible Dependencies

The project now targets Node `24.16.0` and npm `11.13.0`. Direct dependencies were updated to current compatible releases, including TypeScript `6.0.3` and `globals` `17.6.0`. Vite is intentionally held at `7.3.5` through an override because Astro `6.4.6` currently resolves Vite `7.x`; allowing Vite `8.x` to hoist previously caused Astro config type conflicts. Revisit this when Astro officially moves its Vite dependency line.

## 2026-06-11 - Premium Language Switcher

The language selector is implemented as a visually separate header control, not as a primary navigation item. It uses an active locale code trigger, native language names in the dropdown, decorative flags only beside written names, no-JavaScript equivalent-page links, and a small progressive enhancement for ARIA expanded state, Escape close, and outside-click close. The mobile header keeps the language trigger beside the hamburger while the hamburger panel stays focused on page navigation.

## 2026-06-11 - Logo-Derived Color System

The supplied Heavens logo establishes three recognizable colors: Heavens Olive `#698A3B`, Deep Logo Green `#3F6111`, and Heavens Amber `#F9A004`. The website uses dark forest neutrals and warm ivory instead of pure black and pure white to keep the brand premium, editorial, and less promotional. Green is the primary brand color; amber is limited to CTAs, focus rings, and micro-accents because large orange surfaces would overpower the corporate tone and can reduce readability on light backgrounds.

Semantic variables map raw tokens to component intent: `--background`, `--surface`, `--text-primary`, `--text-muted`, `--brand-primary`, `--brand-strong`, `--brand-accent`, `--brand-accent-accessible`, `--border-default`, and `--focus-ring`. Known safe combinations include soft ivory on midnight, amber on midnight, ink on ivory, deep olive on ivory, and burnished amber on ivory. Primary buttons use amber on dark backgrounds and deep olive on light backgrounds; secondary buttons use transparent surfaces with olive borders. The internal `/style-guide/` route is noindex and excluded from the sitemap for visual inspection during development.

Original raster logo exports are kept under `docs/reference/brand/` for reference only. Public runtime assets should use optimized files under `public/brand/`; JPG logo exports must not be used as production logo assets.

## 2026-06-11 - Homepage Hero And Header Refinement

The production header must not display content approval status. Approval state remains tracked in documentation and development-only review surfaces, not visitor-facing pages.

The supplied `public/brand/logopng.png` is the current runtime brand asset for the header logo, footer logo, structured-data logo, social preview image, and homepage graphic. It is not paired with an additional visible text wordmark in the header or footer because the supplied PNG is treated as the full current logo asset. Approved transparent SVG logo and graphic variants remain required before production readiness.

The homepage hero uses a two-line editorial headline, a shared 1440px container grid, restrained dark forest background depth, consistent pill buttons, and a local abstract SVG visual inspired by the four-part Heavens mark. The visual is temporary, abstract, and documented in the verification register; no fake photography or stock imagery is used.
