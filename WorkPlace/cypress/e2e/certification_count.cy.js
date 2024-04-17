describe('Compliance course assignemnt dashboards', function () {
   beforeEach(() => {
      //cy.loginAdmin()
      cy.loginLearner()
   })
   it('Get the certificaiton(due&in-progress) counts', () => {

      cy.visit('/my/')
      // get the count of overdue/due/completed & in-progress from the top count list on dashboard

      // get element and retrive the number for the text for that element, this wil give the exact number in the count
      cy.get('.overdue-count').invoke('text').then(text => {
         const overdue = parseFloat(text.replace(/[^\d.-]/g, ''))
         cy.log('Overdue count   ', overdue)

         cy.get('.available-count').invoke('text').then(text => {
            const due = parseFloat(text.replace(/[^\d.-]/g, ''))
            cy.log('Due count   ', due)
            cy.get('.completed-count').invoke('text').then(text => {
               const completed = parseFloat(text.replace(/[^\d.-]/g, ''))
               cy.log('Completed count   ', completed)
               cy.get('.inprogress-count').invoke('text').then(text => {
                  const inprogress = parseFloat(text.replace(/[^\d.-]/g, ''))
                  cy.log('Inprogress count   ', inprogress)
                  // visit the cours page and check if the count of due course tally with the count on dashboard page
                  cy.visit('/my/courses.php')
                  // click list view to make sure we get all certifiations list and on the other view some might be hidden 
                  cy.get('.grid-text').click()

                  // get the text 'due' from the course details card deck
                  cy.get('.progress-cell').invoke('text').then(text => {
                     const words = text.split(/\s+/).filter(word => word.length > 0);

                     // Filter out words and eliminate 'completed', then count any in progress & due
                     const Due_Inprogress_Count = words.filter(word => word.length !== 9)
                     // cy.log(Due_Inprogress_Count)
                     //cy.log('count',Due_Inprogress_Count.length)
                     // store the count of inprogress and due course to compare against the count in dashboard
                     const DueInprogressCourses = Due_Inprogress_Count.length
                     cy.log('Courses due & Inprogress as per course page is ', DueInprogressCourses)
                     if (DueInprogressCourses === due) {
                        cy.log('count correct in dashboard and course page')
                        cy.log('Due on Dashboard', due)
                        cy.log('Due& inprogress in course page', DueInprogressCourses)
                     } else {
                        alert('count not same in dashboard and course page')

                     }

                  })
               })
            })
         })
      })
 

   })
   it('time left',()=>{
      cy.visit('/my')
      cy.get('#viewAlloverdue').click()
      cy.get('#region-main ').contains('left').invoke('text').then(text=>{
         cy.log(text)
         cy.get('[data-region="coursecarousel-card"][data-courseid="5"] > .card-img > .labels > .label').contains(text)
         

      })
         })
      
})