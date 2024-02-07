describe('Compliance by Position',()=>{
    beforeEach(() => {
        //custom command added in command.js under support folder
        cy.loginAdmin()
    })

it('Position Homepage,Audience filter', ()=>{

    cy.visit('/local/wdtcompliance/reporting/positioncompliance.php')
    cy.get("#region-main").should('contain','Compliance by Position')
// Before filter is applied,will get all the numbers in the page, so we can compare those after we filter with an audience
    cy.get('tbody').invoke('text').then((text) =>{
        var data = text.replace(/[^0-9.]+/g, '')
        cy.log(data)
// Check if the filter options are visible
//cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span')
    cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a').should('be.visible').click({force:true})
//cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').should('be.visible').click({force:true})
//expand filter and select the second item in the drop down and click search.
    cy.get("#id_cohort").select([2])
    cy.get('#id_submitbutton').click()
// get the data after filters are applied
    cy.get('tbody').invoke('text').then((text1) =>{
        var data1 = text1.replace(/[^0-9.]+/g, '')
        cy.log(data1)
        if (data1 != data) {
            cy.log('filter applied')
            
        } else {
            alert('Data not changed,Audience filter')
            
        }
    })
    })
})
it('Position Homepage,Position filter',()=>{
    cy.visit('/local/wdtcompliance/reporting/positioncompliance.php')
//Before filter is applied,will get all the numbers in the page, so we can compare those after we filter with an organistion
    cy.get('tbody').invoke('text').then((text) =>{
    var data = text.replace(/[^0-9.]+/g, '')
    cy.log(data)
    

//open filter and expand and select the second item in drop down and search
    cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a').should('be.visible').click({force:true})
    cy.get("#id_position").select([2])
    cy.get('#id_submitbutton').click()
    cy.get('tbody').invoke('text').then((text1) =>{
        var data1 = text1.replace(/[^0-9.]+/g, '')
        cy.log(data1)
        if (data1 != data) {
            cy.log('filter applied')
            
        } else {
            alert('Data not changed,Position filter')
            
        }
    })
    })
})
it('Position Homepage,certification filter',()=>{
    cy.visit('/local/wdtcompliance/reporting/positioncompliance.php')
//Before filter is applied,will get all the numbers in the page, so we can compare those after we filter with an organistion
    cy.get('tbody').invoke('text').then((text) =>{
    var data = text.replace(/[^0-9.]+/g, '')
    cy.log(data)
//open filter and expand and select the second item in drop down and search
    cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a').should('be.visible').click({force:true})
    cy.get("#id_certification").select([2])
    cy.get('#id_submitbutton').click()
//get all the numbers in page after the filter is applied
    cy.get('tbody').invoke('text').then((text1) =>{
        var data1 = text1.replace(/[^0-9.]+/g, '')
        cy.log(data1)
        if (data1 != data) {
            cy.log('filter applied')
            
        } else {
            alert('Data not changed,Certification Filter')
            
        }
    })
    })
})
})