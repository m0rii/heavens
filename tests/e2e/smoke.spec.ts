import { expect, test } from '@playwright/test';

test('localized homepage loads with lang and dir', async ({ page }) => {
  await page.goto('/ar/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('root chooses browser locale with Armenian fallback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'languages', {
      configurable: true,
      value: ['ja-JP', 'it-IT'],
    });
    Object.defineProperty(navigator, 'language', {
      configurable: true,
      value: 'ja-JP',
    });
  });

  await page.goto('/');
  await expect(page).toHaveURL(/\/hy\/$/);

  await page.goto('/');
  await page.evaluate(() =>
    window.localStorage.setItem('heavens:language', 'de'),
  );
  await page.goto('/');
  await expect(page).toHaveURL(/\/de\/$/);
});

test('root detects supported browser locale from language list', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'languages', {
      configurable: true,
      value: ['ja-JP', 'ar-AE'],
    });
    Object.defineProperty(navigator, 'language', {
      configurable: true,
      value: 'ja-JP',
    });
  });

  await page.goto('/');
  await expect(page).toHaveURL(/\/ar\/$/);
});

test('language switcher preserves equivalent route', async ({ page }) => {
  await page.goto('/en/technology/');
  const trigger = page.getByRole('button', { name: /current language/i });
  await expect(trigger).toContainText('EN');
  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('link', { name: /فارسی/ })).toHaveAttribute(
    'href',
    '/fa/technology/',
  );
  await expect(page.getByRole('link', { name: /العربية/ })).toHaveAttribute(
    'href',
    '/ar/technology/',
  );
  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('mobile keeps language separate from navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  await expect(
    page.getByRole('button', { name: /current language/i }),
  ).toContainText('EN');
  const menuButton = page.locator('[data-mobile-menu-trigger]');
  await expect(menuButton).toHaveAttribute('aria-label', 'Open navigation');
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(menuButton).toHaveAttribute('aria-label', 'Close navigation');
  const mobileNav = page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .last();
  await expect(mobileNav).toBeVisible();
  await expect(mobileNav.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(mobileNav.getByRole('link', { name: 'Business' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(menuButton).toHaveAttribute('aria-label', 'Open navigation');
});

test('mobile drawer handles overlay, focus, scroll lock and language exclusivity', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');

  const languageTrigger = page.getByRole('button', {
    name: /current language/i,
  });
  const menuButton = page.locator('[data-mobile-menu-trigger]');
  const overlay = page.locator('[data-mobile-drawer-overlay]');
  const drawer = page.locator('[data-mobile-drawer]');

  await languageTrigger.click();
  await expect(languageTrigger).toHaveAttribute('aria-expanded', 'true');

  await menuButton.click();
  await expect(languageTrigger).toHaveAttribute('aria-expanded', 'false');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(drawer).toHaveClass(/is-open/);
  await expect(page.locator('body')).toHaveCSS('position', 'fixed');

  await page.keyboard.press('Tab');
  await expect(drawer).toContainText('Home');

  await expect(overlay).toHaveClass(/is-open/);
  await page.mouse.click(12, 420);
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(menuButton).toBeFocused();

  await menuButton.click();
  await page.keyboard.press('Escape');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('body')).not.toHaveCSS('position', 'fixed');
});

test('mobile sticky header and rtl drawer placement work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/ar/');

  const header = page.locator('[data-site-header]');
  const menuButton = page.locator('[data-mobile-menu-trigger]');
  const drawer = page.locator('[data-mobile-drawer]');

  await page.evaluate(() => window.scrollTo(0, 80));
  await expect(header).toHaveClass(/is-scrolled/);

  await menuButton.click();
  const box = await drawer.boundingBox();
  expect(box?.x).toBeLessThan(4);
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
});

