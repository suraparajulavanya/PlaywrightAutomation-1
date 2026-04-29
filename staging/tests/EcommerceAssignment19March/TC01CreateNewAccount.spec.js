//Create a new account with valid email and password combination
import {test, expect} from 'playwright/test'

test('Create New Account', async ({page}) => {
    import { test, expect } from '@playwright/test';

test('Register new account with valid details', async ({ page }) => {

  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

  const timestamp = Date.now();
  const email = `testuser${timestamp}@mail.com`;

  await page.fill('#input-firstname', 'John');
  await page.fill('#input-lastname', 'Doe');
  await page.fill('#input-email', email);
  await page.fill('#input-telephone', '9876543210');
  await page.fill('#input-password', 'Test@123');
  await page.fill('#input-confirm', 'Test@123');

  await page.check('input[name="agree"]');

  await page.click('input[value="Continue"]');

  await expect(page.locator('h1')).toHaveText('Your Account Has Been Created!');
});
})
