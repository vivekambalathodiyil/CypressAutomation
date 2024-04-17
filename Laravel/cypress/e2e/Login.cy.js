cy.faker = require('faker');
describe('Login', function () {
    beforeEach(() => {
        cy.visit('https://laravel-main.edev.skillsforhealth.org.uk/login')
        cy.get('#exampleInputEmail').type('vivek.ambalathodiyil@wdtrust.org.uk')
        cy.get('#exampleInputPassword').type('Dasappan-123',{log:false})
        cy.get('.btn').click({force:true})
        

    })

    it('Course Creation', () => {

        cy.visit('https://laravel-main.edev.skillsforhealth.org.uk/admin/components/course-create')
         cy.get('#fullname').type('WDT Fire')
         cy.get('#inputEmail3').type('WF')
         cy.contains('Submit').click()


    })
    it.only('Client Details', () => {

        cy.visit('https://laravel-main.edev.skillsforhealth.org.uk/admin/analytics-clients')
        cy.get('table').find('tr').each(($row, index) => {
          cy.wrap($row).find('tr').invoke('text').then((text) => {
              cy.log(`Row ${index + 1}: ${text}`);
            });
        });

    })
   


})