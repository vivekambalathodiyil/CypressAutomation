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
    baseUrl: 'https://unidemo.edev.skillsforhealth.org.uk/'
  }
})