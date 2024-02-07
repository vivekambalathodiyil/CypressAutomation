const { ifError } = require('assert');
const { it } = require('mocha');

cy.faker = require('faker');

describe('Homepage fiters', function(){
   
   beforeEach(() =>{
      cy.loginAdmin()
       })  
it('Create a new user & add job assignment', function(){     
       const faker = require("faker");
        cy.visit('/admin/user.php')
        cy.contains('Create user').click()

//Generating randon data for mandatory fields
let randomEmail = faker.Internet.email().toLowerCase()
let firstname = faker.Name.firstName().toLowerCase()
let surname = faker.Name.lastName().toLowerCase()
let email = faker.Internet.email().toLowerCase()
let number = faker.random.number(100)

//Input mandatory details
cy.get('#id_username').type(email)
cy.get('#id_newpassword').type('Da23%KE£1')
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
   cy.get('#position').click()
   cy.xpath('/html/body/div[10]/div[2]/div/div/div/div[1]/select').select([2])
   cy.get('.hitarea').click()
   cy.get('#item_18 > a').click()
   cy.contains('OK').click({force:true})
   
//Add Organisation
   cy.get('#show-organisation-dialog').click()
   cy.get('#item_1 > a').click()
   cy.xpath('/html/body/div[12]/div[3]/div/button[1]').click()
   cy.get('#id_submitbutton').click()
   cy.get("#user-notifications > div > div.alert-message").should('contain','Job assignment saved')

   })


})  



