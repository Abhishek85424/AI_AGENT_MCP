import { test, expect } from '@playwright/test';

test('Login Rahul Shetty Academy', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill credentials
  await page.fill('#username', 'rahulshettyacademy');
  await page.fill('#password', 'learning');

  // Select 'user' radio if present
  const userRadio = page.locator('input[value="user"]');
  if (await userRadio.count()) await userRadio.click();

  // Accept terms if checkbox exists
  const terms = page.locator('#terms');
  if (await terms.count()) await terms.check();

  // Click sign in using multiple fallback selectors
  const signInSelectors = ['#signInBtn', 'input[value="Sign In"]', 'button[type="submit"]', 'button:has-text("Sign In")'];
  for (const sel of signInSelectors) {
    const el = page.locator(sel);
    if (await el.count()) { await el.click(); break; }
  }

  // Wait for navigation and assert we reached a post-login page
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/shop|dashboard|angularpractice|checkout|products/);
});
