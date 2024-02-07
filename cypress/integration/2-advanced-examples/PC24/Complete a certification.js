describe('Verify Admin access',function()
{
        it('Admin Login,Verify if admin tab is visible',function()
        {
            cy.viewport(1700,1000)    
            cy.loginAdmin()
            cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/');
//Open the certification
            cy.get(':nth-child(1) > :nth-child(1) > a > .img-responsive').click()
            cy.get(':nth-child(2) > .learningitem > .detail > .upper > .upper-inner > .coursename > .d-block').click()
            cy.get(':nth-child(8) > .fullwidth > tbody > .lastrow > .launchcourse > .prog-course-launch > .singlebutton > form > div > [type="submit"]').click()
            cy.get('#module-856 > :nth-child(1) > .mod-indent-outer > :nth-child(2) > .activityinstance').click()
            cy.get('#scormviewform > .btn').click()
            

        })  
}       )
