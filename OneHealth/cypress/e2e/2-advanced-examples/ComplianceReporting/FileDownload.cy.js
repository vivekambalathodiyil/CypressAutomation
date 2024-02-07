///<reference types="cypress-downloadfile"/>
describe('File download',function()
{

   beforeEach(() => {
      //custom command added in command.js under support folder
      cy.loginAdmin()
  })

   it.only('Homepage',()=>{
    //cy.loginAdmin()        
   cy.get('[data-cy="indexhome"]').click()
   cy.xpath('/html/body/div[3]/div[2]/div/div/form/fieldset/legend/a/span').click()
      cy.get('[data-cy="fltOrganisation"]').select([3])
      cy.get('[data-cy="fltbtnSearch"]').click()
   cy.get('tbody').invoke('text').then((text1) =>{
       var data1 = text1.replace(/[^0-9.]+/g, '')
       cy.log(data1)
   cy.window().document().then(function (doc) {
       doc.addEventListener('click', () => {
       setTimeout(function () { doc.location.reload() }, 5000)
       })
   cy.get('#downloadtype_dataformat').select([3])
   cy.get('.mdl-align > [type="submit"]').click()
// C      
      cy.verifyDownload('.csv', { contains: true });
      cy.readFile('cypress/downloads/organisational_compliance.csv').wrap({ data1 }).its('data1').should('exist')
      })
      

   })
})
   it('Certification ',()=>{
      //cy.loginAdmin()        
      cy.visit('https://onehealthcare.etest.skillsforhealth.org.uk/local/wdtcompliance/reporting/certificationcompliancesimple.php')
      cy.wait(10000)
      cy.get('tbody').invoke('text').then((text1) =>{
         var data1 = text1.replace(/[^0-9.]+/g, '')
         cy.log(data1)
     cy.window().document().then(function (doc) {
         doc.addEventListener('click', () => {
         setTimeout(function () { doc.location.reload() }, 5000)
         })
     cy.get('#downloadtype_dataformat').select([3])
     cy.get('.mdl-align > [type="submit"]').click()
  // C      
        cy.verifyDownload('.csv', { contains: true });
        cy.readFile('cypress/downloads/organisational_compliance.csv').wrap({ data1 }).its('data1').should('exist')
      })
      })
   })
     
   it('Organisation',()=>{
         //cy.loginAdmin()        
         cy.get('[data-cy="organisation"]').click()
        cy.get('tbody').invoke('text').then((text1) =>{
            var data1 = text1.replace(/[^0-9.]+/g, '')
            cy.log(data1)
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 10000)
            })
        cy.get('#downloadtype_dataformat').select([1])
        cy.get('.mdl-align > [type="submit"]').click()
     // C      
           cy.verifyDownload('.csv', { contains: true });
           cy.readFile('cypress/downloads/organisational_compliance.xlsx .').wrap({ data1 }).its('data1').should('exist')
         })
         })
        
   
   })
   it('Positions ',()=>{
      //cy.loginAdmin()        
      cy.get('[data-cy="position"]').click()
      cy.wait(10000)
      cy.get('tbody').invoke('text').then((text1) =>{
         var data1 = text1.replace(/[^0-9.]+/g, '')
         cy.log(data1)
     cy.window().document().then(function (doc) {
         doc.addEventListener('click', () => {
         setTimeout(function () { doc.location.reload() }, 5000)
         })
     cy.get('#downloadtype_dataformat').select([1])
     cy.get('.mdl-align > [type="submit"]').click()
  // C      
        cy.verifyDownload('.csv', { contains: true });
        cy.readFile('cypress/downloads/position_compliance.xlsx').wrap({ data1 }).its('data1').should('exist')
      })
      })
   })  
})

