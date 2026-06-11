import { describe, expect, it } from 'vitest';
import {
  contactFormName,
  encodeFormData,
  isEnquiryType,
} from '../../src/lib/forms';

describe('forms', () => {
  it('uses the approved Netlify form name', () => {
    expect(contactFormName).toBe('premium-contact');
  });

  it('validates enquiry types', () => {
    expect(isEnquiryType('business')).toBe(true);
    expect(isEnquiryType('crypto')).toBe(false);
  });

  it('encodes form data', () => {
    expect(
      encodeFormData({ 'form-name': contactFormName, locale: 'en' }),
    ).toContain('form-name=premium-contact');
  });
});
