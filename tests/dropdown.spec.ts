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
        const option = page.locator('#dropdown');

        await expect(page.getByRole('heading', { name: /Dropdown List/i })).toBeVisible();

        const selectOption = 'Option 1'

        if (selectOption === 'Option 1'){
            await option.selectOption({label: 'Option 1'});
        }
        else{
            await option.selectOption({label: 'Option 2'});
        }

    })    
})
