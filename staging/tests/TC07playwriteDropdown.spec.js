// select Dropdown 
//1.By Lable
// 2. By Value
// 3. By Index

// Base URL -https://www.dummyticket.com/dummy-ticket-for-visa-application/
import { test, expect } from '@playwright/test';

test('Select Dropdown', async ({ page }) => {

    await page.goto ('https://practice.expandtesting.com/dropdown');

    await page.selectOption('#select2-billing_country-container',{label: 'India'});

    await page.selectOption('#select2-billing_country-container',{value: 'IN'});

    await page.selectOption('#select2-billing_country-container',{index: '101'});

    await page.waitForTimeout(10000);
    

})