import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Shadow DOM', async ({ page }) => {
        await page.getByText('Shadow DOM').click();
        await expect(page.getByRole('heading', { name: /Simple template/i })).toBeVisible();

        const shadowText = page.locator('span[slot="my-text"]');
    
        await expect(shadowText).toBeVisible();
        await expect(shadowText).toHaveText(`Let's have some different text!`);
        
    })
})
