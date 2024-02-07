cy.faker = require('faker');
const faker = require('faker')
cy.faker = require('faker');


describe('Create Manager', function () {

    it('Create Framework/Position/Job assignment', () => {
        cy.viewport(1920, 1500)
        cy.visit('http://localhost/Moodle-Workplace/login/index.php')
        cy.get('#username').type('vivek.ambalathodiyil@wdtrust.org.uk', { log: false })
        cy.get('#password').type('Dasappan-123', { log: false })
        cy.get('#loginbtn').click({ force: true })

        //Create a new framework

        cy.visit('http://localhost/Moodle-Workplace/admin/tool/organisation/index.php#positions')
        cy.get('#page').contains('New framework').click()
        let Framework = faker.Company.companyName()
        let FrameworkId = faker.random.number(10) + 1
        let PositonNumber = faker.random.number(100) + 1
        // below is store the name of the new framework to reuse
        const FrameworkName = ('WDT Client Position' + Framework)
        cy.get('.modal-content').contains('Name').type('WDTFramework' + FrameworkId)
        cy.contains('ID number').type(PositonNumber)
        cy.get('.modal-footer').contains('Save').click()
        cy.wait(5000)
        // Create a new position in the position framework
        let PositionName = faker.Company.companyName()
        cy.visit('http://localhost/Moodle-Workplace/admin/tool/organisation/index.php#positions')
        cy.get('#page-content').contains('New position').click()
        cy.contains('Name').type(PositionName + ' Position')
        cy.contains('ID number').type('42')
        cy.contains('Manager').click()
        //below will give manager permissions to the added position
        cy.contains('View user reports').click()
        cy.contains('Department lead').click()
        cy.get('.modal-footer').contains('Save').click()
// now posotion is created with a manager role, now we have to create a new user and add to the created postion
cy.visit('http://localhost/Moodle-Workplace/admin/tool/tenant/allusers.php')
        cy.contains('New user').click()
        cy.get('.modal-body').should('be.visible').click({ force: true })
        cy.wait(2000)
        //Generating randon data for mandatory fields
                let randomEmail = faker.Internet.email().toLowerCase()
                let firstname = faker.Name.firstName().toLowerCase()
                let surname = faker.Name.lastName().toLowerCase()
                let email = faker.Internet.email().toLowerCase()
                let number = faker.random.number(100)

        //elements need to be changed once custom tags are added[CY-]        
        //Below code is to fill the user details
      
        cy.get('.modal-body').contains('Username').type('wdt' + firstname).click({ force: true })
        cy.get('.modal-body').contains('New password').type('a3!2W9R+R')
        cy.get('.modal-body').contains('First name').type('WDT' + firstname)
        cy.get('.modal-body').contains('Surname').type(surname)
        cy.get('.modal-body').contains('Email address').type(email)
        cy.contains('Address').type('Bristol')
        cy.get('.modal-footer').contains('Save').click()
    })



})