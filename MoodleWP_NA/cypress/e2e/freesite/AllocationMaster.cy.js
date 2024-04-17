//This test is to check of the name filter is carried to the next page.We are inputing a part of name in the search box. Always give one single 
// as it will bring more users. If the test breaks change the word in the search box and make sure that we have already users.
describe('Allocation Matrix', function(){

    it('Allocate certifications', function(){

        cy.viewport(2500, 2000)
        cy.visit('https://workplace-free.etest.skillsforhealth.org.uk/')
        cy.get('input[name=username]').type('vivek.ambalathodiyil@wdtrust.org.uk', {log:false})
        cy.get('input[name=password]').type('Dasappan-123',{log:false})
        cy.get('#loginbtn').click({force:true})
        cy.location('protocol').should('eq','https:')
        cy.log('Admin logged into the site')
//open allocaiton matrix
        cy.visit('https://workplace-free.etest.skillsforhealth.org.uk/local/wdtcompliance/admin_matrix/index.php')
        cy.get('#partname').type('jas')
        cy.get('[type="submit"]').click()
// Get the total user displayed for the bottom of the page once the filter is applied.Then navigate to the next page and repet the same process and 
// and compere the users displayed at the end of the page. If the filters are applied all pages will show the same numnber of users
        cy.get('strong').invoke('text').then((text1) =>{
            var data1 = text1.replace(/[^0-9.]+/g, '')
            cy.log('Total users with J ='+ data1)
            cy.visit('https://workplace-free.etest.skillsforhealth.org.uk/local/wdtcompliance/admin_matrix/?partname=jas&cohortid=0&page=1')
            cy.get('strong').invoke('text').then((text1) =>{
                var data2 = text1.replace(/[^0-9.]+/g, '')
                cy.log('Total users with J =' +data2)
//this will compare the value in the 'number of users displayed', if both pages do not have the same value  the filters are not applied.                
            if (data1=data2) {
                cy.log("Filters applied, both pages have " +data1+' Users')
            } 
    
    
            })


        })
        

    })

})