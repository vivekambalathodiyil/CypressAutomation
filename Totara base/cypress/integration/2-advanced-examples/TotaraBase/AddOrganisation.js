//const { describe } = require("mocha");

const { it } = require("mocha");
cy.faker = require('faker');

describe('Create new organisation', function(){


it('Create a new organisation', function(){
   

    
    cy.viewport(2000,1800)
       cy.visit('https://pgdev.edev.skillsforhealth.org.uk/login/index.php')
       cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk',({log:false}))
       cy.get('#password').type('Dasappan-123',({log:false}))
       cy.get('#loginbtn').click()
       cy.visit('https://pgdev.edev.skillsforhealth.org.uk/totara/hierarchy/framework/index.php?prefix=organisation')
       cy.xpath('/html/body/div[5]/div/div/div[1]/div/div[1]/div/form/div/input[1]').click()
//Generating randon data for mandatory fields
const faker = require("faker");
let randomEmail = faker.Internet.email().toLowerCase()
let audiencename = faker.Name.firstName().toLowerCase()
let surname = faker.Name.lastName().toLowerCase()
let email = faker.Internet.email().toLowerCase()
let idnumber = faker.random.number(100)
let name= faker.Company.companyName()
            cy.xpath('/html/body/div[6]/div/div/div[1]/div/form/div[3]/div[2]/input').type(name)
            cy.xpath('/html/body/div[6]/div/div/div[1]/div/form/div[4]/div[2]/input').type(idnumber)
            cy.xpath('/html/body/div[6]/div/div/div[1]/div/form/div[5]/div[2]/div/div[1]/div/div[2]/div').type('Automated ')
            cy.get('#id_submitbutton').click()
            cy.get('.alert-message').then(function(text){
                cy.log(text.text())
            
                        })    
                
  
})
    

})

