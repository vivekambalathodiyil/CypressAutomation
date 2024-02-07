describe('Assign users to certifiations', function(){

beforeEach(()=>{
 cy.loginAdmin()
})
    it('View assigned users',()=>{
        cy.visit('https://workplace.etest.skillsforhealth.org.uk/local/wdtcompliance/admin_matrix')
        cy.get('#partname').type('joseph')
        cy.contains('Search/Display').click()
        cy.get('strong').contains('users displayed')
        cy.get('.tab-content').should('contain','Joseph')
        cy.get('.container-fluid > form').should('contain','Search/Display')
        cy.get('#showcerts').should('be.visible')
        cy.contains('1 year').click()

    })

})