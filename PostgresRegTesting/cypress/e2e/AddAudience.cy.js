describe('Log In As Admin', function() {

       beforeEach(() =>{
        
              cy.loginAdmin()
              })      

// Access Audience page to create a new audience

it('Add a new  audience', function() {
          
       cy.visit('/cohort/edit.php?contextid=1')
//Generate a randon number as audience name
       //const Audience = Date.now().toString();
       //const getUniqueId = () => Cypress._.uniqueId(Audience);
       //cy.visit('https://schoenclinictot14.etest.skillsforhealth.org.uk/cohort/edit.php?contextid=1')
       //Generate a randon number as audience name
       //cy.get('#id_name').type(Audience)

       const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const Audience = `Audience${id}`
       cy.get('#id_name').type(Audience)
       
       cy.get('#id_cohorttype').select('Dynamic')
       cy.get('#id_submitbutton').click()
       cy.wait(2000)
       cy.get('.alert-message').should('contain','Successfully added audience')
       cy.log('New audience added')
})
it('log out', function () {
       cy.get('.totaraNav_prim > .container-fluid')
       cy.get('.caret').click()
       cy.get(':nth-child(3) > .icon').click()
})
})

   