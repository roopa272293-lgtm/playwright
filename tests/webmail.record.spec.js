import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9/\'');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('roopavathi.a@changepond.com');
  await page.getByPlaceholder('Login').press('Tab');
  await page.getByPlaceholder('Password').fill('January@2025');
  await page.getByRole('button', { name: 'Sign In' }).click();
});