import { describe, expect, it } from 'vitest';
import {
  getDirection,
  isLocale,
  localeCodes,
  matchBrowserLanguage,
} from '../../src/i18n/config';

describe('locale utilities', () => {
  it('recognizes supported locales', () => {
    expect(isLocale('hy')).toBe(true);
    expect(isLocale('am')).toBe(false);
  });

  it('matches browser language with Armenian fallback', () => {
    expect(matchBrowserLanguage('de-DE')).toBe('de');
    expect(matchBrowserLanguage('am-AM')).toBe('hy');
    expect(matchBrowserLanguage('ja-JP')).toBe('hy');
  });

  it('returns RTL only for Persian', () => {
    expect(getDirection('fa')).toBe('rtl');
    expect(getDirection('en')).toBe('ltr');
  });

  it('defines compact display codes', () => {
    expect(localeCodes.en).toBe('EN');
    expect(localeCodes.hy).toBe('HY');
  });
});
