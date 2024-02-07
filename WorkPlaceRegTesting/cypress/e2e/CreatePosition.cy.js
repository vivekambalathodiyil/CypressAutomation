cy.faker = require('faker');
const faker =require('faker')

describe('Homepage fiters', function(){
   
// before running any 'it' block the below code will run to log in as an admin in will be 
    beforeEach(() =>{
       cy.loginAdmin()
        }) 
        it.only('Create Position Framework ',()=>{
// add randon name and randon position  we have used the below line to generate randon numbers next to position name and 
// id number so that the names are unique when running the code multiple times    
                    let PositonNumber = faker.random.number(100)+1
                    cy.visit('admin/tool/organisation/index.php#positions')
                    cy.get('#page').contains('New framework').click()
// Some it take some for the create new window to open, due to which 'wait' is added
                    cy.wait(2000)
// The create new opens in a modal window, so window object need to be active so that the contents inside is accessiable
                   const PositionName = ('WDT Client Position'+PositonNumber)
                    cy.get('.modal-content').contains('Name').type(PositionName)
                    cy.contains('ID number').type('1 '+PositonNumber)
                    cy.get('.modal-footer').contains('Save').click()
                    cy.wait(5000)
//below code will find the new position framework created and then add a new position inside
                    cy.get('#page-content').contains(PositionName)
                    cy.contains('New position').click()
                })
        it('Add new position',()=>{


                    let PositionName = faker.Company.companySuffix()
                    cy.visit('/admin/tool/organisation/index.php#positions')
                    cy.get('#page-content').contains('New position').click()
                    cy.contains('Name').type(PositionName+' Position')
                    cy.contains('ID number').type('42')
                    cy.contains('Manager').click()
                    //cy.contains('Allocate users to programs/certifications').click()
                    cy.contains('View user reports').click()
                    cy.contains('Department lead').click()
                    cy.get('.modal-footer').contains('Save').click()
            
                 })
    
    
    
    
    
    
    })