const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    e2e: {
     baseUrl: 'https://workplace-qa.dev.learnspace.org/'
      //baseUrl: 'https://workplace-qa.dev.learnspace.org/'
    }
  },
});
