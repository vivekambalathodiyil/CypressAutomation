///<reference types='cypress'/>
describe ('Change target %', function()
{
    
    it('Change target %',function(){
   
    cy.loginAdmin()
    
   
    //open admisntration page to change the target %

    cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/index.php')
    cy.wait(1000)
    //Display the current target % before changing
    cy.xpath('/html/body/div[3]/div[2]/div/div/div[3]/div/div[1]/table/tbody/tr/td/span[3]/text()[2]').then(function(text){
        cy.log(text.text())
    })
    cy.log('Please see the target now')
    // visit the compliance target page and change the % to 95%
    cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
    cy.get('#orggreenpercent').select('95') 
    cy.get('.btn-primary').click();
    cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/index.php')
    // Find if the target % is changed by finding 95, the changed target
    cy.xpath('/html/body/div[3]/div[2]/div/div/div[3]/div/div[1]/table/tbody/tr/td').should('contain','Green = 95%')
    cy.log('Successfully change the target %')

    cy.wait(4000)
    cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
 
    //Change the % back to 80 so the test can be repeted
    cy.get('#orggreenpercent').select('85') 
    cy.get('.btn-primary').click();
    cy.get('.nav > :nth-child(1) > a').click()
    
})
})