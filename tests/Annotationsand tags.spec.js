import { test } from '@playwright/test';
import { triggerAsyncId } from 'node:async_hooks';

test.skip('test', async ({ page }) => {
  console.log('This test is skipped');
});

test.fail('fail test', async ({ page }) => {
  console.log('This test is failed');
});

test.fixme('fix test', async ({ page }) => {
  console.log('This test is fixing');
});

test('slow test', async ({ page }) => {
    test.slow();
     console.log('This test is fixing');

})

test('@smoke Verify login functionality', async ({ page }) => {
});
