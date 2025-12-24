import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9//');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Roopavathi.a@changepond.com');
  await page.getByPlaceholder('Login').press('Tab');
  await page.getByPlaceholder('Password').fill('January@2026');
  await page.getByRole('button', { name: 'Sign In1' }).click();
  await page.getByText('Logout').click();
});