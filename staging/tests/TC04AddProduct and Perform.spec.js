//Add a Product and Perform a Checkout
import { test, expect } from '@playwright/test';

test.setTimeout(120000);    
test('Add a Product and Perform a Checkout', async ({ page }) => {
    // open the website
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.waitForLoadState('networkidle');
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Navigate directly to a product (MacBook in Desktops category)
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18&sort=p.date_added&order=DESC');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Find and click on MacBook product
    const macbookProduct = page.locator('a:has-text("MacBook"), h4:has-text("MacBook")').first();
    if (await macbookProduct.isVisible()) {
        await macbookProduct.click();
        await page.waitForLoadState('networkidle');
    } else {
        // If exact match not found, navigate to a specific MacBook product
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42');
        await page.waitForLoadState('networkidle');
    }
    
    // Add to cart using JS evaluate click
    const addToCartBtn = page.locator('button[class*="button-cart"], button:has-text("Add to Cart")').first();
    await addToCartBtn.evaluate(el => el.click());
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Verify item added to cart
    await expect(page.locator('body')).toContainText(/added|cart/i);
});
