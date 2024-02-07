// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require("cypress-xpath");
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand();
Cypress.Commands.add('loginAdmin',(username, password)=>{
    //const username = Cypress.env()
    cy.viewport(2500, 2000)
    cy.visit('/login/index.php')
    cy.get('input[name=username]').type('vivek.ambalathodiyil@wdtrust.org.uk', {log:false})
    cy.get('input[name=password]').type('Letmein1!',{log:false})
    cy.get('input[type=submit]').click()
    cy.visit('/local/wdtcompliance/index.php')
    cy.location('protocol').should('eq','https:')
  cy.log('Admin logged into the site')



})  