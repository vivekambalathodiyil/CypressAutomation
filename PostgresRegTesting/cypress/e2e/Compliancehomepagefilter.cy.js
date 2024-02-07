const { notEqual } = require("assert")


describe('Homepage fiters', function(){
   
    beforeEach(() =>{
        cy.loginAdmin()
        })      


it('Audience filter', function(){
//Open filter 
  cy.visit('/local/wdtcompliance/') 
  cy.wait(5000)
  cy.get('.fheader > .flex-icon').should('be.visible')
//Store the total % of compliance before applying filteres the calue is
// taken for the red box, this will not work if the % is 0 as the red box will not appear so we user the legend section figures
  cy.get('.chartLegend > :nth-child(1)').invoke('text').then((text1) =>{
    var data1 = text1.replace(/[^0-9.]+/g, '')
    cy.log(data1)
                                                                    /*
                                                                    //below code is used when we have the  the red box i.e. when we have orgs available
                                                                    cy.get('[data-cy="compliancepercentage"]').then((value)=>{
                                                                        const a =value.text()
                                                                        cy.log(a)
                                                                    })*/

//open filter and change the filters, then get the value of the 
//changed % and compare with the initial one to check if the % has changed
//Open filters
cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').click()
//select 2nd option from audience filter &search 
cy.get('[data-cy="fltAudience"]').select([3])
cy.get('[data-cy="fltbtnSearch"]').click()
//now get the new %
cy.get('tbody').invoke('text').then((text1) =>{
    var data2 = text1.replace(/[^0-9.]+/g, '')
    cy.log(data2)

    if (data1 != data2) {
        cy.log('%changed')
        
    } else {
        alert('Not changed')
        
    }

})
cy.get('[data-cy="fltOrganisation"]').select([1])

})    
    })
it ('Organisation', function(){
//Open filter 
    cy.visit('/local/wdtcompliance/') 
    cy.wait(5000)
    cy.get('.fheader > .flex-icon').should('be.visible')
//Store the total % of compliance before applying filteres the calue is
// taken for the red box, this will not work if the % is 0 as the red box will not appear so we user the legend section figures
    cy.get('tbody').invoke('text').then((text1) =>{
            var data1 = text1.replace(/[^0-9.]+/g, '')
            cy.log(data1)
                                                                            /*
                                                                            //below code is used when we have the  the red box i.e. when we have orgs available
                                                                            cy.get('[data-cy="compliancepercentage"]').then((value)=>{
                                                                                const a =value.text()
                                                                                cy.log(a)
                                                                            })*/
        
//open filter and change the filters, then get the value of the 
//changed % and compare with the initial one to check if the % has changed
//Open filters
    cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').click()
//select 2nd option from audience filter &search 
    cy.get('[data-cy="fltOrganisation"]').select([3])
    cy.get('[data-cy="fltbtnSearch"]').click()
//now get the new % and compare the figure without filter and with filter
       cy.get('tbody').invoke('text').then((text1) =>{
            var data2 = text1.replace(/[^0-9.]+/g, '')
            cy.log(data2)
        
            if (data1 != data2) {
                cy.log('%changed')
                
            } else {
                alert('Not changed')
                
            }
        
        })
       
        
        
        
        
        
        })    
     })
    
})