test('mobile drawer language grid stays compact across mobile sizes', async ({
  page,
}) => {
  const viewports = [
    { width: 360, height: 640, columns: 2 },
    { width: 390, height: 844, columns: 3 },
    { width: 430, height: 932, columns: 3 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto('/en/technology/');
    await page.locator('[data-mobile-menu-trigger]').click();

    const grid = page.locator('.mobile-language-grid');
    const links = grid.locator('a');
    const cta = page.locator('.mobile-drawer-cta');

    await expect(page.locator('.mobile-drawer-section-label')).toHaveText(
      'Language',
    );
    await expect(links).toHaveCount(6);
    await expect(links.filter({ hasText: 'English' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    await expect(links.filter({ hasText: 'English' })).toContainText('✓');
    await expect(links.filter({ hasText: 'العربية' })).toHaveAttribute(
      'href',
      '/ar/technology/',
    );
    await expect(cta).toBeVisible();

    const metrics = await page.evaluate(() => {
      const boxes = Array.from(
        document.querySelectorAll('.mobile-language-grid a'),
      ).map((item) => item.getBoundingClientRect());
      const cta = document
        .querySelector('.mobile-drawer-cta')
        ?.getBoundingClientRect();
      const first = boxes[0];
      const second = boxes[1];
      const third = boxes[2];

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        firstTop: first ? Math.round(first.top) : 0,
        secondTop: second ? Math.round(second.top) : 0,
        thirdTop: third ? Math.round(third.top) : 0,
        ctaBottom: cta ? Math.round(cta.bottom) : 0,
        viewportHeight: window.innerHeight,
      };
    });

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
    expect(metrics.secondTop).toBe(metrics.firstTop);
    if (viewport.columns === 3) {
      expect(metrics.thirdTop).toBe(metrics.firstTop);
      expect(metrics.ctaBottom).toBeLessThanOrEqual(metrics.viewportHeight);
    } else {
      expect(metrics.thirdTop).toBeGreaterThan(metrics.firstTop);
    }

    await page.keyboard.press('Tab');
    const focusedOutline = await page.evaluate(() => {
      const active = document.activeElement;
      return active ? getComputedStyle(active).outlineStyle : '';
    });
    expect(focusedOutline).not.toBe('none');
  }
});

test('service pages use compact differentiated editorial layouts', async ({
  page,
}) => {
  const servicePages = [
    {
      slug: 'business',
      serviceHeading: 'Commercial capabilities',
      panelLabel: 'Commercial focus',
    },
    {
      slug: 'technology',
      serviceHeading: 'Digital capabilities',
      panelLabel: 'Product process',
    },
    {
      slug: 'media',
      serviceHeading: 'Creative capabilities',
      panelLabel: 'Creative focus',
    },
  ];

  for (const servicePage of servicePages) {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto(`/en/${servicePage.slug}/`);

    await expect(
      page.locator(`[data-service-page="${servicePage.slug}"]`),
    ).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.getByRole('heading', {
        name: servicePage.serviceHeading,
        exact: true,
      }),
    ).toBeVisible();
    await expect(
      page.locator('.service-hero-panel', {
        hasText: servicePage.panelLabel,
      }),
    ).toBeVisible();
    await expect(page.locator('.service-card-index')).toHaveCount(0);
    await expect(page.locator('.service-process-preview span')).toHaveCount(0);
    await expect(
      page.locator('.desktop-nav a[aria-current="page"]'),
    ).toHaveText(new RegExp(servicePage.slug, 'i'));

    const desktopMetrics = await page.evaluate(() => {
      const hero = document
        .querySelector('.service-hero')
        ?.getBoundingClientRect();
      const h1 = document.querySelector('h1')?.getBoundingClientRect();
      const services = document
        .querySelector('.service-section-primary')
        ?.getBoundingClientRect();
      const cards = Array.from(document.querySelectorAll('.service-card')).map(
        (card) => card.getBoundingClientRect(),
      );

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        heroHeight: hero?.height || 0,
        h1Width: h1?.width || 0,
        h1Height: h1?.height || 0,
        servicesTop: services?.top || 0,
        viewportHeight: window.innerHeight,
        firstCardTop: Math.round(cards[0]?.top || 0),
        secondCardTop: Math.round(cards[1]?.top || 0),
        thirdCardTop: Math.round(cards[2]?.top || 0),
      };
    });

    expect(desktopMetrics.scrollWidth).toBeLessThanOrEqual(
      desktopMetrics.clientWidth,
    );
    expect(desktopMetrics.heroHeight).toBeLessThan(680);
    expect(desktopMetrics.h1Width).toBeGreaterThan(360);
    expect(desktopMetrics.h1Height).toBeLessThan(330);
    expect(desktopMetrics.servicesTop).toBeLessThan(
      desktopMetrics.viewportHeight,
    );
    expect(desktopMetrics.secondCardTop).toBe(desktopMetrics.firstCardTop);
    expect(desktopMetrics.thirdCardTop).toBe(desktopMetrics.firstCardTop);
  }
});

test('service pages remain responsive across mobile tablet desktop and rtl', async ({
  page,
}) => {
  const viewports = [
    { width: 360, height: 640, expectedColumns: 1 },
    { width: 390, height: 844, expectedColumns: 1 },
    { width: 430, height: 932, expectedColumns: 1 },
    { width: 768, height: 1024, expectedColumns: 2 },
    { width: 1024, height: 768, expectedColumns: 2 },
    { width: 1440, height: 900, expectedColumns: 3 },
    { width: 1536, height: 864, expectedColumns: 3 },
    { width: 1920, height: 1080, expectedColumns: 3 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    await page.goto('/en/technology/');

    const metrics = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.service-card')).map(
        (card) => card.getBoundingClientRect(),
      );
      const heroPanel = document
        .querySelector('.service-hero-panel')
        ?.getBoundingClientRect();

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        cardTops: cards.map((card) => Math.round(card.top)),
        heroPanelHeight: heroPanel?.height || 0,
      };
    });

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
    expect(metrics.heroPanelHeight).toBeGreaterThan(120);
    expect(
      metrics.cardTops.filter((top) => top === metrics.cardTops[0]).length,
    ).toBe(viewport.expectedColumns);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/ar/media/');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('[data-service-page="media"]')).toBeVisible();
  const rtlWidth = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(rtlWidth).toBeLessThanOrEqual(0);
});

