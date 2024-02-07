//const cypress = require("cypress")

import { should } from "chai"

describe('Verify Admin access',function()
{
        it('Admin Login,Verify if admin tab is visible',function()
        {
            cy.loginAdmin()
            cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/')
            cy.get('[data-cy=indexhome]').click()
            cy.get('h2').should('contain','Overall Organisational Compliance')

            cy.get('[data-cy="organisation"]').click()
            cy.get('h2').should('contain','Compliance by Organisation')

            cy.get('[data-cy="certsimple"]').click()
            cy.get('h2').should('contain','Compliance by Certification')
            cy.get('[data-cy="position"]').click()
            cy.get('h2').should('contain','Compliance by Position')
            cy.get('[data-cy="userlist"]').click()
            cy.get('h2').should('contain','Compliance by User')

            

            // Verify " additional tabs for admin (targets/page order/ config settings)"
            //Compliance target page
            cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
            cy.get('h2').should('contain','Compliance targets')

            cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/static/update_navpages.php')
            cy.url().should('contain','https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/static/update_navpages.php')
            cy.get(':nth-child(3) > h2').should('contain','Page order and visibility')
            
            
        })  
})
