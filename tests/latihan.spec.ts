import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Drag and Drop', async ({ page }) => {
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
        await page.getByRole('link', { name: 'Drag and Drop' }).click();
        await expect(page.getByText('Drag and Drop')).toBeVisible();
        await expect(page.locator('#column-a header')).toHaveText('A');
        await page.dragAndDrop('#column-a', '#column-b');
        await expect(page.locator('#column-a header')).toHaveText('B');
    })

    test('Dynamic Loading', async ({ page }) => {
        await page.getByText('Dynamic Loading').click();
        await expect(page.locator('h3')).toContainText('Loaded Page Elements')
        await page.getByRole('link', { name: 'Example 1: Element on page that is hidden' }).click();
        await page.getByRole('button', {name: 'start'}).click();
        await expect(page.locator('#finish h4')).toContainText('Hello World!');  
    })
    
    test('Dropdown', async ({ page }) => {
        await page.getByText('Dropdown').click();
        await expect(page.locator('h3')).toContainText('Dropdown List');
        await page.locator('#dropdown').selectOption('Option 2');
    })
    
    
    
})
