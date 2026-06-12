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

test('contact form contains Netlify fields', async ({ page }) => {
  await page.goto('/en/contact/');
  await expect(page.locator('form[name="premium-contact"]')).toHaveAttribute(
    'data-netlify',
    'true',
  );
  await expect(page.locator('input[name="form-name"]')).toHaveValue(
    'premium-contact',
  );
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
