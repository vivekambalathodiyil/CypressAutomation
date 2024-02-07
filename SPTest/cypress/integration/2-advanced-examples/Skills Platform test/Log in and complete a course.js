describe('Open a course', function() {

    it('View my course', function() {
   
        
        cy.viewport(1920, 1200)
        cy.visit('https://test.skillsplatform.org/')
        cy.get('.login > a').click()
        cy.wait(2000)
        cy.get('#login_email').type('marco@g.com',{log:false})
        cy.get('#login_password').type('Dasappan-123',{log:false})
        cy.get(':nth-child(1) > .form > .buttons > .button').click()
        cy.wait(3000)
        cy.visit('https://test.skillsplatform.org/dashboard/profile/courses')
        cy.get('tr > .buttons > .button').click()
    })
   
   })

   

   describe('Open Moving and handling',function()
{
//Open the course iframe and open/close one module
    it('M & H iframe',function(){
        cy.viewport(1920, 1200)
    cy.get('#modal_edit_2 > .modalwindow').then(function($iFrame)
{
            const $iFrameContent = $iFrame.contents().find('#usercourse-modal')
            cy.wrap('iFrameContent')
            cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(2) > div.tutorial-title").click()
            cy.wait(6000)
            cy.get('.modalwindow > .modalcontents > .usercourse-modal > .tutorial:nth-child(2) > .date').click()
            cy.wait(6000)
           // cy.go('back')
            })
    })
})