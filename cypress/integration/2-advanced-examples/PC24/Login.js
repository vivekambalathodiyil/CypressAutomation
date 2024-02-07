describe('Log into ComplianceRepoting PC 24', () => {
    
    it('View page', () => {

        newFunction();
        Loginasadmin();
        cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/');
        cy.get('#totaramenuitem35 .totaraNav_prim--list_item_label').click();
        cy.url().should('contains', 'https://primarycare24.edev.skillsforhealth.org.uk/local/wdtcompliance/');
        cy.title().should('eq', 'Compliance Reporting');
        //the title should be changed based on the page
        cy.get('.userpicture').click();
        cy.get('#actionmenuaction-2').click();


      function Loginasadmin() {
        cy.get('#username').click().type('vivek.ambalathodiyil@wdtrust.org.uk', { log: false });
        cy.get('#password').click();
        cy.get('#password').type('Dasappan-123', { log: false });
        cy.get('#login').submit();
      }

      function newFunction() {
        cy.viewport(1200, 900);
        cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php');
      }
      })
  })
  