const {test, expect} = require ('@playwright/test')
 

test ('My First Test', async ({page}) => {
  await page.goto ('https://webmail.changepond.com/aurora9/');
  console.log("First Test Executed");

});

test('My Second Test', async ({page}) => {
    await page.goto('https://ess.changepond.com/#/');
    console.log("Second Test Executed");
});

