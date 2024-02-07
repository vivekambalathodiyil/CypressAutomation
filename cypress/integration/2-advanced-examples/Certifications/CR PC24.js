describe('Conflict Resolution Certifiation', function() {

    it('CR First Module', function() {
   
       cy.viewport(1920, 1237)
    
       cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/login/index.php')
    
       cy.get('#username').click().type('vivek.ambalathodiyil@wdtrust.org.uk',{log:false});
       cy.get('#password').click();
       cy.get('#password').type('Dasappan-123',{log:false});
       cy.get('#login').submit();
    
       cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/')
           cy.get('.row > .col-md-6:nth-child(1) > p > a > .img-responsive').click()
           cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/totara/dashboard/index.php?id=2')
           cy.get('.col-12:nth-child(2) > .learningitem > .detail > .upper > .upper-inner > .coursename > .d-block').click()
           cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/totara/program/view.php?id=177')
           cy.get('.surround:nth-child(8) > .fullwidth:nth-child(4) > tbody:nth-child(2) > .lastrow:nth-child(1) > .launchcourse:nth-child(2) > .prog-course-launch:nth-child(1) > .singlebutton:nth-child(1) > form:nth-child(1) > div:nth-child(1) > input:nth-child(1)').click()
           cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/course/view.php?id=215')
           cy.get('#module-856 > div > .mod-indent-outer > div > .activityinstance > a > .instancename').click()
           cy.visit('https://primarycare24.edev.skillsforhealth.org.uk/mod/scorm/view.php?id=856')
           cy.xpath('//input[@value="Enter"]').click()
           cy.wait(4000)
           
             cy.get('#scorm_object').then(function($iframe){
                 const iFrameContent = $iframe.contents().find('body')
                // cy.wrap(iFrameContent).find('.menuProgressC trackingState1C').click({force:true,multiple: true})
                 cy.wrap(iFrameContent).find('.menuTitleC').click({multiple: true}).parent()
                cy.get('#nextButtonl').click({force: true,multiple: true}).parent()
             })
             //const iframe = document.createElement('iframe')
            
        
    })
   
   })
   