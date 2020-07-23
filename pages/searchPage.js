import basePage from './basePage';

const searchPage = {
  url: '?search',
  searchBox: '#search_input',
  searchBtn: '[type="submit"]',
  results: '.search-result',
  noResultsMsg: '#no-results',

  searchFor(text) {
    cy.get(this.searchBox)
      .click().type(text)
      .get(this.searchBtn).click()
  },

  results() {
    return cy.get(this.results)
  },

  noResults() {
    return cy.get(this.noResultsMsg)
  }
}
export default {...basePage, ...searchPage}


