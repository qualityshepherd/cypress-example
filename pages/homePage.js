import basePage from './basePage'

const homePage = {
  url: '',
  postTitles: '.post-title',
  githubLink: '#github-social img',
  loadMoreBtn: '#load-more',

  // littering a page object with getters is lame...
  posts () {
    return cy.get(this.postTitles)
  },

  /**
   * Load more posts till we find the one we're looking for
   * @param  {string} postTitle
   * @return {bool}
   */
  findPostByPaging (postTitle) {
    cy.get(this.nextPageLink).click();
    (cy.get(this.postTitles).contains(postTitle)) ? true : this.findPostByPaging(postTitle)
  }
}
export default { ...basePage, ...homePage }
