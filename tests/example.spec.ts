import { test, expect } from '@playwright/test';

test.only('Example: has title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
  const title = 'Abhi';
  console.log(`Title is: ${title}m`);
});

test('Example: get started link', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);

});
