const {webkit, chromium, firefox, devices} = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('frameattached', frame => console.log('frames: ' + page.frames().length));
  page.on('framedetached', frame => console.log('frames: ' + page.frames().length));
  page.on('request', request => console.log(request.method() + ' ' + request.url()));
  page.on('response', response => console.log(response.status() + ' ' + response.url()));
  context.route('**/*', route => {
    if (route.request().frame().parentFrame())
      route.abort();
    else
      route.continue();
  });
  await page.goto('https://theverge.com');

  const page2 = await context.newPage();
  await page2.goto('https://bbc.com');
})();
