
describe('Compliance course assignemnt dashboards', function () {
   beforeEach(() => {
      cy.loginAdmin()
   })

   it('View Compliance Course Assignment DB', () => {

      //open compliance course assignment db, two tabs assign to groups and assign to learners 
      //as default assign course to groups is the landing page, check if the tab is visible
      cy.visit('local/wdtcompliance/admin_matrix/index.php?showforcohorts=1')
      //check if group assignment tab is visible
      cy.get('#page-content').should('contain.text', 'Assign courses to groups')
      // Check if certification heading , to make sure the table is visible
      cy.get('table').find('tbody>tr').first().should('contain.text', 'Certifications')
      // check if assign ny learners tab is visible
      cy.get('#page-content').should('contain.text', 'Assign courses to learners')
      //open assign course to learners, verify if the user table visible
      cy.contains('Assign courses to learners').click()
      // Check if the table is visible but verifying table headings
      cy.get('table').find('tbody>tr').should('contain.text', 'All Learners')
      cy.get('span').should('contain.text', 'All Certifications')
      //check if filter button is visible
      cy.get('.filters-btn').should('be.visible').click()
   })
   it('Course Assignment Dashboard', () => {

      cy.visit('/local/wdtcompliance/admin_matrix/index.php?processtype=1&showforcohorts=1')
      // Check assign course to group/ assign course to leaners tabs are visible
      cy.get('#page-content').should('contain.text', 'Assign courses to groups')
      cy.get('#page-content').should('contain.text', 'Assign courses to learners')

   })
   it('Check all check boxes to select all users and certifications and click save', () => {
      cy.visit('/local/wdtcompliance/admin_matrix/index.php?processtype=0&showforcohorts=0')
      // Click all for the first certifications i.e. all users are allocated with the certification.   
      //cy.contains('All Learners').next().click({ force: true })
      // save the chaneges
     // cy.get('#processCertsBtnBottom').click({force: true})
      //click done on the alert window.
      //cy.get('.modal-footer > .btn').click({force: true})
     // cy.wait(2000)
     cy.contains('All Learners').scrollIntoView().next()
     cy.get('input[type="checkbox"]').then($checkboxes => {
      const first10Checkboxes = $checkboxes.slice(0, 1);
      first10Checkboxes.each((index, checkbox) => {
        cy.wrap(checkbox).check({force: true});
      });
    
     

     //cy.contains('All Learners').scrollIntoView().next().click({force: true})
     cy.wait(2000)
      cy.get('#processCertsBtnBottom').click({force: true})
      cy.get('.modal-footer > .btn').click({force: true})
      cy.get('.modal-header').click({force: true})
      cy.wait(2000)
  
      cy.visit('/local/wdtcompliance/admin_matrix/index.php?processtype=0&showforcohorts=0')
     
      cy.contains('All Learners').scrollIntoView().next()
      cy.get('input[type="checkbox"]').then($checkboxes => {
         const first10Checkboxes = $checkboxes.slice(0, 1);
         first10Checkboxes.each((index, checkbox) => {
           cy.wrap(checkbox).uncheck({force: true});
         
       });
      cy.get('#processCertsBtnTop').click({force: true})
      cy.get('.modal-footer > .btn').click({force: true})
      cy.get('.modal-header').click({force: true})
      cy.wait(2000)
      cy.visit('/local/wdtcompliance/admin_matrix/index.php?processtype=0&showforcohorts=0')
      cy.wait(2000)
   })
})
})
})