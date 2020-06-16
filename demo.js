const {webkit, chromium, firefox} = require('playwright');

(async () => {
  for (const browserType of [webkit, firefox, chromium]) {
    const browser = await browserType.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://github.com/microsoft/playwright');
    await page.screenshot({
      path: `screenshot-${browserType.name()}.png`,
    });
    await browser.close();
    console.log('success: ' + browserType.name());
  }
})();
