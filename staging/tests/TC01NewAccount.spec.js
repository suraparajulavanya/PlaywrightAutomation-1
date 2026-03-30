// Create a new account with valid email and password combination


import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('create a new account with valid email and password combination', async ({ page }) => {

    // open the website
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.waitForLoadState('networkidle');

    await page.setViewportSize({ width: 1920, height: 1080 });
    const myAccount = page.locator('text=My Account').first();
    await myAccount.scrollIntoViewIfNeeded();
    await myAccount.evaluate(node => node.click());

    // site can navigate to login; go directly to register page for reliability
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // Fill in the registration form
    await page.waitForSelector('input[name="firstname"]', { state: 'visible' });
    await page.fill('input[name="firstname"]', 'Ram');
    await page.fill('input[name="lastname"]', 's');
    await page.fill('input[name="email"]', 'lavanyastockholm@gmail.com');
    await page.fill('input[name="telephone"]', '1234567890');
    await page.fill('input[name="password"]', 'Admin123');
    await page.fill('input[name="confirm"]', 'Admin123');
    await page.click('label[for="input-agree"]');
    await page.click('text=Continue');
});