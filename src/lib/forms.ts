export const contactFormName = 'premium-contact';

export const enquiryTypes = [
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
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];

export function isEnquiryType(value: string): value is EnquiryType {
  return enquiryTypes.includes(value as EnquiryType);
}

export function encodeFormData(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}

export type ContactFormData = {
  'full-name': string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  'enquiry-type': string;
  message: string;
  'privacy-acknowledgement'?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactFormData(
  data: ContactFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const fullName = data['full-name'].trim();
  const message = data.message.trim();

  if (fullName.length < 2 || data['full-name'].length > 100) {
    errors['full-name'] = 'full-name';
  }

  if (data.company && data.company.length > 150) {
    errors.company = 'company';
  }

  if (!data.email || data.email.length > 254 || !data.email.includes('@')) {
    errors.email = 'email';
  }

  if (data.phone && data.phone.length > 40) {
    errors.phone = 'phone';
  }

  if (data.country && data.country.length > 100) {
    errors.country = 'country';
  }

  if (!isEnquiryType(data['enquiry-type'])) {
    errors['enquiry-type'] = 'enquiry-type';
  }

  if (message.length < 10 || data.message.length > 5000) {
    errors.message = 'message';
  }

  if (data['privacy-acknowledgement'] !== 'acknowledged') {
    errors['privacy-acknowledgement'] = 'privacy-acknowledgement';
  }

  return errors;
}
