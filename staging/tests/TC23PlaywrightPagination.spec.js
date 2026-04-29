
import {expect, test } from "@playwright/test"

test.describe('pagination in Nationality page under Orange HRMS', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('input[name="username"]').fill('Admin'); 
        await page.locator('input[name="password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();
        await page.locator('span:has-text("Admin")').click();
        await page.locator('a:has-text("Nationalities")').click();
        await page.waitForLoadState('networkidle'); 
    })
    test.describe('pagination  - 1  count  the number of records per page', () => {
        test('pagination - 1 count the number of records per page', async ({page}) => {
            const nationalityRecordpagination = 50;
            
    })       