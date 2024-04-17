describe ('Check-box in users tab', ()=>{
// this test is to make sure that the check boxes in the uses list are active once we apply filters and search. 
   it('Users under courses', ()=>{

    
   cy.loginAdmin()
   cy.visit('/local/wdtcompliance/reporting/organisationcompliance.php')
   //open the users page by clicking the number of users icon
   cy.xpath('//tbody/tr[2]/td[1]/a[1]/i[1]').click()
   //open the filter 
   cy.get('.fheader > .flex-icon').click()
   //Click on Certification is overdue check box
   cy.get('#id_expiryred').click()
   //click search button
   cy.get('[data-cy="fltbtnSearch"]').click()
   //Once the search is done check if the check box is retained
   cy.get('#id_expiryred').should('be.checked')
   
})
it.only('Users under certifications', ()=>{

    
    cy.loginAdmin()
    cy.visit('/local/wdtcompliance/reporting/certificationcompliancesimple.php')
    cy.xpath('//td[@id='yui_3_17_2_1_1669302481842_91']')
    //open the users page by clicking the number of users icon
    cy.xpath('//tbody/tr[2]/td[1]/a[1]/i[1]').click()
    //open the filter 
    cy.get('.fheader > .flex-icon').click()
    //Click on Certification is overdue check box
    cy.get('#id_expiryred').click()
    //click search button
    cy.get('[data-cy="fltbtnSearch"]').click()
    //Once the search is done check if the check box is retained
    cy.get('#id_expiryred').should('be.checked')
})



})