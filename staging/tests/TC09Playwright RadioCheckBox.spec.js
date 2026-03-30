//Radio Button and CheckBox

import { test, expect } from '@playwright/test';

test('Playwright locators demo', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout');
    // Select the "Guest Checkout" radio button
});

test('Playwright locators - Radio Button and CheckBox', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout');

    // Select the "Guest Checkout" radio button
    const guestCheckoutRadio = page.locator('input[type="radio"][value="guest"]');
    await guestCheckoutRadio.check();
    await expect(guestCheckoutRadio).toBeChecked();
    // Select the "I have read and agree to the Terms & Conditions" checkbox
    const termsCheckbox = page.locator('input[type="checkbox"][name="agree"]');

    await termsCheckbox.check();


    await expect(termsCheckbox).toBeChecked();
    // Uncheck the checkbox
    await termsCheckbox.uncheck();
    await expect(termsCheckbox).not.toBeChecked();
});


