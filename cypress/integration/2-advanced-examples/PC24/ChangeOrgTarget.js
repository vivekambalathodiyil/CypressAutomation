///<reference types='cypress'/>
describe ('Change target %', function()
{
    
    it('Change target %',function(){
    cy.viewport(1400,1000);    
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php');
    cy.get('#username').click().type('vivek.ambalathodiyil@wdtrust.org.uk',{log:false});
    cy.get('#password').click();
    cy.get('#password').type('Dasappan-123',{log:false});
    cy.get('#login').submit();
    cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/');
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/local/wdtcompliance/index.php')
    cy.wait(1000)
    cy.get('[style="font-size:16px; font-style: italic"]').find()
  
    cy.log('Please see the target now')
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
    
    cy.get('#orggreenpercent').select('50') 
    cy.get('.btn-primary').click();
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/local/wdtcompliance/index.php')
    cy.get('[role="main"]').contains('50')
    cy.log('Successfully change the target %')
    cy.wait(4000)
    cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
 
    //Change the % back to 80
    cy.get('#orggreenpercent').select('80') 
    cy.get('.btn-primary').click();
    cy.get('.nav > :nth-child(1) > a').click()
    
})
})