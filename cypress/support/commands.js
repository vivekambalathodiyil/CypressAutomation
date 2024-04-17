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
//const { type } = require("cypress/types/jquery")
//


//PC24 Generic scripts
//Adminlogin
Cypress.Commands.add('loginAdmin',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1400,900)
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php')
    cy.get('input[name=username]').type('vivek.ambalathodiyil@wdtrust.org.uk', {log:false})
    cy.get('input[name=password]').type('Dasappan-123',{log:false})
    cy.get('input[type=submit]').click()
    cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/');
cy.log('Admin logged in')



})  
        


Cypress.Commands.add('loginLearner',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1400,900)
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php')
    cy.get('input[name=username]').type('alan.duncan@pc24.nhs.uk')
    cy.get('input[name=password]').type('Password-1234',{log:false})
    cy.get('input[type=submit]').click()
    cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/');
cy.log('Learner logged in')



})  
        
// Schoen clinic generic scripts
//Learner
Cypress.Commands.add('SCloginlearner',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1400,900)
    cy.visit('https://schoenclinic.etest.skillsforhealth.org.uk/login/index.php')
    cy.get('input[name=username]').type('learnerwdt')
 
    cy.get('input[name=password]').type('Password1234!',{log:false})
    cy.get('input[type=submit]').click()
    cy.url().should('contains', 'https://schoenclinic.etest.skillsforhealth.org.uk/totara/dashboard/');
cy.log('Learner logged in')



})
//Skills For Health Credit card

Cypress.Commands.add(
    'iframeLoaded',
    {prevSubject: 'element'},
    ($iframe) => {
        const contentWindow = $iframe.prop('contentWindow');
        return new Promise(resolve => {
            if (
                contentWindow &&
                contentWindow.document.readyState === 'complete'
            ) {
                resolve(contentWindow)
            } else {
                $iframe.on('load', () => {
                    resolve(contentWindow)
                })
            }
        })
    });


Cypress.Commands.add(
    'getInDocument',
    {prevSubject: 'document'},
    (document, selector) => Cypress.$(selector, document)
);

Cypress.Commands.add(
    'getWithinIframe',
    (targetElement) => cy.get('iframe').iframeLoaded().its('document').getInDocument(targetElement)
);
// One Health Care 
    
Cypress.Commands.add('OHCloginLearner',(usename, password)=>{
    //const username = Cypress.env()
    cy.viewport(1400,900)
    cy.visit('https://onehealthcare.emirr.skillsforhealth.org.uk/login/index.php')
    cy.get('input[name=username]').type('learnerwdt')
    cy.get('input[name=password]').type('Password1234!',{log:false} )
    cy.get('input[type=submit]').click()
    cy.url().should('contains', 'https://onehealthcare.emirr.skillsforhealth.org.uk/totara/dashboard/');
    cy.log('Learner logged in')
})