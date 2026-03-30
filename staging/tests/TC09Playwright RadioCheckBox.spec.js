//Radio Button and CheckBox

import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Playwright locators demo', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('networkidle');
    
    // Select radio button by value
    await page.check('input[value="female"]');
    await expect(page.locator('input[value="female"]')).toBeChecked();
});

test('Playwright locators - Radio Button and CheckBox', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('networkidle');

    // Select radio button
    await page.check('input[id="male"]');
    await expect(page.locator('input[id="male"]')).toBeChecked();
    
    // Select checkboxes
    await page.check('input[id="sunday"]');
    await expect(page.locator('input[id="sunday"]')).toBeChecked();
    
    // Uncheck checkbox
    await page.uncheck('input[id="sunday"]');
    await expect(page.locator('input[id="sunday"]')).not.toBeChecked();
});


