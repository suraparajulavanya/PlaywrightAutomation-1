// CSS LOCATORS
//WAy to writen CSS LOcators

import { test, expect } from '@playwright/test';

test('Playwright locators - CSS', async ({ page }) => {

    await page .goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //1. Using Tag and Attribute and value
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();


