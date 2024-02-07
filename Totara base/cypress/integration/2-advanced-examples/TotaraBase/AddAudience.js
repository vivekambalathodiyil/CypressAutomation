describe('Log In As Admin', function() {

    it('Verify Admin permitted pages', function() {
       cy.viewport(1920, 1200)
//Log in as an Admin
       cy.visit('https://pgdev.edev.skillsforhealth.org.uk/')
       cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk',({log:false}))
       cy.get('#password').type('Dasappan-123',({log:false}))
       cy.get('#loginbtn').click()
       cy.get('.nav-link > .tfont-var-gear').should('be.visible')
       cy.log('Admin menu accessable')
})

// Access Audience page to create a new audience

it('Add a new  audience', function() {
       cy.visit('https://pgdev.edev.skillsforhealth.org.uk//login/index.php')
       cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk',({log:false}))
       cy.get('#password').type('Dasappan-123',({log:false}))
       cy.get('#loginbtn').click()      
       cy.visit('https://pgdev.edev.skillsforhealth.org.uk/cohort/edit.php?contextid=1')
//Generate a randon number as audience name
       //const Audience = Date.now().toString();
       //const getUniqueId = () => Cypress._.uniqueId(Audience);
       //cy.visit('https://schoenclinictot14.edev.skillsforhealth.org.uk/cohort/edit.php?contextid=1')
       //Generate a randon number as audience name
       //cy.get('#id_name').type(Audience)

       const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const Audience = `Audience${id}`
       cy.get('#id_name').type(Audience)
       
       cy.get('#id_cohorttype').select('Dynamic')
       cy.get('#id_submitbutton').click()
       cy.wait(2000)
       cy.get('.alert-message').should('contain','Successfully added audience')
       cy.log('New audience added')
})
it('log out', function () {
       cy.get('.totaraNav_prim > .container-fluid')
       cy.get('.caret').click()
       cy.get(':nth-child(3) > .icon').click()
})
})

   