test('about and contact pages use compact internal heroes', async ({
  page,
}) => {
  for (const slug of ['about', 'contact']) {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto(`/en/${slug}/`);

    await expect(page.locator('.compact-page-hero')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const metrics = await page.evaluate((pageSlug) => {
      const hero = document
        .querySelector('.compact-page-hero')
        ?.getBoundingClientRect();
      const firstSection = document
        .querySelector('.compact-page-hero + .section')
        ?.getBoundingClientRect();
      const contactForm = document
        .querySelector('.contact-form')
        ?.getBoundingClientRect();
      const h1 = document.querySelector('h1')?.getBoundingClientRect();

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        heroHeight: hero?.height || 0,
        firstSectionTop: firstSection?.top || 0,
        contactFormTop: contactForm?.top || 0,
        h1Height: h1?.height || 0,
        viewportHeight: window.innerHeight,
        isContact: pageSlug === 'contact',
      };
    }, slug);

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
    if (metrics.isContact) {
      expect(metrics.heroHeight).toBeGreaterThan(420);
      expect(metrics.heroHeight).toBeLessThan(600);
    } else {
      expect(metrics.heroHeight).toBeLessThan(560);
    }
    expect(metrics.h1Height).toBeLessThan(240);
    expect(metrics.firstSectionTop).toBeLessThan(metrics.viewportHeight);
    if (metrics.isContact) {
      expect(metrics.contactFormTop).toBeLessThan(metrics.viewportHeight * 1.7);
    }
  }
});

