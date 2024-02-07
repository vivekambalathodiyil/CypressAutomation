describe ('login', function(){
    
         
              it('user count for elearningnhsp110322 ',function(){
                cy.viewport(2548, 2009)    
                cy.visit('https://elearningnhsp110322.snapshot.skillsforhealth.org.uk/login/index.php')
                cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk', { log: false })
                cy.get('#password').type('Dasappan-123', { log: false })
                cy.get("#loginbtn").click()
                cy.visit('https://elearningnhsp110322.snapshot.skillsforhealth.org.uk/local/sfhadmin/reporting/client.php')
                
                
// get the the numbner of users in each section
                                                    cy.xpath('/html/body/div[4]/div/div[4]/div[2]/section/div/div[2]/form/ul/li/ul/li[1]/a[2]').then(function(NHS_Professionals_users_count ){
                                                        cy.log(NHS_Professionals_users_count.text())
                                                            })
                                                    cy.xpath('/html/body/div[4]/div/div[4]/div[2]/section/div/div[2]/form/ul/li/ul/li[2]/a[2]').then(function(NHS_Professionals_suspended_count ){
                                                        cy.log(NHS_Professionals_suspended_count.text())
                                                                
                                                            })
                                                    cy.xpath('/html/body/div[4]/div/div[4]/div[2]/section/div/div[2]/form/ul/li/ul/li[3]/a[2]').then(function(NHS_Professionals_Migration_count ){
                                                            cy.log(NHS_Professionals_Migration_count.text())
                                                            // compare the value with 500. This need to be compared against the value in production
                                                            cy.xpath('/html/body/div[4]/div/div[4]/div[2]/section/div/div[2]/form/ul/li/ul/li[3]/a[2]').invoke('text').then((text1) => {
                                                                expect(text1).contains('500 ')

                        
                                                            })
                                                            
                   
                            

                   const a = cy.url('https://elearningnhsp110322.snapshot.skillsforhealth.org.uk/local/sfhadmin/reporting/client.php').get('#multiform > ul > li > ul > li:nth-child(1) > a:nth-child(4)').text()
                    LogintoProduction()
                    
                    cy.xpath('/html/body/div[4]/div/div[4]/div[2]/section/div/div[2]/form/ul/li/ul/li[7]/a[2]').invoke('text').then((text2) =>{
                        expect(text2).equal(a)
                    })   


                                                        function LogintoProduction() {
                                                            cy.visit('https://elearning.skillsforhealth.org.uk/login/index.php')
                                                            cy.get('#username').type('Vivek.Ambalathodiyil@wdtrust.org.uk', { log: false })
                                                            cy.get('#password').type('Dasappan-123', { log: false })
                                                            cy.get("#loginbtn").click()
                                                            cy.visit('https://elearning.skillsforhealth.org.uk/local/sfhadmin/reporting/client.php')
                                                        }
                })      
                    })
                })  
               
                                  

