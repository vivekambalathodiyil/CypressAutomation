cy.faker = require('faker');
const faker =require('faker')
import 'cypress-xpath';
describe('Homepage fiters', function(){
//    
    beforeEach(() =>{
        cy.viewport(1920, 1500)
        cy.visit('/')
        cy.get('input[name=username]').type('vivek.ambalathodiyil@wdtrust.org.uk', {log:false})
        cy.get('input[name=password]').type('Dasappan-123',{log:false})
        cy.get('#loginbtn').click({force:true})
        cy.location('protocol').should('eq','https:')
        cy.log('Admin logged into the site')
        })  
    
    it('Create New User', function(){

        cy.visit('/admin/tool/tenant/allusers.php')
        cy.contains('New user').click()
        cy.get('.modal-body').should('be.visible').click({force:true})
        cy.wait(5000)
//Generating randon data for mandatory fields
                            let randomEmail = faker.Internet.email().toLowerCase()
                            let firstname = faker.Name.firstName().toLowerCase()
                            let surname = faker.Name.lastName().toLowerCase()
                            let email = faker.Internet.email().toLowerCase()
                            let number = faker.random.number(100)
        
//xpath need to be replace once CY tags are added, the element is not visible with id's so xpath is used
        cy.xpath('/html/body/div[6]/div[2]/div/div/div[2]/form/fieldset[1]/div[2]/div[2]/div[2]/input').type('wdt'+firstname).click({force:true})
        cy.get('em').type('Dasappan-123')
        cy.xpath('/html/body/div[6]/div[2]/div/div/div[2]/form/fieldset[1]/div[2]/div[9]/div[2]/input').type(firstname)
        cy.xpath('/html/body/div[6]/div[2]/div/div/div[2]/form/fieldset[1]/div[2]/div[10]/div[2]/input').type('Learner')
        cy.xpath('/html/body/div[6]/div[2]/div/div/div[2]/form/fieldset[1]/div[2]/div[11]/div[2]/input').type(email)
        cy.contains('Save').click()
        cy.visit('/login/logout.php?')
        cy.contains('Continue').click()
        cy.get('input[name=username]').clear().type('wdt'+firstname, {log:false})
        cy.get('input[name=password]').type('Dasappan-123',{log:false})
        cy.get('#loginbtn').click({force:true})
        cy.visit('/login/logout.php?')
        cy.contains('Continue').click()
        cy.get('#username').clearAllCookies()
    
        
     
        cy.loginAdmin()
        cy.visit('https://workplace-qa.dev.learnspace.org/local/wdtcompliance/admin_matrix/index.php?showforcohorts=1')
        cy.get('[for="learnersTab"] > .heading').click()
        cy.wait(2000)
        cy.get('#search').type(firstname).next().click()
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/section/div/div/div[4]/div[2]/div/table/tbody/tr[3]/td[1]/label').click()
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[1]/section/div/div/div[4]/div[2]/div/table/tbody/tr[3]/td[23]/label').click()

       }) 
    })

    