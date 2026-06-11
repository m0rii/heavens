import { expect, test } from '@playwright/test';

test('localized homepage loads with lang and dir', async ({ page }) => {
  await page.goto('/fa/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fa');
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
  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('mobile keeps language separate from navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  await expect(
    page.getByRole('button', { name: /current language/i }),
  ).toContainText('EN');
  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  const mobileNav = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(mobileNav).toBeVisible();
  await expect(mobileNav.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(mobileNav.getByRole('link', { name: 'Business' })).toBeVisible();
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
