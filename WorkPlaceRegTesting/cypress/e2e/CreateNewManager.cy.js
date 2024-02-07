// For a manger we have to create a new manager postion and then add the user to that newly created position so that the new 
//user is able to have manager permissions
cy.faker = require('faker');
const faker = require('faker')

describe('Creat a new user and add as manager', function () {

    // before running any 'it' block the below code will run to log in as an admin 
    beforeEach(() => {
        cy.loginAdmin()
    })


    it('Create a new manager', () => {
        cy.visit('/admin/tool/tenant/allusers.php')
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
        //once the manager is created a new job position needs to be created. The created user will be added into this position to get access to Manger roles
        cy.visit('admin/tool/organisation/index.php#positions')
        cy.get('#page').contains('WDT').click()
        cy.contains('New position').click()
        cy.contains('Name').type('WDT Client Position' + number)
        cy.contains('ID number').type(number + 1)
        cy.contains('Manager').click()
        cy.contains('View user reports').click()
        cy.contains('Department lead').click()
        cy.get('.modal-footer').contains('Save').click()
        cy.wait(2000)
        cy.visit('/admin/search.php#linkusers')
        //New position is create with the code above.
        // New job assignements will be create and the user created above will be added into that postion.(code below to add user to JA)


   
        cy.visit('/admin/tool/organisation/index.php#jobs')
        cy.contains('New job').click()
        cy.wait(2000)
        cy.get('.modal-content').as('modal')
        cy.get('@modal').within(() => {
            cy.get('input[type="text"]').eq(0).type('WDT' + firstname).wait(2000).click().type('{enter}').click()
            cy.get('input[type="text"]').eq(0).clear()
        })
        cy.get('.modal-body').as('select')
        cy.get('@select').within(() => {

            cy.get('.form-control.custom-select').first((element) => element.type === 'selectgroups')

                .then((firstElement) => {
                    // Do something with the first element here
                    // For example, you can assert its attributes or interact with it
                    cy.get(firstElement).select([15]);
                });
            cy.get('.form-control.custom-select').last((element) => element.type === 'selectgroups')

                .then((firstElement) => {
                    // Do something with the first element here
                    // For example, you can assert its attributes or interact with it
                    cy.get(firstElement).select([1])

                });

        })

        cy.get('.modal-footer').contains('Save').click()


    })



})
