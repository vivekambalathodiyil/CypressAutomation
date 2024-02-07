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
Cypress.Commands.add('loginAdmin',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1920, 1500)
    cy.visit('/login/index.php')
    cy.get('input[name=username]').type('vivekadmin', {log:false})
    cy.get('input[name=password]').type('Dasappan-123',{log:false})
    cy.get('#loginbtn').click({force:true})
    cy.location('protocol').should('eq','https:')
    cy.log('Admin logged into the site')
})  