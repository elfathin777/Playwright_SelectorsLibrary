import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Hovers', async ({ page }) => {
        await page.getByText('Hovers').click();
        await expect(page.getByRole('heading', { name: /Hovers/i })).toBeVisible();

        const firstAvatar = page.locator('.figure').first();
        const caption = firstAvatar.locator('.figcaption h5');

        await expect(caption).not.toBeVisible();

        await firstAvatar.hover();

        await expect(caption).toBeVisible();
        await expect(caption).toHaveText('name: user1');
    })
})
