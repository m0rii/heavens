import { expect, test } from '@playwright/test';

test('localized homepage loads with lang and dir', async ({ page }) => {
  await page.goto('/ar/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
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
