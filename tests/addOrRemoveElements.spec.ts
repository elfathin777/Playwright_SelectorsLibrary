import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Add/Remove Elements', async ({ page }) => {
        await page.getByText('Add/Remove Elements').click();
        await expect(page.locator('h3')).toContainText('Add/Remove Elements');

        const addButton = page.getByRole('button', { name: 'Add Element' });
        const deleteButton = page.getByRole('button', { name: 'Delete' });

        for (let i = 0; i < 5; i++){
            await addButton.click();
        }
        await expect(deleteButton).toHaveCount(5);

        const count = await deleteButton.count();
        for (let i = 0; i < count; i++){
            await deleteButton.first().click();
        }

        await expect(deleteButton).toHaveCount(0)
    })
    
})
