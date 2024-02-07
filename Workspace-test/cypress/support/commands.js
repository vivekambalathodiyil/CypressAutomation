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
Cypress.Commands.add('loginLearner',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1920, 1500)
    cy.visit('/login/index.php')
    cy.get('input[name=username]').type('learner1', {log:false})
    cy.get('input[name=password]').type('MondayJan23$',{log:false})
    cy.get('#loginbtn').click({force:true})
    cy.location('protocol').should('eq','https:')
    cy.log('Admin logged into the site')
})  
Cypress.Commands.add('loginManager',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1920, 1500)
    cy.visit('https://schoenclinic.etest.skillsforhealth.org.uk/login/index.php')
    cy.get('input[name=username]').type('emma.blackburn@newbridge-health.org.uk', {log:false})
    cy.get('input[name=password]').type('Dasappan-123',{log:false})
    cy.get('input[type=submit]').click()
    cy.location('protocol').should('eq','https:')
    cy.log('Admin logged into the site')
})  