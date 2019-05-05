import { expect } from 'chai'
import { Builder, By, Key, until } from 'selenium-webdriver'
require('babel-core/register')
require('babel-polyfill')


describe('tests', () => {
	it('should instantiate selenium webdriver', done => {
		async function example() {
			let driver = await new Builder().forBrowser('/Users/Jon/Downloads/chromedriver').build()
				expect(driver).to.not.be.undefined
				done()
			}
			example()
	})
})