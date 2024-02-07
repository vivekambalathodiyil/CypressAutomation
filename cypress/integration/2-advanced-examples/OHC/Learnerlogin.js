describe('Login as a learner', function()
{
     it('Learner can view their Individual Compliance', function()
          {
            cy.OHCloginLearner()
            cy.visit('https://onehealthcare.emirr.skillsforhealth.org.uk/local/wdtcompliance/reporting/userindividual.php')
            cy.url().should('contains', 'userindividual.php') 
            cy.contains('User Compliance')
            cy.log('User can see their Individual compliance')
            cy.intercept('https://onehealthcare.emirr.skillsforhealth.org.uk/local/wdtcompliance/reporting/organisationcompliance.php')
            
            //cy.visit('https://onehealthcare.emirr.skillsforhealth.org.uk/local/wdtcompliance/reporting/organisationcompliance.php')
     }
 )
    })