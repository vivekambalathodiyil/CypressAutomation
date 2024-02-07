const { notDeepEqual } = require("assert")
const { wrap } = require("module")
// this test is to make sure that the course filters apply proplerly. This will work only for the first page. 
// so I have used sort filter to minimise the risk. 
describe('User page', function (){
    
    beforeEach(() =>{
    
        cy.loginAdmin()
})
it('User Certification is Overdue',function (){

    cy.visit('/local/wdtcompliance/reporting/userlist.php') 
    cy.get('.fheader').click()
//Filter to Certification Overdue and search
    cy.get('[data-cy="chkExpiryRed"]').check()
    cy.get('[data-cy="fltbtnSearch"]').click()
//Sort the list to desenting so that if there is any 100% it will come on top of the list after filter
    cy.get('/local/wdtcompliance/reporting/userlist.php?organisation=0&filterorgsbelow=0&certification=0&learnername&expiryred=1&expiryamber=0&fullcompliance=0&position&cohort&learneremail&learneruid&orderby&dir&orderby=compliance&dir=desc"]').click()
// This will get all value under Compliance %, then validate if the list contains 100%. If 100% is displayed the test will 
//fail as we have filtered to overdue courses so no users should have 100% 

    cy.get('tbody td:nth-child(8)').then(function(text){
        cy.get('tbody td:nth-child(8)').should('not.contain','100%')
        cy.log('No users with 100% when filtering to overdue courses',text.text())
         })       
})
it('Certification Fully compliant',function (){
    cy.visit('/local/wdtcompliance/reporting/userlist.php') 
    cy.get('.fheader').click()
//Filter to fully compliant users. No sorting is required as all users will be 100%    
    cy.get('[data-cy="chkFullyCompliant"]').check()
    cy.get('[data-cy="fltbtnSearch"]').click()
    
// this will get all the % values form the table
    cy.get('tbody td:nth-child(8)').then(function(text){
           cy.log(text.text())
           cy.get('tbody td:nth-child(8)').should('contain','100%')
           })
})
                   
   
it('Certification Due For Renewal',function(){ 
    cy.visit('/local/wdtcompliance/reporting/userlist.php') 
    cy.get('.fheader').click()
    cy.get('[data-cy="chkExpiryAmber"]').check()
    cy.get('[data-cy="fltbtnSearch"]').click()
    cy.get('/local/wdtcompliance/reporting/userlist.php?organisation=0&filterorgsbelow=0&certification=0&learnername&expiryred=0&expiryamber=1&fullcompliance=0&position&cohort&learneremail&learneruid&orderby&dir&orderby=compliance&dir=asc"]').click()
// When we filter to due for renewal there will not be any users with 0%, as that will go under overdue
// this will verify that the users are not having 0%
    cy.get('tbody td:nth-child(8)').should('not.contain','0%')
// the below code is no required, this only returns % that are not equal to 0%
    cy.get('tbody td:nth-child(8)').each(($el, index, $list)=>{
        const StoreText = $el.text().replace(/[^0-9.]+/g, '')
if(StoreText != 0){
        cy.log('No users with 0%',StoreText)
        }
    
    })
    
    }) 
})
      
    
    