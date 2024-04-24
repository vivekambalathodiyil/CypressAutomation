describe('template spec', () => {
  it('Log into elearning.etest', () => {
    cy.viewport(3000, 2000)
//log into elearning as an admin
    cy.visit('/login/index.php')
    cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk')
    cy.get('#password').type('Dasappan-123',{log:false})
    cy.get('#loginbtn').click()
//the below script will search for the deleted users.
//Before off boarding script is run we need to take the list of usernames that are going to be deleted
//the username should be added to the fixtures folder
//Below script will take each usernames and serch in the user's page, if users are not found we can
//confirm that the users are  deleted
   
      cy.fixture("users").then((data) => {
//data.forEach will run the script will all usernames in the fixtures folder.
        data.forEach((userdata) => {
                                cy.visit('/local/sfhadmin/users/user.php', { timeout: 20000 })
                                cy.log(data)
                                cy.get("#id_username").type(userdata.email)
                                cy.contains('Search').click()
//once the user is searched the script will look for 'no users found' ,if not the script will stop
                                if (cy.get('h4').contains('No users found')) {
                                  
                                } else {
                                  alert('user not deleted')
                                }
      })
    })
  })
it.only('Search for deleted users',()=>{
  cy.viewport(3000, 2000)
  //log into elearning as an admin
      cy.visit('/login/index.php')
      cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk')
      cy.get('#password').type('Dasappan-123',{log:false})
      cy.get('#loginbtn').click()
  
  cy.fixture("user1").then((data) => {
    //data.forEach will run the script will all usernames in the fixtures folder.
            data.forEach((userdata) => {
                                    cy.visit('/local/sfhadmin/users/user.php', { timeout: 20000 })
                                    cy.log(data)
                                    cy.get("#id_username").type(userdata.email)
                                    cy.contains('Search').click()
                                    cy.get('h4').eq(1).invoke('text').then((text)=>{
                                      cy.log (text)
                                      if (text == 'No users found') {
                                        cy.log('user deleted')
                                      } else {
                                        alert('User not deleted')
                                      }
                                    })
                                  
                                  })


                                    })

            })
          })
