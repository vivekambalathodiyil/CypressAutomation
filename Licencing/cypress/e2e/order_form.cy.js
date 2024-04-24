const faker = require('faker');
describe('Order form', ()=>{

    beforeEach(()=>{

        cy.loginAdmin()
    })

    it('Create New order',()=>{
        const orderNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100
        cy.visit('/admin/order-form')
        cy.get('#clientID').select([1])
        cy.contains('Order ID').next().type(orderNumber)
        cy.get('.input-wrapper').contains('label', 'Shared').prev('input').check()
        cy.contains('Platform name').next().type('https://www.WDttenant.co.uk')
        cy.get('#startdate').click()
       cy.get("#datetimepicker1").contains('1').click()
       cy.get("#quantityContainer").type('10')
       cy.get('#endDatePicker').click()
       cy.contains('#datetimepicker2>span.cell', '30').click({force: true})
       document.querySelector("#datetimepicker2 > div > div:nth-child(2) > div > span:nth-child(38)")
       
       cy.get("#datetimepicker2 > div > div:nth-child(2) > header > span.day__month_btn.up").click()
       
       //type('10')

       cy.get('.col-sm-10 > .btn').click()





    })
})