import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Dynamic Controls', async ({ page }) => {
        await page.getByRole('link', { name: /Dynamic Controls/i }).click();
        await expect(page.getByRole('heading', { name: /Dynamic Controls/i })).toBeVisible();

        const message = page.locator('#message');
        const inputField = page.getByRole('textbox');

        await page.getByRole('button', { name: /Remove/i }).click();
        await expect(message).toContainText(`It's gone!`);
        
        await page.getByRole('button', { name: /Enable/i }).click();

        await expect(message).toContainText(`It's enabled!`);
        await expect(inputField).toBeEditable();
        await inputField.fill("Playwright is fast!");
    })
})
