import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Drag and Drop', async ({ page }) => {
        await page.getByRole('link', { name: 'Drag and Drop' }).click();
        await expect(page.getByText('Drag and Drop')).toBeVisible();
        await expect(page.locator('#column-a header')).toHaveText('A');
        await page.dragAndDrop('#column-a', '#column-b');
        await expect(page.locator('#column-a header')).toHaveText('B');
    })

    test('Dynamic Loading', async ({ page }) => {
        await page.getByText('Dynamic Loading').click();
        await expect(page.locator('h3')).toContainText('Loaded Page Elements')
        await page.getByRole('link', { name: 'Example 1: Element on page that is hidden' }).click();
        await page.getByRole('button', {name: /start/i}).click();

        const finishText = page.locator('#finish h4');
        await expect(finishText).toContainText('Hello World!');
    })
    
    test('Dropdown', async ({ page }) => {
        await page.getByText('Dropdown').click();
        await expect(page.locator('h3')).toContainText('Dropdown List');
        await page.locator('#dropdown').selectOption('Option 2');
    })
    
    test('Add/Remove Elements', async ({ page }) => {
        await page.getByText('Add/Remove Elements').click();
        await expect(page.locator('h3')).toContainText('Add/Remove Elements');

        const addButton = page.getByRole('button', { name: 'Add Element' });
        const deleteButton = page.getByRole('button', { name: 'Delete' });

        for (let i = 0; i < 5; i++){
            await addButton.click();
        }
        await expect(deleteButton).toHaveCount(5);

        const count = await deleteButton.count();
        for (let i = 0; i < count; i++){
            await deleteButton.first().click();
        }

        await expect(deleteButton).toHaveCount(0)
    })

    test('form authentication', async ({ page }) => {
        await page.getByText('Form Authentication').click();
        await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();

        await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
        await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

        await page.getByRole('button', { name: 'Login' }).click();

        const flash = page.locator('#flash-messages');

        await expect(flash).toBeVisible();
        await expect(flash).toContainText('You logged into a secure area!');
    })

    test('JavaScript Alerts', async ({ page }) => {
        await page.getByText('JavaScript Alerts').click();
        await expect(page.getByRole('heading', { name: /JavaScript Alerts/i })).toBeVisible();
        
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });

        await page.getByRole('button', { name: /Click for JS Confirm/i }).click();
        
        await expect(page.getByText('You clicked: Cancel')).toBeVisible();
    })
    
    test('File handling', async ({ page }) => {
        await page.getByText('File Upload').click();
        await expect(page.getByRole('heading', { name: /File Uploader/i })).toBeVisible();

        const pathFile = path.join(__dirname, '../asset/document.pdf');

        await page.locator('#file-upload').setInputFiles(pathFile);
        await page.locator('#file-submit').click();

        await expect(page.getByRole('heading', { name: /File Uploaded!/i })).toBeVisible();
        await expect(page.locator('#uploaded-files')).toContainText('document.pdf');
        
    })
    
    test('Shadow DOM', async ({ page }) => {
        await page.getByText('Shadow DOM').click();
        await expect(page.getByRole('heading', { name: /Simple template/i })).toBeVisible();

        const shadowText = page.locator('span[slot="my-text"]');
    
        await expect(shadowText).toBeVisible();
        await expect(shadowText).toHaveText(`Let's have some different text!`);
        
    })
    
    
})
