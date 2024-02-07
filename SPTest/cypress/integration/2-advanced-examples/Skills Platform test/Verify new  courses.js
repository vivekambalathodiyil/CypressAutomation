//This test is to identify if there are any instant access courses
describe ('Verify new instant access courses', function()
{
    it ('Instant access courses', function()
    {
        cy.viewport(1400,900)        
        cy.visit('https://test.skillsplatform.org/')
        cy.get('#header_search_form > .linkedinputs > .button > .fa').click()
        cy.get('[data-clean="e-learning"]').click()
        
        cy.get('.courselist').contains('Instant Access')
       // cy.get('.instant_access').contains('Instant Access')
        cy.log('Instant access is visible and the course is accessible')

        

        if ( cy.get('.courselist').contains('Instant Access')) {
            cy.get(':nth-child(4) > .wrapper > .inner > .details > .title').log('#:nth-child(4) > .wrapper > .inner > .details > .title')
            {

            }
        } else {
            cy.log('No Instant access course')
            cy.alert
            
        }
        
    }
    )       


       

        
    
}
)
