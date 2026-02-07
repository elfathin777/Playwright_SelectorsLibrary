import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Dropdown', async ({ page }) => {
        await page.getByText('Dropdown').click();
        await expect(page.locator('h3')).toContainText('Dropdown List');
        await page.locator('#dropdown').selectOption('Option 2');
    })    
})
