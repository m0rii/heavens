import type { AnyRouteSlug } from '@/config/routes';
import type { EnquiryType } from '@/lib/forms';
import { localeNames, type Locale } from './config';

export type ServicePageSlug = 'business' | 'technology' | 'media';

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
  form: ContactFormCopy;
  servicePages: Record<ServicePageSlug, ServicePageCopy>;
  legal: string;
  draftNotice: string;
  pages: Record<AnyRouteSlug, PageCopy>;
};

export type ServicePageCopy = {
  variant: ServicePageSlug;
  eyebrow: string;
  heroSecondaryLabel: string;
  heroStats?: Array<{ value: string; label: string }>;
  heroItems: string[];
  processSteps?: string[];
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  detailSections: Array<{
    eyebrow: string;
    heading: string;
    body: string;
    items?: Array<{ title: string; body: string }>;
    note?: string;
  }>;
  cta: {
    heading: string;
    body: string;
    label: string;
  };
};

type ContactFormCopy = {
  heading: string;
  intro: string;
  requiredNote: string;
  optional: string;
  labels: {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    enquiryType: string;
    message: string;
    privacyAcknowledgement: string;
    privacyPolicy: string;
    honeypot: string;
  };
  selectEnquiryType: string;
  enquiryTypes: Record<EnquiryType, string>;
  status: {
    idle: string;
    pending: string;
    success: string;
    failure: string;
  };
  errors: {
    summary: string;
    requiredText: string;
    email: string;
    enquiryType: string;
    message: string;
    privacy: string;
    maxLength: string;
  };
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
    heading: 'Commercial capabilities for products and markets.',
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
    heading: 'Technology for real business needs.',
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
    heading: 'Creative media for modern brands.',
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
    intro:
      'Thank you. Your enquiry has been received. We will contact you as soon as possible.',
    sections: [
      {
        title: 'Next step',
        body: 'The Heavens team will review your message and respond through the confirmed contact process.',
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
        'Heavens-ը միավորում է ավելի քան տասնամյակի առևտրային փորձը տեխնոլոգիայի, թվային հարթակների և ստեղծարար մեդիայի հետ:',
      sections: [
        {
          title: 'Հիմնված Հայաստանում։ Պատրաստ հաջորդ փուլին։',
          body: 'Ավելի քան տասը տարի Heavens LLC-ն Երևանից գործել է միջազգային առևտրի, սպառողական ապրանքների, գեղեցկության և բաշխման ոլորտներում։',
        },
        {
          title: 'Մեկ ընկերություն։ Մի քանի կարողություններ։',
          body: 'Մեր փորձը ներառում է ֆիզիկական ապրանքներ, առևտրային գործընկերություններ և ժամանակակից թվային լուծումներ։',
        },
        {
          title: 'Իրական տեղական արժեք ունեցող հարթակներ։',
          body: 'Zeghch-ը թվային հարթակ է, որն օգնում է մարդկանց գտնել ակցիաներ, առաջարկներ և տեղական բիզնեսներ Հայաստանում։ Ճշգրիտ իրավական կապը դեռ պահանջում է բիզնես հաստատում։',
        },
      ],
    },
    about: {
      title: 'Heavens LLC-ի մասին',
      description:
        'Իմացեք Heavens LLC-ի մասին՝ Երևանում հիմնված ընկերություն, որը միավորում է առևտրային փորձը և թվային հավակնությունները։',
      heading: 'Տասնամյակի փորձ։ Ապագա՝ կառուցված հավակնությամբ։',
      intro:
        'Heavens LLC-ն Երևանում հիմնված բազմաոլորտ ընկերություն է՝ առևտրի, սպառողական ապրանքների, գեղեցկության, մատակարարման, բաշխման, տեխնոլոգիայի և մեդիայի փորձով։',
      sections: [
        {
          title: 'Առաքելություն',
          body: 'Միավորել առևտրային փորձը, տեխնոլոգիան և ստեղծարարությունը՝ երկարաժամկետ արժեք ստեղծելու համար։',
        },
        {
          title: 'Տեսլական',
          body: 'Հայաստանից զարգացնել ժամանակակից բիզնեսներ և թվային արտադրանքներ՝ տեղական և միջազգային շուկաների համար։',
        },
        {
          title: 'Արժեքներ',
          body: 'Հավակնությունը, գործնական փորձը, որակը, վստահությունը և առաջընթացը ձևավորում են ընկերության հանրային ուղղությունը։',
        },
      ],
    },
    business: {
      title: 'Բիզնես | Heavens LLC',
      description:
        'Առևտրային փորձ ներմուծման, արտահանման, մատակարարման, բաշխման և ընտրված սպառողական ապրանքների ոլորտներում։',
      heading: 'Առևտրային կարողություններ ապրանքների և շուկաների համար։',
      intro:
        'Heavens-ն ունի ավելի քան տասը տարվա փորձ ներմուծման, արտահանման, մատակարարման, բաշխման և ընտրված սպառողական կատեգորիաների ոլորտներում։',
    },
    technology: {
      title: 'Տեխնոլոգիա | Heavens LLC',
      description:
        'Ծրագրային ապահովում, վեբ, մոբայլ, թվային հարթակներ և գործնական AI կարողություններ՝ իրական բիզնես կարիքների շուրջ։',
      heading: 'Տեխնոլոգիա իրական բիզնես կարիքների համար։',
      intro:
        'Heavens-ը միավորում է առևտրային փորձը և ժամանակակից արտադրանքի մշակումը՝ օգտակար ու մասշտաբավորվող թվային լուծումներ ստեղծելու համար։',
    },
    media: {
      title: 'Թվային մեդիա | Heavens LLC',
      description:
        'Թվային մեդիա, կոնտենտի արտադրություն, սոցիալական մեդիա արշավներ, վիդեո և ստեղծարար արտադրություն ժամանակակից լսարանների համար։',
      heading: 'Ստեղծարար մեդիա ժամանակակից բրենդների համար։',
      intro:
        'Heavens-ը զարգանում է թվային կոնտենտի, սոցիալական մեդիայի, լուսանկարչության, վիդեոյի և հարթակային մեդիա արտադրության ուղղությամբ։',
    },
    brands: {
      title: 'Բրենդներ | Heavens LLC',
      description:
        'Heavens-ի հետ կապված բրենդներն ու հարթակները պահանջում են հստակ իրավական և բիզնես հաստատում՝ նախքան վերջնական հայտարարությունները։',
      heading: 'Գործնական շուկայական արժեք ունեցող բրենդներ և հարթակներ։',
      intro:
        'Heavens-ը բիզնես նախաձեռնությունները ներկայացնում է զգուշությամբ՝ իրավական հարաբերությունները հաստատելուց հետո միայն։',
      sections: [
        {
          title: 'Zeghch',
          body: 'Zeghch-ը ներկայացվում է զգուշավոր ձևակերպմամբ, մինչև ճշգրիտ կապը հաստատվի։',
        },
        {
          title: 'Ապագա նախաձեռնություններ',
          body: 'Լրացուցիչ բրենդներն ու հարթակները կավելացվեն միայն բիզնես հաստատումից հետո։',
        },
      ],
    },
    'brands/zeghch': {
      title: 'Zeghch | Heavens LLC',
      description:
        'Zeghch-ը թվային հարթակ է Հայաստանում ակցիաներ, առաջարկներ և տեղական բիզնեսներ գտնելու համար։',
      heading: 'Zeghch',
      intro:
        'Zeghch-ը թվային հարթակ է, որն օգնում է մարդկանց գտնել ակցիաներ, առաջարկներ և տեղական բիզնեսներ Հայաստանում։',
      sections: [
        {
          title: 'Տեղական բացահայտում',
          body: 'Հարթակը կենտրոնացած է առաջարկների, ակցիաների և տեղական բիզնեսների տեսանելիության վրա։',
        },
        {
          title: 'Կապի կարգավիճակ',
          body: 'Ճշգրիտ սեփականության կամ գործառնական կապը պետք է հաստատվի մինչև ավելի ուժեղ իրավական հայտարարությունների հրապարակումը։',
        },
      ],
    },
    contact: {
      title: 'Կապ Heavens LLC-ի հետ',
      description:
        'Սկսեք խոսակցություն Heavens LLC-ի հետ բիզնեսի, տեխնոլոգիայի, գործընկերությունների կամ մեդիա հնարավորությունների մասին։',
      heading: 'Սկսենք խոսակցություն։',
      intro:
        'Մենք բաց ենք բիզնեսների, մատակարարների, տեխնոլոգիական գործընկերների, ստեղծարարների և ներդրողների հետ զրույցների համար։',
      sections: [
        {
          title: 'Պաշտոնական էլ. հասցե',
          body: 'Ընկերության պաշտոնական էլ. հասցեն կցուցադրվի փոստարկղի հաստատումից հետո։',
        },
      ],
    },
    'contact/success': {
      title: 'Հաղորդագրությունը ստացվել է | Heavens LLC',
      description: 'Ձեր հաղորդագրությունը ստացվել է Heavens LLC-ի կողմից։',
      heading: 'Հաղորդագրությունը ստացվել է։',
      intro:
        'Շնորհակալություն։ Ձեր հարցումը ստացվել է։ Մենք կապ կհաստատենք հնարավորինս շուտ։',
      sections: [
        {
          title: 'Հաջորդ քայլը',
          body: 'Heavens-ի թիմը կդիտարկի ձեր հաղորդագրությունը և կպատասխանի հաստատված կապի գործընթացով։',
        },
      ],
    },
    legal: {
      title: 'Իրավական տեղեկություն | Heavens LLC',
      description:
        'Heavens LLC-ի իրավական տեղեկությունները։ Նախագծային բովանդակությունը պահանջում է իրավական վերանայում մինչև արտադրական հաստատումը։',
      heading: 'Իրավական տեղեկություն։',
      intro:
        'Այս էջը պարունակում է իրականացմանը համապատասխան իրավական տեղեկություն և պահանջում է իրավական վերանայում մինչև գործարկումը։',
      sections: [
        {
          title: 'Ընկերություն',
          body: 'Heavens LLC, գրանցման համար՝ 50456518, ՀՎՀՀ՝ 02660767, գրանցված հասցե՝ 40 Սայաթ-Նովա պողոտա, Երևան, Հայաստան։',
        },
        {
          title: 'Վերանայման կարգավիճակ',
          body: 'Այս իրավական բովանդակությունը դեռ վերջնական իրավական հաստատում չի ստացել։',
        },
      ],
    },
    privacy: {
      title: 'Գաղտնիության քաղաքականություն | Heavens LLC',
      description:
        'Գաղտնիության նախագծային տեղեկություն՝ ընթացիկ ստատիկ կայքի և Netlify Forms մշակման մոդելի մասին։',
      heading: 'Գաղտնիության քաղաքականություն։',
      intro:
        'Այս նախագիծը բացատրում է ընթացիկ իրականացումը և պետք է վերջնականացվի իրավական, էլ. փոստի և Netlify պահպանման վերանայումից հետո։',
      sections: [
        {
          title: 'Կապի ձև',
          body: 'Կապի ձևի տեղեկությունը նախատեսված է մշակել Netlify Forms-ի միջոցով, որպեսզի Heavens-ը կարողանա դիտարկել և պատասխանել հարցումներին։',
        },
        {
          title: 'Վերլուծություն',
          body: 'Սկզբնական մշակման փուլում կամընտիր վերլուծություն չի բեռնվում։',
        },
      ],
    },
    cookies: {
      title: 'Cookie-ների քաղաքականություն | Heavens LLC',
      description:
        'Heavens կայքի սկզբնական իրականացման համար cookie-ների նախագծային քաղաքականություն։',
      heading: 'Cookie-ների քաղաքականություն։',
      intro:
        'Սկզբնական կայքը օգտագործում է միայն անհրաժեշտ նախապատվության պահպանում և չի բեռնում կամընտիր վերլուծություն։',
      sections: [
        {
          title: 'Լեզվի նախապատվություն',
          body: 'Գլխավոր լեզվի ընտրիչը կարող է օգտագործել տեղային պահոց՝ այցելուի ընտրված լեզուն հիշելու համար։',
        },
        {
          title: 'Համաձայնության կարգավիճակ',
          body: 'Կամընտիր վերլուծությունը պահանջում է հետագա փաստաթղթավորված մատակարարի և համաձայնության որոշում։',
        },
      ],
    },
    terms: {
      title: 'Օգտագործման պայմաններ | Heavens LLC',
      description: 'Heavens LLC կայքի օգտագործման նախագծային պայմաններ։',
      heading: 'Օգտագործման պայմաններ։',
      intro:
        'Այս պայմանները իրականացման նախագծեր են և պահանջում են իրավական վերանայում մինչև գործարկումը։',
      sections: [
        {
          title: 'Կայքի տեղեկություն',
          body: 'Կայքի բովանդակությունը տրամադրվում է ընդհանուր կորպորատիվ տեղեկության և բիզնես հարցումների նպատակով։',
        },
        {
          title: 'Չհաստատված հայտարարություններ չկան',
          body: 'Ապրանքները, ծառայությունները և հասանելիությունը ենթակա են հաստատման և կիրառելի պահանջների։',
        },
      ],
    },
  },
  ru: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens объединяет более чем десятилетний коммерческий опыт с технологиями, цифровыми платформами и медиа.',
      sections: [
        {
          title: 'Основано в Армении. Готово к следующему этапу.',
          body: 'Более десяти лет Heavens LLC работает из Еревана в сферах международной торговли, потребительских товаров, красоты и дистрибуции.',
        },
        {
          title: 'Одна компания. Несколько направлений.',
          body: 'Наш опыт охватывает физические товары, коммерческие партнерства и современные цифровые решения.',
        },
        {
          title: 'Платформы с реальной локальной ценностью.',
          body: 'Zeghch — цифровая платформа, которая помогает людям находить акции, предложения и местные бизнесы в Армении. Точная юридическая связь требует бизнес-подтверждения.',
        },
      ],
    },
    about: {
      title: 'О Heavens LLC',
      description:
        'Узнайте о Heavens LLC, ереванской компании, объединяющей коммерческий опыт и цифровые амбиции.',
      heading: 'Десятилетие опыта. Будущее, построенное на амбиции.',
      intro:
        'Heavens LLC — диверсифицированная компания из Еревана, Армения, с опытом в торговле, потребительских товарах, красоте, поиске продукции, дистрибуции, технологиях и медиа.',
      sections: [
        {
          title: 'Миссия',
          body: 'Соединять коммерческий опыт, технологии и креативность так, чтобы создавать долгосрочную ценность.',
        },
        {
          title: 'Видение',
          body: 'Создавать современные бизнесы и цифровые продукты из Армении для местных и международных рынков.',
        },
        {
          title: 'Ценности',
          body: 'Амбиция, практический опыт, качество, доверие и прогресс направляют публичное развитие компании.',
        },
      ],
    },
    business: {
      title: 'Бизнес | Heavens LLC',
      description:
        'Коммерческий опыт в импорте, экспорте, поиске продукции, дистрибуции и отдельных категориях потребительских товаров.',
      heading: 'Коммерческие возможности для продуктов и рынков.',
      intro:
        'Heavens имеет более десяти лет опыта в импорте, экспорте, поиске продукции, дистрибуции и отдельных потребительских категориях.',
    },
    technology: {
      title: 'Технологии | Heavens LLC',
      description:
        'Программное обеспечение, веб, мобильные продукты, цифровые платформы и практические AI-возможности вокруг реальных бизнес-нужд.',
      heading: 'Технологии для реальных бизнес-нужд.',
      intro:
        'Heavens объединяет коммерческий опыт с современным продуктовым развитием, чтобы создавать полезные и масштабируемые цифровые решения.',
    },
    media: {
      title: 'Цифровые медиа | Heavens LLC',
      description:
        'Цифровые медиа, производство контента, кампании в социальных сетях, видео и креативное производство для современных аудиторий.',
      heading: 'Креативные медиа для современных брендов.',
      intro:
        'Heavens развивается в направлении цифрового контента, социальных сетей, фотографии, видео и медиа-производства для платформ.',
    },
    brands: {
      title: 'Бренды | Heavens LLC',
      description:
        'Бренды и платформы, связанные с Heavens, требуют четкого юридического и бизнес-подтверждения перед финальными заявлениями.',
      heading: 'Бренды и платформы с практической рыночной ценностью.',
      intro:
        'Heavens аккуратно развивает и представляет бизнес-инициативы, подтверждая юридические отношения до финальных публичных формулировок.',
      sections: [
        {
          title: 'Zeghch',
          body: 'Zeghch представлен осторожной формулировкой до подтверждения точной связи.',
        },
        {
          title: 'Будущие инициативы',
          body: 'Дополнительные бренды и платформы будут добавлены только после бизнес-подтверждения.',
        },
      ],
    },
    'brands/zeghch': {
      title: 'Zeghch | Heavens LLC',
      description:
        'Zeghch — цифровая платформа для поиска акций, предложений и местных бизнесов в Армении.',
      heading: 'Zeghch',
      intro:
        'Zeghch — цифровая платформа, которая помогает людям находить акции, предложения и местные бизнесы в Армении.',
      sections: [
        {
          title: 'Локальный поиск',
          body: 'Платформа фокусируется на видимости предложений, акций и местных бизнесов.',
        },
        {
          title: 'Статус связи',
          body: 'Точная собственническая или операционная связь должна быть подтверждена до публикации более сильных юридических заявлений.',
        },
      ],
    },
    contact: {
      title: 'Связаться с Heavens LLC',
      description:
        'Начните разговор с Heavens LLC о бизнесе, технологиях, партнерствах или медиа-возможностях.',
      heading: 'Начнем разговор.',
      intro:
        'Мы открыты к разговору с бизнесами, поставщиками, технологическими партнерами, авторами и инвесторами.',
      sections: [
        {
          title: 'Официальная электронная почта',
          body: 'Официальный адрес электронной почты компании будет показан после проверки почтового ящика.',
        },
      ],
    },
    'contact/success': {
      title: 'Сообщение получено | Heavens LLC',
      description: 'Ваше сообщение получено Heavens LLC.',
      heading: 'Сообщение получено.',
      intro:
        'Спасибо. Ваш запрос получен. Мы свяжемся с вами как можно скорее.',
      sections: [
        {
          title: 'Следующий шаг',
          body: 'Команда Heavens рассмотрит ваше сообщение и ответит через подтвержденный процесс связи.',
        },
      ],
    },
    legal: {
      title: 'Юридическая информация | Heavens LLC',
      description:
        'Юридическая информация о Heavens LLC. Черновой контент требует юридической проверки перед производственным утверждением.',
      heading: 'Юридическая информация.',
      intro:
        'Эта страница содержит юридическую информацию, соответствующую текущей реализации, и требует юридической проверки перед запуском.',
      sections: [
        {
          title: 'Компания',
          body: 'Heavens LLC, регистрационный номер 50456518, налоговый код 02660767, зарегистрированный адрес: проспект Саят-Нова 40, Ереван, Армения.',
        },
        {
          title: 'Статус проверки',
          body: 'Этот юридический контент еще не получил финальное юридическое одобрение.',
        },
      ],
    },
    privacy: {
      title: 'Политика конфиденциальности | Heavens LLC',
      description:
        'Черновая информация о конфиденциальности для текущего статического сайта и модели обработки Netlify Forms.',
      heading: 'Политика конфиденциальности.',
      intro:
        'Этот черновик объясняет текущую реализацию и должен быть финализирован после юридической проверки, проверки электронной почты и хранения Netlify.',
      sections: [
        {
          title: 'Контактная форма',
          body: 'Информация из контактной формы предназначена для обработки через Netlify Forms, чтобы Heavens мог рассматривать запросы и отвечать на них.',
        },
        {
          title: 'Аналитика',
          body: 'На начальном этапе разработки дополнительная аналитика не загружается.',
        },
      ],
    },
    cookies: {
      title: 'Политика cookie | Heavens LLC',
      description:
        'Черновая политика cookie для начальной реализации сайта Heavens.',
      heading: 'Политика cookie.',
      intro:
        'Начальная версия сайта использует только необходимое сохранение предпочтений и не загружает дополнительную аналитику.',
      sections: [
        {
          title: 'Языковое предпочтение',
          body: 'Корневой выбор языка может использовать локальное хранилище, чтобы запомнить выбранный посетителем язык.',
        },
        {
          title: 'Статус согласия',
          body: 'Дополнительная аналитика требует последующего документированного решения о провайдере и согласии.',
        },
      ],
    },
    terms: {
      title: 'Условия использования | Heavens LLC',
      description: 'Черновые условия использования сайта Heavens LLC.',
      heading: 'Условия использования.',
      intro:
        'Эти условия являются черновиками реализации и требуют юридической проверки перед запуском.',
      sections: [
        {
          title: 'Информация сайта',
          body: 'Контент сайта предоставляется для общей корпоративной информации и бизнес-запросов.',
        },
        {
          title: 'Без неподтвержденных заявлений',
          body: 'Продукты, услуги и доступность подлежат проверке и применимым требованиям.',
        },
      ],
    },
  },
  de: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens verbindet mehr als ein Jahrzehnt kommerzieller Erfahrung mit Technologie, digitalen Plattformen und Medien.',
      sections: [
        {
          title: 'In Armenien etabliert. Bereit für das, was kommt.',
          body: 'Seit mehr als zehn Jahren ist Heavens LLC von Jerewan aus in internationalem Handel, Konsumgütern, Beauty und Distribution tätig.',
        },
        {
          title: 'Ein Unternehmen. Mehrere Fähigkeiten.',
          body: 'Unsere Erfahrung umfasst physische Produkte, kommerzielle Partnerschaften und moderne digitale Lösungen.',
        },
        {
          title: 'Plattformen mit realem lokalen Wert.',
          body: 'Zeghch ist eine digitale Plattform, die Menschen hilft, Aktionen, Angebote und lokale Unternehmen in Armenien zu entdecken. Die genaue rechtliche Beziehung erfordert eine geschäftliche Bestätigung.',
        },
      ],
    },
    about: {
      title: 'Über Heavens LLC',
      description:
        'Erfahren Sie mehr über Heavens LLC, ein Unternehmen aus Jerewan, das kommerzielle Erfahrung mit digitalem Anspruch verbindet.',
      heading: 'Ein Jahrzehnt Erfahrung. Eine Zukunft mit Ambition.',
      intro:
        'Heavens LLC ist ein diversifiziertes Unternehmen mit Sitz in Jerewan, Armenien, mit Erfahrung in Handel, Konsumgütern, Beauty, Beschaffung, Distribution, Technologie und Medien.',
      sections: [
        {
          title: 'Mission',
          body: 'Kommerzielle Erfahrung, Technologie und Kreativität so zu verbinden, dass nachhaltiger Wert entsteht.',
        },
        {
          title: 'Vision',
          body: 'Moderne Unternehmen und digitale Produkte aus Armenien für lokale und internationale Märkte aufzubauen.',
        },
        {
          title: 'Werte',
          body: 'Ambition, praktische Erfahrung, Qualität, Vertrauen und Fortschritt prägen die öffentliche Ausrichtung des Unternehmens.',
        },
      ],
    },
    business: {
      title: 'Business | Heavens LLC',
      description:
        'Kommerzielle Erfahrung in Import, Export, Beschaffung, Distribution und ausgewählten Konsumgüterkategorien.',
      heading: 'Kommerzielle Fähigkeiten für Produkte und Märkte.',
      intro:
        'Heavens verfügt über mehr als zehn Jahre Erfahrung in Import, Export, Beschaffung, Distribution und ausgewählten Konsumgüterkategorien.',
    },
    technology: {
      title: 'Technologie | Heavens LLC',
      description:
        'Software, Web, Mobile, digitale Plattformen und praktische KI-Fähigkeiten rund um echte Geschäftsanforderungen.',
      heading: 'Technologie für echte Geschäftsanforderungen.',
      intro:
        'Heavens verbindet kommerzielle Erfahrung mit moderner Produktentwicklung, um nützliche und skalierbare digitale Lösungen zu schaffen.',
    },
    media: {
      title: 'Digitale Medien | Heavens LLC',
      description:
        'Digitale Medien, Content-Produktion, Social-Media-Kampagnen, Video und kreative Produktion für moderne Zielgruppen.',
      heading: 'Kreative Medien für moderne Marken.',
      intro:
        'Heavens erweitert sich in Richtung digitaler Inhalte, Social Media, Fotografie, Video und plattformorientierter Medienproduktion.',
    },
    brands: {
      title: 'Marken | Heavens LLC',
      description:
        'Marken und Plattformen im Zusammenhang mit Heavens benötigen klare rechtliche und geschäftliche Bestätigung vor endgültigen Aussagen.',
      heading: 'Marken und Plattformen mit praktischem Marktwert.',
      intro:
        'Heavens entwickelt und präsentiert Geschäftsinitiativen sorgfältig, wobei rechtliche Beziehungen vor finalen öffentlichen Aussagen bestätigt werden.',
      sections: [
        {
          title: 'Zeghch',
          body: 'Zeghch wird mit vorsichtiger Formulierung dargestellt, bis die genaue Beziehung bestätigt ist.',
        },
        {
          title: 'Zukünftige Initiativen',
          body: 'Weitere Marken und Plattformen werden erst nach geschäftlicher Freigabe ergänzt.',
        },
      ],
    },
    'brands/zeghch': {
      title: 'Zeghch | Heavens LLC',
      description:
        'Zeghch ist eine digitale Plattform zum Entdecken von Aktionen, Angeboten und lokalen Unternehmen in Armenien.',
      heading: 'Zeghch',
      intro:
        'Zeghch ist eine digitale Plattform, die Menschen hilft, Aktionen, Angebote und lokale Unternehmen in Armenien zu entdecken.',
      sections: [
        {
          title: 'Lokale Entdeckung',
          body: 'Die Plattform konzentriert sich auf Sichtbarkeit für Angebote, Aktionen und lokale Unternehmen.',
        },
        {
          title: 'Beziehungsstatus',
          body: 'Die genaue Eigentums- oder Betreiberbeziehung muss bestätigt werden, bevor stärkere rechtliche Aussagen veröffentlicht werden.',
        },
      ],
    },
    contact: {
      title: 'Kontakt zu Heavens LLC',
      description:
        'Beginnen Sie ein Gespräch mit Heavens LLC über Business, Technologie, Partnerschaften oder Medienmöglichkeiten.',
      heading: 'Beginnen wir ein Gespräch.',
      intro:
        'Wir freuen uns über Gespräche mit Unternehmen, Lieferanten, Technologiepartnern, Kreativen und Investoren.',
      sections: [
        {
          title: 'Offizielle E-Mail',
          body: 'Die offizielle Unternehmens-E-Mail wird nach der Postfachprüfung angezeigt.',
        },
      ],
    },
    'contact/success': {
      title: 'Nachricht erhalten | Heavens LLC',
      description: 'Ihre Nachricht wurde von Heavens LLC erhalten.',
      heading: 'Nachricht erhalten.',
      intro:
        'Vielen Dank. Ihre Anfrage wurde erhalten. Wir melden uns so bald wie möglich bei Ihnen.',
      sections: [
        {
          title: 'Nächster Schritt',
          body: 'Das Heavens-Team prüft Ihre Nachricht und antwortet über den bestätigten Kontaktprozess.',
        },
      ],
    },
    legal: {
      title: 'Rechtliche Informationen | Heavens LLC',
      description:
        'Rechtliche Unternehmensinformationen für Heavens LLC. Entwurfsinhalte benötigen rechtliche Prüfung vor Produktionsfreigabe.',
      heading: 'Rechtliche Informationen.',
      intro:
        'Diese Seite enthält implementierungsnahe rechtliche Informationen und benötigt vor dem Launch eine rechtliche Prüfung.',
      sections: [
        {
          title: 'Unternehmen',
          body: 'Heavens LLC, Registrierungsnummer 50456518, Steuernummer 02660767, registrierte Adresse: 40 Sayat-Nova Avenue, Jerewan, Armenien.',
        },
        {
          title: 'Prüfstatus',
          body: 'Dieser rechtliche Inhalt hat noch keine finale rechtliche Freigabe erhalten.',
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung | Heavens LLC',
      description:
        'Entwurf zur Datenschutzinformation für die aktuelle statische Website und das Netlify-Forms-Verarbeitungsmodell.',
      heading: 'Datenschutzerklärung.',
      intro:
        'Dieser Entwurf erklärt die aktuelle Implementierung und muss nach rechtlicher Prüfung, E-Mail-Prüfung und Netlify-Aufbewahrungsprüfung finalisiert werden.',
      sections: [
        {
          title: 'Kontaktformular',
          body: 'Informationen aus dem Kontaktformular sollen über Netlify Forms verarbeitet werden, damit Heavens Anfragen prüfen und beantworten kann.',
        },
        {
          title: 'Analytik',
          body: 'In der ersten Entwicklung wird keine optionale Analytik geladen.',
        },
      ],
    },
    cookies: {
      title: 'Cookie-Richtlinie | Heavens LLC',
      description:
        'Entwurf einer Cookie-Richtlinie für die erste Implementierung der Heavens-Website.',
      heading: 'Cookie-Richtlinie.',
      intro:
        'Die erste Website nutzt nur notwendige Präferenzspeicherung und lädt keine optionale Analytik.',
      sections: [
        {
          title: 'Sprachpräferenz',
          body: 'Die Sprachauswahl auf der Startweiterleitung kann lokalen Speicher verwenden, um die ausgewählte Sprache eines Besuchers zu merken.',
        },
        {
          title: 'Einwilligungsstatus',
          body: 'Optionale Analytik erfordert später eine dokumentierte Anbieter- und Einwilligungsentscheidung.',
        },
      ],
    },
    terms: {
      title: 'Nutzungsbedingungen | Heavens LLC',
      description:
        'Entwurf der Nutzungsbedingungen für die Website von Heavens LLC.',
      heading: 'Nutzungsbedingungen.',
      intro:
        'Diese Bedingungen sind Implementierungsentwürfe und benötigen vor dem Launch eine rechtliche Prüfung.',
      sections: [
        {
          title: 'Website-Informationen',
          body: 'Website-Inhalte werden für allgemeine Unternehmensinformationen und geschäftliche Anfragen bereitgestellt.',
        },
        {
          title: 'Keine unbestätigten Aussagen',
          body: 'Produkte, Dienstleistungen und Verfügbarkeit unterliegen Prüfung und geltenden Anforderungen.',
        },
      ],
    },
  },
  fa: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'Heavens بیش از یک دهه تجربه تجاری را با فناوری، پلتفرم‌های دیجیتال و رسانه خلاق پیوند می‌دهد.',
      sections: [
        {
          title: 'ریشه‌دار در ارمنستان. آماده برای مرحله بعد.',
          body: 'Heavens LLC بیش از ده سال از ایروان در حوزه تجارت بین‌المللی، کالاهای مصرفی، زیبایی و توزیع فعالیت کرده است.',
        },
        {
          title: 'یک شرکت. چندین توانمندی.',
          body: 'تجربه ما کالاهای فیزیکی، همکاری‌های تجاری و راهکارهای دیجیتال مدرن را در بر می‌گیرد.',
        },
        {
          title: 'ساخت پلتفرم‌هایی با ارزش واقعی محلی.',
          body: 'Zeghch یک پلتفرم دیجیتال است که به مردم کمک می‌کند تخفیف‌ها، پیشنهادها و کسب‌وکارهای محلی در ارمنستان را پیدا کنند. رابطه حقوقی دقیق نیازمند تأیید تجاری است.',
        },
      ],
    },
    about: {
      title: 'درباره Heavens LLC',
      description:
        'با Heavens LLC آشنا شوید؛ شرکتی مستقر در ایروان که تجربه تجاری را با جاه‌طلبی دیجیتال پیوند می‌دهد.',
      heading: 'یک دهه تجربه. آینده‌ای با جاه‌طلبی.',
      intro:
        'Heavens LLC شرکتی چندحوزه‌ای مستقر در ایروان، ارمنستان است و در تجارت، کالاهای مصرفی، زیبایی، تأمین، توزیع، فناوری و رسانه تجربه دارد.',
      sections: [
        {
          title: 'ماموریت',
          body: 'پیوند دادن تجربه تجاری، فناوری و خلاقیت به شکلی که ارزش پایدار ایجاد کند.',
        },
        {
          title: 'چشم‌انداز',
          body: 'ساخت کسب‌وکارها و محصولات دیجیتال مدرن از ارمنستان برای بازارهای محلی و بین‌المللی.',
        },
        {
          title: 'ارزش‌ها',
          body: 'جاه‌طلبی، تجربه عملی، کیفیت، اعتماد و پیشرفت مسیر عمومی شرکت را هدایت می‌کنند.',
        },
      ],
    },
    business: {
      title: 'تجارت | Heavens LLC',
      description:
        'تجربه تجاری در واردات، صادرات، تأمین، توزیع و دسته‌های منتخب کالاهای مصرفی.',
      heading: 'توانمندی‌های تجاری برای محصولات و بازارها.',
      intro:
        'Heavens بیش از ده سال تجربه در واردات، صادرات، تأمین، توزیع و دسته‌های منتخب کالاهای مصرفی دارد.',
    },
    technology: {
      title: 'فناوری | Heavens LLC',
      description:
        'نرم‌افزار، وب، موبایل، پلتفرم‌های دیجیتال و توانمندی‌های عملی هوش مصنوعی بر اساس نیازهای واقعی کسب‌وکار.',
      heading: 'فناوری برای نیازهای واقعی کسب‌وکار.',
      intro:
        'Heavens تجربه تجاری را با توسعه محصول مدرن ترکیب می‌کند تا راهکارهای دیجیتال مفید و مقیاس‌پذیر ایجاد کند.',
    },
    media: {
      title: 'رسانه دیجیتال | Heavens LLC',
      description:
        'رسانه دیجیتال، تولید محتوا، کمپین‌های شبکه‌های اجتماعی، ویدئو و تولید خلاق برای مخاطبان مدرن.',
      heading: 'رسانه خلاق برای برندهای مدرن.',
      intro:
        'Heavens در حال گسترش به حوزه محتوای دیجیتال، شبکه‌های اجتماعی، عکاسی، ویدئو و تولید رسانه پلتفرم‌محور است.',
    },
    brands: {
      title: 'برندها | Heavens LLC',
      description:
        'برندها و پلتفرم‌های مرتبط با Heavens پیش از ادعاهای نهایی به تأیید روشن حقوقی و تجاری نیاز دارند.',
      heading: 'برندها و پلتفرم‌هایی با ارزش عملی بازار.',
      intro:
        'Heavens ابتکارهای تجاری را با دقت توسعه و معرفی می‌کند و پیش از نهایی شدن ادعاهای عمومی، روابط حقوقی را تأیید می‌کند.',
      sections: [
        {
          title: 'Zeghch',
          body: 'Zeghch تا زمان تأیید رابطه دقیق، با بیان محتاطانه معرفی می‌شود.',
        },
        {
          title: 'ابتکارهای آینده',
          body: 'برندها و پلتفرم‌های بعدی تنها پس از تأیید تجاری اضافه خواهند شد.',
        },
      ],
    },
    'brands/zeghch': {
      title: 'Zeghch | Heavens LLC',
      description:
        'Zeghch یک پلتفرم دیجیتال برای کشف تخفیف‌ها، پیشنهادها و کسب‌وکارهای محلی در ارمنستان است.',
      heading: 'Zeghch',
      intro:
        'Zeghch یک پلتفرم دیجیتال است که به مردم کمک می‌کند تخفیف‌ها، پیشنهادها و کسب‌وکارهای محلی در ارمنستان را پیدا کنند.',
      sections: [
        {
          title: 'کشف محلی',
          body: 'این پلتفرم بر دیده‌شدن پیشنهادها، تخفیف‌ها و کسب‌وکارهای محلی تمرکز دارد.',
        },
        {
          title: 'وضعیت رابطه',
          body: 'رابطه دقیق مالکیت یا بهره‌برداری باید پیش از انتشار ادعاهای حقوقی قوی‌تر تأیید شود.',
        },
      ],
    },
    contact: {
      title: 'تماس با Heavens LLC',
      description:
        'گفت‌وگویی با Heavens LLC درباره تجارت، فناوری، همکاری‌ها یا فرصت‌های رسانه‌ای آغاز کنید.',
      heading: 'گفت‌وگو را آغاز کنیم.',
      intro:
        'ما از گفت‌وگو با کسب‌وکارها، تأمین‌کنندگان، شرکای فناوری، خالقان و سرمایه‌گذاران استقبال می‌کنیم.',
      sections: [
        {
          title: 'ایمیل رسمی',
          body: 'ایمیل رسمی شرکت پس از تأیید صندوق پستی نمایش داده خواهد شد.',
        },
      ],
    },
    'contact/success': {
      title: 'پیام دریافت شد | Heavens LLC',
      description: 'پیام شما توسط Heavens LLC دریافت شد.',
      heading: 'پیام دریافت شد.',
      intro:
        'متشکریم. درخواست شما دریافت شد. در اسرع وقت با شما تماس خواهیم گرفت.',
      sections: [
        {
          title: 'گام بعدی',
          body: 'تیم Heavens پیام شما را بررسی می‌کند و از طریق فرایند تماس تأییدشده پاسخ خواهد داد.',
        },
      ],
    },
    legal: {
      title: 'اطلاعات حقوقی | Heavens LLC',
      description:
        'اطلاعات حقوقی شرکت Heavens LLC. محتوای پیش‌نویس پیش از تأیید تولیدی نیازمند بررسی حقوقی است.',
      heading: 'اطلاعات حقوقی.',
      intro:
        'این صفحه شامل اطلاعات حقوقی هماهنگ با پیاده‌سازی فعلی است و پیش از راه‌اندازی نیازمند بررسی حقوقی است.',
      sections: [
        {
          title: 'شرکت',
          body: 'Heavens LLC، شماره ثبت 50456518، کد مالیاتی 02660767، نشانی ثبت‌شده: خیابان سایات‌نووا 40، ایروان، ارمنستان.',
        },
        {
          title: 'وضعیت بررسی',
          body: 'این محتوای حقوقی هنوز تأیید نهایی حقوقی دریافت نکرده است.',
        },
      ],
    },
    privacy: {
      title: 'سیاست حریم خصوصی | Heavens LLC',
      description:
        'اطلاعات پیش‌نویس حریم خصوصی درباره وب‌سایت استاتیک فعلی و مدل پردازش Netlify Forms.',
      heading: 'سیاست حریم خصوصی.',
      intro:
        'این پیش‌نویس پیاده‌سازی فعلی را توضیح می‌دهد و باید پس از بررسی حقوقی، ایمیل و نگهداری Netlify نهایی شود.',
      sections: [
        {
          title: 'فرم تماس',
          body: 'اطلاعات فرم تماس قرار است از طریق Netlify Forms پردازش شود تا Heavens بتواند درخواست‌ها را بررسی و پاسخ دهد.',
        },
        {
          title: 'تحلیل‌گرها',
          body: 'در مرحله اولیه توسعه، هیچ تحلیل‌گر اختیاری بارگذاری نمی‌شود.',
        },
      ],
    },
    cookies: {
      title: 'سیاست کوکی | Heavens LLC',
      description: 'پیش‌نویس سیاست کوکی برای پیاده‌سازی اولیه وب‌سایت Heavens.',
      heading: 'سیاست کوکی.',
      intro:
        'وب‌سایت اولیه فقط از ذخیره‌سازی ضروری ترجیح‌ها استفاده می‌کند و تحلیل‌گر اختیاری بارگذاری نمی‌کند.',
      sections: [
        {
          title: 'ترجیح زبان',
          body: 'انتخاب‌گر زبان ریشه ممکن است از ذخیره‌سازی محلی برای یادآوری زبان انتخاب‌شده بازدیدکننده استفاده کند.',
        },
        {
          title: 'وضعیت رضایت',
          body: 'تحلیل‌گر اختیاری نیازمند تصمیم مستند بعدی درباره ارائه‌دهنده و رضایت است.',
        },
      ],
    },
    terms: {
      title: 'شرایط استفاده | Heavens LLC',
      description: 'پیش‌نویس شرایط استفاده از وب‌سایت Heavens LLC.',
      heading: 'شرایط استفاده.',
      intro:
        'این شرایط پیش‌نویس‌های پیاده‌سازی هستند و پیش از راه‌اندازی نیازمند بررسی حقوقی‌اند.',
      sections: [
        {
          title: 'اطلاعات وب‌سایت',
          body: 'محتوای وب‌سایت برای اطلاعات عمومی شرکتی و درخواست‌های تجاری ارائه می‌شود.',
        },
        {
          title: 'بدون ادعاهای تأییدنشده',
          body: 'محصولات، خدمات و دسترسی مشمول تأیید و الزامات قابل اجرا هستند.',
        },
      ],
    },
  },
  ar: {
    '': {
      heading: 'Live the Dream.',
      intro:
        'تجمع Heavens بين أكثر من عقد من الخبرة التجارية والتقنية والمنصات الرقمية والإعلام الإبداعي.',
      sections: [
        {
          title: 'راسخة في أرمينيا. جاهزة لما يأتي بعد ذلك.',
          body: 'تعمل Heavens LLC من يريفان منذ أكثر من عشر سنوات في التجارة الدولية والسلع الاستهلاكية والجمال والتوزيع.',
        },
        {
          title: 'شركة واحدة. قدرات متعددة.',
          body: 'تمتد خبرتنا عبر المنتجات المادية والشراكات التجارية والحلول الرقمية الحديثة.',
        },
        {
          title: 'بناء منصات ذات قيمة محلية حقيقية.',
          body: 'Zeghch منصة رقمية تساعد الناس على اكتشاف العروض والخصومات والأعمال المحلية في أرمينيا. العلاقة القانونية الدقيقة تتطلب تأكيدا تجاريا.',
        },
      ],
    },
    about: {
      title: 'حول Heavens LLC',
      description:
        'تعرف على Heavens LLC، شركة مقرها يريفان تجمع بين الخبرة التجارية والطموح الرقمي.',
      heading: 'عقد من الخبرة. ومستقبل تقوده الطموحات.',
      intro:
        'Heavens LLC شركة متعددة المجالات مقرها يريفان، أرمينيا، ولديها خبرة في التجارة والسلع الاستهلاكية والجمال والتوريد والتوزيع والتقنية والإعلام.',
      sections: [
        {
          title: 'الرسالة',
          body: 'ربط الخبرة التجارية والتقنية والإبداع بطرق تخلق قيمة مستدامة.',
        },
        {
          title: 'الرؤية',
          body: 'بناء أعمال ومنتجات رقمية حديثة تنطلق من أرمينيا للأسواق المحلية والدولية.',
        },
        {
          title: 'القيم',
          body: 'الطموح والخبرة العملية والجودة والثقة والتقدم توجه المسار العام للشركة.',
        },
      ],
    },
    business: {
      title: 'الأعمال | Heavens LLC',
      description:
        'خبرة تجارية في الاستيراد والتصدير والتوريد والتوزيع وفئات مختارة من السلع الاستهلاكية.',
      heading: 'قدرات تجارية للمنتجات والأسواق.',
      intro:
        'تمتلك Heavens أكثر من عشر سنوات من الخبرة في الاستيراد والتصدير والتوريد والتوزيع وفئات مختارة من السلع الاستهلاكية.',
    },
    technology: {
      title: 'التقنية | Heavens LLC',
      description:
        'برمجيات وويب وموبايل ومنصات رقمية وقدرات عملية في الذكاء الاصطناعي حول احتياجات أعمال حقيقية.',
      heading: 'تقنية لاحتياجات أعمال حقيقية.',
      intro:
        'تجمع Heavens بين الخبرة التجارية وتطوير المنتجات الحديثة لإنشاء حلول رقمية مفيدة وقابلة للتوسع.',
    },
    media: {
      title: 'الإعلام الرقمي | Heavens LLC',
      description:
        'إعلام رقمي وإنتاج محتوى وحملات تواصل اجتماعي وفيديو وإنتاج إبداعي لجماهير حديثة.',
      heading: 'إعلام إبداعي للعلامات الحديثة.',
      intro:
        'تتوسع Heavens في المحتوى الرقمي ووسائل التواصل الاجتماعي والتصوير والفيديو والإنتاج الإعلامي الموجه للمنصات.',
    },
    brands: {
      title: 'العلامات | Heavens LLC',
      description:
        'العلامات والمنصات المرتبطة بـ Heavens تحتاج إلى تحقق قانوني وتجاري واضح قبل الادعاءات النهائية.',
      heading: 'علامات ومنصات ذات قيمة سوقية عملية.',
      intro:
        'تطور Heavens مبادرات الأعمال وتقدمها بعناية، مع تأكيد العلاقات القانونية قبل اعتماد الادعاءات العامة النهائية.',
      sections: [
        {
          title: 'Zeghch',
          body: 'يتم تقديم Zeghch بصياغة حذرة إلى أن يتم تأكيد العلاقة الدقيقة.',
        },
        {
          title: 'مبادرات مستقبلية',
          body: 'ستضاف العلامات والمنصات الإضافية فقط بعد موافقة تجارية.',
        },
      ],
    },
    'brands/zeghch': {
      title: 'Zeghch | Heavens LLC',
      description:
        'Zeghch منصة رقمية لاكتشاف الخصومات والعروض والأعمال المحلية في أرمينيا.',
      heading: 'Zeghch',
      intro:
        'Zeghch منصة رقمية تساعد الناس على اكتشاف العروض والخصومات والأعمال المحلية في أرمينيا.',
      sections: [
        {
          title: 'اكتشاف محلي',
          body: 'تركز المنصة على إبراز العروض والخصومات والأعمال المحلية.',
        },
        {
          title: 'حالة العلاقة',
          body: 'يجب تأكيد علاقة الملكية أو التشغيل الدقيقة قبل نشر ادعاءات قانونية أقوى.',
        },
      ],
    },
    contact: {
      title: 'تواصل مع Heavens LLC',
      description:
        'ابدأ محادثة مع Heavens LLC حول الأعمال أو التقنية أو الشراكات أو فرص الإعلام.',
      heading: 'لنبدأ محادثة.',
      intro:
        'نرحب بالمحادثات مع الشركات والموردين وشركاء التقنية والمبدعين والمستثمرين.',
      sections: [
        {
          title: 'البريد الرسمي',
          body: 'سيتم عرض البريد الإلكتروني الرسمي للشركة بعد التحقق من صندوق البريد.',
        },
      ],
    },
    'contact/success': {
      title: 'تم استلام الرسالة | Heavens LLC',
      description: 'تم استلام رسالتك من Heavens LLC.',
      heading: 'تم استلام الرسالة.',
      intro: 'شكرا لك. تم استلام طلبك. سنتواصل معك في أقرب وقت ممكن.',
      sections: [
        {
          title: 'الخطوة التالية',
          body: 'سيراجع فريق Heavens رسالتك ويرد عبر عملية التواصل المؤكدة.',
        },
      ],
    },
    legal: {
      title: 'المعلومات القانونية | Heavens LLC',
      description:
        'معلومات الشركة القانونية لـ Heavens LLC. المحتوى المسودة يحتاج إلى مراجعة قانونية قبل اعتماد الإنتاج.',
      heading: 'المعلومات القانونية.',
      intro:
        'تحتوي هذه الصفحة على معلومات قانونية متوافقة مع التنفيذ الحالي وتحتاج إلى مراجعة قانونية قبل الإطلاق.',
      sections: [
        {
          title: 'الشركة',
          body: 'Heavens LLC، رقم التسجيل 50456518، الرقم الضريبي 02660767، العنوان المسجل: 40 شارع سايات-نوفا، يريفان، أرمينيا.',
        },
        {
          title: 'حالة المراجعة',
          body: 'لم يحصل هذا المحتوى القانوني بعد على الموافقة القانونية النهائية.',
        },
      ],
    },
    privacy: {
      title: 'سياسة الخصوصية | Heavens LLC',
      description:
        'معلومات خصوصية مسودة تصف الموقع الثابت الحالي ونموذج معالجة Netlify Forms.',
      heading: 'سياسة الخصوصية.',
      intro:
        'تشرح هذه المسودة التنفيذ الحالي ويجب إنهاؤها بعد المراجعة القانونية ومراجعة البريد الإلكتروني واحتفاظ Netlify.',
      sections: [
        {
          title: 'نموذج التواصل',
          body: 'من المخطط معالجة معلومات نموذج التواصل عبر Netlify Forms حتى تتمكن Heavens من مراجعة الطلبات والرد عليها.',
        },
        {
          title: 'التحليلات',
          body: 'لا يتم تحميل أي تحليلات اختيارية خلال التطوير الأولي.',
        },
      ],
    },
    cookies: {
      title: 'سياسة ملفات تعريف الارتباط | Heavens LLC',
      description:
        'مسودة سياسة ملفات تعريف الارتباط للتنفيذ الأولي لموقع Heavens.',
      heading: 'سياسة ملفات تعريف الارتباط.',
      intro:
        'يستخدم الموقع الأولي تخزين التفضيلات الضروري فقط ولا يحمل تحليلات اختيارية.',
      sections: [
        {
          title: 'تفضيل اللغة',
          body: 'قد يستخدم محدد اللغة في صفحة الجذر التخزين المحلي لتذكر اللغة التي اختارها الزائر.',
        },
        {
          title: 'حالة الموافقة',
          body: 'تتطلب التحليلات الاختيارية قرارا موثقا لاحقا بشأن المزود والموافقة.',
        },
      ],
    },
    terms: {
      title: 'شروط الاستخدام | Heavens LLC',
      description: 'مسودة شروط استخدام موقع Heavens LLC.',
      heading: 'شروط الاستخدام.',
      intro: 'هذه الشروط مسودات تنفيذية وتحتاج إلى مراجعة قانونية قبل الإطلاق.',
      sections: [
        {
          title: 'معلومات الموقع',
          body: 'يتم تقديم محتوى الموقع لأغراض المعلومات المؤسسية العامة وطلبات الأعمال.',
        },
        {
          title: 'لا ادعاءات غير مؤكدة',
          body: 'تخضع المنتجات والخدمات والتوفر للتحقق والمتطلبات المعمول بها.',
        },
      ],
    },
  },
};

