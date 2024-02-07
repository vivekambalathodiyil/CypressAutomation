const { ifError } = require('assert');
const { it } = require('mocha');

cy.faker = require('faker');
describe('Create a new user & add job assignment', function () {

   beforeEach(() => {
      //custom command added in command.js under support folder
      cy.loginAdmin()
      // verity if the filters are visible/active


   })
   it('Log into users page', function () {

      cy.visit('/admin/user.php')
      cy.contains('Create user').click()
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
      cy.get('#menu').select([1])
      cy.get('.hitarea').click()
     //select a position
      cy.contains('Chair').click()
     //click ok to save 
      cy.contains('OK').click()
      //Add Organisation
      cy.get('#show-organisation-dialog').click()
      cy.get('#item_1 > a').click()
      cy.xpath('/html/body/div[12]/div[3]/div/button[1]').click()
      cy.get('#id_submitbutton').click()
      cy.get("#user-notifications > div > div.alert-message").should('contain', 'Job assignment saved')
   })




})

