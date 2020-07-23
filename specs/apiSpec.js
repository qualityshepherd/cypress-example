/**
 * a few dorky api tests using cypress' built-in api functionality
 */
describe('API Tests', () => {
  const baseUrl = 'https://cat-fact.herokuapp.com'

  it('should return a random fact', () => {
    cy.request(`${baseUrl}/facts/random`).as('randomCatFact')

    cy.get('@randomCatFact').should(response => {
      expect(response.body.status.sentCount).to.equal(1)
    })
  })

  it('should get cat by id', () => {
    const id = '5de780600013130015a3ccaf'

    cy.request(`${baseUrl}/facts/${id}`).as('catFactId')

    cy.get('@catFactId').should(response => {
      expect(response.body._id).to.equal(id)
    })
  })
})

