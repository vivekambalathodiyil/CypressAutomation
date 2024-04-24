describe('template spec', () => {
// url can be changed in cypress.config.js to use the same script across elearing platforms
  it('Log into elearning.etest', () => {
    cy.viewport(3000, 2000)
//log into elearning as an admin
    cy.visit('/login/index.php')
    cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk')
    cy.get('#password').type('Dasappan-123', { log: false })
    cy.get('#loginbtn').click()
//the below script will search for the deleted users.
//Before off boarding script is run we need to take the list of usernames that are going to be deleted
//the username should be added to the fixtures folder
//Below script will take each usernames from the fixtures folder and then search in the user's page, if users are not found we can
//confirm that the users are  deleted

// change the folder user to user1(contains existing user) to test
    cy.fixture("users").then((data) => {
      //data.forEach will run the script will all usernames in the users.json fixtures folder.
       data.forEach((userdata) => {
          cy.visit('/local/sfhadmin/users/user.php', { timeout: 20000 })
          cy.log(data)
          cy.get("#id_username").type(userdata.email)
          cy.contains('Search').click()
// get the text element that says 'no users found from heading, there are 2 headings in h4 so we have to use eq(1), which means the second heading
          cy.get('h4').eq(1).invoke('text').then((text) => {
          cy.log(text)
// we cannot user contains clause here as cypress will stop if the text is not found, instead we store the text and user '=='      
            if (text == 'No users found') {
              cy.log('user deleted')
              cy.visit('https://elearning.etest.skillsforhealth.org.uk/login/logout.php?')
              cy.contains('Continue').click()
            } else {
              alert('User not deleted')
            }
            })
        })
      })
    })
  })
