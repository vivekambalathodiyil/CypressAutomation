describe('login', ()=>{

it('Log in and view',()=>{

    cy.visit('https://ddt-rt5-testing-app-nk.azurewebsites.net/wdt')
    cy.wait(1000)
    cy.log('Logged in')
    cy.get('#username').type('Vincent.Jast70@example.org', {log:false})
    cy.get('#password').type('Password1!',{log:false})
    cy.get('.btn-primary').click({force:true})
    cy.wait(1000)
    cy.log('Logged in')
    cy.wait(1000)
    cy.get('.rtv-menu-icon').click()
    cy.wait(1000)
    cy.get('.dropdown-item > .dx-menu-item-text-container').invoke('click')
    cy.wait(1000)

   
    cy.contains('Create New').click()

    cy.get('form').should('be.visible')
    cy.wait(1000)
   // cy.window().then((win)=>{

        cy.get('form')
        cy.xpath('//body[1]/dxbl-popup-root[1]/dxbl-popup-cell[19]/dxbl-dropdown[1]').invoke("click",{force:true})
              cy.get('#StaffMember').type('Fernando Collier').tab()

             
              cy.get('#StaffMember').click()
              cy.get('#StaffMember').click()
              cy.contains('Specialty').click({force:true})
              cy.wait(1000)
             //click on specialty box so come out of staff  member box
             cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[5]/div/div/dxbl-combobox/dxbl-button-edit-input-group/div[2]/input').click()
             cy.wait(2000)
             cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[5]/div/div/dxbl-combobox/dxbl-button-edit-input-group/div[2]/input').type('Allergy')

             cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[8]/div/div/dxbl-combobox/dxbl-button-edit-input-group/div[2]/input').type("Lucy O'Reilly",{force:true})
            cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[6]/div/div/dxbl-combobox/dxbl-button-edit-input-group/div[2]/input').type('Clinic 1')
            cy.get('textarea').first().type('Hello World')
            
            cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[13]/div/div/div/div/div/textarea').type('text')
            
            cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[14]/div/div/div/div/div/textarea').first().type('Hello Bristol')
            cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[14]/div/div/div/div/div/textarea').type('text')
            cy.xpath('/html/body/dxbl-popup-root/dxbl-popup-cell[4]/dxbl-modal/dxbl-modal-root/dxbl-modal-dialog/div/div[2]/form/div[1]/div/div[11]/div/div/dxbl-check/div/label').click()
            cy.get('#UpdateButton > span').invoke('click')
            
            
            
            
            
             cy.wait(2000)
            
   // })
  
    

    


})
})