test('contact page presents premium enquiry guidance responsively', async ({
  page,
}) => {
  const viewports = [
    { width: 360, height: 640 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 900 },
    { width: 1024, height: 768 },
    { width: 1366, height: 768 },
    { width: 1440, height: 900 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto('/en/contact/');

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Start a conversation.',
    );
    await expect(page.locator('.contact-hero-panel')).toContainText(
      'Commercial partnerships',
    );
    await expect(page.locator('.contact-hero-panel')).toContainText(
      'AI solutions',
    );
    await expect(page.locator('.contact-info')).toContainText(
      'Please use the enquiry form below.',
    );
    await expect(page.locator('.contact-privacy-note')).toContainText(
      'We use the information you provide only to review and respond to your enquiry.',
    );
    await expect(
      page.getByRole('link', { name: 'Follow Heavens on Instagram' }).first(),
    ).toHaveAttribute('href', 'https://www.instagram.com/heavens_holding/');
    await expect(page.getByText(/gmail/i)).toHaveCount(0);

    const metrics = await page.evaluate(() => {
      const hero = document
        .querySelector('.contact-page-hero')
        ?.getBoundingClientRect();
      const form = document
        .querySelector('.contact-form')
        ?.getBoundingClientRect();
      const checkbox = document
        .querySelector('#privacy-acknowledgement')
        ?.getBoundingClientRect();
      const checkboxLabel = document
        .querySelector('label[for="privacy-acknowledgement"]')
        ?.getBoundingClientRect();

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        heroHeight: hero?.height || 0,
        heroTop: hero?.top || 0,
        formTop: form?.top || 0,
        checkboxTop: checkbox?.top || 0,
        checkboxLabelTop: checkboxLabel?.top || 0,
      };
    });

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
    expect(metrics.heroHeight).toBeGreaterThan(300);
    expect(metrics.heroHeight).toBeLessThan(viewport.width >= 1024 ? 610 : 760);
    expect(metrics.formTop).toBeLessThan(viewport.height * 1.75);
    expect(
      Math.abs(metrics.checkboxTop - metrics.checkboxLabelTop),
    ).toBeLessThan(12);
  }

  await page.locator('#full-name').focus();
  await expect(page.locator('#full-name')).toBeFocused();
});

test('contact form contains Netlify fields', async ({ page }) => {
  await page.goto('/en/contact/');
  const form = page.locator('form[name="premium-contact"]');
  await expect(form).toHaveAttribute('data-netlify', 'true');
  await expect(form).toHaveAttribute('data-netlify-honeypot', 'bot-field');
  await expect(form).toHaveAttribute('method', 'POST');
  await expect(form).toHaveAttribute('action', /\/en\/contact\/success\/$/);
  await expect(page.locator('input[name="form-name"]')).toHaveValue(
    'premium-contact',
  );
  await expect(page.locator('input[name="locale"]')).toHaveValue('en');
  await expect(page.locator('input[name="bot-field"]')).toHaveAttribute(
    'tabindex',
    '-1',
  );
  await expect(page.locator('#full-name')).toHaveAttribute('minlength', '2');
  await expect(page.locator('#full-name')).toHaveAttribute('maxlength', '100');
  await expect(page.locator('#email')).toHaveAttribute('type', 'email');
  await expect(page.locator('#message')).toHaveAttribute('maxlength', '5000');
  await expect(page.locator('#privacy-acknowledgement')).toHaveAttribute(
    'value',
    'acknowledged',
  );
  await expect(page.locator('#enquiry-type option')).toHaveCount(11);
  await expect(page.locator('#enquiry-type option').first()).toHaveAttribute(
    'value',
    '',
  );
  await expect(
    page.locator('.checkbox-field').getByRole('link', {
      name: 'Privacy Policy',
      exact: true,
    }),
  ).toHaveAttribute('href', '/en/privacy/');
});

