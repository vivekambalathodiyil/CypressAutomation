describe('Log into ComplianceRepoting', () => {
    
    it('View page', function() {
        cy.viewport(1400,900);    
     
        cy.visit('https://nhsp.emirr.skillsforhealth.org.uk/login/index.php');
cy.get('#username').type('vivek.ambalathodiyil@wdtrust.org.uk');
cy.get('#password').type('Dasappan-123');
//cy.get('#loginbtn').click();
cy.get('#login').submit();
cy.url().should('contains', 'https://nhsp.emirr.skillsforhealth.org.uk/totara/dashboard/');
cy.get('.totaraNav_prim--list_item_label').click();
cy.url().should('contains', 'https://nhsp.emirr.skillsforhealth.org.uk/local/wdtcompliance/reporting/userlist2.php');
cy.get('#id_traininggroup').click();
cy.get('#id_traininggroup').type('109');
cy.get('#id_traininggroup').click();
cy.get('#id_submitbutton').click();
cy.get('#mform1').submit();
cy.url().should('contains', 'https://nhsp.emirr.skillsforhealth.org.uk/local/wdtcompliance/reporting/userlist2.php');

    })
  })
  