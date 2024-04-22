describe('Client Licence Details', function(){
beforeEach(()=>{
    cy.loginAdmin()

})
it('Client Licence details',()=>{
    cy.visit('/admin/client/licence')
    cy.get(':nth-child(8) > .nav-link').click()
    cy.contains('Client Licence').click()
    cy.get('#clientURL').type('https://www.das.com')

})

})