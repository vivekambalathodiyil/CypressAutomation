const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

  
module.exports = defineConfig({
  projectId: 'wqxjf1',
  e2e: {
    baseUrl: 'https://workplace-free.etest.skillsforhealth.org.uk/',
    
  },
})
