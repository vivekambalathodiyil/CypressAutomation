describe ('Verify new instant access courses', function()
{
    it ('Instant access courses', function()
    {
        cy.viewport(1400,900)        
        cy.visit('https://test.skillsplatform.org/')
        cy.get('#header_search_form > .linkedinputs > .button > .fa').click()
        cy.get('.instant_access').contains('Instant Access')
        cy.log('Instant access is visible and the course is accessible')
        
    }
    )       


       

        
    
}
)
