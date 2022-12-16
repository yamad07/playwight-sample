import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Next Ambassadors »' }).click();
  await page.getByRole('heading', { name: 'Meet the Ambassadors#​' }).click();
  await expect(page).toHaveURL(/.*ambassadors/);
});