const navLabels: Record<Locale, Record<string, string>> = {
  hy: {
    home: 'Գլխավոր',
    about: 'Մեր մասին',
    business: 'Բիզնես',
    technology: 'Տեխնոլոգիա',
    media: 'Մեդիա',
    brands: 'Բրենդներ',
    contact: 'Կապ',
  },
  en: {
    home: 'Home',
    about: 'About',
    business: 'Business',
    technology: 'Technology',
    media: 'Media',
    brands: 'Brands',
    contact: 'Contact',
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    business: 'Бизнес',
    technology: 'Технологии',
    media: 'Медиа',
    brands: 'Бренды',
    contact: 'Контакты',
  },
  de: {
    home: 'Start',
    about: 'Über uns',
    business: 'Business',
    technology: 'Technologie',
    media: 'Medien',
    brands: 'Marken',
    contact: 'Kontakt',
  },
  fa: {
    home: 'خانه',
    about: 'درباره ما',
    business: 'تجارت',
    technology: 'فناوری',
    media: 'رسانه',
    brands: 'برندها',
    contact: 'تماس',
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    business: 'الأعمال',
    technology: 'التقنية',
    media: 'الإعلام',
    brands: 'العلامات',
    contact: 'تواصل',
  },
};

const actionLabels: Record<Locale, Record<string, string>> = {
  hy: {
    discover: 'Բացահայտել Heavens-ը',
    contact: 'Սկսել խոսակցություն',
    followHeavens: 'Հետևել Heavens-ին',
    menu: 'Մենյու',
    close: 'Փակել',
    skip: 'Անցնել բովանդակությանը',
    language: 'Լեզու',
    currentLanguage: 'Ընթացիկ լեզու',
    openNavigation: 'Բացել նավիգացիան',
    closeNavigation: 'Փակել նավիգացիան',
    primaryNavigation: 'Հիմնական նավիգացիա',
    mobileNavigation: 'Մոբայլ նավիգացիա',
    legalNavigation: 'Իրավական նավիգացիա',
    heavensHome: 'Heavens գլխավոր էջ',
  },
  en: {
    discover: 'Discover Heavens',
    contact: 'Start a Conversation',
    followHeavens: 'Follow Heavens',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    language: 'Language',
    currentLanguage: 'Current language',
    openNavigation: 'Open navigation',
    closeNavigation: 'Close navigation',
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    legalNavigation: 'Legal navigation',
    heavensHome: 'Heavens home',
  },
  ru: {
    discover: 'Узнать Heavens',
    contact: 'Начать разговор',
    followHeavens: 'Следить за Heavens',
    menu: 'Меню',
    close: 'Закрыть',
    skip: 'Перейти к содержанию',
    language: 'Язык',
    currentLanguage: 'Текущий язык',
    openNavigation: 'Открыть навигацию',
    closeNavigation: 'Закрыть навигацию',
    primaryNavigation: 'Основная навигация',
    mobileNavigation: 'Мобильная навигация',
    legalNavigation: 'Юридическая навигация',
    heavensHome: 'Главная Heavens',
  },
  de: {
    discover: 'Heavens entdecken',
    contact: 'Gespräch beginnen',
    followHeavens: 'Heavens folgen',
    menu: 'Menü',
    close: 'Schließen',
    skip: 'Zum Inhalt springen',
    language: 'Sprache',
    currentLanguage: 'Aktuelle Sprache',
    openNavigation: 'Navigation öffnen',
    closeNavigation: 'Navigation schließen',
    primaryNavigation: 'Hauptnavigation',
    mobileNavigation: 'Mobile Navigation',
    legalNavigation: 'Rechtliche Navigation',
    heavensHome: 'Heavens Startseite',
  },
  fa: {
    discover: 'کشف Heavens',
    contact: 'شروع گفت‌وگو',
    followHeavens: 'دنبال کردن Heavens',
    menu: 'منو',
    close: 'بستن',
    skip: 'رفتن به محتوا',
    language: 'زبان',
    currentLanguage: 'زبان فعلی',
    openNavigation: 'باز کردن ناوبری',
    closeNavigation: 'بستن ناوبری',
    primaryNavigation: 'ناوبری اصلی',
    mobileNavigation: 'ناوبری موبایل',
    legalNavigation: 'ناوبری حقوقی',
    heavensHome: 'خانه Heavens',
  },
  ar: {
    discover: 'اكتشف Heavens',
    contact: 'ابدأ محادثة',
    followHeavens: 'تابع Heavens',
    menu: 'القائمة',
    close: 'إغلاق',
    skip: 'الانتقال إلى المحتوى',
    language: 'اللغة',
    currentLanguage: 'اللغة الحالية',
    openNavigation: 'فتح التنقل',
    closeNavigation: 'إغلاق التنقل',
    primaryNavigation: 'التنقل الرئيسي',
    mobileNavigation: 'تنقل الجوال',
    legalNavigation: 'التنقل القانوني',
    heavensHome: 'صفحة Heavens الرئيسية',
  },
};

