const { ifError } = require("assert")
const { expect } = require("chai")
const { it, describe, beforeEach } = require("mocha")
//const { abort, exit } = require("process")

describe('LogIn As Admin,Verify Admin permitted pages', function() {
   beforeEach(() =>{
  
   cy.loginAdmin()
   })       

it('Learning, Profile and Team ', function(){
      //Profile tab
     
      cy.xpath('/html/body/div[3]/header[1]/section/div[2]/nav/nav/div/ul/li[9]/a/div[2]').then(function(text){
        // cy.log('Profile tab')
         cy.log(text.text())
      })//Learning tab
      cy.get('#totaramenuitem29 > a > div.totaraNav_prim--list_item_label').then(function(text){
         cy.log(text.text())

      })
      cy.get('#totaramenuitem11 > a > div.totaraNav_prim--list_item_label').then(function(text){
         cy.log(text.text())
      })
   })
    it('Verify Admin permitted pages', function() {
          
//Verify admin cog & compliance page

      cy.get('#quickaccess-popover-container').should('be.visible')
      cy.log('Admin cog visible')
      cy.visit('/local/wdtcompliance/index.php',({log:false}))
      cy.url().should('eq','/local/wdtcompliance/index.php')
//Verify Reports
      cy.visit('/my/reports.php')
      cy.get('#region-main').should('contain','reports')
// View Compliance Reporting page and verify if admin can see compliance homepage

      cy.visit('/totara/dashboard/')
//open compliance homepage
      cy.xpath('/html/body/div[3]/header[1]/section/div[2]/nav/nav/div/ul/li[10]/a/div[2]').click()
      cy.get("#region-main > div > div:nth-child(3) > h2").contains('Overall Organisational Compliance')

      })

       
it.only('View report', function(){
         
//View report page and verify standard reports are visible    
        cy.visit('/my/reports.php')          
//Admin - Activity Progress Report(Data visible if not test will break)          
         
 //Open Admin - Activity Progress:and click download report 
            cy.get('/totara/reportbuilder/report.php?id=67"]').click()
                        cy.get('#id_submitgroupstandard_addfilter').click()
            cy.wait(2000)
           
 // Do not change: this is a workaround for page time out. If this code is removed the script will stop after we click download report as the page will not refresh            
 cy.window().document().then(function (doc) {
   doc.addEventListener('click', () => {
   setTimeout(function () { doc.location.reload() }, 15000)
   })
   cy.get('#id_format').select([0])
   cy.get('#id_export').click()
   cy.wait(5000)
   cy.readFile('cypress/downloads/admin___activity_progress_report.csv').should('exist')
                               
   })
   })
   })

   

