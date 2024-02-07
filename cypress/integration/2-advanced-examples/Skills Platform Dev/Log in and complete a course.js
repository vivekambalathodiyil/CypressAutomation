describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1920, 1200)
    
       cy.visit('https://dev.skillsplatform.org/')
       cy.get('.login > a').click()
     
cy.get('#login_email').type('vivek.ambalathodiyil@wdtrust.org.uk',{log:false})
cy.get('#login_password').type('Dasappan-123',{log:false})

cy.get(':nth-child(1) > .form > .buttons > .button').click()
cy.get('.login > .loggedinas').click()
cy.visit('https://dev.skillsplatform.org/dashboard/profile/courses')
cy.get('#course_table > tbody > tr:nth-child(2) > .buttons > .button').click()
cy.get('#modal_edit > .modalwindow > .modalcontents > .usercourse-modal > .tutorial:nth-child(2)').click()

// Close the scrom window
//cy.get('.usercourse-iframe').click()
//cy.xpath('/html/body/div[1]/div/div/div/div/div/div[3]/div[3]/div[4]/div[2]/div[5]/a/span[1]/svg/use').click()
//cy.get('body > #modal_edit > .modalwindow > .closemodal').click()

       
    })
   
   })

   

   describe('iframe',function()
{

    it('iframe',function(){
        cy.viewport(1920, 1200)
    cy.get('#modal_edit_2 > .modalwindow').then(function($iFrame)
{
            const $iFrameContent = $iFrame.contents().find('#usercourse-iframe')
            cy.wrap('iFrameContent')
            //cy.get('#modal_edit_2 > .modalwindow').cl
            cy.go('back')
            })
    })
})