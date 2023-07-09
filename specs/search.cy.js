import searchPage from '../pages/searchPage'

describe('Search', () => {
  beforeEach(() => {
    searchPage.goto()
  })

  it('should return search results', () => {
    searchPage.searchFor('cypress')

    searchPage.results().should('have.length.at.least', 1)
  })

  it('unfound search term should return no results message', () => {
    searchPage.searchFor('sfdslkjsfkjslkdf')

    searchPage.noResults().should('be.visible')
  })
})
