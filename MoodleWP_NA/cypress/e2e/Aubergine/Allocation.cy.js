describe('Alloaction Matrix', function () {

    beforeEach(() => {

        cy.loginAdmin()
    })
    it('Certification Allocation', () => {
        // open certification alloaction matrix
        cy.visit("/local/wdtcompliance/admin_matrix/index.php")
        cy.get('.filters-btn').click()
    })
    it()
})