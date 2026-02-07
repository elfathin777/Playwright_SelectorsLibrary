import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Multiple Windows', async ({ page }) => {
        await page.getByText('Multiple Windows').click();
        await expect(page.getByRole('heading', { name: /Opening a new window/i })).toBeVisible();

        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('link', { name: /Click Here/i }).click()]
        );

        await expect(page.getByRole('heading', { name: /New Window/i })).toBeVisible();
        await newPage.close();
        
        await expect(page.getByRole('heading', { name: /Opening a new window/i })).toBeVisible();
    })
})
