import { describe, expect, it } from 'vitest';
import { locales } from '../../src/i18n/config';
import { getDictionary } from '../../src/i18n/ui';

describe('localized copy', () => {
  it('provides localized navigation and actions for every locale', () => {
    for (const locale of locales) {
      const dictionary = getDictionary(locale);

      expect(dictionary.nav.home).toBeTruthy();
      expect(dictionary.nav.contact).toBeTruthy();
      expect(dictionary.actions.openNavigation).toBeTruthy();
      expect(dictionary.actions.closeNavigation).toBeTruthy();
      expect(dictionary.actions.language).toBeTruthy();
      expect(dictionary.consent.essentialOnly).toBeTruthy();
      expect(dictionary.consent.acceptAnalytics).toBeTruthy();
      expect(dictionary.consent.cookieSettings).toBeTruthy();
    }
  });

  it('uses the premium homepage hero intro from localized content', () => {
    const english = getDictionary('en');

    expect(english.pages[''].heading).toBe('Live the Dream.');
    expect(english.pages[''].intro).toBe(
      'Built on more than a decade of commercial experience, Heavens brings together business, technology and creative media to create what comes next.',
    );

    for (const locale of locales.filter((item) => item !== 'en')) {
      expect(getDictionary(locale).pages[''].intro).not.toBe(
        english.pages[''].intro,
      );
    }
  });

  it('does not fall back to English service page copy for non-English locales', () => {
    const english = getDictionary('en');

    for (const locale of locales.filter((item) => item !== 'en')) {
      const dictionary = getDictionary(locale);

      expect(dictionary.pages.about.heading).not.toBe(
        english.pages.about.heading,
      );
      expect(dictionary.pages.contact.heading).not.toBe(
        english.pages.contact.heading,
      );
      expect(dictionary.servicePages.business.services.heading).not.toBe(
        english.servicePages.business.services.heading,
      );
      expect(dictionary.servicePages.technology.processSteps?.[0]).not.toBe(
        english.servicePages.technology.processSteps?.[0],
      );
      expect(dictionary.form.status.idle).not.toBe(english.form.status.idle);
    }
  });

  it('keeps core compliance pages substantive across locales', () => {
    for (const locale of locales) {
      const dictionary = getDictionary(locale);

      expect(dictionary.pages.legal.sections.length).toBeGreaterThanOrEqual(2);
      expect(dictionary.pages.privacy.sections.length).toBeGreaterThanOrEqual(
        2,
      );
      expect(dictionary.pages.cookies.sections.length).toBeGreaterThanOrEqual(
        2,
      );
      expect(dictionary.pages.terms.sections.length).toBeGreaterThanOrEqual(2);
      expect(dictionary.company.registrationNumber).toBeTruthy();
      expect(dictionary.company.taxCode).toBeTruthy();
      expect(dictionary.company.address).toBeTruthy();
    }
  });

  it('documents the English compliance master copy in detail', () => {
    const dictionary = getDictionary('en');

    expect(dictionary.pages.legal.sections).toHaveLength(10);
    expect(dictionary.pages.privacy.sections).toHaveLength(14);
    expect(dictionary.pages.cookies.sections).toHaveLength(7);
    expect(dictionary.pages.terms.sections).toHaveLength(9);
    expect(dictionary.pages.legal.sections[0]?.body).toContain('50456518');
    expect(dictionary.pages.legal.sections[0]?.body).toContain('02660767');
    expect(dictionary.pages.privacy.sections[4]?.body).toContain(
      'Netlify Forms',
    );
    expect(dictionary.pages.cookies.sections[0]?.body).toContain(
      'Optional analytics is not currently active',
    );
  });

  it('does not expose future email-verification placeholder copy', () => {
    const blockedPhrases = [
      `official ${'company'} email`,
      `mailbox ${'verification'}`,
      `will be displayed ${'after'}`,
      `official ${'email'}`,
    ];

    for (const locale of locales) {
      const serialized = JSON.stringify(getDictionary(locale)).toLowerCase();

      for (const phrase of blockedPhrases) {
        expect(serialized).not.toContain(phrase);
      }
    }
  });
});