test('contact form shows localized validation without losing values', async ({
  page,
}) => {
  await page.goto('/en/contact/');

  await page.getByRole('button', { name: 'Send enquiry' }).click();
  await expect(page.locator('#form-error-summary')).toHaveText(
    'Please check the highlighted fields.',
  );
  await expect(page.locator('#full-name')).toHaveAttribute(
    'aria-invalid',
    'true',
  );
  await expect(page.locator('#email')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('#enquiry-type')).toHaveAttribute(
    'aria-invalid',
    'true',
  );
  await expect(page.locator('#message')).toHaveAttribute(
    'aria-invalid',
    'true',
  );
  await expect(page.locator('#privacy-acknowledgement')).toHaveAttribute(
    'aria-invalid',
    'true',
  );
  await expect(page.locator('#form-error-summary')).toBeFocused();

  await page.locator('#full-name').fill('  ');
  await page.locator('#email').fill('person@example.com');
  await page.locator('#enquiry-type').selectOption('software');
  await page.locator('#message').fill("SELECT * FROM work WHERE note = '<x>';");
  await page.locator('#privacy-acknowledgement').check();
  await page.getByRole('button', { name: 'Send enquiry' }).click();
  await expect(page.locator('#full-name-error')).toHaveText(
    'Please enter at least 2 characters.',
  );
  await expect(page.locator('#message-count')).toContainText('38 / 5000');
  await expect(page.locator('#message')).toHaveValue(
    "SELECT * FROM work WHERE note = '<x>';",
  );
});

test('contact form posts URL-encoded data and redirects on success', async ({
  page,
}) => {
  let postData = '';
  let contentType = '';

  await page.goto('/en/contact/');
  await page.route('**/', async (route) => {
    const request = route.request();
    if (request.method() !== 'POST') {
      await route.continue();
      return;
    }

    postData = request.postData() || '';
    contentType = request.headers()['content-type'] || '';
    await route.fulfill({ status: 200, body: 'OK' });
  });

  await page.locator('#full-name').fill('Անի Ivanova');
  await page.locator('#company').fill('Heavens Partner');
  await page.locator('#email').fill('ani@example.com');
  await page.locator('#phone').fill('+374 10 000000');
  await page.locator('#country').fill('Armenia');
  await page.locator('#enquiry-type').selectOption('ai-solution');
  await page.locator('#message').fill("AI solution request with SQL 'quotes'.");
  await page.locator('#privacy-acknowledgement').check();
  await page.getByRole('button', { name: 'Send enquiry' }).click();

  await expect(page).toHaveURL(/\/en\/contact\/success\/$/);
  expect(contentType).toContain('application/x-www-form-urlencoded');
  expect(postData).toContain('form-name=premium-contact');
  expect(postData).toContain('locale=en');
  expect(postData).toContain('enquiry-type=ai-solution');
  expect(postData).not.toContain('{');
});

test('contact form prevents duplicate submissions and preserves values on failure', async ({
  page,
}) => {
  let postCount = 0;

  await page.goto('/en/contact/');
  await page.route('**/', async (route) => {
    const request = route.request();
    if (request.method() !== 'POST') {
      await route.continue();
      return;
    }

    postCount += 1;
    await new Promise((resolve) => setTimeout(resolve, 250));
    await route.fulfill({ status: 500, body: 'Nope' });
  });

  await page.locator('#full-name').fill('Future Partner');
  await page.locator('#email').fill('partner@example.com');
  await page.locator('#enquiry-type').selectOption('distribution');
  await page.locator('#message').fill('Distribution partnership request.');
  await page.locator('#privacy-acknowledgement').check();

  const submit = page.getByRole('button', { name: 'Send enquiry' });
  await submit.dblclick();
  await expect(page.locator('#form-status')).toHaveText(
    'Your enquiry could not be sent. Please check your connection and try again.',
  );
  await expect(page.locator('#message')).toHaveValue(
    'Distribution partnership request.',
  );
  await expect(submit).toBeEnabled();
  await expect(submit).toHaveText('Send enquiry');
  expect(postCount).toBe(1);
});

