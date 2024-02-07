// what the test does is that it takes the total users and total certified users from the homepage of
// certification, then find the difference which is the uncertified users. Then click into the user details and 
// click uncertified users check-box to get the uncertified user list.The script get the value from the text that says the total number of un-certified users on the page. 
//Ater this script will check if uncertified users(total users - certified user)
//in homepage is equal to uncertified users in the user list. 


    it('Organisations', () => {
        cy.viewport(1920, 1500)
        cy.visit('/login/index.php')
        cy.get('#username').type('vivek.ambalathodiyil@wdtrust.org.uk')
        cy.get('#password').type('Dasappan-123', { log: false })
        cy.get('#loginbtn').click()

        cy.visit('https://pc24-upgrade.etest.skillsforhealth.org.uk/local/wdtcompliance/reporting/organisationcompliance.php')
        cy.get('.fheader > .flex-icon').click()
        cy.get('[data-cy="fltOrganisation"]').select(20)
        cy.get('[data-cy="fltCertification"]').select(5)
        cy.get('[data-cy="fltbtnSearch"]').click()
        cy.get('table').as('myTable')
       // get the total number of user in the organisation for a particular certification
        cy.get('@myTable').find('td:eq(0)').invoke('text')
             .then((text) => {
                // Convert the 'text' variable to a JavaScript number 
                const numberOfusers = parseFloat(text);
                // Use the numericValue in your Cypress test assertions or other operations
               cy.log(`Total number of users: ${numberOfusers}`);
                // get the total number of certified users in the organisation for a particular certification
                cy.get('@myTable').find('td:eq(2)').invoke('text')
                    .then((text) => {
                        // Convert the 'text' variable to a JavaScript number 
                        const certifiedUsers = parseFloat(text);
                        const uncertifiedUsers = numberOfusers - certifiedUsers
                        // open the users list to compare the number of uncertified users. The user list 
                        //shoud have the  correct number of uncertified users  (total users - certified users).   
                        //open user list
                        cy.get('a > .fa').click()
                        //expand the filter
                        cy.get('.fheader > .flex-icon').click()
                        //click and select the check box for Certification is overdue, so see total unregisted users
                        cy.get('#id_expiryred').check()
                        cy.get('[data-cy="fltbtnSearch"]').click()
                        cy.get(':nth-child(1) > [colspan="5"] > strong').invoke('text')

                            .then((text) => {
                                const userList = parseFloat(text)

                                cy.get(':nth-child(1) > [colspan="5"] > strong').should('contain', uncertifiedUsers)


                                cy.log(`Total number of users: ${numberOfusers}`);
                                cy.log(`Total number of  certified users: ${certifiedUsers}`)
                                cy.log('Total uncertified users (total users - certified users :)' + uncertifiedUsers)


                            })
                    });
            });

    })

})
