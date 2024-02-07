/// <reference types="Cypress" />

describe('Search and buy instant access course', function() {

 it('Search a course', function() {
    cy.viewport(1920, 1237)
    cy.visit('https://test.skillsplatform.org/search?keywords=&page=')


  cy.contains('.courselist', 'Instant Access').find(':nth-child(4) > .wrapper > .inner > .details > .actions.hide-mobile > .red').click()
  cy.get('#submitform').click()
  cy.visit('https://test.skillsplatform.org').get('#header_search_form > .linkedinputs > .button > .fa').click()
  //Second page
  cy.visit('https://test.skillsplatform.org/search?keywords=&page=2')
  cy.get('#header_search_input').type('Moving & Handling')
  cy.get('#header_search_form > .linkedinputs > .button').click()
//Find M&H course and verify if it has instant access 
cy.get(':nth-child(3) > .wrapper > .inner > .details > .actions.hide-mobile > .red').click()
cy.get('#submitform').click()
cy.get('#fullnav > :nth-child(1)').find('care').click()
  
       //cy.get('.courselist').contains('Instant Access') 
     //cy.get('.courselist').then(($body) => {
     // if ($body.find('Instant Access')) {
     //    cy.visit('https://test.skillsplatform.org/search?keywords=&page=3') 
 
     // }
  
  



  //cy.contains('.courselist', 'Instant Access').find(':nth-child(4) > .wrapper > .inner > .details > .actions.hide-mobile > .red').click()  
  //cy.get('.courselist').contains('Instant Access')

    
 })
})