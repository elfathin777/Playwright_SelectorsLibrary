import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
import path from "path";
import { setTimeout } from "timers/promises";


test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
})


test.describe('Latihan Selector Playwright', () => {
    test('Infinite Scroll', async ({ page }) => {
        await page.getByRole('link', { name: /Infinite Scroll/i }).click();
        await expect(page.getByRole('heading', { name: /Infinite Scroll/i })).toBeVisible();
        
        // Define the minimum number of content blocks we want to load
        const targetCount = 5;

        await expect.poll(async () => {
            // Scroll down by 1000 pixels on each poll attempt
            await page.mouse.wheel(0, 1000);
            
            // Return the current number of added content blocks
            return page.locator('.jscroll-added').count();
        }, {
            message: 'Gagal mencapai target jumlah elemen setelah scroll berulang',
            timeout: 20000, // Increase timeout to 20s to allow for slow network responses
            intervals: [1000, 2000, 5000], // Retry intervals: wait 1s, then 2s, then 5s
        }).toBeGreaterThanOrEqual(targetCount);

        const finalCount = await page.locator('.jscroll-added').count();
        console.log(`Berhasil! Total elemen terkumpul: ${finalCount}`);
    });
})
