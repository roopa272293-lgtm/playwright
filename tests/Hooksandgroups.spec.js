import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9/');
  await page.getByPlaceholder('Login').fill('Roopavathi.a@changepond.com');
  await page.getByPlaceholder('Password').fill('January@2026');
  await page.getByRole('button', { name: 'Sign In' }).click();

  console.log("Login Test Executed");
});

test('homepage', async ({ page }) => {

  await page.locator('.input > div').first().click();
  await page.locator('.input > div').first().fill('cursor');
  await page.locator('span').filter({ hasText: 'FW: Cursor 2 or similar tools' }).nth(1).click();

  console.log("Home page executed");
})

test('logout', async ({ page }) => {

  await page.getByText('Logout').click();
  console.log("Logout Test Executed");
});

test .afterAll(async ({ page }) => {
  await page.close();
  console.log("Browser closed");
});