test('instagram links and organization schema use confirmed account', async ({
  page,
}) => {
  await page.goto('/en/contact/');

  const instagramLinks = page.getByRole('link', {
    name: 'Follow Heavens on Instagram',
  });
  await expect(instagramLinks.first()).toHaveAttribute(
    'href',
    'https://www.instagram.com/heavens_holding/',
  );
  await expect(instagramLinks.first()).toHaveAttribute('target', '_blank');
  await expect(instagramLinks.first()).toHaveAttribute(
    'rel',
    /noopener noreferrer/,
  );
  await expect(page.locator('.contact-social-link')).toContainText(
    'Follow us on Instagram',
  );
  await expect(page.locator('body')).not.toContainText('@heavens_holding');

  const sameAs = await page
    .locator('script[type="application/ld+json"]')
    .first()
    .evaluate((node) => JSON.parse(node.textContent || '{}').sameAs);
  expect(sameAs).toContain('https://www.instagram.com/heavens_holding/');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  await page.locator('[data-mobile-menu-trigger]').click();
  await expect(
    page.locator(
      '.mobile-drawer-social[aria-label="Follow Heavens on Instagram"]',
    ),
  ).toBeVisible();
  await expect(page.locator('.mobile-drawer-social')).toContainText(
    'Follow us on Instagram',
  );
});

test('footer exposes company legal facts and required links', async ({
  page,
}) => {
  await page.goto('/en/');

  const footer = page.locator('footer');
  const footerBrand = footer.locator('.footer-brand');
  const footerBrandMeta = footer.locator('.footer-brand-meta');
  await expect(footer).toContainText('Heavens LLC');
  await expect(footerBrand.getByRole('img', { name: 'Heavens' })).toBeVisible();
  await expect(footerBrandMeta).toHaveText('Live the Dream.');
  await expect(footer).toContainText('Yerevan, Armenia');
  await expect(footer).toContainText('Registration No.: 50456518');
  await expect(footer).toContainText('Tax Code: 02660767');
  await expect(footer.getByRole('link', { name: 'Contact' })).toHaveAttribute(
    'href',
    '/en/contact/',
  );
  await expect(
    footer.getByRole('link', { name: 'Legal information.' }),
  ).toHaveAttribute('href', '/en/legal/');
  await expect(
    footer.getByRole('button', { name: 'Cookie settings' }),
  ).toBeVisible();

  const footerSystem = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    const meta = document.querySelector('.footer-brand-meta');
    const navLink = document.querySelector('.footer-nav a');
    const company = document.querySelector('.footer-company-details');
    const social = document.querySelector('.footer-social-link');
    const cookie = document.querySelector('.footer-cookie-settings');
    if (!footer || !meta || !navLink || !company || !social || !cookie) {
      return null;
    }

    const metaStyles = getComputedStyle(meta);
    const navStyles = getComputedStyle(navLink);
    const companyStyles = getComputedStyle(company);
    const socialStyles = getComputedStyle(social);
    const cookieStyles = getComputedStyle(cookie);

    return {
      footerBackground: getComputedStyle(footer).backgroundImage,
      dividerStyle: metaStyles.borderInlineStartStyle,
      dividerColor: metaStyles.borderInlineStartColor,
      navColor: navStyles.color,
      navWeight: navStyles.fontWeight,
      companyColor: companyStyles.color,
      socialBorderColor: socialStyles.borderColor,
      socialMinHeight: socialStyles.minHeight,
      socialWeight: socialStyles.fontWeight,
      cookieBorderStyle: cookieStyles.borderStyle,
      cookieWeight: cookieStyles.fontWeight,
    };
  });

  expect(footerSystem?.footerBackground).toContain('gradient');
  expect(footerSystem?.dividerStyle).toBe('solid');
  expect(footerSystem?.dividerColor).toBe('rgba(249, 160, 4, 0.42)');
  expect(footerSystem?.navColor).toBe('rgb(248, 244, 235)');
  expect(Number(footerSystem?.navWeight)).toBeLessThanOrEqual(600);
  expect(footerSystem?.companyColor).toBe('rgb(184, 179, 169)');
  expect(footerSystem?.socialBorderColor).toBe('rgba(105, 138, 59, 0.22)');
  expect(footerSystem?.socialMinHeight).toBe('38px');
  expect(Number(footerSystem?.socialWeight)).toBeLessThanOrEqual(650);
  expect(footerSystem?.cookieBorderStyle).toBe('none');
  expect(Number(footerSystem?.cookieWeight)).toBeLessThanOrEqual(600);
});

