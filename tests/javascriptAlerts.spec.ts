import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
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
})
