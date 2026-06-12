import type { AnyRouteSlug } from '@/config/routes';
import { localeNames, type Locale } from './config';

type PageCopy = {
  title: string;
  description: string;
  eyebrow?: string;
  heading: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
};

type Dictionary = {
  nav: Record<string, string>;
  actions: Record<string, string>;
  social: {
    instagram: string;
  };
  legal: string;
  draftNotice: string;
  pages: Record<AnyRouteSlug, PageCopy>;
};

const englishPages: Record<AnyRouteSlug, PageCopy> = {
  '': {
    title: 'Heavens LLC | Live the Dream',
    description:
      'Heavens LLC connects more than a decade of commercial experience with technology, digital platforms and creative media.',
    eyebrow: 'HEAVENS LLC · YEREVAN, ARMENIA',
    heading: 'Live the Dream.',
    intro:
      'More than a decade of commercial experience, now expanding into technology, digital platforms and creative media.',
    sections: [
      {
        title: 'Established in Armenia. Built for what comes next.',
        body: 'For more than ten years, Heavens LLC has operated from Yerevan across international trade, consumer products, beauty and distribution.',
      },
      {
        title: 'One company. Multiple capabilities.',
        body: 'Our experience spans physical products, commercial partnerships and modern digital solutions.',
      },
      {
        title: 'Building platforms with real local value.',
        body: 'Zeghch is a digital platform that helps people discover promotions, offers and local businesses across Armenia. The exact legal relationship requires business confirmation.',
      },
    ],
  },
  about: {
    title: 'About Heavens LLC',
    description:
      'Learn about Heavens LLC, a Yerevan-based company combining commercial experience with digital ambition.',
    heading: 'A decade of experience. A future driven by ambition.',
    intro:
      'Heavens LLC is a diversified company based in Yerevan, Armenia, with experience across trade, consumer products, beauty, sourcing, distribution, technology and media.',
    sections: [
      {
        title: 'Mission',
        body: 'To connect commercial experience, technology and creativity in ways that create lasting value.',
      },
      {
        title: 'Vision',
        body: 'To build modern businesses and digital products originating in Armenia for local and international markets.',
      },
      {
        title: 'Values',
        body: 'Ambition, practical experience, quality, trust and progress guide the company’s public direction.',
      },
    ],
  },
  business: {
    title: 'Business | Heavens LLC',
    description:
      'Commercial experience across import, export, sourcing, distribution and selected consumer-product categories.',
    heading: 'Commercial experience across products and markets.',
    intro:
      'Heavens has more than ten years of experience across import, export, sourcing, distribution and selected consumer-product categories.',
    sections: [
      {
        title: 'Import and export',
        body: 'Support for sourcing, cross-border commercial activity and selected product movement between markets.',
      },
      {
        title: 'Consumer products',
        body: 'Experience includes food, beauty, personal care, perfumes and selected everyday consumer categories.',
      },
      {
        title: 'Compliance',
        body: 'All activities are subject to applicable legal, regulatory, customs, product-safety and commercial requirements.',
      },
    ],
  },
  technology: {
    title: 'Technology | Heavens LLC',
    description:
      'Software, web, mobile, digital platform and practical AI capabilities shaped around real business needs.',
    heading: 'Technology built around real business needs.',
    intro:
      'Heavens combines commercial experience with modern product development to create useful, scalable digital solutions.',
    sections: [
      {
        title: 'Software development',
        body: 'Custom software designed around operational requirements and customer needs.',
      },
      {
        title: 'Digital platforms',
        body: 'Web applications, mobile products, marketplaces and business digitalization workflows.',
      },
      {
        title: 'Artificial intelligence',
        body: 'Practical AI-enabled tools for content, automation, customer experience and productivity.',
      },
    ],
  },
  media: {
    title: 'Digital Media | Heavens LLC',
    description:
      'Digital media, content production, social-media campaigns, video and creative production for modern audiences.',
    heading: 'Creative media for modern brands and platforms.',
    intro:
      'Heavens is expanding into digital content, social media, photography, video and platform-oriented media production.',
    sections: [
      {
        title: 'Content production',
        body: 'Planning and production for brand communication, social media and video channels.',
      },
      {
        title: 'AI-enabled creation',
        body: 'Responsible use of AI-assisted tools to support creative workflows and business communication.',
      },
      {
        title: 'Campaign support',
        body: 'Creative assets and media production aligned with business goals and audience needs.',
      },
    ],
  },
  brands: {
    title: 'Brands | Heavens LLC',
    description:
      'Brands and platforms associated with Heavens require clear legal and business verification before final claims.',
    heading: 'Brands and platforms with practical market value.',
    intro:
      'Heavens develops and presents business initiatives carefully, with legal relationships confirmed before public claims are finalized.',
    sections: [
      {
        title: 'Zeghch',
        body: 'Zeghch is presented with careful wording until the exact relationship is confirmed.',
      },
      {
        title: 'Future initiatives',
        body: 'Additional brands and platforms will be added only after business approval.',
      },
    ],
  },
  'brands/zeghch': {
    title: 'Zeghch | Heavens LLC',
    description:
      'Zeghch is a digital platform for discovering promotions, offers and local businesses across Armenia.',
    heading: 'Zeghch',
    intro:
      'Zeghch is a digital platform that helps people discover promotions, offers and local businesses across Armenia.',
    sections: [
      {
        title: 'Local discovery',
        body: 'The platform focuses on visibility for offers, promotions and local businesses.',
      },
      {
        title: 'Relationship status',
        body: 'The exact ownership or operating relationship must be confirmed before stronger legal claims are published.',
      },
    ],
  },
  contact: {
    title: 'Contact Heavens LLC',
    description:
      'Start a conversation with Heavens LLC about business, technology, partnerships or media opportunities.',
    heading: 'Start a conversation.',
    intro:
      'We welcome conversations with businesses, suppliers, technology partners, creators and investors.',
    sections: [
      {
        title: 'Official email',
        body: 'The official company email will be displayed after mailbox verification.',
      },
    ],
  },
  'contact/success': {
    title: 'Message Received | Heavens LLC',
    description: 'Your message has been received by Heavens LLC.',
    heading: 'Message received.',
    intro: 'Thank you. Your enquiry has been submitted for review.',
    sections: [
      {
        title: 'Next step',
        body: 'The Heavens team will review relevant business enquiries through the confirmed process.',
      },
    ],
  },
  legal: {
    title: 'Legal Information | Heavens LLC',
    description:
      'Legal company information for Heavens LLC. Draft content requires legal review before production approval.',
    heading: 'Legal information.',
    intro:
      'This page contains implementation-aligned legal information and requires legal review before launch.',
    sections: [
      {
        title: 'Company',
        body: 'Heavens LLC, registration number 50456518, tax code 02660767, registered address 40 Sayat-Nova Avenue, Yerevan, Armenia.',
      },
      {
        title: 'Review status',
        body: 'This legal content has not yet received final legal approval.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy | Heavens LLC',
    description:
      'Draft privacy information describing the current static website and Netlify Forms processing model.',
    heading: 'Privacy Policy.',
    intro:
      'This draft explains the current implementation and must be finalized after legal, email and Netlify retention review.',
    sections: [
      {
        title: 'Contact form',
        body: 'Contact form information is intended to be processed through Netlify Forms so Heavens can review and respond to enquiries.',
      },
      {
        title: 'Analytics',
        body: 'No optional analytics is loaded during initial development.',
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy | Heavens LLC',
    description:
      'Draft cookie policy for the initial Heavens website implementation.',
    heading: 'Cookie Policy.',
    intro:
      'The initial website uses only essential preference storage and does not load optional analytics.',
    sections: [
      {
        title: 'Language preference',
        body: 'The root language selector may use local storage to remember a visitor’s selected language.',
      },
      {
        title: 'Consent status',
        body: 'Optional analytics requires a later documented provider and consent decision.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use | Heavens LLC',
    description: 'Draft terms for use of the Heavens LLC website.',
    heading: 'Terms of Use.',
    intro:
      'These terms are implementation drafts and require legal review before launch.',
    sections: [
      {
        title: 'Website information',
        body: 'Website content is provided for general corporate information and business enquiry purposes.',
      },
      {
        title: 'No unsupported claims',
        body: 'Products, services and availability are subject to verification and applicable requirements.',
      },
    ],
  },
};

const localizedOverrides: Partial<
  Record<Locale, Partial<Record<AnyRouteSlug, Partial<PageCopy>>>>
> = {
  hy: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens-ը միավորում է ավելի քան տասնամյակի առեւտրային փորձը տեխնոլոգիայի եւ ստեղծարար մեդիայի հետ:',
    },
  },
  ru: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens объединяет более чем десятилетний коммерческий опыт с технологиями, цифровыми платформами и медиа.',
    },
  },
  de: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens verbindet mehr als ein Jahrzehnt kommerzieller Erfahrung mit Technologie, digitalen Plattformen und Medien.',
    },
  },
  fa: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens بیش از یک دهه تجربه تجاری را با فناوری، پلتفرم‌های دیجیتال و رسانه خلاق پیوند می‌دهد.',
    },
  },
  ar: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'تجمع Heavens بين أكثر من عقد من الخبرة التجارية والتقنية والمنصات الرقمية والإعلام الإبداعي.',
    },
  },
};

