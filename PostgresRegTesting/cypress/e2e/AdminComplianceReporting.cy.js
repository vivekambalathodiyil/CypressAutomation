//const { findIndex } = require("cypress/types/lodash")

describe('Verify Admin Compliance Tabs' , function() {

    beforeEach(() =>{
        
        cy.loginAdmin()
        })      
it('Home page', function(){
// Visit home page and check filter options and compliance %
    cy.visit('/local/wdtcompliance/index.php')
    cy.get('.fheader > .flex-icon').should('be.visible').click()
    cy.get('[data-cy="compliancepercentage"]').then(function(text){
        cy.log(text.text())
    })
})
it('Organisation page', function(){
// Visit Organisation and check filter options and compliance %
    cy.visit('/local/wdtcompliance/reporting/organisationcompliance.php')
    cy.get('.fheader > .flex-icon').should('be.visible').click()
            
            })
   
it('Certification page', function(){
// Visit Certification page and check filter options and compliance %
    cy.visit('/local/wdtcompliance/reporting/certificationcompliancesimple.php')
    cy.get('.fheader > .flex-icon').should('be.visible').click()
                      
         })
it('Positions page', function(){
// Visit positions page and check filter options and compliance %
    cy.visit('/local/wdtcompliance/reporting/positioncompliance.php')
    cy.get('.fheader > .flex-icon').should('be.visible').click()
                     
        })
it('Users page', function(){
// Visit Users page and check filter options and compliance %
    cy.visit('/local/wdtcompliance/reporting/userlist.php')
    cy.get('.fheader > .flex-icon').should('be.visible').click()
                                          
        })
 it('Settings page', function(){
 // Visit Settings page and check filter options and compliance %
    cy.visit('/local/wdtcompliance/static/update_org_percent.php')
    cy.get('[data_cy="applyorgpercentages"]').should('be.visible').click()
                                                
        })
                              
})


