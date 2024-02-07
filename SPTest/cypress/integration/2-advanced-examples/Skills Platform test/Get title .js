describe('Get course name that has instant access', function(){

it('Get course name', function(){
    cy.viewport(1400,900)        
    cy.visit('https://test.skillsplatform.org/')
    cy.get('#header_search_form > .linkedinputs > .button > .fa').click()
    cy.get('[data-clean="e-learning"]').click()
    cy.get('.courselist').contains('Instant Access')
        
        cy.get('.title').invoke('text').then((text1) => {
            expect(text1).to.eq(':nth-child(4) > .wrapper > .inner > .details > .title').contain('Information Governance and Data Security (CSTF)')
        } ) 
})

} )