const nav = {
  home: 'Home',
  about: 'About',
  business: 'Business',
  technology: 'Technology',
  media: 'Media',
  brands: 'Brands',
  contact: 'Contact',
};

const socialLabels: Record<Locale, { instagram: string }> = {
  hy: { instagram: 'Հետեւեք մեզ Instagram-ում' },
  en: { instagram: 'Follow us on Instagram' },
  ru: { instagram: 'Подписывайтесь на нас в Instagram' },
  de: { instagram: 'Folgen Sie uns auf Instagram' },
  fa: { instagram: 'ما را در Instagram دنبال کنید' },
  ar: { instagram: 'تابعونا على Instagram' },
};

export function getDictionary(locale: Locale): Dictionary {
  const pages = Object.fromEntries(
    Object.entries(englishPages).map(([slug, page]) => {
      const override = localizedOverrides[locale]?.[slug as AnyRouteSlug] ?? {};
      const merged = { ...page, ...override };
      return [
        slug,
        {
          ...merged,
          title: `${merged.title} | ${localeNames[locale]}`,
          description: `${merged.description} (${localeNames[locale]})`,
        },
      ];
    }),
  ) as Record<AnyRouteSlug, PageCopy>;

  return {
    nav,
    actions: {
      discover: 'Discover Heavens',
      contact: 'Start a Conversation',
      followHeavens: 'Follow Heavens',
      menu: 'Menu',
      close: 'Close',
      skip: 'Skip to content',
    },
    social: socialLabels[locale],
    legal: 'Draft content - pending legal and translation review.',
    draftNotice:
      locale === 'en'
        ? 'Content pending final approval.'
        : 'Draft translation pending professional review.',
    pages,
  };
}
