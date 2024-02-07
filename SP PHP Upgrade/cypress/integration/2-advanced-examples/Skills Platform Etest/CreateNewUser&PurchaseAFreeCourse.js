
describe('Create a new user ', function() {
    it('New user', function() {
       cy.viewport(1920, 937)
       cy.visit('https://etest.skillsplatform.org/')
       cy.get('#topmenu > ul > :nth-child(2) > a').click()

                const faker = require("faker");
            let randomEmail = faker.Internet.email().toLowerCase()
            let firstname = faker.Name.firstName().toLowerCase()
            let surname = faker.Name.lastName().toLowerCase()
            let email = faker.Internet.email().toLowerCase()
            let number = faker.random.number(100)
            let phone = faker.PhoneNumber.phoneNumberFormat(10)
    cy.get('.grid-20 > .required');
    cy.get('.grid-20 > .required').select('mr');
    cy.get('.grid-20 > .required');
    cy.get('#registerform > div:nth-child(1) > div.fieldinput > div:nth-child(2) > input').type(firstname)
    cy.get('#registerform > div:nth-child(1) > div.fieldinput > div:nth-child(3) > input').type(surname)
    cy.get('#input_email').type(email)
    cy.get('#password').type('Password1234!');
    cy.get('#confirmpassword').type('Password1234!');
    cy.get('#location');
    cy.get('#location').select('Greater London');
    cy.get('#howheard');
    cy.get('#howheard').select('Google');
    

    cy.get('#howheard');
    cy.get(':nth-child(7) > .fieldinput > .checkbox > span').click()
    cy.get("#createorganisation").click({force:true})
    cy.get("#createorganisation").click({force:true})
    
    cy.get('#submitform').click({force:true})

    cy.get('.alert').contains('Your account has been created' )
//Select a free course
    cy.visit('https://etest.skillsplatform.org/courses/5193-learning-from-deaths')
    cy.get('.rightcolumn > .red').click()
    cy.get('#submitform').click()

    cy.get("#telephone_number").type(phone)
    cy.get('#customer_organisation').type('1')
    cy.get('[name="address1"]').type('1')
    cy.get('#billing_postcode').type('BS32 1PA')
    cy.get('.checkbox > span').click()
    cy.get("#payzero").click()
    cy.get('h1').should('contain','Thank you')

})
})