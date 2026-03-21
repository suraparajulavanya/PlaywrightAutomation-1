


//CSS loators //case cade section
//Xpath loaators
// Text locators
// Playwright locators
// Locators in Playwright 
// 8 Tryps of locators in Playwright

//HTml - Hyper Text Markup Language


<input data-v-1f99f73c="" class="oxd-input oxd-input--active" type="password" name="password" placeholder="Password"></input>

// Tag
// Attribute
//Value

import { test, expect } from '@playwright/test';

test('Playwright locators demo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click()
    expect(page.geturl()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
