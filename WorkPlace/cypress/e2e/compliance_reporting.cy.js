describe('View compliance report', function(){
beforeEach(()=>{

    cy.loginAdmin()
})
 it('View  Homepage', ()=>{

    cy.visit('/local/wdtcompliance/')
    cy.get('[role="main"]').should('contain','Overall Organisational Compliance')
    cy.get('#organisationcompliancedoughnut').should('be.visible')
 })

})