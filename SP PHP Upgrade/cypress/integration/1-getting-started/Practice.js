describe('Example to demo conditional testing in cypress', () => {

  beforeEach(() => {
    cy.viewport(1920, 1837)  
        cy.visit('https://etest.skillsplatform.org/blog/')
        cy.location('hash')
        
    })

    it('fails with a custom message when using cy.get()', () => {
      cy.get('title').then(($title) => {
          // synchronously ask for the body's text
          // and do something based on whether it includes
          // another string
          if ($title.text().includes('Skills Platform Blog | Learn Something New'))                    
          {
            // yup found it
            cy.title().should('eq', 'Skills Platform Blog | Learn Something New')
          } else {
            // nope not here
            cy.log('Title not found')
            
                                    
            }
           


          })
      })

      //cy.title().should('eq', 'Skills Platform Blog | Learn Something New')
        
    })

  
