import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9/');



  await page.getByPlaceholder('Login').fill('Roopavathi.a@changepond.com');
  await page.getByPlaceholder('Password').fill('January@2026');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.close();
  console.log("Login Test Executed");
});

test('homepage', async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9/');
  await page.getByPlaceholder('Login').fill('Roopavathi.a@changepond.com');
  await page.getByPlaceholder('Password').fill('January@2026');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.input > div').first().click();
  await page.locator('.input > div').first().fill('cursor');
  await page.locator('span').filter({ hasText: 'FW: Cursor 2 or similar tools' }).nth(1).click();
  await page.close();
  console.log("Home page executed");
})

test('logout', async ({ page }) => {
  await page.goto('https://webmail.changepond.com/aurora9/');
  await page.getByPlaceholder('Login').fill('Roopavathi.a@changepond.com');
  await page.getByPlaceholder('Password').fill('January@2026');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Logout').click();
  await page.close();
  console.log("Logout Test Executed");
});