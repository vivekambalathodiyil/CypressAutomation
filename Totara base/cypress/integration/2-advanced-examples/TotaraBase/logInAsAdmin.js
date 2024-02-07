const { expect } = require("chai")

const { it, describe, beforeEach } = require("mocha")

describe('Log In As Admin', function() {
                          
  
    it('Verify Admin permitted pages', function() {
       AdminLogin()

//Verify admin cog & compliance page
       cy.get('.nav-link > .tfont-var-gear').should('be.visible')
       cy.visit('https://schoenclinictot14.edev.skillsforhealth.org.uk/local/wdtcompliance/index.php',({log:false}))
       cy.url().should('eq','https://schoenclinictot14.edev.skillsforhealth.org.uk/local/wdtcompliance/index.php')
//Verify Reports
       cy.visit('https://schoenclinictot14.edev.skillsforhealth.org.uk/my/reports.php')
       cy.get('#region-main').should('contain','reports')
// View Compliance reporting admin
       cy.visit('https://schoenclinictot14.edev.skillsforhealth.org.uk/local/wdtcompliance/static/update_org_percent.php')
       cy.get('#page-content').should('contain','Organisational target settings')
    })
       it('Learning, Profile and Team ', function(){
         //Profile tab
         cy.xpath('/html/body/div[3]/nav/div/ul/li[7]').then(function(text){
            cy.log('Profile tab')
            cy.log(text.text())
         })//Learning tab
         cy.xpath('/html/body/div[3]/nav/div/ul/li[3]/ul').then(function(text){
            cy.log(text.text())

         })
         cy.xpath('/html/body/div[3]/nav/div/ul/li[4]/a/div[2]').then(function(text){
            cy.log(text.text())
         })
      })
         it.only('View report', function(){
           AdminLogin()
//View report page and verify standard reports are visible    
            cy.visit('https://pgdev.edev.skillsforhealth.org.uk/my/reports.php')          
//Admin - Activity Progress Report(Data visible if not test will break)          
            cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/div/ul').then(function(text){
            cy.log(text.text()).contains('Admin - Activity Progress')
               cy.get("#myreports_section > div > ul > li:nth-child(1) > a > div.totara_core__myreports__list__item__content__title").click()
               cy.get("#\\36 7 > div").should('be.visible')
//My Team - Program Progress(there is not data)     
               cy.visit('https://pgdev.edev.skillsforhealth.org.uk/totara/reportbuilder/report.php?id=75')  
             cy.get("#\\37 5 > div > p").should('contain','There are no records in this report')
             cy.visit('https://pgdev.edev.skillsforhealth.org.uk/totara/reportbuilder/report.php?id=70')
             cy.get('#id_format').select('pdflandscape')
             //cy.get('#id_submitgroupstandard_addfilter').click()
             //cy.get('#id_export').click()
                            
             

            })
         
         })

      })
    
       
      

       
       
    


function AdminLogin() {
   cy.viewport(1920, 1200)
   //Log in as an Admin
   cy.visit('https://pgdev.edev.skillsforhealth.org.uk/login/index.php')
   cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk', ({ log: false }))
   cy.get('#password').type('Dasappan-123', ({ log: false }))
   cy.get('#loginbtn').click()
}
   