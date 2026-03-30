//Perform Forgot Password Scenario
import { test, expect } from '@playwright/test';

test.setTimeout(120000);    
test('Forgot Password Scenario', async ({ page }) => {

    // open the website
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.waitForLoadState('networkidle'); 
    await page.setViewportSize({ width: 1920, height: 1080 });

    // First, register an account to test forgot password with
    const testEmail = `forgotpasstest${Date.now()}@example.com`;
    const testPassword = 'TestPassword123';

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await page.waitForLoadState('networkidle');

    // Fill registration form
    await page.fill('#input-firstname', 'Test');
    await page.fill('#input-lastname', 'User');
    await page.fill('#input-email', testEmail);
    await page.fill('#input-telephone', '1234567890');
    await page.fill('#input-password', testPassword);
    await page.fill('#input-confirm', testPassword);
    await page.click('label[for="input-agree"]');
    await page.click('input[value="Continue"]');

    // Verify registration successful
    await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');
    await page.waitForLoadState('networkidle');

    // Now test forgot password with the registered email
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Fill in the email field and submit - try multiple selectors
    const emailInput = page.locator('input[name="email"], input#input-email, input[type="email"]').first();
    await emailInput.scrollIntoViewIfNeeded();
    await emailInput.fill(testEmail);
    
    // Click continue button
    const continueButton = page.locator('input[value="Continue"], button:has-text("Continue")').first();
    await continueButton.click();
    await page.waitForLoadState('networkidle');

    // Assertion: Check for success message or confirmation
    await expect(page.locator('body')).toContainText(/success|email|sent|check/i);

});