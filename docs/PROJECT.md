# Heavens Project Specification

## Positioning

Heavens LLC is an Armenia-based diversified company with more than a decade of experience across international trade, consumer goods, beauty, distribution, technology, digital platforms, AI-enabled solutions, and media production.

The site must feel premium, established, international, elegant, ambitious, modern, and trustworthy. It must not position Heavens as a new software startup, crypto project, generic SaaS company, or unverified market leader.

Primary slogan: "Live the Dream."

## Verified Business Facts

- Legal name: Heavens LLC
- Registration number: 50456518
- Tax code: 02660767
- Registered address: Yerevan, Armenia

The exact official domain, founding year, social profiles, contact notification routing, and Zeghch legal relationship still require verification.

## Pages

Generate the following routes for every locale: home, about, business, technology, media, brands, brands/zeghch, contact, legal, privacy, cookies, and terms. Also generate localized contact success pages that are `noindex` and excluded from the sitemap.

The Legal Information, Privacy Policy, Cookie Policy, and Terms of Use pages use expanded implementation drafts for an informational Armenian LLC website. They include company identity, operator, form-processing, Netlify, storage, acceptable-use, no-offer, governing-law, and translation-status wording, but remain blocked until legal review and approved Armenian legal translation.

## Locales

Exactly `hy`, `en`, `ru`, `de`, `fa`, and `ar` are supported. Persian and Arabic are RTL; all others are LTR. Routes are always locale-prefixed. Root `/` first uses a saved visitor preference, then scans browser language preferences for the first supported locale, then falls back to Armenian (`/hy/`). The no-JavaScript fallback also goes to `/hy/`.

The language selector must remain visually separate from page navigation. On desktop, use a compact active language code trigger such as `EN` with a restrained custom dropdown listing native names: Հայերեն, English, Русский, Deutsch, فارسی, العربية. Flags may appear only as secondary decorative indicators and never without written language names.

On mobile, the language trigger remains beside the burger button in the sticky header. The drawer also includes a separated language section. Language links preserve the equivalent current page and work without JavaScript. JavaScript enhancement adds Escape closing, outside-click closing, overlay click closing, drawer/language mutual exclusion, focus trapping, focus restoration, body scroll locking, visible focus, and accurate ARIA state.

## Content Model

Use typed dictionaries and structured content. English is the master drafting language. Armenian, Russian, German, Persian, and Arabic currently have polished draft localization for route copy, navigation, forms, service pages, and accessibility labels. These translations must still be tracked as unreviewed until linguistically and legally approved.

## Design Direction

Use restrained premium styling: deep charcoal or midnight surfaces, ivory sections, champagne accents, strong contrast, generous spacing, editorial typography, logical CSS properties, and accessible touch targets. Use temporary abstract visuals only when approved photography is unavailable.

The homepage may remain more dramatic. Business, Technology, and Media use compact editorial service-page heroes with page-specific right-side panels and visible service sections near the first viewport. About and Contact use a compact internal hero so they do not feel like oversized campaign banners.

Brand placeholders are implemented for the Heavens logo, hero graphic, and draft color palette. These are temporary implementation aids only. When the final logo, graphic direction, and color palette website/document are provided, update `src/config/brand.ts`, `src/styles/global.css`, and the files under `public/brand/` together.

Current palette direction is derived from the supplied Heavens logo: olive `#698A3B`, deep logo green `#3F6111`, and amber `#F9A004`. The site uses dark forest-neutral and warm ivory surfaces as the main environment, with green as the primary brand color and amber as a restrained accent. The internal noindex style guide at `/style-guide/` exists only for implementation review and must not be treated as a public page.

## Navigation Shell

Desktop navigation remains a restrained horizontal navigation. Mobile navigation uses a sticky dark header, compact language popover, and fixed full-height drawer opening from the logical inline end. The drawer includes a header row, primary navigation links, a language section, and a contact CTA. Background content is covered by an overlay and body scroll is locked while the drawer is open.

The footer displays the typed company identity details required for launch review: Heavens LLC, Yerevan, Armenia, registration number 50456518, tax code 02660767, legal-policy links, Contact, Instagram, and generated copyright year. Do not render a public email address unless the business explicitly approves publishing one.

## Architecture

- Astro 6 static output
- TypeScript strict mode
- Tailwind CSS 4 Vite integration
- Astro Content Collections
- Native browser APIs for enhancement
- Netlify hosting and Netlify Forms
- No frontend framework runtime
- No custom backend for the initial version

## SEO

Centralize title, description, canonical, hreflang, Open Graph, Twitter card, robots, Organization JSON-LD, and Breadcrumb JSON-LD generation. Use only verified structured data. Exclude root redirect and success pages from the sitemap.

## Accessibility

Target WCAG 2.2 AA. Required basics include landmarks, skip link, one main landmark, logical headings, keyboard navigation, visible focus, accessible language switcher, accessible mobile drawer, accessible forms, live regions, RTL support, reduced motion, contrast, and mobile reflow.

## Contact Form

Use one Netlify form named `premium-contact` across all locales. Static generated markup must include hidden `form-name`, `locale`, honeypot, fixed enquiry type values, length limits, privacy acknowledgement, and a non-JavaScript success action.

The form uses localized labels, field-level errors, an error summary, a persistent live status region, a live message character count, and a two-column desktop layout that collapses to one column on mobile. The progressive enhancement posts URL-encoded `FormData` to `/` for Netlify, prevents duplicate submissions, preserves entered values after failed sends, redirects to the localized success page only after a successful response, and does not render submitted values into the page.

Allowed enquiry values are exactly `general`, `import-export`, `product-sourcing`, `distribution`, `software`, `digital-platform`, `ai-solution`, `media-production`, `brand-partnership`, and `other`. Do not add fake SQL-keyword filtering or English-only name validation.

## Privacy Consent

Use only two categories: Essential and Analytics. Essential is always active and covers necessary browser storage such as language preference, privacy preference, and basic form/security behavior. Analytics is optional, defaults to false, and is currently inactive because no analytics provider is installed.

Store language preference in `localStorage` under `heavens:language`. Store consent in `localStorage` under `heavens:privacy-consent:v1` as `{ version: 1, essential: true, analytics: boolean, updatedAt: string }`. Do not store personal form data in cookies or localStorage. Do not use advertising cookies, tracking pixels, embedded social feeds, Google Analytics, Google Tag Manager, Meta Pixel, or analytics scripts unless explicitly approved later.

`loadAnalyticsIfAllowed()` is currently a no-op. If analytics is added later, it must load only after analytics consent and must stop loading on future page loads if analytics consent is revoked.

## Security

Treat static generation as reduced attack surface, not a security guarantee. Configure security headers, cautious CSP, safe external links, no secrets, dependency review, no unsafe HTML rendering, no uploads, and preview noindex behavior.

## Performance

Maintain minimal JavaScript, no global framework runtime, no third-party requests by default, optimized local assets, stable layout, limited fonts, and enforced budget checks.

## Unresolved Verification Items

Official domain, contact notification routing, notification owner, Zeghch relationship, approved product categories, social URLs, founding year, logo, favicon, photography, licensed fonts, translation review, legal review, effective legal-page dates, analytics, Netlify retention, authorised submission access, and deletion responsibility.