test('footer brand system remains responsive without overflow', async ({
  page,
}) => {
  const viewports = [
    { width: 360, height: 640 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto('/en/');

    const metrics = await page.evaluate(() => {
      const footer = document.querySelector('footer')?.getBoundingClientRect();
      const brand = document
        .querySelector('.footer-brand')
        ?.getBoundingClientRect();
      const meta = document
        .querySelector('.footer-brand-meta')
        ?.getBoundingClientRect();
      const metaText = document.querySelector('.footer-brand-meta');
      const actions = document
        .querySelector('.footer-actions')
        ?.getBoundingClientRect();
      const nav = document
        .querySelector('.footer-nav')
        ?.getBoundingClientRect();
      const company = document
        .querySelector('.footer-company-details')
        ?.getBoundingClientRect();
      const links = Array.from(document.querySelectorAll('.footer-nav > *'));
      const linkRects = links.map((link) => link.getBoundingClientRect());
      const firstLinkRect = linkRects[0];
      const secondLinkRect = linkRects[1];

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        footerHeight: Math.round(footer?.height || 0),
        brandWidth: Math.round(brand?.width || 0),
        metaWidth: Math.round(meta?.width || 0),
        metaHeight: Math.round(meta?.height || 0),
        sloganLines: metaText
          ? Math.round(
              (meta?.height || 0) /
                parseFloat(getComputedStyle(metaText).lineHeight),
            )
          : 0,
        actionsWidth: Math.round(actions?.width || 0),
        columnTops: [
          Math.round(brand?.top || 0),
          Math.round(nav?.top || 0),
          Math.round(company?.top || 0),
          Math.round(actions?.top || 0),
        ],
        navGap:
          firstLinkRect && secondLinkRect
            ? Math.round(secondLinkRect.top - firstLinkRect.bottom)
            : 0,
        navHeight: Math.round(nav?.height || 0),
      };
    });

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
    expect(metrics.footerHeight).toBeGreaterThan(110);
    expect(metrics.brandWidth).toBeGreaterThan(120);
    expect(metrics.metaWidth).toBeGreaterThan(70);
    expect(metrics.metaHeight).toBeGreaterThan(12);
    expect(metrics.sloganLines).toBeLessThanOrEqual(2);
    expect(metrics.actionsWidth).toBeGreaterThan(0);
    expect(metrics.navGap).toBeGreaterThanOrEqual(10);
    expect(metrics.navGap).toBeLessThanOrEqual(18);
    expect(metrics.navHeight).toBeLessThan(170);

    const uniqueTopRows = new Set(metrics.columnTops).size;
    if (viewport.width >= 1024) {
      expect(uniqueTopRows).toBe(1);
    } else if (viewport.width >= 768) {
      expect(uniqueTopRows).toBe(2);
    } else {
      expect(uniqueTopRows).toBe(4);
    }
  }
});

