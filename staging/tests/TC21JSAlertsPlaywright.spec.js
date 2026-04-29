//Playwright JavaScript Alerts

//Click for JS Alert
//Click for JS Confirm
//Click for JS Prompt



import {expect, playwright,test} from "playwright/test"

test.describe('TC21 - Alerts in playwright', () => {

    test ('Handle Js Alert', async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');


        page.on('dialog', async dialog => {

            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        })
        await page.click('text=Click for JS Alert');

        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
            


    })

test ('Handle Js Confirm', async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        page.on ('dialog', async dialog => {

            expect(dialog.type()).toBe('confirm');

            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
 }) 
       await page.click('text=Click for JS Confirm');
       await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    })
    test ('Handle Js Prompt', async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.dismiss();
        })

        await page.click('text=Click for JS Prompt');

        await expect(page.locator('#result')).toHaveText('You entered: null');
    })
    test ('Handle Js Prompt with input', async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        page.on('dialog', async dialog => {

            expect(dialog.type()).toBe('prompt');
            expect(dialog.message()).toBe('I am a JS prompt');
            await dialog.accept('Playwright demo');
        })

        await page.click('text=Click for JS Prompt');

        await expect(page.locator('#result')).toHaveText('You entered: Playwright demo');
    




})
