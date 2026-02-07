import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('File handling', async ({ page }) => {
        await page.getByText('File Upload').click();
        await expect(page.getByRole('heading', { name: /File Uploader/i })).toBeVisible();

        const pathFile = path.join(__dirname, '../asset/document.pdf');

        await page.locator('#file-upload').setInputFiles(pathFile);
        await page.locator('#file-submit').click();

        await expect(page.getByRole('heading', { name: /File Uploaded!/i })).toBeVisible();
        await expect(page.locator('#uploaded-files')).toContainText('document.pdf');
        
    })
})
