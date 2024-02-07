

describe('Verify if the site content is same after upgrade: BLOG', function() {
    beforeEach(() => {
        cy.viewport(2100, 2000)  
            cy.visit('https://etest.skillsplatform.org/blog/ ')
    })
            
    it('SKILLS PLATFORM NEWS', function() {
        //Verify the different sections in the page
        cy.title().should('eq', 'Skills Platform Blog | Learn Something New')
    
        cy.get('body').should('contain', ' Christmas Support Hours 2021')
        cy.get('body').should('contain', ' The UK charity sector rises to the')
        cy.get('body').should('contain', ' New 2021 Fire Legislation Marks')
        cy.get('body').should('contain', 'Pharmacists Train Up for Post-Lockdown Demand – Free CPD Courses')
        cy.get('body').should('contain', ' The Benefits of Employer Branding – Examples and Strategies')
        cy.get('body').should('contain', ' Fire Marshal')
        cy.get('body').should('contain', ' Fact or Myth')
        cy.get('body').should('contain', ' Brexit')
        cy.get('body').should('contain', ' 10 Top Tips For Virtual Trainers')
        cy.get('body').should('contain', ' PMS vs PMDD')
        cy.get('body').should('contain', ' Brownie Points')
    })
    it('CATEGORIES', function() {
        // Click categories to make sure the links works
       cy.xpath('/html/body/div[2]/div[2]/div[2]/div[4]/ul/li[1]/a').should('contain','Build Your Professional Skills').click({force: true})
        cy.go('back')
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div[4]/ul/li[2]/a').should('contain','Career Planning').click({force: true})
        cy.go('back')
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div[4]/ul/li[3]/a').should('contain','Health & Safety').click({force: true})
        cy.go('back') 
        cy.get('body').should('contain','Online & Distance Learning').click({force: true})
        cy.go('back')
        cy.get('body').should('contain','Skills Platform News').click({force: true})
        cy.go('back')
    })
     
    
    it('SEARCH /TAG section Blog ,Add text in Search empty,Covid 19,Mental Health & Safeguarding',function(){
      // search with text health and safety in search section and verify the item searched for in search results
    cy.get('.amp-sidebar > #blog_searchform .fa').click({force: true});
    cy.get(':nth-child(2) > #blog_searchform > .linkedinputs > #s').type('health and safety')
    cy.get('#searchsubmit').click()
    cy.get('.amp-loop-label').should('contain','health and safety')
    cy.go('back')
//Search for Covid and verify the page heading display the same, once searched
    cy.get(':nth-child(7) > .fsp-img > .loop-img > a > .i-amphtml-layout > .i-amphtml-fill-content').click({force: true})
    cy.go('back')
//Search for tags under Tags heading
    cy.get('.sdbr-right > :nth-child(3)').contains('COVID-19')
    cy.get('.sdbr-right > :nth-child(3)').should('contain','Mental Health')
    cy.get('.sdbr-right > :nth-child(3)').should('contain','Safeguarding')
    }) 
    it('Back to Home Button', function(){
// Click on back to home button to make sure the page is redirected to skills for health home page
        cy.get('.textwidget > p > strong > a > .acss34bb9').click({force: true})
// Back to home will navige to producation in test environment as its a content embedded link  
        cy.url().should('contain','https://www.skillsplatform.org/')
        cy.get('.grid-container > .grid-100 > #main_search_form > .inputwrapper > .button').click()
        cy.wait(1000)
    })
    it.only('POPULAR POSTS', function(){
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div[6]/h4').contains('Popular Posts')
        cy.get('body > div.content-wrapper > div.cntr.b-w > div.sdbr-right > div:nth-child(6) > div > ul > li:nth-child(1) > a > div > span').click({force: true})
        cy.url().should('contain','https://etest.skillsplatform.org/blog/looking-after-yourself/')
        
        cy.go('back')
    })
    
})
 