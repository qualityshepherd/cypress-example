import basePage from './basePage'

const searchPage = {
  url: '?search',
  searchBox: '#search',
  searchBtn: '[type="submit"]',
  resultPosts: '.post',
  noResultsMsg: '#no-results',

  searchFor (text) {
    cy.get(this.searchBox)
      .click()
      .type(text)
      .type('{enter}')
  },

  results () {
    return cy.get(this.resultPosts)
  },

  noResults () {
    return cy.get(this.noResultsMsg)
  }
}
export default { ...basePage, ...searchPage }
