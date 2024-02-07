describe('Compliance by Position',()=>{
    beforeEach(() => {
        //custom command added in command.js under support folder
        cy.loginAdmin()
    })

it('Audience Filter',()=>{
//open user tab, check if the filter is visible and then open filter to select an audience    
    cy.get('[data-cy="userlist"]').click()
    cy.xpath('/html/body/div[3]/div[2]/div/div/div[1]/form/fieldset/legend/a/span').should('be.visible').click()
    cy.get("#id_cohort").select([1])
    cy.get('#id_submitbutton').click()
     cy.get('tbody').should('not.contain','0 users displayed ')
    cy.get('#id_submitbutton').click()
     })
it('Certifications Overdue',()=>{
//Open user page     
    cy.get('[data-cy="userlist"]').click()
// open filter
    cy.xpath('/html/body/div[3]/div[2]/div/div/div[1]/form/fieldset/legend/a/span').click()
//Click the overdue checkbox and click search
    cy.xpath('/html/body/div[3]/div[2]/div/div/div[1]/form/fieldset/div/div[8]/div[2]/span').click()
    cy.get('[data-cy="fltbtnSearch"]').click()
//Once the the filter is applied the body should not contain any users with 100%
     cy.get('tbody').should('not.contain','100%')
     
})
it.only('Certifications Overdue ',()=>{
    //Open user page     
        cy.get('[data-cy="userlist"]').click()
    // open filter
        cy.xpath('/html/body/div[3]/div[2]/div/div/div[1]/form/fieldset/legend/a/span').click()
        cy.get('[data-cy="fltOrganisation"]').select([2])
        cy.get('[data-cy="fltbtnSearch"]').click()
        
        cy.get('[data-cy="fltbtnClear"]').click()
        cy.xpath('/html/body/div[3]/div[2]/div/div/div[1]/form/fieldset/legend/a/span').click()
        cy.get('[data-cy="fltbtnSearch"]').click()
        cy.get('tbody').invoke('text').then((text) =>{
            var data = text.replace(/[^0-9.]+/g, '')
            cy.log(data)
        })

    })


})