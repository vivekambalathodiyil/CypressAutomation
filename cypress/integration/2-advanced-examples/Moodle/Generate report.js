describe('Generate a reoprt', function()
{
    it('Admin Generates Report', function(){
        cy.viewport(1400,900)
cy.visit('https://elearningreports.snapshot.skillsforhealth.org.uk/')
cy.get('input[name=username]').type('john')
cy.get('#password').type('placji0343')
cy.get('#loginbtn').click()

    })

})