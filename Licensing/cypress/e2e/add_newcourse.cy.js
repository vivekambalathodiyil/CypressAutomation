//import faker, { random } from 'faker' 
const faker = require('faker');
describe('Login', () => {
    beforeEach(()=>{
      cy.loginAdmin()//custom command added in commands.js
    })
      it('Open Course page and add a new course', () => {
        
    cy.visit('admin/course/create') 
// create randon names for form
  const coursename = faker.Name.firstName()
  const referencenumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100
  const selection = Math.floor(Math.random() * 3) +1// generate number between 1to3  for the course library type,now there are only 3 options.so generating numbers between 1 and 3
  
// Input required fields
    cy.contains('Full name').next().type('Course '+coursename)
    cy.contains('Short name').next().type(coursename)
    cy.contains('Reference number').next().type(referencenumber)
    cy.get('#courseLibrary').select([selection])
    cy.contains('Submit').click()
    cy.get('.alert').contains('Success!')

// open course page and check if the course is added.
      cy.visit('admin/course/all')
      cy.get('input[placeholder="Search..."]').click().type('Course '+coursename)
      cy.get('.list-group-item').should('contain.text',coursename)
    
    
      })
    })