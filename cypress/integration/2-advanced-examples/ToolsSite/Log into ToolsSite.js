describe('log into tools site', function()
{
        it ('verify the title of 4 pages', function()
        {
        cy.visit('https://tools.skillsforhealth.org.uk/wp-login.php?loggedout=true&wp_lang=en_GB');
        
        cy.get('#user_login').type('ben');
        cy.get('#user_pass').type('Dasappan-123');
        cy.get('#wp-submit').click();
        cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/my-lists/');
        cy.get('.tab:nth-child(1) > a').click();
        //cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/health-functional-map/');
         cy.title().should('eq','Health Functional Map – Skills for Health Tools');
        cy.get('.tab:nth-child(2) > a').click();
       // cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/competence-search/');
        cy.get('.tab:nth-child(3) > a').click();
        //cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/roles-directory/');
        cy.get('.tab:nth-child(4) > a').click();
        //cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/my-lists/');
        cy.get('.user-icon').click();
        cy.get('ul:nth-child(2) > li:nth-child(3) > a').click();
       // cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/wp-login.php');
        cy.get('a').click();
        cy.url().should('contains', 'https://tools.skillsforhealth.org.uk/wp-login.php');
        })    
})