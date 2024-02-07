cy.faker = require('faker');
describe('Login', function () {
    beforeEach(() => {
        cy.visit('https://laravel-main.edev.skillsforhealth.org.uk/login')
        cy.get('#exampleInputEmail').type('vivek.ambalathodiyil@wdtrust.org.uk')
        cy.get('#exampleInputPassword').type('Dasappan-123')
        cy.get('.btn').click()

    })

    it('Course Creation', () => {

        cy.visit('https://laravel-main.edev.skillsforhealth.org.uk/admin/components/course-create')
        
        let number = faker.random.number(100)
        cy.get('#fullname').type()

    })
    it('Course Creation', () => {

        cy.visit('https://laravel-main.edev.skillsforhealth.org.uk/admin/components/course-create')

    })


})