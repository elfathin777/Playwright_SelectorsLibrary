import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
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
})
