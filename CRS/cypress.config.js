const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ddt-rt5-testing-app-nk.azurewebsites.net/wdt'
  }
})