test('privacy consent banner stores essential-only choice', async ({
  page,
}) => {
  await page.goto('/en/');

  const banner = page.locator('[data-consent-banner]');
  await expect(banner).toBeVisible();
  await expect(banner).toContainText('Your privacy choices');

  await page.getByRole('button', { name: 'Essential only' }).click();
  await expect(banner).toBeHidden();

  const state = await page.evaluate(() =>
    JSON.parse(
      window.localStorage.getItem('heavens:privacy-consent:v1') || '{}',
    ),
  );
  expect(state).toMatchObject({
    version: 1,
    essential: true,
    analytics: false,
  });
  expect(typeof state.updatedAt).toBe('string');
});

test('privacy consent banner stores analytics choice and stays hidden', async ({
  page,
}) => {
  await page.goto('/en/');
  await page.getByRole('button', { name: 'Accept analytics' }).first().click();

  const state = await page.evaluate(() =>
    JSON.parse(
      window.localStorage.getItem('heavens:privacy-consent:v1') || '{}',
    ),
  );
  expect(state.analytics).toBe(true);

  await page.reload();
  await expect(page.locator('[data-consent-banner]')).toBeHidden();
});

test('privacy settings reopen from footer and update analytics choice', async ({
  page,
}) => {
  await page.goto('/en/');
  await page.getByRole('button', { name: 'Accept analytics' }).first().click();

  await page.getByRole('button', { name: 'Cookie settings' }).last().click();
  const panel = page.locator('[data-consent-panel]');
  await expect(panel).toBeVisible();
  await expect(
    panel.getByRole('checkbox', { name: /analytics/i }),
  ).toBeChecked();

  await panel.getByRole('checkbox', { name: /analytics/i }).uncheck();
  await panel.getByRole('button', { name: 'Save choices' }).click();

  const state = await page.evaluate(() =>
    JSON.parse(
      window.localStorage.getItem('heavens:privacy-consent:v1') || '{}',
    ),
  );
  expect(state.analytics).toBe(false);
});

test('privacy analytics helper is safe and currently a no-op', async ({
  page,
}) => {
  await page.goto('/en/');

  const helperState = await page.evaluate(() => {
    const privacy = (
      window as unknown as {
        HeavensPrivacy: {
          getStoredConsent: () => unknown;
          hasAnalyticsConsent: () => boolean;
          loadAnalyticsIfAllowed: () => boolean;
          saveConsent: (analytics: boolean) => unknown;
        };
      }
    ).HeavensPrivacy;

    window.localStorage.setItem('heavens:privacy-consent:v1', 'not-json');
    const invalid = privacy.getStoredConsent();
    window.localStorage.setItem(
      'heavens:privacy-consent:v1',
      JSON.stringify({
        version: 2,
        essential: true,
        analytics: true,
        updatedAt: new Date().toISOString(),
      }),
    );
    const mismatched = privacy.getStoredConsent();
    window.localStorage.removeItem('heavens:privacy-consent:v1');
    const noConsent = privacy.hasAnalyticsConsent();
    const loadResult = privacy.loadAnalyticsIfAllowed();
    privacy.saveConsent(true);
    const accepted = privacy.hasAnalyticsConsent();
    const acceptedLoadResult = privacy.loadAnalyticsIfAllowed();

    return {
      invalid,
      mismatched,
      noConsent,
      loadResult,
      accepted,
      acceptedLoadResult,
    };
  });

  expect(helperState.invalid).toBeNull();
  expect(helperState.mismatched).toBeNull();
  expect(helperState.noConsent).toBe(false);
  expect(helperState.loadResult).toBe(false);
  expect(helperState.accepted).toBe(true);
  expect(helperState.acceptedLoadResult).toBe(false);
});

test('privacy consent works in Persian RTL', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/fa/');

  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  const banner = page.locator('[data-consent-banner]');
  await expect(banner).toBeVisible();
  await banner
    .getByRole('button', { name: 'تنظیمات کوکی' })
    .click({ force: true });
  await expect(page.locator('[data-consent-panel]')).toBeVisible();

  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});
