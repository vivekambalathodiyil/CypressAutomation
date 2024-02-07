const { should } = require("chai")
const { technics } = require("Faker/lib/image")

describe('SFH ', function() {

    beforeEach(() => {
        cy.viewport(1920, 1837)  
            cy.visit('https://etest.skillsplatform.org///')
        })
//Check for visibility of various section of the homepage(logo,search field,heading sections)
       it('Search,main sections',function(){
                cy.get('#toplogo > a').should('be.visible')
                cy.get('.navwrapper').should('be.visible')
                cy.get('#header_search_form > .linkedinputs > .button').should('exist')
                cy.get('#header_search_form > .linkedinputs > .button > .fa').click()
                cy.get("#dm_filters_top > span.button.deliverymethod.active").should('be.visible')
                cy.get("#contentwrapper > div > div.grid-75.courselist > div.pagination-text").should('contain','Viewing courses')
                cy.go("back")
               
       })
       it('Choose your sector', function(){
           cy.get("#contentwrapper > div:nth-child(2)").should('be.visible')
           cy.get("#contentwrapper > div:nth-child(2) > div > div > div.thumbnail_links.sectors > a.thumbnail.first > div").click()
           cy.url().should('contains','https://etest.skillsplatform.org/health')
           cy.go('back')
           cy.get(':nth-child(2) > .grid-container > .grid-100 > .thumbnail_links > .last').click()
           cy.url().should('contains','https://etest.skillsplatform.org/nurse')
       })
//Check if All  tabs are visible Under All Courses
        it('All Courses tab', function() {
       
        cy.get('.navwrapper').should('be.visible')
        cy.contains('All Courses').click()              
        cy.contains('.navwrapper','care','All Courses').click({force:true}) 
        cy.contains('.navwrapper','care','Health').click({force:true})  
  
        })
// Section under Clinical & Care
        it('Section under Clinical and Care', function(){
            cy.get("#sector_categories_17 > div:nth-child(2) > ul > li:nth-child(1) > a").should('contain','Care')
            cy.get('#mobile_courses_menu > ul > li:nth-child(4) > a').should('contain','Clinical Training')
            cy.get('#mobile_courses_menu > ul > li:nth-child(11) > a').should('contain','Disabilities & Neurodiversity ')
            cy.get('#mobile_courses_menu > ul > li:nth-child(12) > a').should('contain','First Aid')
            cy.get('#mobile_courses_menu > ul > li:nth-child(16) > a').should('contain','Mental Health')    
            cy.get('#mobile_courses_menu > ul > li:nth-child(15) > a').should('contain','Maternity (Perinatal) ')
            cy.get('#mobile_courses_menu > ul > li:nth-child(17) > a').should('contain','Nursing')
            cy.get('#mobile_courses_menu > ul > li:nth-child(18) > a').should('contain','Other Health & Care ')
            cy.get('#mobile_courses_menu > ul > li:nth-child(19) > a').should('contain','Primary Care ')
        })
        it.only('Training Provieders', function() {
           //All training Providers link     
            cy.xpath('/html/body/div[1]/div[3]/div/div/div/ul/li[6]/ul').click({force:true})
            cy.get(':nth-child(6) > .dropdown-menu > .first > a').click()
            cy.url().should('contains','https://etest.skillsplatform.org/health-social-care-training-providers')
            cy.go('back')
            // Quality Mark Providers
            cy.xpath('/html/body/div[1]/div[3]/div/div/div/ul/li[6]/ul').click({force:true})
            cy.get(':nth-child(6) > .dropdown-menu > .last > a').click()
            cy.url().should('contains','https://etest.skillsplatform.org/cstf-aligned-providers')
            .go('back')
            //CSTF Aligned Providers
            cy.xpath('/html/body/div[1]/div[3]/div/div/div/ul/li[6]/ul').click({force:true})
            cy.get('#topnav > li:nth-child(6) > ul > li:nth-child(2) > a').click()
            cy.url().should('contains','https://etest.skillsplatform.org/quality-mark-training-providers')
        
                       
        })
      
        
     })
        
            
