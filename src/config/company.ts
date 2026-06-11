type ContactEmail =
  | { status: 'unverified'; value: null }
  | { status: 'verified'; value: string };

type Company = {
  legalName: string;
  brandName: string;
  registrationNumber: string;
  taxCode: string;
  address: {
    full: string;
    streetAddress: string;
    locality: string;
    country: string;
  };
  contactEmail: ContactEmail;
};

export const company: Company = {
  legalName: 'Heavens LLC',
  brandName: 'Heavens',
  registrationNumber: '50456518',
  taxCode: '02660767',
  address: {
    full: '40 Sayat-Nova Avenue, Yerevan, Armenia',
    streetAddress: '40 Sayat-Nova Avenue',
    locality: 'Yerevan',
    country: 'AM',
  },
  contactEmail: {
    value: null,
    status: 'unverified',
  },
};

export function getPublicContactEmail(): string | null {
  return company.contactEmail.status === 'verified'
    ? company.contactEmail.value
    : null;
}
