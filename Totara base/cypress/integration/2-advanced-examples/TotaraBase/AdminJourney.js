//const cypress = require("cypress")

describe('Verify Admin access',function()
{
        it('Admin Login,Verify if admin tab is visible',function()
        {
            cy.viewport(1920, 1200)
            cy.visit('https://pgdev.edev.skillsforhealth.org.uk//login/index.php')
            cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk',({log:false}))
            cy.get('#password').type('Dasappan-123',({log:false}))
            cy.get('#loginbtn').click()
            cy.visit('https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/')
            cy.get('h2:nth-child(2)').should('contain','Compliance Reporting')
            cy.get('.nav > li:nth-child(2) > a').click();
            
            cy.get('h2:nth-child(2)').should('contain','Compliance by organisation',)
            cy.url().should('contains', 'https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/reporting/organisationcompliance.php');
            cy.get('.nav > :nth-child(3) > a').click()

            cy.url().should('contains', 'https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/reporting/certificationcompliance.php');
            cy.log('[blue]','Compliance by Certification')
            
            cy.get('.nav > :nth-child(4) > a').click()
            
            cy.url().should('contains', 'https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/reporting/userlist.php');
            cy.get('h2:nth-child(2)').should('contain','Compliance Reporting - Users')

            // Verify " additional tabs for admin (targets/page order/ config settings)"
            cy.visit('https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
            cy.get('tbody > tr > :nth-child(4)').should('contain','Set chosen organisational targets')

            cy.visit('https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_navpages.php')
            cy.url().should('contain','https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_navpages.php')
            cy.visit('https://pgdev.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_compliance_config.php')
            cy.get(':nth-child(2) > .btn').should('be.visible')
            cy.get('.caret').click()
            cy.get('#actionmenuaction-2').click()
            
        })  
}       )
