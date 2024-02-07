describe('Log In as a Learner ',function()
{
        it('Logged in as a Learner',function()
        {
            cy.viewport(1400,900);  
            cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php')
            cy.get('#username').click().type('alan.duncan@pc24.nhs.uk');
            cy.get('#password').click();
            cy.get('#password').type('Password-1234');
            cy.get('#login').submit(); 
        })       
                it('Compliance Tab and Compliance % are visible,',function()
                {
                    cy.viewport(1400,900);  
            cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php')
            cy.get('#username').click().type('alan.duncan@pc24.nhs.uk');
            cy.get('#password').click();
            cy.get('#password').type('Password-1234');
            cy.get('#login').submit(); 
                    cy.get('#totaramenuitem35 > .totaraNav_prim--list_item_link > .totaraNav_prim--list_item_label').click();
                    cy.get('[width="100%"] > tbody > tr > :nth-child(2)')
                    cy.get('tr > :nth-child(2) > span').should ('have.text','Your individual compliance is 90%')
                    cy.get('[role="main"] > :nth-child(2)')
                    cy.get('[role="main"] > :nth-child(2)').should('have.text','Individual Compliance')
                })
                it('All learner tabs are visible',function()
                {
                cy.viewport(1400,900);  
                cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php');
                cy.get('#username').click().type('alan.duncan@pc24.nhs.uk');
                cy.get('#password').click();
                cy.get('#password').type('Password-1234');
                cy.get('#login').submit(); 
                cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/');
                cy.get('#totaramenuitem29 .totaraNav_prim--list_item_label').click();
                cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/index.php');
                cy.get('#totaramenuitem30 .totaraNav_prim--list_item_label').click();
                cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/index.php');
                cy.get('#totaramenuitem25 .totaraNav_prim--list_item_label').click();
                cy.get('#action-menu-toggle-0').click();
                cy.get('#yui_3_17_2_1_1626200709044_135').click();
                cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/login/index.php');

                })     

        })
