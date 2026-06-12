export type SocialProfile = {
  platform: 'instagram';
  username: '@heavens_holding';
  url: 'https://www.instagram.com/heavens_holding/';
  label: 'Follow Heavens on Instagram';
};

export const socialProfiles = {
  instagram: {
    platform: 'instagram',
    username: '@heavens_holding',
    url: 'https://www.instagram.com/heavens_holding/',
    label: 'Follow Heavens on Instagram',
  },
} as const satisfies Record<string, SocialProfile>;

export const organizationSameAs = [socialProfiles.instagram.url] as const;
