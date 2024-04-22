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
        cy.get('#startdate').click()
       cy.get("#datetimepicker1").contains('9').click()
       cy.get('#endDatePicker').click()
       cy.get("#datetimepicker2 > div > div:nth-child(2) > header > span.day__month_btn.up").click()
       cy.get('.col-sm-10 > .btn').click()





    })
})