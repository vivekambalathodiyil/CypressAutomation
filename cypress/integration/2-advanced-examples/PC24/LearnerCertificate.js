describe('Verify Admin access',function()
{
        it('Learner can see certificates',function()
        {
            cy.loginLearner()
            cy.get('.col-md-6:nth-child(2) .img-responsive').click();
            cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/index.php');
            cy.get('#rb_79_r0_c3 > a').click();
            cy.get('#yui_3_17_2_1_1626449811347_72')
            cy.contains('Download my certificate')
            

        })  
}       )