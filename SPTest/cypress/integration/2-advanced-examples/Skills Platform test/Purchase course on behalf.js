describe('Purchase a course on behalf of others',function()
{
    
 it('Validation for multiple course purchase', function()
 {
    cy.viewport(1400,900)
    
        cy.visit('https://test.skillsplatform.org/');
        cy.get('#header_search_input').click();
        cy.get('#header_search_form .button').click();
        cy.get('#header_search_form').submit();
        cy.url().should('contains', 'https://test.skillsplatform.org/search');
        cy.get('.course:nth-child(4) .hide-mobile > .red').click();
        cy.get('#contentwrapper > div > div.grid-60 > h1').contains('Make a booking for Information Governance and Data Security (CSTF)')
       
        cy.get('#show_attendees').click();

        cy.get('[name="attendees[name][]"]').should('be.visible')    
        cy.get('#hide_attendees').click();
        cy.get('[name="attendees[name][]"]').should('not.be.visible')  
        cy.get('#show_attendees').click();
        cy.wait(1000)
        cy.get('[name="attendees[name][]"]').type('Learner1')
        cy.get('[name="attendees[email][]"]').type('learner1@g.com')
        cy.get('[name="attendees[jobtitle][]"]').type('Driver')
        cy.get('.plus').click();
        cy.wait(1000)
        cy.get(':nth-child(2) > [name="attendees[name][]"]').type('learner 2')
        cy.get(':nth-child(2) > [name="attendees[email][]"]').type('learner2@g.com')
        cy.get(':nth-child(2) > [name="attendees[jobtitle][]"]').type('Chef')
        cy.get('.plus').click();
        cy.wait(1000)
        cy.get(':nth-child(3) > [name="attendees[name][]"]').type('learner 3')
        cy.get(':nth-child(3) > [name="attendees[email][]"]').type('learner3@g.com')
        cy.get(':nth-child(3) > [name="attendees[jobtitle][]"]').type('Teacher')
        cy.get('#submitform').click()

        cy.get('#input_email').click();

        const uuid = () => Cypress._.random(0, 1e6)
        const idnumber = uuid()
        const emailaddress = `${idnumber}@wdtrust.org.uk`
        cy.wait(6000)
     newFunction();

//CARD PAYMENT
    Payment();
   
    cy.get('h1').contains('Thank you')
    cy.contains('You have been sent an email confirming your order.')
    cy.log('Purchase Successfull')
    cy.get('.login > .loggedinas')
    cy.visit('https://test.skillsplatform.org/dashboard/profile/bookings');
   
   
    


cy.wait(6000)
if (cy.get('#course_table').contains('3')) {
    cy.log('[green](3 courses purchased)')
} else {cy.log('[blue](http://example.com)')
    
}


//cy.get('#course_table').contains('3')
////cy.log('[green](3 courses purchased)')
//cy.log('[blue](http://example.com)')



     function newFunction() {
         cy.get('#input_email').type(emailaddress);
         cy.wait(6000);
         cy.get('.grid-20 > .required');
         cy.get('.grid-20 > .required').select('mr');
         cy.get('.grid-20 > .required');
         cy.get('#billing_firstname').click();
         cy.get('#billing_firstname').type('Bob');
         cy.get('#billing_lastname').type('Job');
         cy.get('#registration_wrapper').click();
         cy.get('#password').type('Password1234!');
         cy.get('#confirmpassword').type('Password1234!');
         cy.get('#location');
         cy.get('#location').select('Greater London');
         cy.get('#howheard');
         cy.get('#howheard').select('Google');
         cy.get('#howheard');
         cy.get('#telephone_number').click();
         cy.get('#telephone_number').type('123456');
         cy.get('#customer_organisation').click();
         cy.get('#customer_organisation').type('WDT');
         cy.get('#jobtitle').click();
         cy.get('.stacked:nth-child(1)').click();
         cy.get('.stacked:nth-child(1)').type('21');
         cy.get('#billing_postcode').click();
         cy.get('#billing_postcode').type('BS1');
         cy.get(':nth-child(8) > .fieldinput > select').select('United Kingdom');
         cy.get(':nth-child(11) > .fieldinput > .checkbox > span').click();
     }

     function Payment() {
         cy.fillElementsInput('cardNumber', '4242424242424242');
         cy.fillElementsInput('cardExpiry', '1025');
         cy.fillElementsInput('cardCvc', '123');
         cy.get('#paycard').click();
         cy.wait(12000);
     }
})
 })