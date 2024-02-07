describe('Verify purchase invoice', function()
{
it('My booking- view course purchase',function(){
cy.viewport(1400,900)
    cy.visit('https://dev.skillsplatform.org/');
cy.get('.section:nth-child(2)').click();
cy.get('.login > a').click();
cy.url().should('contains', 'https://dev.skillsplatform.org/login');
cy.get('.grid-50:nth-child(1) .fieldrow:nth-child(1)').click();
cy.get('#login_email').type('pangab@g.com',{log:false})
cy.get('#login_password').type('Password1234!',{log:false})
cy.get(':nth-child(1) > .form > .buttons > .button').click()
cy.get('.login > .loggedinas').click()
cy.get('.first > ul > :nth-child(3) > a').click()
cy.get('tbody > tr > :nth-child(4)').contains ('seats')
})
}) 