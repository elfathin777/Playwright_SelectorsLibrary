import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Sortable Data Tables', async ({ page }) => {
        await page.getByRole('link', { name: /Sortable Data Tables/i }).click();
        await expect(page.getByRole('heading', { name: /Data Tables/i })).toBeVisible();
        
        const jasonRow = page.locator('#table1 tbody tr').filter({ hasText: 'Jason' }).filter({ hasText: ' Doe' });
        const dueValue = jasonRow.locator('td').nth(3);
        
        await expect(dueValue).toHaveText('$100.00');
        
        await page.locator('#table1 thead th').filter({ hasText: 'Last Name' }).click();
        
        const firstRowLastName = await page.locator('#table1 tbody tr').first().locator('td').first();
        
        await expect(firstRowLastName).toHaveText('Bach');
    })
})
