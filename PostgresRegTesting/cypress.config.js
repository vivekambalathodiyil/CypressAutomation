const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}
const { isFileExist } = require('cy-verify-downloads');

module.exports = (on, config) => {
  on('task', { isFileExist })
}
module.exports = defineConfig({
  projectId: 'rsw792',
  e2e: {
    baseUrl: 'https://devops-totara14-ps-postgres.edev.skillsforhealth.org.uk/'
  }
})