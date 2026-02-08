import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Key Press', async ({ page }) => {
        await page.getByText('Key Press').click();
        await expect(page.getByRole('heading', { name: /Key Press/i })).toBeVisible();

        const outputNotif = page.locator('#result');

        await page.keyboard.press('Enter');
        await expect(outputNotif).toHaveText('You entered: ENTER');

        await page.keyboard.press('Escape');
        await expect(outputNotif).toHaveText('You entered: ESCAPE');

    })
})
