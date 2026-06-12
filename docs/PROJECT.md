# Heavens Project Specification

## Positioning

Heavens LLC is an Armenia-based diversified company with more than a decade of experience across international trade, consumer goods, beauty, distribution, technology, digital platforms, AI-enabled solutions, and media production.

The site must feel premium, established, international, elegant, ambitious, modern, and trustworthy. It must not position Heavens as a new software startup, crypto project, generic SaaS company, or unverified market leader.

Primary slogan: "Live the Dream."

## Verified Business Facts

- Legal name: Heavens LLC
- Registration number: 50456518
- Tax code: 02660767
- Registered address: 40 Sayat-Nova Avenue, Yerevan, Armenia

The exact official domain, email, founding year, social profiles, and Zeghch legal relationship still require verification.

## Pages

Generate the following routes for every locale: home, about, business, technology, media, brands, brands/zeghch, contact, legal, privacy, cookies, and terms. Also generate localized contact success pages that are `noindex` and excluded from the sitemap.

## Locales

Exactly `hy`, `en`, `ru`, `de`, `fa`, and `ar` are supported. Persian and Arabic are RTL; all others are LTR. Routes are always locale-prefixed. Root `/` performs client-side preference/browser-language selection with Armenian fallback and a no-JavaScript `/hy/` fallback.

The language selector must remain visually separate from page navigation. On desktop, use a compact active language code trigger such as `EN` with a restrained custom dropdown listing native names: Հայերեն, English, Русский, Deutsch, فارسی, العربية. Flags may appear only as secondary decorative indicators and never without written language names.

On mobile, the language trigger remains beside the burger button in the sticky header. The drawer also includes a separated language section. Language links preserve the equivalent current page and work without JavaScript. JavaScript enhancement adds Escape closing, outside-click closing, overlay click closing, drawer/language mutual exclusion, focus trapping, focus restoration, body scroll locking, visible focus, and accurate ARIA state.

## Content Model

Use typed dictionaries and structured content. English is the master drafting language. Other locales may be implementation drafts but must be tracked as unreviewed until linguistically and legally approved.

## Design Direction

Use restrained premium styling: deep charcoal or midnight surfaces, ivory sections, champagne accents, strong contrast, generous spacing, editorial typography, logical CSS properties, and accessible touch targets. Use temporary abstract visuals only when approved photography is unavailable.

Brand placeholders are implemented for the Heavens logo, hero graphic, and draft color palette. These are temporary implementation aids only. When the final logo, graphic direction, and color palette website/document are provided, update `src/config/brand.ts`, `src/styles/global.css`, and the files under `public/brand/` together.

Current palette direction is derived from the supplied Heavens logo: olive `#698A3B`, deep logo green `#3F6111`, and amber `#F9A004`. The site uses dark forest-neutral and warm ivory surfaces as the main environment, with green as the primary brand color and amber as a restrained accent. The internal noindex style guide at `/style-guide/` exists only for implementation review and must not be treated as a public page.

## Navigation Shell

Desktop navigation remains a restrained horizontal navigation. Mobile navigation uses a sticky dark header, compact language popover, and fixed full-height drawer opening from the logical inline end. The drawer includes a header row, primary navigation links, a language section, and a contact CTA. Background content is covered by an overlay and body scroll is locked while the drawer is open.

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

## Security

Treat static generation as reduced attack surface, not a security guarantee. Configure security headers, cautious CSP, safe external links, no secrets, dependency review, no unsafe HTML rendering, no uploads, and preview noindex behavior.

## Performance

Maintain minimal JavaScript, no global framework runtime, no third-party requests by default, optimized local assets, stable layout, limited fonts, and enforced budget checks.

## Unresolved Verification Items

Official email, mailbox ownership, email provider, SPF, DKIM, DMARC, domain, Zeghch relationship, approved product categories, social URLs, founding year, logo, favicon, photography, licensed fonts, translation review, legal review, analytics, Netlify retention, and deletion responsibility.
