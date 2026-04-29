// CSS LOCATORS
//WAy to writen CSS LOcators

import { test, expect } from '@playwright/test';

test('Playwright locators - CSS', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 3. Using ID
    // Syntax = id value
    // Syntax - input #idvalue

    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator('button[type="submit"]').click(submit);

});
