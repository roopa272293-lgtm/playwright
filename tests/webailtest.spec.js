import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9//');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Roopavathi.a@changepond.com');
  await page.getByPlaceholder('Login').press('Tab');
  await page.getByPlaceholder('Password').fill('January@2026');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.input > div').first().click();
  await page.locator('.input > div').first().fill('cursor');
  await page.getByText('FW: Cursor 2 or similar tools').click();
  await page.getByText('Dear all, As discussed').click();
});