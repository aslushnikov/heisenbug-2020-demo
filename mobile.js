const {webkit, chromium, firefox, devices} = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    proxy: {
      server: 'http://proxy.aslushnikov.com:3128',
      username: process.env.PROXY_USERNAME,
      password: process.env.PROXY_PASSWORD,
    },
  });
  const context = await browser.newContext({
    geolocation: {
      latitude: 51.508076,
      longitude: -0.0993827,
    },
    permissions: ['geolocation'],
    locale: 'de-DE',
    colorScheme: 'dark',
  });
  const page = await context.newPage();
  await page.goto('https://overreacted.io');
  await page.waitForTimeout(1000);
  await page.emulateMedia({
    colorScheme: 'light',
  });
})();
