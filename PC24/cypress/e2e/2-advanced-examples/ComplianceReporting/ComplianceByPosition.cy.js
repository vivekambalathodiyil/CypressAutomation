describe('Compliance by Position',()=>{
    beforeEach(() => {
        //custom command added in command.js under support folder
        cy.loginAdmin()
    })
    it('Audience filter',()=>{
 //Open compliance by certification, check filter visibility and click to open filters
        cy.get('[data-cy="position"]').click()
             cy.get('.fheader > .flex-icon').should('be.visible').click()
// Before filter is applied,will get all the numbers in the page, so we can compare those after we filter with an audience
            cy.get('tbody').invoke('text').then((text) =>{
                var data = text.replace(/[^0-9.]+/g, '')
                cy.log(data)
//expand filter and select the second item in audience the drop down and click search.
            cy.get('[data-cy="fltAudience"]').select([1],{force:true})
            cy.get('#id_submitbutton').click({force:true})
// get the data after filters are applied
            cy.get('tbody').invoke('text').then((text1) =>{
                var data1 = text1.replace(/[^0-9.]+/g, '')
                cy.log(data1)
                if (data1 != data) {
                    cy.log('filter applied')
                    
                } else {
                    cy.log('Data not changed')
                    
                }
        })
        })
        })
    it('Certification filter',()=>{
//Open compliance by Organisation, check filter visibility and click to open filters
        cy.get('[data-cy="position"]').click()
         cy.get('.fheader > .flex-icon').should('be.visible').click()
               
// Before filter is applied,will get all the numbers in the page, so we can compare those after we filter with an audience
        cy.get('tbody').invoke('text').then((text) =>{
                    var data = text.replace(/[^0-9.]+/g, '')
                    cy.log(data)
// select the second item in the organisation drop down and click search.
        cy.get('[data-cy="fltCertification"]').select([2],{force:true})
        cy.get('#id_submitbutton').click({force:true})
// get the data after filters are applied
        cy.get('tbody').invoke('text').then((text1) =>{
                    var data1 = text1.replace(/[^0-9.]+/g, '')
                    cy.log(data1)
                    if (data1 != data) {
                        cy.log('filter applied')
                        
                    } else {
                        alert('Data not changed')
                        
                    }
            })
            })
        })
    it('Position Filter',()=>{
//Open compliance by certification, check filter visibility and click to open filters
        cy.get('[data-cy="position"]').click()
         cy.get('.fheader > .flex-icon').should('be.visible').click()
// Before filter is applied,will get all the numbers in the page, so we can compare those after we filter with an audience
         cy.get('tbody').invoke('text').then((text) =>{
                        var data = text.replace(/[^0-9.]+/g, '')
        cy.log(data)
//select the second item in the certification drop down and click search.
        cy.get('[data-cy="fltPosition"]').select([2],{force:true})
        cy.get('[data-cy="fltbtnSearch"]').click({force:true})
// get the data after filters are applied and compare with the data before filter was applied
        cy.get('tbody').invoke('text').then((text1) =>{
                        var data1 = text1.replace(/[^0-9.]+/g, '')
         cy.log(data1)
                        if (data1 != data) {
                            cy.log('filter applied')
                            
                        } else {
                            alert('Data not changed')
                            
                        }
                })
                })
            
        
        })
        })
