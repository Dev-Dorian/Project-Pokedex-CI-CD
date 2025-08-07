const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        // Wait for the server to be available before running tests
        await require('wait-on')({ resources: ['http://localhost:5000'] });
      });
    },
    specPattern: 'cypress/integration/**/*.js',
    supportFile: 'cypress/integration/app.js',
    fixturesFolder: 'cypress/fixtures',
    video: false,
    screenshotOnRunFailure: true
  },
})