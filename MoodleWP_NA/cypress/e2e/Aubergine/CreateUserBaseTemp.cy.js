cy.faker = require('faker');
const faker =require('faker')

describe('Homepage fiters', function(){
//    
    beforeEach(() =>{
        cy.viewport(1920, 1500)
        cy.visit('https://aubergine-ux-test.edev.skillsforhealth.org.uk/')
        cy.get('input[name=username]').type('vivek.ambalathodiyil', {log:false})
        cy.get('input[name=password]').type('Letmein1!',{log:false})
        cy.get('#loginbtn').click({force:true})
        cy.location('protocol').should('eq','https:')
        cy.log('Admin logged into the site')
        })  
    
    it('Create New User', function(){

        cy.visit('https://aubergine-ux-test.edev.skillsforhealth.org.uk/admin/tool/tenant/allusers.php')
        cy.contains('New user').click()
        cy.get('.modal-body').should('be.visible').click({force:true})
        cy.wait(2000)
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
    })

    })