import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Register and Login with same account', async ({ page }) => {

  // Open website
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.waitForLoadState('networkidle');
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Go to Register
  const myAccount = page.locator('text=My account').first();
  await myAccount.scrollIntoViewIfNeeded();
  await myAccount.evaluate(node => node.click());

  // Generate dynamic email
  const email = `testuser${Date.now()}@mail.com`;
  const password = 'Password@123';

  // Direct navigate to register to avoid flaky clicks
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

  // Fill registration form
  await page.fill('#input-firstname', 'Lavanya');
  await page.fill('#input-lastname', 'Test');
  await page.fill('#input-email', email);
  await page.fill('#input-telephone', '1234567890');
  await page.fill('#input-password', password);
  await page.fill('#input-confirm', password);

  await page.click('label[for="input-agree"]');
  await page.click('input[value="Continue"]');

  // Verify account created
  await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');
  await page.waitForTimeout(1000);

  // Navigate to account page first
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
  await page.waitForLoadState('networkidle');

  // Logout after registration
  const logoutLink = page.locator('text=Logout').first();
  await logoutLink.evaluate(node => node.click());
  await page.waitForLoadState('networkidle');

  // Go to Login page - navigate directly after logout
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.waitForLoadState('networkidle');

  // Login with same credentials
  await page.waitForSelector('#input-email', { state: 'visible' });
  await page.fill('#input-email', email);
  await page.fill('#input-password', password);
  await page.click('input[value="Login"]');

  // Assertion: successful login
  await expect(page.locator('h2')).toContainText('My Account');
});