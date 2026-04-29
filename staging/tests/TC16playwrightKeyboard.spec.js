import {test,expect} from '@playwright/test';
import { before } from 'node:test';
test.describe("Playwright Keyboard Test", () => {

    beforeEach(async({page}) => {
        await page.goto("https://tutorialsninja.com/demo/");
    })
    test("Search Keyboard Event", async ({ page }) => {

        const searchInput = page.locator('[name="search"]');

        await searchInput.focus();

        await page.keyboard.type("MacBook");
        await page. keyboard.press("Enter");

        const addcartbutton = page.getByText('Add to cart' ).count();
        expect(addcartbutton).toBe(3);
    })
    test("Register New User", async ({ page }) => {

        await page.goto ("https://tutorialsninja.com/demo/");
        await page.getByText('My Account').click();
        await page.click('text=Register');

        const firstname = page.locator('#input-firstname');
        await firstname.focus();
        await page.keyboard.type('John');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Doe');
        await page.keyboard.press('Tab');
        await page.keyboard.type('johndoe@example.com');{Delay:100});
        await page.keyboard.press('Tab');
        

    })

    test('Currency Dropdown', async({page})=>{

        await page.goto("https://tutorialsninja.com/demo/");
        const currencyDropdown = page.locator('#form-currency button').first();
        await currencyDropdown.focus();
        await page.keyboard.press('Enter', { delay: 500 });
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await page.keyboard.press ('enter')
    })



