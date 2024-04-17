describe('Login', () => {
  beforeEach(() => {
    cy.loginAdmin()
  })
  it('View course page', () => {
    //custom command added in commands.js
    cy.visit('https://laravel-develop.edev.skillsforhealth.org.uk/admin/course/all')
    cy.get('thead > tr > ').should('contain', 'Course Name')
    cy.get('thead > tr > ').should('contain', 'Library')
    cy.get('thead > tr > ').should('contain', 'Registration Date')
    cy.get('thead > tr > ').should('contain', 'Add a Module Edit/Delete Course')
    // get the table contents before the name filter is applied. Then compre the stored text with the text when filter is applied
    cy.get('tbody').then(function (text) {
      //table content before the name filter is applied
      cy.log('Table contents before filter is applied', text.text())

      // test to make sure that the filter working
      const orderby = Math.floor(Math.random() * 3) + 1// generate number between 1to3 for name drop down as there are only 3 options. This can he increased if new items are added
      const ascend = Math.floor(Math.random() * 2) + 1 // generate number 1 or 2 in random order.
      //apply the filter 
      cy.get('#orderColumn').select([orderby])
      //get the table contents after the filter is applied
      cy.get('tbody').then(function (text1) {
        cy.log('Table contents before filter is applied', text1.text())
        // compare the contents, before and after, logic is that the text will not be same once the filter is applied.       
        if (text !== text1) {
          cy.log("Filter applied", { color: 'blue' })
        } else {
          // alert will stop the scipt, can be change to cy.log. User will need to make sure that the log is checked to understand the result
          alert('Name Filter not applied')
        }

        cy.get('#orderType').select([ascend])
      })

    })
  })

it('edit a course', () => {
  cy.visit('/admin/course/all')




})
})

