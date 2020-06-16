const {webkit, chromium, firefox, devices} = require('playwright');
const iPhone11Pro = devices['iPhone 11 Pro'];

(async () => {
  const browser = await webkit.launch({
    headless: false,
  });
  const context = await browser.newContext({
    ...iPhone11Pro,
  });
  const page = await context.newPage();
  await page.goto('https://github.com/microsoft/playwright');
})();
