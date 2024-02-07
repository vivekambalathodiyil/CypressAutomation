describe('Creat a new user and add as manager', function () {

    // before running any 'it' block the below code will run to log in as an admin 
    beforeEach(() => {
        cy.loginAdmin()
    })
        it ('Allocation Master', ()=>{
            cy.visit('/local/wdtcompliance/admin_matrix/index.php')

        })
    })


