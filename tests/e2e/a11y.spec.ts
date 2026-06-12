import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('English homepage has no critical axe violations', async ({ page }) => {
  await page.goto('/en/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter((violation) => violation.impact === 'critical'),
  ).toEqual([]);
});

test('English contact form has no critical axe violations', async ({
  page,
}) => {
  await page.goto('/en/contact/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter((violation) => violation.impact === 'critical'),
  ).toEqual([]);
});

test('English service pages have no critical axe violations', async ({
  page,
}) => {
  for (const slug of ['business', 'technology', 'media']) {
    await page.goto(`/en/${slug}/`);
    const results = await new AxeBuilder({ page }).analyze();
    expect(
      results.violations.filter((violation) => violation.impact === 'critical'),
    ).toEqual([]);
  }
});
