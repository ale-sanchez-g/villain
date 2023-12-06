const assert = require("assert"),
  webdriver = require("selenium-webdriver");
let driver;

describe("Blazedemo verification", function () {
  this.timeout(30000);

  before(async () => {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();
    await driver.get("http://blazedemo.com/");
  });

  after(function () {
    driver.quit();
  });
});
