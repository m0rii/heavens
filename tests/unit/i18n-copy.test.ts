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
});
