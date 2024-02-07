describe ('Upload certification completions', function(){

    beforeEach(() => {
        //custom command added in command.js needs to be changed depending on URL and admin user access
        cy.loginAdmin()
})
    it('Upload file',()=>{

        cy.visit('/admin/tool/uploaduser/index.php')
        cy.get('button').click()
    })    
})