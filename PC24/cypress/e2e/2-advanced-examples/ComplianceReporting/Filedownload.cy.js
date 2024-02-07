/// <reference types="cypress-downloadfile"/>
describe('FileDownload', ()=>{
    beforeEach(() => {
        //custom command added in command.js under support folder
        cy.loginAdmin()
    })
    

it('Homepage',()=>{
    cy.visit('/local/wdtcompliance/reporting/organisationcompliance.php')
    cy.get('#downloadtype_dataformat').select([1])
    cy.contains('Download').click()
    cy.wait(10000)
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 10000)
        })
        cy.xpath('//*[@id="id_export"]').click()
        cy.readFile('cypress/downloads/admin___activity_progress_report.csv').should('exist').wrap()
    })
})
})