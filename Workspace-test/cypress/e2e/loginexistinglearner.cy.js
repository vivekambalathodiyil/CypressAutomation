//the user should be an existing user who have started/completed some courses

describe('LogIn As learner', function() {
    beforeEach(()=>{
        cy.loginLearner()
 
    })
        
    it('view dashboard', function() {
//verify if the page has all relevant tabs for a normal user.
        cy.title().should('eq', 'Dashboard')            
        cy.get('#page').contains('Completed Courses')
        cy.get('#page').should('contains.text',' In progress courses')
        cy.get('#page').should('contains.text',' New available courses')
        cy.get('#page').should('contains.text',' Completed Courses ')
        cy.get('#page').should('contains.text','Complete Certifications')
        cy.get('[data-key="mycourses"] > .nav-link').should('be.visible')
//logout of the page
        //cy.visit('https://workplace.etest.skillsforhealth.org.uk/login/logout.php?')
        //cy.contains('Continue').click()

       })
       it.only('open a course',()=>{
        cy.visit('/my/courses.php')
        cy.get('.form-control').type('Conflict Resolution')
        cy.get('.input-group-append > .btn > .icon').click()
        cy.contains('Conflict Resolution').click()
        cy.get('[data-region="program-heading"] > .my-3').contains('Conflict Resolution').click()
        cy.contains('The importance of health and safety').click({force: true})
        cy.go('back')


       })
    })
