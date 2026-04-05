//Add a Product and Perform a Checkout
import { test, expect } from '@playwright/test';

test('Add a Product and Perform a Checkout', async ({ page }) => {
    // Open the website
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.waitForLoadState('domcontentloaded');
    
    // Navigate to Laptops category
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18');
    await page.waitForLoadState('domcontentloaded');
    
    // Find and click on iMac product
    const productLink = page.locator('h4 a:has-text("iMac")').first();
    await productLink.click();
    await page.waitForLoadState('domcontentloaded');
    
    // Add to cart
    const addToCartBtn = page.locator('button:has-text("Add to Cart")').first();
    await addToCartBtn.click();
    await page.waitForTimeout(30000);
});
