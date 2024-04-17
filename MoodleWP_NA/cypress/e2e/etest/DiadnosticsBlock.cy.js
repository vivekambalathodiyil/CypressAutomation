describe('log in with different users', function(){



it('login with multiple users',()=>{
// this script will log in with multiple users
// the list of users are added in fixtures folder under file name userlist.json
    cy.fixture("userlist").then((data)=>{
// forEach will runn the same test of all users in the
        data.forEach((userlist)=>{
            cy.visit('https://workplace.etest.skillsforhealth.org.uk/login/index.php')
            cy.get('#username').clear()
            cy.get('#username').type(userlist.username)
            cy.get('#password').type(userlist.password,{log:false})
            cy.get('#loginbtn').click()
            cy.wait(2000)
            cy.visit('https://workplace.etest.skillsforhealth.org.uk/login/logout.php?')
            cy.contains('Continue').click()

            


        })
    })


})
})

