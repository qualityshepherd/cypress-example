import basePage from './basePage'

const homePage = {
  url: '',
  postTitles: '.post-title',
  loadMoreBtn: '#load-more',

  // littering a page object with getters is lame...
  posts () {
    return cy.get(this.postTitles)
  },

  postTitleExists (postTitle) {
    return cy.get(this.postTitles).contains(postTitle)
  },

  /**
   * Load more posts till we find the one we're looking for
   * @param  {string} postTitle
   * @return {bool}
   */
  findPostByLoadingMore (postTitle) {
    cy.get(this.loadMoreBtn).click()
    if (!this.postTitleExists(postTitle)) {
      this.findPostByLoadingMore(postTitle)
    } else {
      return true
    }
  }
}
export default { ...basePage, ...homePage }
