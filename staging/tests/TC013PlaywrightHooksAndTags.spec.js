

import { test, expect } from '@playwright/test';

// After
//Before
//AfeterEach
//BeforeEach
// Base URL

//page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // base URL


test.beforeEach(async ({ page }) => {
  // page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test.beforeEach(async ({ page }) => {
  // Cleanup code here
});

test('Playwright Hooks and Tags', async ({ page }) => {