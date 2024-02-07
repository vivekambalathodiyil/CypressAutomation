describe('Fire Safety', function() {
    it('View My Learning', function() {
       cy.viewport(1920, 1278)
       cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php')
       cy.get('#username').click().type('vivek.ambalathodiyil@wdtrust.org.uk',{log:false});
       cy.get('#password').click();
       cy.get('#password').type('Dasappan-123',{log:false});
       cy.get('#login').submit();
    
       cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/')
       cy.get('.row > .col-md-6:nth-child(1) > p > a > .img-responsive').click()
       cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/index.php?id=2')

       cy.get('.yui_3_17_2_1_1635331688508_49').contains('Fire Safety')
    })
   })