import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Context Menu', async ({ page }) => {
        await page.getByText('Context Menu').click();
        await expect(page.getByRole('heading', { name: /Context Menu/i })).toBeVisible();

        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        
        await page.locator('#hot-spot').click({button: 'right'});
    })
})
