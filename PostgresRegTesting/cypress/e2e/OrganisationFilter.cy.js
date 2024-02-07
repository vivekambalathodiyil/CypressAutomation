describe('LogIn As Admin', function() {
      beforeEach(() =>{
  
            cy.loginAdmin()
            })                     
  
it.only('Verify Admin permitted pages', function() {
//Visit Home page and verify that the filter are applied
      cy.visit('/local/wdtcompliance/index.php')
// First step is to select the overall compliance before filter is applied
cy.get('[data-cy="compliancepercentage"]').then(function(text){
      cy.log('Compliance % before filter is applied',text.text())
//Now filter will be applied, then once the % will see if the compliance % has changed
//First open the filter and then apply audience filter
cy.get('.fheader > .flex-icon').click()
//Apply audience filter
cy.get('[data-cy="fltAudience"]').select([1])// this will select the second option form the audience list
cy.get('[data-cy="fltbtnSearch"]').click()


if (cy.get('tbody').contains('No figures available')) {
      cy.log('No users in this audience')
} else {cy.get('[data-cy="compliancepercentage"]').then(function(text){
      cy.log('Compliance % after is applied',text.text())
    })
      
}





    })
})
})