import { test } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://webmail.changepnd.com/aurora/');

  await page.locator('#login_login').fill('Roopavathi.a@changepond.com');
  await page.locator('#login_password').fill('January@2026');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.pause(); // optional, for debugging
});

  

