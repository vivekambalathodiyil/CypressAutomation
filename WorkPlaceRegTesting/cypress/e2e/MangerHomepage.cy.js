describe('Creat a new user and add as manager', function () {

    // before running any 'it' block the below code will run to log in as an admin 
    beforeEach(() => {
        cy.loginAdmin()
    })

    it('Manager pages', () => {

        cy.visit('/my/')
        //cy.get('#page').should('contain',' My courses')
        cy.get('.navbar').should('contain',' Dashboard')
       cy.url('/admin/search.php').should('contain','')
       cy.get('[role="main"]').should('contain',)

    })




})
