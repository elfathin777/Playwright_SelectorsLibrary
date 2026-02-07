import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Drag and Drop', async ({ page }) => {
        await page.getByRole('link', { name: 'Drag and Drop' }).click();
        await expect(page.getByText('Drag and Drop')).toBeVisible();
        await expect(page.locator('#column-a header')).toHaveText('A');
        await page.dragAndDrop('#column-a', '#column-b');
        await expect(page.locator('#column-a header')).toHaveText('B');
    })
})
