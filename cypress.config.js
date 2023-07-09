const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'fixtures',
  screenshotsFolder: 'screenshots',
  e2e: {
    setupNodeEvents (on, config) {
      return require('./plugins')(on, config)
    },
    baseUrl: 'https://qualityshepherd.com/',
    specPattern: 'specs/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support',
    defaultCommandTimeout: 10000
  }
})
