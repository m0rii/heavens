import type { AnyRouteSlug } from '@/config/routes';
import type { EnquiryType } from '@/lib/forms';
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
  form: ContactFormCopy;
  legal: string;
  draftNotice: string;
  pages: Record<AnyRouteSlug, PageCopy>;
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
      'Beschreiben Sie kurz Ihre Anfrage. Das passende Team wird sie pruefen.',
    requiredNote: '* Pflichtfelder',
    optional: '(optional)',
    labels: {
      fullName: 'Vollstaendiger Name',
      company: 'Unternehmen',
      email: 'E-Mail',
      phone: 'Telefon',
      country: 'Land',
      enquiryType: 'Art der Anfrage',
      message: 'Nachricht',
      privacyAcknowledgement:
        'Ich stimme zu, dass Heavens diese Anfrage zur Antwort verarbeiten darf.',
      privacyPolicy: 'Datenschutzerklaerung',
      honeypot: 'Dieses Feld nicht ausfuellen:',
    },
    selectEnquiryType: 'Art der Anfrage auswaehlen',
    enquiryTypes: {
      general: 'Allgemein',
      'import-export': 'Import und Export',
      'product-sourcing': 'Produktsuche',
      distribution: 'Distribution',
      software: 'Software',
      'digital-platform': 'Digitale Plattform',
      'ai-solution': 'KI-Loesung',
      'media-production': 'Medienproduktion',
      'brand-partnership': 'Markenpartnerschaft',
      other: 'Sonstiges',
    },
    status: {
      idle: 'Anfrage senden',
      pending: 'Wird gesendet...',
      success: 'Vielen Dank. Ihre Anfrage wurde empfangen.',
      failure:
        'Ihre Anfrage konnte nicht gesendet werden. Bitte pruefen Sie Ihre Verbindung und versuchen Sie es erneut.',
    },
    errors: {
      summary: 'Bitte pruefen Sie die markierten Felder.',
      requiredText: 'Bitte geben Sie mindestens 2 Zeichen ein.',
      email: 'Bitte geben Sie eine gueltige E-Mail-Adresse ein.',
      enquiryType: 'Bitte waehlen Sie eine Art der Anfrage aus.',
      message: 'Bitte geben Sie mindestens 10 Zeichen ein.',
      privacy: 'Bitte bestaetigen Sie den Datenschutzhinweis.',
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
    form: contactFormCopy[locale],
    legal: 'Draft content - pending legal and translation review.',
    draftNotice:
      locale === 'en'
        ? 'Content pending final approval.'
        : 'Draft translation pending professional review.',
    pages,
  };
}
