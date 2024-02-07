const { it } = require("mocha")

describe('Download Report from all pages' , function() {

    beforeEach(() =>{
        
        cy.loginAdmin()
        })      
it('Home page CSV flie download', function(){
// Visit home page and check filter options and compliance %
    cy.visit('/local/wdtcompliance/index.php')
    
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 10000)
        })
        cy.get('#downloadtype_dataformat').select([0])
        cy.contains('Download').click()
        cy.readFile('cypress/downloads/organisational_compliance.csv').should('exist')
        })
    })

it('Organisations page HTML file',function(){
    cy.visit('/local/wdtcompliance/reporting/organisationcompliance.php')
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 10000)
        })
        cy.get('#downloadtype_dataformat').select([2])
        cy.contains('Download').click()
        cy.readFile('cypress/downloads/organisational_compliance.html').should('exist')
        })
    })
it.only('Certifications page XLSX file download',function(){
    cy.visit('/local/wdtcompliance/reporting/certificationcompliancesimple.php')
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 20000)
        })
        cy.get('#downloadtype_dataformat').select([1])
        cy.contains('Download').click()
        cy.readFile('cypress/downloads/certification_compliance.xlsx').should('exist')
        })
    })
it('Positions page JSON file download',function(){
    cy.visit('/local/wdtcompliance/reporting/positioncompliance.php')
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 10000)
        })
        cy.get('#downloadtype_dataformat').select([3])
        cy.contains('Download').click()
        cy.readFile('cypress/downloads/position_compliance.json').should('exist')
         })
     })     

it.only('Read downloaded files',()=>{
    cy.readFile('cypress/downloads/organisational_compliance.csv').should('exist')
    cy.readFile('cypress/downloads/organisational_compliance.html').should('exist')
    cy.readFile('cypress/downloads/certification_compliance.xlsx').should('exist')
    cy.readFile('cypress/downloads/position_compliance.json').should('exist')
})
        
})
