/// <reference types="Cypress" />
describe  ('login to Skills Platform',function()
{
    it('Log in as a learner',function() 
    {
        cy.viewport(1400,900); 
              
        cy.visit('https://dev.skillsplatform.org/courses/175-moving-and-handling-level-11');

        cy.get('.rightcolumn > .red').click()
        cy.get('#submitform').click()
        cy.log('Course added to basket')

        
        cy.wait(6000)
        cy.get('#input_email')
        //Fill user form
        cy.visit('https://dev.skillsplatform.org/checkout');
        cy.get('#input_email').click();
//Generate random email
        const uuid = () => Cypress._.random(0, 1e6)
        const idnumber = uuid()
        const emailaddress = `${idnumber}@wdtrust.org.uk`
cy.get('#input_email').type(emailaddress);
cy.get('#confirm_email').type(emailaddress);   
cy.wait(6000)
//Input mandatory fields
cy.get('.grid-20 > .required')
cy.get('.grid-20 > .required').select('mr');
cy.get('.grid-20 > .required')
cy.get('#billing_firstname').click();
cy.get('#billing_firstname').type('Bob');
cy.get('#billing_lastname').type('Paul');
cy.get('#registration_wrapper').click();
cy.get('#password').type('Password1234!');
cy.get('#confirmpassword').type('Password1234!');
cy.get('#location')
cy.get('#location').select('Greater London');
cy.get('#howheard')
cy.get('#howheard').select('Google');
cy.get('#howheard')
cy.get('#telephone_number').click();
cy.get('#telephone_number').type('123456');
cy.get('#customer_organisation').click();
cy.get('#customer_organisation').type('WDT');
cy.get('#jobtitle').click();
cy.get('.stacked:nth-child(1)').click();
cy.get('.stacked:nth-child(1)').type('21');
cy.get('#billing_postcode').click();
cy.get('#billing_postcode').type('BS1');
cy.get(':nth-child(10) > .fieldinput > select').select('United Kingdom')
cy.get(':nth-child(13) > .fieldinput > .checkbox > span').click()

//cy.get('#card-element').within(() => {
    cy.fillElementsInput('cardNumber', '4242424242424242');
    cy.fillElementsInput('cardExpiry', '1025'); // MMYY
    cy.fillElementsInput('cardCvc', '123');
   
    cy.get('#paycard').click();
    cy.wait(12000);
    cy.get('h1').contains('Thank you')
    cy.contains('You have been sent an email confirming your order.')
    cy.log('Purchase Successfull')
    cy.get('.login > .loggedinas')
  
})

        
    })
