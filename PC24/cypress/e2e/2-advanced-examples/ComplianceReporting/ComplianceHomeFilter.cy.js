const { notEqual } = require("assert")


describe('As Admin Homepage fiters', function () {

    beforeEach(() => {
        //custom command added in command.js under support folder
        cy.loginAdmin()
        // verity if the filters are visible/active
        cy.get('.fheader > .flex-icon').should('be.visible')

    })
    it('Audience filter', function () {
        // We are taking all the numbers from the table and compare with the same once the filter is applied/8
        cy.get('tbody').invoke('text').then((text) => {
            var TotalCompliance = text.replace(/[^0-9.]+/g, '')
            cy.log(TotalCompliance)
            //open filter 
            cy.get('.fheader > .flex-icon').click()

            //click the 1st position value in the audience filter click search so the page will refresh applying the filters
            // we have selected the 2nd item from the drop down using [1],we can change to any number but there should be a corresponding item in the drop down. 
            // we can also input the exact name but as might change the audiences the test will fail, due to which we give the number to it will selet the corresponding item, with out looking that the name
            cy.get('#id_cohort').select([1])
            cy.get('#id_submitbutton').click()
            // get the % number from legentafter the filter is applied and make sure that there is a difference 
            cy.get('tbody').invoke('text').then((text1) => {
                var ChangedCompliance = text1.replace(/[^0-9.]+/g, '')
                cy.log(ChangedCompliance)
                var change = TotalCompliance - ChangedCompliance
                // store the % after filter
                cy.log(change)
                if (TotalCompliance != ChangedCompliance) {
                    cy.log('%changed')
                    cy.log('% befor applying filter' + TotalCompliance)
                    cy.log('% after applying filter' + ChangedCompliance)


                } else {
                    // Alert message is set as this will stop the script, this can be changed to log,but we will have to check the script to see the message if the value has changed
                    cy.log('not changed')
                }



            })





        })


    })
    it('Organisation fitler', function () {
        cy.get('.fheader > .flex-icon').click()
        //get the compliance % from Legent before organisation filter is applied
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').should('be.visible')
        cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[3]/ul/li[1]/text()').invoke('text').then((text) => {
            var TotalCompliance = text.replace(/[^0-9.]+/g, '')
            cy.log(TotalCompliance)

            //Apply organisation filter
            cy.get('[data-cy="fltOrganisation"]').select([2])
            cy.get('[data-cy="chkOrgBelow"]').click()
            cy.get('#id_submitbutton').click({ force: true })
            // get the changed % from legend
            cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[3]/ul/li[1]').invoke('text').then((text1) => {
                var ChangedCompliance = text1.replace(/[^0-9.]+/g, '')
                cy.log(ChangedCompliance)
                var change = TotalCompliance - ChangedCompliance
                // store the % after filter
                cy.log(change)
                if (TotalCompliance != ChangedCompliance) {
                    cy.log('%changed')
                    cy.log('% befor applying filter' + TotalCompliance)
                    cy.log('% after applying filter' + ChangedCompliance)


                } else {

                    alert('not changed')
                }
            })
        })
    })
    it('Certification fitler', function () {
        cy.get('.fheader > .flex-icon').click()
        //get the compliance % from Legent before organisation filter is applied
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').should('be.visible')
        cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[3]/ul/li[1]/text()').invoke('text').then((text3) => {
            var TotalCompliance = text3.replace(/[^0-9.]+/g, '')
            cy.log(TotalCompliance)

            //Apply certificationfilter
            cy.get('#id_certification').select([2])
            cy.get('#id_submitbutton').click({ force: true })
            // get the changed % from legend
            cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[3]/ul/li[1]').invoke('text').then((text4) => {
                var ChangedCompliance = text4.replace(/[^0-9.]+/g, '')
                cy.log(ChangedCompliance)
                var change = TotalCompliance - ChangedCompliance
                // store the % after filter
                cy.log(change)
                if (TotalCompliance != ChangedCompliance) {
                    cy.log('%changed')
                    cy.log('% befor applying filter' + TotalCompliance)
                    cy.log('% after applying filter' + ChangedCompliance)


                } else {

                    alert('not changed')
                }
            })
        })


    })
    it('Search all filters and  then select all in filters and search', function () {
        //open filter and select randon item from all 3 dropdown menus, then click search and then clear button (Audience, Organisation &  certification)
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').should('be.visible').click()
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/div/div[1]/div[2]/select').select([2])
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/div/div[2]/fieldset/div/select').select([2])
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/div/div[3]/div[2]/select').select([2])
        cy.get('#id_submitbutton').click()
        cy.wait(2000)
        cy.get('#id_cancel').should('be.visible').click()


    })
    it.only('Select filters & search, then apply- clear- and search again', function () {
        // This will select all filters and search and then will clear all fiends
        cy.xpath('/html/body/div[5]/div/div/div/div/form/fieldset/legend/a/span').should('be.visible').click()
        cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[3]/ul/li[1]/text()').invoke('text').then((text3) => {
            var TotalCompliance1 = text3.replace(/[^0-9.]+/g, '')
            cy.log(TotalCompliance1)
        
        cy.get('[data-cy="fltAudience"]').select([1])
        cy.get('[data-cy="fltOrganisation"]').select([0])
        cy.get('[data-cy="fltCertification"]').select([2])
        cy.get('#id_submitbutton').click()
        cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[3]/ul/li[1]/text()').invoke('text').then((text3) => {
            var TotalCompliance2 = text3.replace(/[^0-9.]+/g, '')
            cy.log(TotalCompliance2)
        
        cy.wait(2000)
        cy.get('#id_cancel').click()
        cy.log(TotalCompliance1)
        cy.log(TotalCompliance2)
        })
    })


    })
})
