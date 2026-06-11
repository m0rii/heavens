export const contactFormName = 'premium-contact';

export const enquiryTypes = [
  'business',
  'technology',
  'media',
  'partnership',
  'other',
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];

export function isEnquiryType(value: string): value is EnquiryType {
  return enquiryTypes.includes(value as EnquiryType);
}

export function encodeFormData(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}
