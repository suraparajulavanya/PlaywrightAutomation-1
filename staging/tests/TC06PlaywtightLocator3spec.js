

import { test, expect } from '@playwright/test';

test('Playwright Locators  - CSS -3', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // login 

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();
    //using Nth - chaild

    await page.locator('.oxd-main-menu').nth(1).click();
