import faker, { random } from 'faker' // randon name creator
import { email } from 'faker/lib/internet'
describe('Login', () => {
  beforeEach(() => {
    cy.loginAdmin()
  })
  it('Open client create page', () => {

    cy.visit('https://laravel-develop.edev.skillsforhealth.org.uk/admin/client/create')
    cy.contains('Clients').click()
    cy.contains('Register Client').click()
//Below: Name and email to be requied field, check if the field has required attribute
    cy.get('#nameGroup > .col-sm-4 > .input-wrapper > .form-control').should('have.attr', 'required')
    cy.get('#emailGroup > .col-sm-4 > .input-wrapper > .form-control').should('have.attr', 'required')
// generate randon names to fill the form
    const name = faker.Name.firstName()
    const cemail = faker.Internet.email()
    const url = faker.Internet.domainName()
// will generate a randon number between 1&4, this can be increased depending on the items in dropdown
    const selection = Math.floor(Math.random() * 3) + 1
// input required fields
    cy.contains('Client name').next().click().type(name)
    cy.contains('Client email').next().click().type(cemail)
    cy.contains('Platform URL').next().click().type('https://www.' + url)
// will generate a randon number between 1&4, this can be increased depending on the items in dropdown
    cy.get('#tier').select([selection])
    cy.get('#notes').type('New customer added ')
    cy.contains('Submit').click()
  //verify of the client is added to the list 
    cy.visit('https://laravel-develop.edev.skillsforhealth.org.uk/admin/client/all')
  //sort the page based on the date created and descending, this will make sure the newly created client is on the first page
  //else we need to navigate to the other pages, which is not straightforward when page number increases
    cy.get('#orderColumn').select([3])
    cy.get('#orderType').select([2])
    cy.contains(name)

  })
})



/*cy.get('tbody').should('contain', 'WDT' + name)
cy.get('tbody').should('contain', 'https://www.' + url)
cy.contains('WDT' + name).next().next().contains('Details').click()
cy.get('tbody').should('contain', email)*/

