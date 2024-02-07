
describe('Change target %', function () {

    it('Change target %', function () {

        cy.loginAdmin()

        // cy.url().should('contains', ' /local/wdtcompliance/index.php');

        //open admisntration page to change the target %

        cy.visit('/local/wdtcompliance/index.php')
        cy.wait(1000)
        //Display the current target % before changing, take the value from Green= number% in the overall compliance box
        cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[1]/table/tbody/tr/td/span[3]/text()[2]').then(function (text) {
            cy.log(text.text())
        })
        cy.log('Please see the target now')
        // visit the compliance target page and change the %
        cy.visit('/local/wdtcompliance/static/update_org_percent.php')
        cy.get('#orggreenpercent').select('90')
        cy.get('.btn-primary').click();
        cy.visit('/local/wdtcompliance/index.php')
        // Find if the target is changed by finding 95, the changed target
        cy.xpath('/html/body/div[5]/div/div/div/div/div[3]/div/div[1]/table/tbody/tr/td/span[3]/text()[2]').then(function (text1) {
            cy.log(text1.text())
        })

        cy.wait(4000)
        cy.visit('/local/wdtcompliance/static/update_org_percent.php')

        //Change the % back to 80 so the test can be repeted
        cy.get('#orggreenpercent').select('85')
        cy.get('.btn-primary').click();
        cy.get('.nav > :nth-child(1) > a').click()

    })
})