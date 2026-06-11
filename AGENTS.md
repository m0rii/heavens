# Heavens Website Agent Guide

## Mission

Build and maintain the official Heavens LLC corporate website as a premium, multilingual, static Astro site for an established Armenia-based commercial company expanding into technology and media.

## Source Hierarchy

1. Current user instructions and master prompt.
2. `docs/reference/Security, Contact Form and Email Delivery Architecture.pdf` for form, email, retention, and security.
3. `docs/reference/Heavens LLC Website Specification.pdf` for positioning, pages, content, locales, SEO, accessibility, and roadmap.
4. Current official tool documentation.
5. Conservative engineering judgment.

Record meaningful conflicts or resolutions in `docs/DECISIONS.md`.

## Technology Rules

- Astro 6 static output only.
- Node 24.16.0 or newer in the Node 24 line for project execution.
- npm with committed `package-lock.json`.
- TypeScript strict mode.
- Tailwind CSS 4 through the supported Vite integration.
- Astro Content Collections and Zod schemas.
- Minimal native TypeScript for progressive enhancement.
- No React, Vue, Svelte, Preact, SPA router, database, authentication, or backend unless a later decision proves the need.
- Do not install `@astrojs/netlify` unless an adapter-only feature is intentionally chosen and documented.

## Locale Rules

Supported locales are exactly `hy`, `en`, `ru`, `de`, and `fa`.

- Use prefixed routes for every language, including the default language.
- Persian uses `dir="rtl"`; all other locales use `dir="ltr"`.
- Never use `am` as the Armenian locale code.
- Language switching must preserve the equivalent current page.
- Root `/` must choose a saved preference, then browser language, then Armenian fallback.
- The language selector must remain visually separate from primary navigation.
- Desktop language selector: compact trigger using active code (`HY`, `EN`, `RU`, `DE`, `FA`), premium dropdown, native language names visible, optional flags only as secondary decoration.
- Mobile language selector: keep the active language trigger beside the hamburger, or in a clearly separated language section; do not bury it as a normal page link.
- Language selector links must work without JavaScript and point to the equivalent current page.
- Enhanced language selector behavior must support keyboard navigation, Escape close, outside-click close, visible focus, and correct ARIA expanded state.

## Form Rules

- Internal Netlify form name is always `premium-contact`.
- Static HTML form markup must be present in built output.
- Include `form-name`, `locale`, and honeypot fields.
- Use no file uploads and no sensitive-data collection.
- The final company email is unconfirmed and must not be rendered publicly until verified.

## No-Invention Rules

- Do not invent a founding year; use “more than a decade of experience.”
- Do not claim ownership or operation of Zeghch until legally confirmed.
- Do not claim translations or legal pages are approved without evidence.
- Do not claim production readiness while business, legal, email, translation, asset, or live Netlify checks remain unresolved.

## Required Commands

Use the narrowest useful command during development. Before marking a phase complete, run the phase-specific checks. The full local gate is:

```bash
npm run ci
```

## Documentation Protocol

- `README.md`: onboarding and commands.
- `docs/PROJECT.md`: compact derived implementation specification.
- `docs/ROADMAP.md`: phase status, acceptance criteria, evidence, blockers.
- `docs/PROGRESS.md`: chronological evidence.
- `docs/DECISIONS.md`: architecture and specification decisions.
- `docs/VERIFICATION.md`: unresolved business, legal, content, domain, asset, and launch facts.
- `docs/LAUNCH_CHECKLIST.md`: final launch checks.

Update docs when behavior, requirements, or evidence changes.

## Phase Completion

A phase is complete only when its implementation exists, required checks pass, evidence is recorded, and no unresolved blocker belongs to that phase. Do not deploy, push, configure DNS, create paid resources, or submit real forms without explicit instruction.
