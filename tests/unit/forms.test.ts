import { describe, expect, it } from 'vitest';
import {
  contactFormName,
  encodeFormData,
  enquiryTypes,
  isEnquiryType,
  validateContactFormData,
} from '../../src/lib/forms';

describe('forms', () => {
  it('uses the approved Netlify form name', () => {
    expect(contactFormName).toBe('premium-contact');
  });

  it('validates enquiry types', () => {
    expect(enquiryTypes).toEqual([
      'general',
      'import-export',
      'product-sourcing',
      'distribution',
      'software',
      'digital-platform',
      'ai-solution',
      'media-production',
      'brand-partnership',
      'other',
    ]);
    expect(isEnquiryType('business')).toBe(false);
    expect(isEnquiryType('ai-solution')).toBe(true);
    expect(isEnquiryType('crypto')).toBe(false);
  });

  it('encodes form data', () => {
    expect(
      encodeFormData({ 'form-name': contactFormName, locale: 'en' }),
    ).toContain('form-name=premium-contact');
  });

  it('accepts international names and code-like messages', () => {
    const errors = validateContactFormData({
      'full-name': 'Անի Иванова',
      company: 'Example LLC',
      email: 'ani@example.com',
      phone: '+374 10 000000',
      country: 'Armenia',
      'enquiry-type': 'software',
      message: "SELECT * FROM partners WHERE note = '<script>';",
      'privacy-acknowledgement': 'acknowledged',
    });

    expect(errors).toEqual({});
  });

  it('rejects whitespace-only required text and unknown enquiry values', () => {
    const errors = validateContactFormData({
      'full-name': '   ',
      email: 'not-an-email',
      'enquiry-type': 'business',
      message: 'short',
    });

    expect(errors).toMatchObject({
      'full-name': 'full-name',
      email: 'email',
      'enquiry-type': 'enquiry-type',
      message: 'message',
      'privacy-acknowledgement': 'privacy-acknowledgement',
    });
  });
});
