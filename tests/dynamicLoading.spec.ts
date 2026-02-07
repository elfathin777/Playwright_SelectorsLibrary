import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Dynamic Loading', async ({ page }) => {
        await page.getByText('Dynamic Loading').click();
        await expect(page.locator('h3')).toContainText('Loaded Page Elements')
        await page.getByRole('link', { name: 'Example 1: Element on page that is hidden' }).click();
        await page.getByRole('button', {name: /start/i}).click();

        const finishText = page.locator('#finish h4');
        await expect(finishText).toContainText('Hello World!');
    })
})
