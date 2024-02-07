const { ifError } = require('assert');
const { it } = require('mocha');

cy.faker = require('faker');
describe('Create a new user & add job assignment', function() {
    it('Log into users page', function() {
       cy.viewport(1920, 1837)
       cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk//login/index.php')
       cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk',({log:false}))
       cy.get('#password').type('Dasappan-123',({log:false}))
       cy.get('#loginbtn').click()
       cy.wait(2000)
       cy.get('.nav-link > .tfont-var-gear').should('be.visible')
       cy.log('Admin menu accessable')
       cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/admin/user.php')
       
cy.get(':nth-child(4) > form > div > [type="submit"]').click()
       
       const faker = require("faker");
        

//Generating randon data for mandatory fields
let randomEmail = faker.Internet.email().toLowerCase()
let firstname = faker.Name.firstName().toLowerCase()
let surname = faker.Name.lastName().toLowerCase()
let email = faker.Internet.email().toLowerCase()
let number = faker.random.number(100)

//Input mandatory details
cy.get('#id_username').type(email)
cy.get('#id_newpassword').type('Password1234!')
cy.get('#id_firstname').type(firstname)
cy.get('#id_email').type(randomEmail)
cy.get('#id_lastname').type(surname)
cy.get('#id_submitbutton').click(number)
//Job Assignment


   cy.get('.addjoblink').click()
   cy.get('#id_fullname').type('JA')
   cy.get('#fitem_id_idnumber > .fitemtitle > label').type(number)
   cy.get('#show-position-dialog').click()
   //Select one job position
   cy.get('#item_list_1 > div').click()
   cy.get("#item_2").click()
   cy.get('#item_2 > a').click()
   cy.get('#position').click()
   //Xpath used to click OK button
   cy.xpath('/html/body/div[10]/div[3]/div/button[1]').click()
//Add Organisation
cy.get('#show-organisation-dialog').click()
cy.get('#item_1 > a').click()
cy.xpath('/html/body/div[12]/div[3]/div/button[1]').click()
cy.get('#id_submitbutton').click()
cy.get("#user-notifications > div > div.alert-message").should('contain','Job assignment saved')
})




})