const socialLabels: Record<Locale, { instagram: string }> = {
  hy: { instagram: 'Հետևեք մեզ Instagram-ում' },
  en: { instagram: 'Follow us on Instagram' },
  ru: { instagram: 'Подписывайтесь на нас в Instagram' },
  de: { instagram: 'Folgen Sie uns auf Instagram' },
  fa: { instagram: 'ما را در Instagram دنبال کنید' },
  ar: { instagram: 'تابعونا على Instagram' },
};

const englishServicePages: Record<ServicePageSlug, ServicePageCopy> = {
  business: {
    variant: 'business',
    eyebrow: 'Commerce / Trade / Distribution',
    heroSecondaryLabel: 'Commercial focus',
    heroStats: [
      {
        value: '10+',
        label: 'years of commercial experience',
      },
    ],
    heroItems: [
      'Import and export',
      'Product sourcing',
      'Distribution',
      'Market development',
    ],
    services: {
      eyebrow: 'Capabilities',
      heading: 'Commercial capabilities',
      intro:
        'Practical support across sourcing, trade, distribution and market development.',
      cards: [
        {
          title: 'Import and export',
          body: 'Support for sourcing, cross-border commercial activity and selected product movement between markets.',
        },
        {
          title: 'Product sourcing',
          body: 'Commercial experience with selected consumer categories and supplier conversations.',
        },
        {
          title: 'Distribution',
          body: 'Practical distribution awareness shaped by product, market and operational requirements.',
        },
      ],
    },
    detailSections: [
      {
        eyebrow: 'Product experience',
        heading: 'Selected consumer categories',
        body: 'Heavens has experience across selected everyday consumer categories. Availability and commercial activity depend on current business approval and applicable requirements.',
        items: [
          {
            title: 'Food and grocery',
            body: 'Selected food and everyday grocery categories, subject to compliance and commercial confirmation.',
          },
          {
            title: 'Beauty and personal care',
            body: 'Experience includes beauty, personal care, perfumes and related consumer categories.',
          },
        ],
      },
      {
        eyebrow: 'Market development',
        heading: 'Partnership-minded commercial work',
        body: 'The company approaches sourcing, trade and distribution through practical conversations with businesses, suppliers and partners.',
        items: [
          {
            title: 'Supplier conversations',
            body: 'Clear early-stage discussion around product fit, requirements and feasibility.',
          },
          {
            title: 'Commercial alignment',
            body: 'Careful review of category, market and operating needs before stronger claims are made.',
          },
        ],
      },
      {
        eyebrow: 'Compliance',
        heading: 'Requirements come first',
        body: 'All activities are subject to applicable legal, regulatory, customs, product-safety and commercial requirements.',
      },
    ],
    cta: {
      heading: 'Start a commercial conversation',
      body: 'Share the business context, product category or partnership idea and Heavens will review the enquiry through the confirmed contact process.',
      label: 'Start a Conversation',
    },
  },
  technology: {
    variant: 'technology',
    eyebrow: 'Product / Software / AI',
    heroSecondaryLabel: 'Product process',
    heroItems: ['Software', 'Platforms', 'AI tools', 'Operational workflows'],
    processSteps: ['Understand', 'Design', 'Build', 'Improve'],
    services: {
      eyebrow: 'Capabilities',
      heading: 'Digital capabilities',
      intro:
        'Technology services designed around real operational and customer needs.',
      cards: [
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
    detailSections: [
      {
        eyebrow: 'Process',
        heading: 'From need to useful product',
        body: 'Technology work should begin with the business problem, then move through design, build and continued improvement.',
        items: [
          {
            title: 'Understand',
            body: 'Clarify the operational need, user context and commercial goal.',
          },
          {
            title: 'Design',
            body: 'Shape the workflow, interface and technical approach before implementation.',
          },
          {
            title: 'Build',
            body: 'Create practical software, platforms and AI-enabled tools.',
          },
          {
            title: 'Improve',
            body: 'Review usage, refine details and adapt the product as needs evolve.',
          },
        ],
      },
      {
        eyebrow: 'Business value',
        heading: 'Digital work connected to operations',
        body: 'The focus is on useful systems, clearer workflows and digital products that support real business activity.',
        items: [
          {
            title: 'Customer experience',
            body: 'Interfaces and flows designed around the people who use them.',
          },
          {
            title: 'Product thinking',
            body: 'Decisions shaped by value, feasibility and long-term maintainability.',
          },
        ],
      },
    ],
    cta: {
      heading: 'Discuss a digital initiative',
      body: 'Share the operational need, platform idea or AI workflow and Heavens will review the best next step.',
      label: 'Start a Conversation',
    },
  },
  media: {
    variant: 'media',
    eyebrow: 'Content / Social / Production',
    heroSecondaryLabel: 'Creative focus',
    heroItems: [
      'Content production',
      'Social media',
      'Photography',
      'Campaign support',
    ],
    services: {
      eyebrow: 'Capabilities',
      heading: 'Creative capabilities',
      intro:
        'Content and production services for modern brands, products and platforms.',
      cards: [
        {
          title: 'Content production',
          body: 'Planning and production for brand communication, social media and video channels.',
        },
        {
          title: 'AI-assisted creation',
          body: 'Responsible use of AI-assisted tools to support creative workflows and business communication.',
        },
        {
          title: 'Campaign support',
          body: 'Creative assets and media production aligned with business goals and audience needs.',
        },
      ],
    },
    detailSections: [
      {
        eyebrow: 'Formats',
        heading: 'Creative work across modern channels',
        body: 'Media work can support brand communication, content planning, campaign material and platform-oriented storytelling.',
        items: [
          {
            title: 'Social content',
            body: 'Content planning and assets for social-media communication.',
          },
          {
            title: 'Video and photography',
            body: 'Production-oriented support for visual communication and campaigns.',
          },
          {
            title: 'Brand communication',
            body: 'Creative materials aligned with business goals and audience needs.',
          },
        ],
      },
      {
        eyebrow: 'AI-assisted creation',
        heading: 'Responsible creative support',
        body: 'AI-assisted tools may support ideation, production workflows and content operations, while final public claims and assets remain subject to business and legal review.',
      },
    ],
    cta: {
      heading: 'Plan a creative conversation',
      body: 'Share the product, campaign or platform context and Heavens will review how media support can fit the goal.',
      label: 'Start a Conversation',
    },
  },
};

const localizedServicePages: Record<
  Locale,
  Record<ServicePageSlug, ServicePageCopy>
> = {
  en: englishServicePages,
  hy: {
    business: {
      ...englishServicePages.business,
      eyebrow: 'Առևտուր / Ներմուծում / Բաշխում',
      heroSecondaryLabel: 'Առևտրային ուղղություն',
      heroStats: [{ value: '10+', label: 'տարի առևտրային փորձ' }],
      heroItems: [
        'Ներմուծում և արտահանում',
        'Ապրանքների մատակարարում',
        'Բաշխում',
        'Շուկայի զարգացում',
      ],
      services: {
        eyebrow: 'Կարողություններ',
        heading: 'Առևտրային կարողություններ',
        intro:
          'Գործնական աջակցություն մատակարարման, առևտրի, բաշխման և շուկայի զարգացման ոլորտներում։',
        cards: [
          {
            title: 'Ներմուծում և արտահանում',
            body: 'Աջակցություն մատակարարման, սահմանային առևտրային գործունեության և ընտրված ապրանքների տեղաշարժի հարցերում։',
          },
          {
            title: 'Ապրանքների մատակարարում',
            body: 'Առևտրային փորձ ընտրված սպառողական կատեգորիաների և մատակարարների հետ քննարկումների մեջ։',
          },
          {
            title: 'Բաշխում',
            body: 'Գործնական բաշխման պատկերացում՝ ձևավորված ապրանքի, շուկայի և գործառնական պահանջներով։',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Ապրանքային փորձ',
          heading: 'Ընտրված սպառողական կատեգորիաներ',
          body: 'Heavens-ն ունի փորձ ընտրված առօրյա սպառողական կատեգորիաներում։ Հասանելիությունը և առևտրային ակտիվությունը կախված են ընթացիկ բիզնես հաստատումից և կիրառելի պահանջներից։',
          items: [
            {
              title: 'Սնունդ և մթերք',
              body: 'Ընտրված սննդային և առօրյա մթերային կատեգորիաներ՝ համապատասխանության և առևտրային հաստատման պայմանով։',
            },
            {
              title: 'Գեղեցկություն և խնամք',
              body: 'Փորձը ներառում է գեղեցկության, անձնական խնամքի, օծանելիքի և հարակից սպառողական կատեգորիաներ։',
            },
          ],
        },
        {
          eyebrow: 'Շուկայի զարգացում',
          heading: 'Գործընկերության մտածողությամբ առևտրային աշխատանք',
          body: 'Ընկերությունը մատակարարմանը, առևտրին և բաշխմանը մոտենում է գործնական զրույցների միջոցով՝ բիզնեսների, մատակարարների և գործընկերների հետ։',
          items: [
            {
              title: 'Մատակարարների հետ քննարկումներ',
              body: 'Վաղ փուլում հստակ քննարկում ապրանքի համապատասխանության, պահանջների և իրագործելիության մասին։',
            },
            {
              title: 'Առևտրային համապատասխանեցում',
              body: 'Կատեգորիայի, շուկայի և գործառնական կարիքների զգուշավոր դիտարկում՝ նախքան ավելի ուժեղ հայտարարությունները։',
            },
          ],
        },
        {
          eyebrow: 'Համապատասխանություն',
          heading: 'Պահանջները առաջնային են',
          body: 'Բոլոր գործողությունները ենթակա են կիրառելի իրավական, կարգավորող, մաքսային, ապրանքի անվտանգության և առևտրային պահանջների։',
        },
      ],
      cta: {
        heading: 'Սկսել առևտրային խոսակցություն',
        body: 'Ներկայացրեք բիզնես համատեքստը, ապրանքային կատեգորիան կամ գործընկերության գաղափարը, և Heavens-ը կդիտարկի հարցումը հաստատված կապի գործընթացով։',
        label: 'Սկսել խոսակցություն',
      },
    },
    technology: {
      ...englishServicePages.technology,
      eyebrow: 'Արտադրանք / Ծրագրեր / AI',
      heroSecondaryLabel: 'Արտադրանքի գործընթաց',
      heroItems: ['Ծրագրեր', 'Հարթակներ', 'AI գործիքներ', 'Գործառնական հոսքեր'],
      processSteps: ['Հասկանալ', 'Նախագծել', 'Կառուցել', 'Բարելավել'],
      services: {
        eyebrow: 'Կարողություններ',
        heading: 'Թվային կարողություններ',
        intro:
          'Տեխնոլոգիական ծառայություններ՝ նախագծված իրական գործառնական և հաճախորդային կարիքների շուրջ։',
        cards: [
          {
            title: 'Ծրագրային մշակում',
            body: 'Անհատական ծրագրեր՝ գործառնական պահանջների և հաճախորդների կարիքների շուրջ։',
          },
          {
            title: 'Թվային հարթակներ',
            body: 'Վեբ հավելվածներ, մոբայլ արտադրանքներ, marketplace-ներ և բիզնեսի թվայնացման հոսքեր։',
          },
          {
            title: 'Արհեստական բանականություն',
            body: 'Գործնական AI գործիքներ՝ կոնտենտի, ավտոմատացման, հաճախորդային փորձի և արտադրողականության համար։',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Գործընթաց',
          heading: 'Կարիքից մինչև օգտակար արտադրանք',
          body: 'Տեխնոլոգիական աշխատանքը պետք է սկսվի բիզնես խնդրից, ապա անցնի նախագծման, կառուցման և շարունակական բարելավման փուլերով։',
          items: [
            {
              title: 'Հասկանալ',
              body: 'Հստակեցնել գործառնական կարիքը, օգտագործողի համատեքստը և առևտրային նպատակը։',
            },
            {
              title: 'Նախագծել',
              body: 'Ձևավորել աշխատանքային հոսքը, ինտերֆեյսը և տեխնիկական մոտեցումը մինչև իրականացումը։',
            },
            {
              title: 'Կառուցել',
              body: 'Ստեղծել գործնական ծրագրեր, հարթակներ և AI գործիքներ։',
            },
            {
              title: 'Բարելավել',
              body: 'Վերանայել օգտագործումը, կատարելագործել մանրամասները և հարմարեցնել արտադրանքը զարգացող կարիքներին։',
            },
          ],
        },
        {
          eyebrow: 'Բիզնես արժեք',
          heading: 'Թվային աշխատանք՝ կապված գործողությունների հետ',
          body: 'Ուշադրությունը օգտակար համակարգերի, ավելի հստակ հոսքերի և բիզնես գործունեությունը աջակցող թվային արտադրանքների վրա է։',
          items: [
            {
              title: 'Հաճախորդային փորձ',
              body: 'Ինտերֆեյսներ և հոսքեր՝ նախագծված դրանց օգտագործողների շուրջ։',
            },
            {
              title: 'Արտադրանքային մտածողություն',
              body: 'Որոշումներ՝ ձևավորված արժեքով, իրագործելիությամբ և երկարաժամկետ պահպանելիությամբ։',
            },
          ],
        },
      ],
      cta: {
        heading: 'Քննարկել թվային նախաձեռնություն',
        body: 'Ներկայացրեք գործառնական կարիքը, հարթակի գաղափարը կամ AI հոսքը, և Heavens-ը կդիտարկի լավագույն հաջորդ քայլը։',
        label: 'Սկսել խոսակցություն',
      },
    },
    media: {
      ...englishServicePages.media,
      eyebrow: 'Կոնտենտ / Սոցիալական / Արտադրություն',
      heroSecondaryLabel: 'Ստեղծարար ուղղություն',
      heroItems: [
        'Կոնտենտի արտադրություն',
        'Սոցիալական մեդիա',
        'Լուսանկարչություն',
        'Արշավների աջակցություն',
      ],
      services: {
        eyebrow: 'Կարողություններ',
        heading: 'Ստեղծարար կարողություններ',
        intro:
          'Կոնտենտի և արտադրության ծառայություններ ժամանակակից բրենդների, ապրանքների և հարթակների համար։',
        cards: [
          {
            title: 'Կոնտենտի արտադրություն',
            body: 'Պլանավորում և արտադրություն բրենդային հաղորդակցության, սոցիալական մեդիայի և վիդեո ալիքների համար։',
          },
          {
            title: 'AI աջակցությամբ ստեղծում',
            body: 'AI գործիքների պատասխանատու օգտագործում ստեղծարար հոսքերի և բիզնես հաղորդակցության համար։',
          },
          {
            title: 'Արշավների աջակցություն',
            body: 'Ստեղծարար նյութեր և մեդիա արտադրություն՝ համահունչ բիզնես նպատակներին և լսարանի կարիքներին։',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Ձևաչափեր',
          heading: 'Ստեղծարար աշխատանք ժամանակակից ալիքներում',
          body: 'Մեդիա աշխատանքը կարող է աջակցել բրենդային հաղորդակցությանը, կոնտենտի պլանավորմանը, արշավային նյութերին և հարթակային պատմությանը։',
          items: [
            {
              title: 'Սոցիալական կոնտենտ',
              body: 'Կոնտենտի պլանավորում և նյութեր սոցիալական մեդիայի հաղորդակցության համար։',
            },
            {
              title: 'Վիդեո և լուսանկարչություն',
              body: 'Արտադրական աջակցություն տեսողական հաղորդակցության և արշավների համար։',
            },
            {
              title: 'Բրենդային հաղորդակցություն',
              body: 'Ստեղծարար նյութեր՝ համահունչ բիզնես նպատակներին և լսարանի կարիքներին։',
            },
          ],
        },
        {
          eyebrow: 'AI աջակցությամբ ստեղծում',
          heading: 'Պատասխանատու ստեղծարար աջակցություն',
          body: 'AI գործիքները կարող են աջակցել գաղափարավորմանը, արտադրական հոսքերին և կոնտենտային գործողություններին, իսկ վերջնական հանրային հայտարարություններն ու նյութերը ենթակա են բիզնես և իրավական վերանայման։',
        },
      ],
      cta: {
        heading: 'Պլանավորել ստեղծարար խոսակցություն',
        body: 'Ներկայացրեք ապրանքի, արշավի կամ հարթակի համատեքստը, և Heavens-ը կդիտարկի, թե ինչպես կարող է մեդիա աջակցությունը համապատասխանել նպատակին։',
        label: 'Սկսել խոսակցություն',
      },
    },
  },
  ru: {
    business: {
      ...englishServicePages.business,
      eyebrow: 'Коммерция / Торговля / Дистрибуция',
      heroSecondaryLabel: 'Коммерческий фокус',
      heroStats: [{ value: '10+', label: 'лет коммерческого опыта' }],
      heroItems: [
        'Импорт и экспорт',
        'Поиск продукции',
        'Дистрибуция',
        'Развитие рынка',
      ],
      services: {
        eyebrow: 'Возможности',
        heading: 'Коммерческие возможности',
        intro:
          'Практическая поддержка в поиске продукции, торговле, дистрибуции и развитии рынка.',
        cards: [
          {
            title: 'Импорт и экспорт',
            body: 'Поддержка поиска продукции, трансграничной коммерческой активности и движения выбранных товаров между рынками.',
          },
          {
            title: 'Поиск продукции',
            body: 'Коммерческий опыт в выбранных потребительских категориях и переговорах с поставщиками.',
          },
          {
            title: 'Дистрибуция',
            body: 'Практическое понимание дистрибуции, сформированное продуктом, рынком и операционными требованиями.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Продуктовый опыт',
          heading: 'Выбранные потребительские категории',
          body: 'Heavens имеет опыт в выбранных повседневных потребительских категориях. Доступность и коммерческая активность зависят от текущего бизнес-подтверждения и применимых требований.',
          items: [
            {
              title: 'Еда и продукты',
              body: 'Выбранные пищевые и повседневные продуктовые категории при соблюдении требований и коммерческом подтверждении.',
            },
            {
              title: 'Красота и уход',
              body: 'Опыт включает beauty, личный уход, парфюмерию и связанные потребительские категории.',
            },
          ],
        },
        {
          eyebrow: 'Развитие рынка',
          heading: 'Коммерческая работа с партнерским подходом',
          body: 'Компания подходит к поиску продукции, торговле и дистрибуции через практические разговоры с бизнесами, поставщиками и партнерами.',
          items: [
            {
              title: 'Разговоры с поставщиками',
              body: 'Понятное раннее обсуждение соответствия продукта, требований и осуществимости.',
            },
            {
              title: 'Коммерческое согласование',
              body: 'Внимательный анализ категории, рынка и операционных нужд до более сильных заявлений.',
            },
          ],
        },
        {
          eyebrow: 'Соответствие',
          heading: 'Требования прежде всего',
          body: 'Все действия подлежат применимым юридическим, регуляторным, таможенным, продуктовым и коммерческим требованиям.',
        },
      ],
      cta: {
        heading: 'Начать коммерческий разговор',
        body: 'Опишите бизнес-контекст, категорию продукта или идею партнерства, и Heavens рассмотрит запрос через подтвержденный процесс связи.',
        label: 'Начать разговор',
      },
    },
    technology: {
      ...englishServicePages.technology,
      eyebrow: 'Продукт / Software / AI',
      heroSecondaryLabel: 'Продуктовый процесс',
      heroItems: [
        'Программное обеспечение',
        'Платформы',
        'AI-инструменты',
        'Операционные процессы',
      ],
      processSteps: ['Понять', 'Спроектировать', 'Создать', 'Улучшить'],
      services: {
        eyebrow: 'Возможности',
        heading: 'Цифровые возможности',
        intro:
          'Технологические услуги, построенные вокруг реальных операционных и клиентских нужд.',
        cards: [
          {
            title: 'Разработка ПО',
            body: 'Индивидуальное программное обеспечение вокруг операционных требований и потребностей клиентов.',
          },
          {
            title: 'Цифровые платформы',
            body: 'Веб-приложения, мобильные продукты, marketplace-проекты и процессы цифровизации бизнеса.',
          },
          {
            title: 'Искусственный интеллект',
            body: 'Практические AI-инструменты для контента, автоматизации, клиентского опыта и продуктивности.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Процесс',
          heading: 'От потребности к полезному продукту',
          body: 'Технологическая работа должна начинаться с бизнес-проблемы, затем проходить через дизайн, создание и постоянное улучшение.',
          items: [
            {
              title: 'Понять',
              body: 'Уточнить операционную потребность, пользовательский контекст и коммерческую цель.',
            },
            {
              title: 'Спроектировать',
              body: 'Сформировать процесс, интерфейс и технический подход до реализации.',
            },
            {
              title: 'Создать',
              body: 'Создать практичное ПО, платформы и AI-инструменты.',
            },
            {
              title: 'Улучшить',
              body: 'Анализировать использование, уточнять детали и адаптировать продукт по мере развития потребностей.',
            },
          ],
        },
        {
          eyebrow: 'Бизнес-ценность',
          heading: 'Цифровая работа, связанная с операциями',
          body: 'Фокус — на полезных системах, более ясных процессах и цифровых продуктах, поддерживающих реальную бизнес-активность.',
          items: [
            {
              title: 'Клиентский опыт',
              body: 'Интерфейсы и процессы, спроектированные вокруг людей, которые ими пользуются.',
            },
            {
              title: 'Продуктовое мышление',
              body: 'Решения, основанные на ценности, осуществимости и долгосрочной поддерживаемости.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Обсудить цифровую инициативу',
        body: 'Опишите операционную потребность, идею платформы или AI-процесс, и Heavens рассмотрит лучший следующий шаг.',
        label: 'Начать разговор',
      },
    },
    media: {
      ...englishServicePages.media,
      eyebrow: 'Контент / Соцсети / Производство',
      heroSecondaryLabel: 'Креативный фокус',
      heroItems: [
        'Производство контента',
        'Социальные сети',
        'Фотография',
        'Поддержка кампаний',
      ],
      services: {
        eyebrow: 'Возможности',
        heading: 'Креативные возможности',
        intro:
          'Услуги контента и производства для современных брендов, продуктов и платформ.',
        cards: [
          {
            title: 'Производство контента',
            body: 'Планирование и производство для бренд-коммуникации, социальных сетей и видеоканалов.',
          },
          {
            title: 'AI-поддержка творчества',
            body: 'Ответственное использование AI-инструментов для поддержки креативных процессов и бизнес-коммуникации.',
          },
          {
            title: 'Поддержка кампаний',
            body: 'Креативные материалы и медиапроизводство, согласованные с бизнес-целями и потребностями аудитории.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Форматы',
          heading: 'Креативная работа для современных каналов',
          body: 'Медиа-работа может поддерживать бренд-коммуникацию, контент-планирование, материалы кампаний и платформенное сторителлинг-направление.',
          items: [
            {
              title: 'Социальный контент',
              body: 'Планирование контента и материалы для коммуникации в социальных сетях.',
            },
            {
              title: 'Видео и фотография',
              body: 'Производственная поддержка визуальной коммуникации и кампаний.',
            },
            {
              title: 'Бренд-коммуникация',
              body: 'Креативные материалы, согласованные с бизнес-целями и потребностями аудитории.',
            },
          ],
        },
        {
          eyebrow: 'AI-поддержка творчества',
          heading: 'Ответственная креативная поддержка',
          body: 'AI-инструменты могут поддерживать идеи, производственные процессы и контент-операции, а финальные публичные заявления и материалы остаются предметом бизнес- и юридической проверки.',
        },
      ],
      cta: {
        heading: 'Запланировать креативный разговор',
        body: 'Опишите продукт, кампанию или платформенный контекст, и Heavens рассмотрит, как медиаподдержка может соответствовать цели.',
        label: 'Начать разговор',
      },
    },
  },
  de: {
    business: {
      ...englishServicePages.business,
      eyebrow: 'Commerce / Handel / Distribution',
      heroSecondaryLabel: 'Kommerzieller Fokus',
      heroStats: [{ value: '10+', label: 'Jahre kommerzielle Erfahrung' }],
      heroItems: [
        'Import und Export',
        'Produktsuche',
        'Distribution',
        'Marktentwicklung',
      ],
      services: {
        eyebrow: 'Fähigkeiten',
        heading: 'Kommerzielle Fähigkeiten',
        intro:
          'Praktische Unterstützung in Beschaffung, Handel, Distribution und Marktentwicklung.',
        cards: [
          {
            title: 'Import und Export',
            body: 'Unterstützung bei Beschaffung, grenzüberschreitender Geschäftstätigkeit und ausgewählter Produktbewegung zwischen Märkten.',
          },
          {
            title: 'Produktsuche',
            body: 'Kommerzielle Erfahrung mit ausgewählten Konsumkategorien und Lieferantengesprächen.',
          },
          {
            title: 'Distribution',
            body: 'Praktisches Distributionsverständnis, geprägt durch Produkt, Markt und operative Anforderungen.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Produkterfahrung',
          heading: 'Ausgewählte Konsumkategorien',
          body: 'Heavens hat Erfahrung in ausgewählten Alltagskategorien. Verfügbarkeit und kommerzielle Aktivität hängen von aktueller Geschäftsfreigabe und geltenden Anforderungen ab.',
          items: [
            {
              title: 'Lebensmittel und Grocery',
              body: 'Ausgewählte Lebensmittel- und Alltagskategorien, vorbehaltlich Compliance und kommerzieller Bestätigung.',
            },
            {
              title: 'Beauty und Körperpflege',
              body: 'Die Erfahrung umfasst Beauty, Körperpflege, Parfüms und verwandte Konsumkategorien.',
            },
          ],
        },
        {
          eyebrow: 'Marktentwicklung',
          heading: 'Kommerzielle Arbeit mit Partnerschaftsdenken',
          body: 'Das Unternehmen nähert sich Beschaffung, Handel und Distribution durch praktische Gespräche mit Unternehmen, Lieferanten und Partnern.',
          items: [
            {
              title: 'Lieferantengespräche',
              body: 'Klare frühe Diskussionen über Produktfit, Anforderungen und Machbarkeit.',
            },
            {
              title: 'Kommerzielle Abstimmung',
              body: 'Sorgfältige Prüfung von Kategorie, Markt und operativen Bedürfnissen vor stärkeren Aussagen.',
            },
          ],
        },
        {
          eyebrow: 'Compliance',
          heading: 'Anforderungen zuerst',
          body: 'Alle Aktivitäten unterliegen geltenden rechtlichen, regulatorischen, zollrechtlichen, produktsicherheitsbezogenen und kommerziellen Anforderungen.',
        },
      ],
      cta: {
        heading: 'Ein kommerzielles Gespräch beginnen',
        body: 'Teilen Sie Geschäftskontext, Produktkategorie oder Partnerschaftsidee, und Heavens prüft die Anfrage über den bestätigten Kontaktprozess.',
        label: 'Gespräch beginnen',
      },
    },
    technology: {
      ...englishServicePages.technology,
      eyebrow: 'Produkt / Software / KI',
      heroSecondaryLabel: 'Produktprozess',
      heroItems: ['Software', 'Plattformen', 'KI-Tools', 'Operative Workflows'],
      processSteps: ['Verstehen', 'Gestalten', 'Bauen', 'Verbessern'],
      services: {
        eyebrow: 'Fähigkeiten',
        heading: 'Digitale Fähigkeiten',
        intro:
          'Technologieleistungen, die um reale operative und kundenseitige Bedürfnisse gestaltet sind.',
        cards: [
          {
            title: 'Softwareentwicklung',
            body: 'Individuelle Software rund um operative Anforderungen und Kundenbedürfnisse.',
          },
          {
            title: 'Digitale Plattformen',
            body: 'Webanwendungen, mobile Produkte, Marketplaces und Workflows zur Digitalisierung von Unternehmen.',
          },
          {
            title: 'Künstliche Intelligenz',
            body: 'Praktische KI-Tools für Content, Automatisierung, Kundenerlebnis und Produktivität.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Prozess',
          heading: 'Vom Bedarf zum nützlichen Produkt',
          body: 'Technologiearbeit sollte mit dem Geschäftsproblem beginnen und dann über Design, Umsetzung und kontinuierliche Verbesserung laufen.',
          items: [
            {
              title: 'Verstehen',
              body: 'Operativen Bedarf, Nutzerkontext und kommerzielles Ziel klären.',
            },
            {
              title: 'Gestalten',
              body: 'Workflow, Oberfläche und technischen Ansatz vor der Umsetzung formen.',
            },
            {
              title: 'Bauen',
              body: 'Praktische Software, Plattformen und KI-gestützte Tools erstellen.',
            },
            {
              title: 'Verbessern',
              body: 'Nutzung prüfen, Details verfeinern und das Produkt an wachsende Bedürfnisse anpassen.',
            },
          ],
        },
        {
          eyebrow: 'Geschäftswert',
          heading: 'Digitale Arbeit mit operativem Bezug',
          body: 'Der Fokus liegt auf nützlichen Systemen, klareren Workflows und digitalen Produkten, die reale Geschäftstätigkeit unterstützen.',
          items: [
            {
              title: 'Kundenerlebnis',
              body: 'Oberflächen und Abläufe, die um die Menschen gestaltet sind, die sie nutzen.',
            },
            {
              title: 'Produktdenken',
              body: 'Entscheidungen geprägt von Wert, Machbarkeit und langfristiger Wartbarkeit.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Eine digitale Initiative besprechen',
        body: 'Teilen Sie operativen Bedarf, Plattformidee oder KI-Workflow, und Heavens prüft den besten nächsten Schritt.',
        label: 'Gespräch beginnen',
      },
    },
    media: {
      ...englishServicePages.media,
      eyebrow: 'Content / Social / Produktion',
      heroSecondaryLabel: 'Kreativer Fokus',
      heroItems: [
        'Content-Produktion',
        'Social Media',
        'Fotografie',
        'Kampagnen-Support',
      ],
      services: {
        eyebrow: 'Fähigkeiten',
        heading: 'Kreative Fähigkeiten',
        intro:
          'Content- und Produktionsleistungen für moderne Marken, Produkte und Plattformen.',
        cards: [
          {
            title: 'Content-Produktion',
            body: 'Planung und Produktion für Markenkommunikation, Social Media und Videokanäle.',
          },
          {
            title: 'KI-gestützte Kreation',
            body: 'Verantwortungsvoller Einsatz von KI-Tools zur Unterstützung kreativer Workflows und Geschäftskommunikation.',
          },
          {
            title: 'Kampagnen-Support',
            body: 'Kreative Assets und Medienproduktion, abgestimmt auf Geschäftsziele und Publikumsbedürfnisse.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'Formate',
          heading: 'Kreative Arbeit über moderne Kanäle',
          body: 'Medienarbeit kann Markenkommunikation, Content-Planung, Kampagnenmaterial und plattformorientiertes Storytelling unterstützen.',
          items: [
            {
              title: 'Social Content',
              body: 'Content-Planung und Assets für Social-Media-Kommunikation.',
            },
            {
              title: 'Video und Fotografie',
              body: 'Produktionsorientierte Unterstützung für visuelle Kommunikation und Kampagnen.',
            },
            {
              title: 'Markenkommunikation',
              body: 'Kreative Materialien, abgestimmt auf Geschäftsziele und Publikumsbedürfnisse.',
            },
          ],
        },
        {
          eyebrow: 'KI-gestützte Kreation',
          heading: 'Verantwortungsvolle kreative Unterstützung',
          body: 'KI-Tools können Ideenfindung, Produktionsworkflows und Content-Operations unterstützen; finale öffentliche Aussagen und Assets bleiben geschäftlicher und rechtlicher Prüfung vorbehalten.',
        },
      ],
      cta: {
        heading: 'Ein kreatives Gespräch planen',
        body: 'Teilen Sie Produkt-, Kampagnen- oder Plattformkontext, und Heavens prüft, wie Medienunterstützung zum Ziel passen kann.',
        label: 'Gespräch beginnen',
      },
    },
  },
  fa: {
    business: {
      ...englishServicePages.business,
      eyebrow: 'تجارت / بازرگانی / توزیع',
      heroSecondaryLabel: 'تمرکز تجاری',
      heroStats: [{ value: '10+', label: 'سال تجربه تجاری' }],
      heroItems: ['واردات و صادرات', 'تأمین محصول', 'توزیع', 'توسعه بازار'],
      services: {
        eyebrow: 'توانمندی‌ها',
        heading: 'توانمندی‌های تجاری',
        intro: 'پشتیبانی عملی در تأمین، تجارت، توزیع و توسعه بازار.',
        cards: [
          {
            title: 'واردات و صادرات',
            body: 'پشتیبانی از تأمین، فعالیت تجاری فرامرزی و جابه‌جایی منتخب محصولات بین بازارها.',
          },
          {
            title: 'تأمین محصول',
            body: 'تجربه تجاری در دسته‌های منتخب مصرفی و گفت‌وگو با تأمین‌کنندگان.',
          },
          {
            title: 'توزیع',
            body: 'درک عملی از توزیع که با محصول، بازار و الزامات عملیاتی شکل می‌گیرد.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'تجربه محصول',
          heading: 'دسته‌های منتخب مصرفی',
          body: 'Heavens در دسته‌های منتخب مصرفی روزمره تجربه دارد. دسترسی و فعالیت تجاری به تأیید فعلی کسب‌وکار و الزامات قابل اجرا بستگی دارد.',
          items: [
            {
              title: 'غذا و خواربار',
              body: 'دسته‌های منتخب غذایی و خواربار روزمره، مشروط به انطباق و تأیید تجاری.',
            },
            {
              title: 'زیبایی و مراقبت شخصی',
              body: 'تجربه شامل زیبایی، مراقبت شخصی، عطر و دسته‌های مصرفی مرتبط است.',
            },
          ],
        },
        {
          eyebrow: 'توسعه بازار',
          heading: 'کار تجاری با نگاه همکاری',
          body: 'شرکت با گفت‌وگوهای عملی با کسب‌وکارها، تأمین‌کنندگان و شرکا به تأمین، تجارت و توزیع نزدیک می‌شود.',
          items: [
            {
              title: 'گفت‌وگو با تأمین‌کنندگان',
              body: 'بحث روشن در مرحله ابتدایی درباره تناسب محصول، الزامات و امکان‌پذیری.',
            },
            {
              title: 'هم‌راستایی تجاری',
              body: 'بررسی دقیق دسته، بازار و نیازهای عملیاتی پیش از بیان ادعاهای قوی‌تر.',
            },
          ],
        },
        {
          eyebrow: 'انطباق',
          heading: 'الزامات در اولویت هستند',
          body: 'تمام فعالیت‌ها مشمول الزامات قانونی، مقرراتی، گمرکی، ایمنی محصول و تجاری قابل اجرا هستند.',
        },
      ],
      cta: {
        heading: 'شروع یک گفت‌وگوی تجاری',
        body: 'زمینه کسب‌وکار، دسته محصول یا ایده همکاری را مطرح کنید تا Heavens درخواست را از طریق فرایند تماس تأییدشده بررسی کند.',
        label: 'شروع گفت‌وگو',
      },
    },
    technology: {
      ...englishServicePages.technology,
      eyebrow: 'محصول / نرم‌افزار / AI',
      heroSecondaryLabel: 'فرایند محصول',
      heroItems: ['نرم‌افزار', 'پلتفرم‌ها', 'ابزارهای AI', 'فرایندهای عملیاتی'],
      processSteps: ['درک', 'طراحی', 'ساخت', 'بهبود'],
      services: {
        eyebrow: 'توانمندی‌ها',
        heading: 'توانمندی‌های دیجیتال',
        intro:
          'خدمات فناوری طراحی‌شده بر اساس نیازهای واقعی عملیاتی و مشتریان.',
        cards: [
          {
            title: 'توسعه نرم‌افزار',
            body: 'نرم‌افزار اختصاصی بر اساس الزامات عملیاتی و نیازهای مشتری.',
          },
          {
            title: 'پلتفرم‌های دیجیتال',
            body: 'اپلیکیشن‌های وب، محصولات موبایل، بازارگاه‌ها و جریان‌های دیجیتالی‌سازی کسب‌وکار.',
          },
          {
            title: 'هوش مصنوعی',
            body: 'ابزارهای عملی AI برای محتوا، خودکارسازی، تجربه مشتری و بهره‌وری.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'فرایند',
          heading: 'از نیاز تا محصول مفید',
          body: 'کار فناوری باید از مسئله کسب‌وکار آغاز شود و سپس از طراحی، ساخت و بهبود مداوم عبور کند.',
          items: [
            {
              title: 'درک',
              body: 'نیاز عملیاتی، زمینه کاربر و هدف تجاری را روشن کنید.',
            },
            {
              title: 'طراحی',
              body: 'جریان کار، رابط و رویکرد فنی را پیش از اجرا شکل دهید.',
            },
            {
              title: 'ساخت',
              body: 'نرم‌افزار، پلتفرم و ابزارهای AI کاربردی ایجاد کنید.',
            },
            {
              title: 'بهبود',
              body: 'استفاده را بررسی کنید، جزئیات را اصلاح کنید و محصول را با نیازهای در حال تغییر سازگار کنید.',
            },
          ],
        },
        {
          eyebrow: 'ارزش تجاری',
          heading: 'کار دیجیتال متصل به عملیات',
          body: 'تمرکز بر سیستم‌های مفید، جریان‌های شفاف‌تر و محصولات دیجیتالی است که از فعالیت واقعی کسب‌وکار پشتیبانی می‌کنند.',
          items: [
            {
              title: 'تجربه مشتری',
              body: 'رابط‌ها و جریان‌هایی که بر اساس افراد استفاده‌کننده طراحی می‌شوند.',
            },
            {
              title: 'تفکر محصول',
              body: 'تصمیم‌هایی مبتنی بر ارزش، امکان‌پذیری و قابلیت نگهداری بلندمدت.',
            },
          ],
        },
      ],
      cta: {
        heading: 'گفت‌وگو درباره یک ابتکار دیجیتال',
        body: 'نیاز عملیاتی، ایده پلتفرم یا جریان AI را مطرح کنید تا Heavens بهترین گام بعدی را بررسی کند.',
        label: 'شروع گفت‌وگو',
      },
    },
    media: {
      ...englishServicePages.media,
      eyebrow: 'محتوا / شبکه اجتماعی / تولید',
      heroSecondaryLabel: 'تمرکز خلاق',
      heroItems: ['تولید محتوا', 'شبکه‌های اجتماعی', 'عکاسی', 'پشتیبانی کمپین'],
      services: {
        eyebrow: 'توانمندی‌ها',
        heading: 'توانمندی‌های خلاق',
        intro: 'خدمات محتوا و تولید برای برندها، محصولات و پلتفرم‌های مدرن.',
        cards: [
          {
            title: 'تولید محتوا',
            body: 'برنامه‌ریزی و تولید برای ارتباطات برند، شبکه‌های اجتماعی و کانال‌های ویدئویی.',
          },
          {
            title: 'خلق با کمک AI',
            body: 'استفاده مسئولانه از ابزارهای AI برای پشتیبانی از جریان‌های خلاق و ارتباطات تجاری.',
          },
          {
            title: 'پشتیبانی کمپین',
            body: 'دارایی‌های خلاق و تولید رسانه‌ای همسو با اهداف کسب‌وکار و نیازهای مخاطب.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'فرمت‌ها',
          heading: 'کار خلاق در کانال‌های مدرن',
          body: 'کار رسانه‌ای می‌تواند از ارتباطات برند، برنامه‌ریزی محتوا، مواد کمپین و روایت پلتفرم‌محور پشتیبانی کند.',
          items: [
            {
              title: 'محتوای اجتماعی',
              body: 'برنامه‌ریزی محتوا و دارایی‌ها برای ارتباطات شبکه‌های اجتماعی.',
            },
            {
              title: 'ویدئو و عکاسی',
              body: 'پشتیبانی تولیدی برای ارتباطات بصری و کمپین‌ها.',
            },
            {
              title: 'ارتباطات برند',
              body: 'مواد خلاق همسو با اهداف کسب‌وکار و نیازهای مخاطب.',
            },
          ],
        },
        {
          eyebrow: 'خلق با کمک AI',
          heading: 'پشتیبانی خلاق مسئولانه',
          body: 'ابزارهای AI می‌توانند از ایده‌پردازی، جریان‌های تولید و عملیات محتوا پشتیبانی کنند؛ ادعاها و دارایی‌های عمومی نهایی همچنان نیازمند بررسی تجاری و حقوقی هستند.',
        },
      ],
      cta: {
        heading: 'برنامه‌ریزی یک گفت‌وگوی خلاق',
        body: 'زمینه محصول، کمپین یا پلتفرم را مطرح کنید تا Heavens بررسی کند پشتیبانی رسانه‌ای چگونه می‌تواند با هدف هماهنگ شود.',
        label: 'شروع گفت‌وگو',
      },
    },
  },
  ar: {
    business: {
      ...englishServicePages.business,
      eyebrow: 'تجارة / تبادل / توزيع',
      heroSecondaryLabel: 'تركيز تجاري',
      heroStats: [{ value: '10+', label: 'سنوات من الخبرة التجارية' }],
      heroItems: [
        'الاستيراد والتصدير',
        'توريد المنتجات',
        'التوزيع',
        'تطوير السوق',
      ],
      services: {
        eyebrow: 'القدرات',
        heading: 'القدرات التجارية',
        intro: 'دعم عملي في التوريد والتجارة والتوزيع وتطوير السوق.',
        cards: [
          {
            title: 'الاستيراد والتصدير',
            body: 'دعم التوريد والنشاط التجاري العابر للحدود وحركة منتجات مختارة بين الأسواق.',
          },
          {
            title: 'توريد المنتجات',
            body: 'خبرة تجارية في فئات استهلاكية مختارة ومحادثات مع الموردين.',
          },
          {
            title: 'التوزيع',
            body: 'فهم عملي للتوزيع يتشكل حسب المنتج والسوق والمتطلبات التشغيلية.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'خبرة المنتجات',
          heading: 'فئات استهلاكية مختارة',
          body: 'تمتلك Heavens خبرة في فئات استهلاكية يومية مختارة. يعتمد التوفر والنشاط التجاري على الموافقة التجارية الحالية والمتطلبات المعمول بها.',
          items: [
            {
              title: 'الأغذية والبقالة',
              body: 'فئات غذائية وبقالة يومية مختارة، رهنا بالامتثال والتأكيد التجاري.',
            },
            {
              title: 'الجمال والعناية الشخصية',
              body: 'تشمل الخبرة الجمال والعناية الشخصية والعطور والفئات الاستهلاكية ذات الصلة.',
            },
          ],
        },
        {
          eyebrow: 'تطوير السوق',
          heading: 'عمل تجاري بروح الشراكة',
          body: 'تتعامل الشركة مع التوريد والتجارة والتوزيع من خلال محادثات عملية مع الشركات والموردين والشركاء.',
          items: [
            {
              title: 'محادثات الموردين',
              body: 'نقاش مبكر وواضح حول ملاءمة المنتج والمتطلبات وإمكانية التنفيذ.',
            },
            {
              title: 'المواءمة التجارية',
              body: 'مراجعة دقيقة للفئة والسوق والاحتياجات التشغيلية قبل تقديم ادعاءات أقوى.',
            },
          ],
        },
        {
          eyebrow: 'الامتثال',
          heading: 'المتطلبات أولا',
          body: 'تخضع جميع الأنشطة للمتطلبات القانونية والتنظيمية والجمركية ومتطلبات سلامة المنتج والمتطلبات التجارية المعمول بها.',
        },
      ],
      cta: {
        heading: 'ابدأ محادثة تجارية',
        body: 'شارك سياق العمل أو فئة المنتج أو فكرة الشراكة وستراجع Heavens الطلب عبر عملية التواصل المؤكدة.',
        label: 'ابدأ محادثة',
      },
    },
    technology: {
      ...englishServicePages.technology,
      eyebrow: 'منتج / برمجيات / AI',
      heroSecondaryLabel: 'عملية المنتج',
      heroItems: ['برمجيات', 'منصات', 'أدوات AI', 'سير عمل تشغيلي'],
      processSteps: ['فهم', 'تصميم', 'بناء', 'تحسين'],
      services: {
        eyebrow: 'القدرات',
        heading: 'القدرات الرقمية',
        intro: 'خدمات تقنية مصممة حول احتياجات تشغيلية واحتياجات عملاء حقيقية.',
        cards: [
          {
            title: 'تطوير البرمجيات',
            body: 'برمجيات مخصصة مصممة حول المتطلبات التشغيلية واحتياجات العملاء.',
          },
          {
            title: 'المنصات الرقمية',
            body: 'تطبيقات ويب ومنتجات موبايل وأسواق رقمية وسير عمل لرقمنة الأعمال.',
          },
          {
            title: 'الذكاء الاصطناعي',
            body: 'أدوات AI عملية للمحتوى والأتمتة وتجربة العملاء والإنتاجية.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'العملية',
          heading: 'من الحاجة إلى منتج مفيد',
          body: 'يجب أن يبدأ العمل التقني من مشكلة العمل، ثم ينتقل عبر التصميم والبناء والتحسين المستمر.',
          items: [
            {
              title: 'فهم',
              body: 'توضيح الحاجة التشغيلية وسياق المستخدم والهدف التجاري.',
            },
            {
              title: 'تصميم',
              body: 'تشكيل سير العمل والواجهة والنهج التقني قبل التنفيذ.',
            },
            {
              title: 'بناء',
              body: 'إنشاء برمجيات ومنصات وأدوات مدعومة بالذكاء الاصطناعي.',
            },
            {
              title: 'تحسين',
              body: 'مراجعة الاستخدام وصقل التفاصيل وتكييف المنتج مع تطور الاحتياجات.',
            },
          ],
        },
        {
          eyebrow: 'قيمة الأعمال',
          heading: 'عمل رقمي مرتبط بالعمليات',
          body: 'التركيز على أنظمة مفيدة وسير عمل أوضح ومنتجات رقمية تدعم نشاطا تجاريا حقيقيا.',
          items: [
            {
              title: 'تجربة العملاء',
              body: 'واجهات وتدفقات مصممة حول الأشخاص الذين يستخدمونها.',
            },
            {
              title: 'تفكير المنتج',
              body: 'قرارات تتشكل حسب القيمة وإمكانية التنفيذ وقابلية الصيانة الطويلة.',
            },
          ],
        },
      ],
      cta: {
        heading: 'ناقش مبادرة رقمية',
        body: 'شارك الحاجة التشغيلية أو فكرة المنصة أو سير عمل AI وستراجع Heavens أفضل خطوة تالية.',
        label: 'ابدأ محادثة',
      },
    },
    media: {
      ...englishServicePages.media,
      eyebrow: 'محتوى / اجتماعي / إنتاج',
      heroSecondaryLabel: 'تركيز إبداعي',
      heroItems: ['إنتاج المحتوى', 'وسائل التواصل', 'التصوير', 'دعم الحملات'],
      services: {
        eyebrow: 'القدرات',
        heading: 'القدرات الإبداعية',
        intro: 'خدمات محتوى وإنتاج للعلامات والمنتجات والمنصات الحديثة.',
        cards: [
          {
            title: 'إنتاج المحتوى',
            body: 'تخطيط وإنتاج لتواصل العلامة ووسائل التواصل وقنوات الفيديو.',
          },
          {
            title: 'إنشاء بمساعدة AI',
            body: 'استخدام مسؤول لأدوات AI لدعم سير العمل الإبداعي والتواصل التجاري.',
          },
          {
            title: 'دعم الحملات',
            body: 'مواد إبداعية وإنتاج إعلامي متوافق مع أهداف العمل واحتياجات الجمهور.',
          },
        ],
      },
      detailSections: [
        {
          eyebrow: 'الصيغ',
          heading: 'عمل إبداعي عبر القنوات الحديثة',
          body: 'يمكن للعمل الإعلامي دعم تواصل العلامة وتخطيط المحتوى ومواد الحملات والسرد الموجه للمنصات.',
          items: [
            {
              title: 'محتوى اجتماعي',
              body: 'تخطيط محتوى ومواد لتواصل وسائل التواصل الاجتماعي.',
            },
            {
              title: 'فيديو وتصوير',
              body: 'دعم إنتاجي للتواصل البصري والحملات.',
            },
            {
              title: 'تواصل العلامة',
              body: 'مواد إبداعية متوافقة مع أهداف العمل واحتياجات الجمهور.',
            },
          ],
        },
        {
          eyebrow: 'إنشاء بمساعدة AI',
          heading: 'دعم إبداعي مسؤول',
          body: 'قد تدعم أدوات AI التفكير الإبداعي وسير الإنتاج وعمليات المحتوى، بينما تبقى الادعاءات والمواد العامة النهائية خاضعة للمراجعة التجارية والقانونية.',
        },
      ],
      cta: {
        heading: 'خطط لمحادثة إبداعية',
        body: 'شارك سياق المنتج أو الحملة أو المنصة وستراجع Heavens كيف يمكن للدعم الإعلامي أن يخدم الهدف.',
        label: 'ابدأ محادثة',
      },
    },
  },
};

const contactFormCopy: Record<Locale, ContactFormCopy> = {
  hy: {
    heading: 'Կապի ձև',
    intro:
      'Ներկայացրեք ձեր հարցման հիմնական տեղեկությունը, և համապատասխան թիմը կդիտարկի այն:',
    requiredNote: '* Պարտադիր դաշտեր',
    optional: '(ըստ ցանկության)',
    labels: {
      fullName: 'Անուն ազգանուն',
      company: 'Ընկերություն',
      email: 'Էլ. հասցե',
      phone: 'Հեռախոս',
      country: 'Երկիր',
      enquiryType: 'Հարցման տեսակ',
      message: 'Հաղորդագրություն',
      privacyAcknowledgement:
        'Համաձայն եմ, որ Heavens-ը մշակի այս հարցումը պատասխանելու նպատակով:',
      privacyPolicy: 'Գաղտնիության քաղաքականություն',
      honeypot: 'Մի լրացրեք այս դաշտը՝',
    },
    selectEnquiryType: 'Ընտրեք հարցման տեսակը',
    enquiryTypes: {
      general: 'Ընդհանուր',
      'import-export': 'Ներմուծում և արտահանում',
      'product-sourcing': 'Ապրանքների որոնում',
      distribution: 'Բաշխում',
      software: 'Ծրագրային ապահովում',
      'digital-platform': 'Թվային հարթակ',
      'ai-solution': 'AI լուծում',
      'media-production': 'Մեդիա արտադրություն',
      'brand-partnership': 'Բրենդային համագործակցություն',
      other: 'Այլ',
    },
    status: {
      idle: 'Ուղարկել հարցումը',
      pending: 'Ուղարկվում է...',
      success: 'Շնորհակալություն։ Ձեր հարցումը ստացվել է։',
      failure: 'Ձեր հարցումը չհաջողվեց ուղարկել։ Ստուգեք կապը և կրկին փորձեք։',
    },
    errors: {
      summary: 'Խնդրում ենք ստուգել նշված դաշտերը։',
      requiredText: 'Մուտքագրեք առնվազն 2 նիշ։',
      email: 'Մուտքագրեք վավեր էլ. հասցե։',
      enquiryType: 'Ընտրեք հարցման տեսակը։',
      message: 'Մուտքագրեք առնվազն 10 նիշ։',
      privacy: 'Խնդրում ենք հաստատել գաղտնիության հայտարարությունը։',
      maxLength: 'Այս դաշտը չափազանց երկար է։',
    },
  },
  en: {
    heading: 'Contact form',
    intro:
      'Tell us a little about the enquiry and the right team will review it.',
    requiredNote: '* Required fields',
    optional: '(optional)',
    labels: {
      fullName: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      country: 'Country',
      enquiryType: 'Enquiry type',
      message: 'Message',
      privacyAcknowledgement:
        'I agree that Heavens may process this enquiry to respond.',
      privacyPolicy: 'Privacy Policy',
      honeypot: 'Do not fill this field:',
    },
    selectEnquiryType: 'Select an enquiry type',
    enquiryTypes: {
      general: 'General',
      'import-export': 'Import and export',
      'product-sourcing': 'Product sourcing',
      distribution: 'Distribution',
      software: 'Software',
      'digital-platform': 'Digital platform',
      'ai-solution': 'AI solution',
      'media-production': 'Media production',
      'brand-partnership': 'Brand partnership',
      other: 'Other',
    },
    status: {
      idle: 'Send enquiry',
      pending: 'Sending...',
      success: 'Thank you. Your enquiry has been received.',
      failure:
        'Your enquiry could not be sent. Please check your connection and try again.',
    },
    errors: {
      summary: 'Please check the highlighted fields.',
      requiredText: 'Please enter at least 2 characters.',
      email: 'Please enter a valid email address.',
      enquiryType: 'Please select an enquiry type.',
      message: 'Please enter at least 10 characters.',
      privacy: 'Please acknowledge the privacy statement.',
      maxLength: 'This field is too long.',
    },
  },
  ru: {
    heading: 'Контактная форма',
    intro: 'Кратко опишите запрос, и соответствующая команда рассмотрит его.',
    requiredNote: '* Обязательные поля',
    optional: '(необязательно)',
    labels: {
      fullName: 'Полное имя',
      company: 'Компания',
      email: 'Эл. почта',
      phone: 'Телефон',
      country: 'Страна',
      enquiryType: 'Тип запроса',
      message: 'Сообщение',
      privacyAcknowledgement:
        'Я согласен, что Heavens может обработать этот запрос для ответа.',
      privacyPolicy: 'Политика конфиденциальности',
      honeypot: 'Не заполняйте это поле:',
    },
    selectEnquiryType: 'Выберите тип запроса',
    enquiryTypes: {
      general: 'Общий вопрос',
      'import-export': 'Импорт и экспорт',
      'product-sourcing': 'Поиск продукции',
      distribution: 'Дистрибуция',
      software: 'Программное обеспечение',
      'digital-platform': 'Цифровая платформа',
      'ai-solution': 'AI-решение',
      'media-production': 'Медиа-производство',
      'brand-partnership': 'Партнерство с брендом',
      other: 'Другое',
    },
    status: {
      idle: 'Отправить запрос',
      pending: 'Отправка...',
      success: 'Спасибо. Ваш запрос получен.',
      failure:
        'Не удалось отправить запрос. Проверьте подключение и попробуйте еще раз.',
    },
    errors: {
      summary: 'Проверьте выделенные поля.',
      requiredText: 'Введите не менее 2 символов.',
      email: 'Введите корректный адрес электронной почты.',
      enquiryType: 'Выберите тип запроса.',
      message: 'Введите не менее 10 символов.',
      privacy: 'Подтвердите уведомление о конфиденциальности.',
      maxLength: 'Это поле слишком длинное.',
    },
  },
  de: {
    heading: 'Kontaktformular',
    intro:
      'Beschreiben Sie kurz Ihre Anfrage. Das passende Team wird sie prüfen.',
    requiredNote: '* Pflichtfelder',
    optional: '(optional)',
    labels: {
      fullName: 'Vollständiger Name',
      company: 'Unternehmen',
      email: 'E-Mail',
      phone: 'Telefon',
      country: 'Land',
      enquiryType: 'Art der Anfrage',
      message: 'Nachricht',
      privacyAcknowledgement:
        'Ich stimme zu, dass Heavens diese Anfrage zur Antwort verarbeiten darf.',
      privacyPolicy: 'Datenschutzerklärung',
      honeypot: 'Dieses Feld nicht ausfüllen:',
    },
    selectEnquiryType: 'Art der Anfrage auswählen',
    enquiryTypes: {
      general: 'Allgemein',
      'import-export': 'Import und Export',
      'product-sourcing': 'Produktsuche',
      distribution: 'Distribution',
      software: 'Software',
      'digital-platform': 'Digitale Plattform',
      'ai-solution': 'KI-Lösung',
      'media-production': 'Medienproduktion',
      'brand-partnership': 'Markenpartnerschaft',
      other: 'Sonstiges',
    },
    status: {
      idle: 'Anfrage senden',
      pending: 'Wird gesendet...',
      success: 'Vielen Dank. Ihre Anfrage wurde empfangen.',
      failure:
        'Ihre Anfrage konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    },
    errors: {
      summary: 'Bitte prüfen Sie die markierten Felder.',
      requiredText: 'Bitte geben Sie mindestens 2 Zeichen ein.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      enquiryType: 'Bitte wählen Sie eine Art der Anfrage aus.',
      message: 'Bitte geben Sie mindestens 10 Zeichen ein.',
      privacy: 'Bitte bestätigen Sie den Datenschutzhinweis.',
      maxLength: 'Dieses Feld ist zu lang.',
    },
  },
  fa: {
    heading: 'فرم تماس',
    intro: 'کمی درباره درخواست خود بنویسید تا تیم مربوطه آن را بررسی کند.',
    requiredNote: '* فیلدهای ضروری',
    optional: '(اختیاری)',
    labels: {
      fullName: 'نام کامل',
      company: 'شرکت',
      email: 'ایمیل',
      phone: 'تلفن',
      country: 'کشور',
      enquiryType: 'نوع درخواست',
      message: 'پیام',
      privacyAcknowledgement:
        'می‌پذیرم که Heavens این درخواست را برای پاسخ‌گویی پردازش کند.',
      privacyPolicy: 'سیاست حریم خصوصی',
      honeypot: 'این فیلد را پر نکنید:',
    },
    selectEnquiryType: 'نوع درخواست را انتخاب کنید',
    enquiryTypes: {
      general: 'عمومی',
      'import-export': 'واردات و صادرات',
      'product-sourcing': 'تامین محصول',
      distribution: 'توزیع',
      software: 'نرم‌افزار',
      'digital-platform': 'پلتفرم دیجیتال',
      'ai-solution': 'راهکار هوش مصنوعی',
      'media-production': 'تولید رسانه',
      'brand-partnership': 'همکاری برند',
      other: 'سایر',
    },
    status: {
      idle: 'ارسال درخواست',
      pending: 'در حال ارسال...',
      success: 'متشکریم. درخواست شما دریافت شد.',
      failure:
        'درخواست شما ارسال نشد. اتصال خود را بررسی کنید و دوباره تلاش کنید.',
    },
    errors: {
      summary: 'لطفا فیلدهای مشخص‌شده را بررسی کنید.',
      requiredText: 'لطفا حداقل 2 نویسه وارد کنید.',
      email: 'لطفا یک ایمیل معتبر وارد کنید.',
      enquiryType: 'لطفا نوع درخواست را انتخاب کنید.',
      message: 'لطفا حداقل 10 نویسه وارد کنید.',
      privacy: 'لطفا متن حریم خصوصی را تایید کنید.',
      maxLength: 'این فیلد بیش از حد طولانی است.',
    },
  },
  ar: {
    heading: 'نموذج التواصل',
    intro: 'اكتب نبذة قصيرة عن طلبك وسيراجعه الفريق المناسب.',
    requiredNote: '* حقول مطلوبة',
    optional: '(اختياري)',
    labels: {
      fullName: 'الاسم الكامل',
      company: 'الشركة',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      country: 'الدولة',
      enquiryType: 'نوع الطلب',
      message: 'الرسالة',
      privacyAcknowledgement: 'أوافق على أن تعالج Heavens هذا الطلب للرد عليه.',
      privacyPolicy: 'سياسة الخصوصية',
      honeypot: 'لا تملأ هذا الحقل:',
    },
    selectEnquiryType: 'اختر نوع الطلب',
    enquiryTypes: {
      general: 'عام',
      'import-export': 'الاستيراد والتصدير',
      'product-sourcing': 'توريد المنتجات',
      distribution: 'التوزيع',
      software: 'البرمجيات',
      'digital-platform': 'منصة رقمية',
      'ai-solution': 'حل ذكاء اصطناعي',
      'media-production': 'إنتاج إعلامي',
      'brand-partnership': 'شراكة مع علامة تجارية',
      other: 'أخرى',
    },
    status: {
      idle: 'إرسال الطلب',
      pending: 'جار الإرسال...',
      success: 'شكرا لك. تم استلام طلبك.',
      failure: 'تعذر إرسال طلبك. تحقق من الاتصال وحاول مرة أخرى.',
    },
    errors: {
      summary: 'يرجى مراجعة الحقول المحددة.',
      requiredText: 'يرجى إدخال حرفين على الأقل.',
      email: 'يرجى إدخال بريد إلكتروني صالح.',
      enquiryType: 'يرجى اختيار نوع الطلب.',
      message: 'يرجى إدخال 10 أحرف على الأقل.',
      privacy: 'يرجى تأكيد بيان الخصوصية.',
      maxLength: 'هذا الحقل طويل جدا.',
    },
  },
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
    nav: navLabels[locale],
    actions: actionLabels[locale],
    social: socialLabels[locale],
    form: contactFormCopy[locale],
    servicePages: localizedServicePages[locale],
    legal: {
      hy: 'Նախագծային բովանդակություն՝ սպասում է իրավական և լեզվական վերանայման։',
      en: 'Draft content - pending legal and translation review.',
      ru: 'Черновой контент — ожидает юридической и языковой проверки.',
      de: 'Entwurfsinhalt - rechtliche und sprachliche Prüfung ausstehend.',
      fa: 'محتوای پیش‌نویس - در انتظار بررسی حقوقی و زبانی.',
      ar: 'محتوى مسودة - بانتظار المراجعة القانونية واللغوية.',
    }[locale],
    draftNotice: {
      hy: 'Բովանդակությունը սպասում է վերջնական հաստատման։',
      en: 'Content pending final approval.',
      ru: 'Контент ожидает финального утверждения.',
      de: 'Inhalt wartet auf finale Freigabe.',
      fa: 'محتوا در انتظار تأیید نهایی است.',
      ar: 'المحتوى بانتظار الموافقة النهائية.',
    }[locale],
    pages,
  };
}
