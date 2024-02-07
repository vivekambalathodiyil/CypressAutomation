describe('Verify if the site content is same after upgrade: BLOG', function() {
    beforeEach(() => {
        cy.viewport(2100, 2000)  
            cy.visit('https://etest.skillsplatform.org/ ')
    })
    
        it('Header section', function() {
           cy.viewport(2048, 1009)
//seach
           //cy.get('#header_search_input').should('be.visible')
           //cy.get("#topmenu > ul > li.first").should('be.visible')
// sell courses

cy.get('#topmenu > ul > .first > a').click()
//sell courses
            cy.contains('Advertise your course with us').should('be.visible')
            cy.contains('Thank you for your interest in advertising your courses with the Skills Platform').should('be.visible')
            cy.get("#topmenu > ul > li:nth-child(2) > a").click()
//Register section
            cy.get(':nth-child(1) > h1').should('contain','Login')
            cy.get("#contentwrapper > div > div:nth-child(1) > form > div.buttons > button").should('be.visible')
            cy.get(':nth-child(2) > h1').should('contain','Register')
            
// login
            cy.get("#topnav > li.login.nodropdown").should('be.visible')
//header section           
           cy.get('#topnav').should('contain','All Courses ')
           cy.get('#topnav').should('contain','Health')
           cy.get('#topnav').should('contain','Care')
           cy.get('#topnav').should('contain','Charities')
           cy.get('#topnav').should('contain','Training Providers ')
//courses tab
cy.get('.grid-100 > .menu > #topnav > #fullnav > a').click()
cy.get("#sector_categories_17 > div:nth-child(2) > ul").trigger('mouseover')
cy.get('#sector_categories_17 > .column > ul > .hover > a').click()



//cy.get('#sector_categories_17 > .column > ul > .hover > a').click()
//cy.visit('https://etest.skillsplatform.org/health/care-training-courses')
           
           
           
        })
       })
