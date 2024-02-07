describe('template spec', () => {
  
  it('passes', () => {
    cy.request('Get', 'https://schoenclinic.edev.skillsforhealth.org.uk/').then((response) => {
      //Expecting the response status code to be 200
      expect(response.status).to.eq(200)

 
  it("gets a list of users", () => {
    cy.request("GET", 'https://elearning39-110322.snapshot.skillsforhealth.org.uk/').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results).length.to.be.greaterThan(1)
    })
  })
})
})
})
   
 