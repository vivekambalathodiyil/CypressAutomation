describe ('Complete course', function()
{
    it('Log in as a learner', function () {
        //Log in as a users

        cy.viewport(2100, 1537)
        cy.visit('https://test.skillsplatform.org/login')
        cy.get('#login_email').type('marco@g.com', { log: false })
        cy.get('#login_password').type('Dasappan-123', { log: false })
        cy.get(':nth-child(1) > .form > .buttons > .button').click()
        cy.wait(2000)
                
//Visit course page and open a course
// Open 1st module

               cy.visit('https://test.skillsplatform.org/dashboard/profile/courses')
               cy.get('tr > .buttons > .button').click()
               cy.wait(2000)
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(2) > div.tutorial-title").click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(2) > div.tutorial-title").should('contain','Module 1: Introduction to Manual Handling')
                cy.wait(5000)
//Open 2nd module.
               cy.visit('https://test.skillsplatform.org/dashboard/profile/courses')
               cy.get('tr > .buttons > .button').click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(3) > div.tutorial-title").click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(3) > div.tutorial-title").should('contain','Maintaining Health and Well-being')

               cy.wait(5000)
 //Open 3rd module.              
               cy.visit('https://test.skillsplatform.org/dashboard/profile/courses')
               cy.get('tr > .buttons > .button').click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(4) > div.tutorial-title").click() 
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(4) > div.tutorial-title").should('contain',' Risk Assessment in Moving and Handling')

               cy.wait(5000)
//Open 4th module.
               cy.visit('https://test.skillsplatform.org/dashboard/profile/courses')
               cy.get('tr > .buttons > .button').click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(5) > div.tutorial-title").click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(5) > div.tutorial-title").should('contain',' Principles of Safer Moving and Handling')
               cy.wait(5000)
//Open Assessment.
               cy.visit('https://test.skillsplatform.org/dashboard/profile/courses')
               cy.get('tr > .buttons > .button').click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(6)").click()
               cy.get("#modal_edit > div.modalwindow > div > div > div:nth-child(6) > div.tutorial-title").should('contain',' Assessment')
               
               cy.wait(6000)
               cy.go('back')
            })
            
        })


     