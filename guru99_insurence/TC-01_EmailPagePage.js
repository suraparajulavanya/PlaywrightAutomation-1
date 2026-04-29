import {test, expect} from 'playwright/test'

test('Login Test', async ({page}) => {
    await page.goto('https://demo.guru99.com/');
    await page.fillemail('#email', 'lavanyastockholm@gmail.com');
    
    await page.fill('#username', 'mngr660130');
    await page.fill('#password', 'uhYvAqy');
    await page.click('#login-btn');
    await expect(page).toHaveURL('http://example.com/dashboard');
});