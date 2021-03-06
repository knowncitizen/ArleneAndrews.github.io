const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

const rootURL = 'https://arleneandrews.github.io'
const d = new Builder().forBrowser('firefox').build()
const waitUntilTime = 2000
let driver, el, actual, expected
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

async function getElementById(id) {
  const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
  return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}
async function getElementByXPath(xpath) {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
  return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

beforeEach((done) => {
  driver = new Builder().forBrowser('chrome').build();

  driver.get(rootURL).then(done);
});

/* afterEach((done, 2000), => {
  return driver.close();
}); */

afterAll((done) => {
  driver.quit().then(done);
});

describe('Selenium load check',() => {
  it('waits for the driver to start', () => {
    return d.then(_d => {
      driver = _d
    })
  })

  it('initialises the context', async () => {
    await driver.manage().window().setPosition(0, 0)
    await driver.manage().window().setSize(1280, 1024)
    await driver.get(rootURL)
  })

  it('Links show correctly - About', () => {
    driver.findElement(By.id("centerblock"))
    return console.log("found this one!")
  })
})
