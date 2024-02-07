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
///<reference types='cypress-xpath'/>
import 'cypress-iframe';
require('cy-verify-downloads').addCustomCommand();

//const { type } = require("cypress/types/jquery")
//
require('cypress-downloadfile/lib/downloadFileCommand')


function AdminLogin() {
    cy.viewport(1920, 1500)
    //Log in as an Admin
    cy.visit('https://schoenclinic.etest.skillsforhealth.org.uk/login/index.php')
    cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk', ({ log: false }))
    cy.get('#password').type('Dasappan-123', ({ log: false }))
    cy.get('#loginbtn').click()
 }