import webdriver from 'selenium-webdriver'

// Open Chrome Browser
// var driver = new webdriver.Builder().forBrowser('chrome').build();
let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Open google.com
driver.get('http://www.google.com');