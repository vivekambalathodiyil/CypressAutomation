cy.faker = require('faker');
const faker = require('faker')

describe('Create a new learner and a new manager', function () {

        // before running any 'it' block the below code will run to log in as an admin 
        beforeEach(() => {
                cy.loginAdmin()
        })

        it('Create New Learner', function () {
                //The script will create a user and then log in as the created user and verify if the user has access to learner pages.(Dashbopard and My courses)

                cy.visit('/admin/tool/tenant/allusers.php')
                cy.contains('New user').click()
                cy.get('.modal-body').should('be.visible').click({ force: true })
                cy.wait(2000)
                //Generating randon data for mandatory fields
                const randomEmail = faker.Internet.email().toLowerCase()
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
                // once the user is created, admin will log out and the created user will log in. We can search the username as admin to veriy if the 
                // the learner was created but there is a issue with the filter option(cypress not able to locate element) in user page due to which we log in as the created user.        
                cy.visit('/login/logout.php?')
                cy.contains('Continue').click()
                cy.get('#username').clear().type('wdt' + firstname)
                cy.get('#password').clear().type('a3!2W9R+R')
                cy.contains('Log in').click()
                cy.get('#page').should('contain', 'Welcome,' + ' WDT' + firstname + '!')
                cy.get('.navbar').should('contain', 'Dashboard')
                cy.get('.navbar').should('contain', 'My courses')
                cy.visit('/login/logout.php?')
                cy.contains('Continue').click()


        })
        
})







