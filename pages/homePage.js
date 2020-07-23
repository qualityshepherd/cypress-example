import basePage from './basePage';

/**
 * Cypress seems to think having selectors in tests is ok? [SPOILER] it's not.
 * Nor is it good to have them in your page methods... so I'm just declaring
 * them as css strings and then use these in our methods.
 * Ie, we need only change the single var if the app's css changes
 *
 * Also, IMO, Cypress' view on page objects is _at best_ misguided
 */
const homePage = {
  url:            '/',
  postTitleLinks: 'h2 a',
  siteTitle:      'h1',
  githubLink:     '#github-social',
  nextPageLink:   '.next',

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  postTitleExists(postTitle) {
    return cy.get('a').contains(postTitle).should('exist')
  },

  posts() {
    return cy.get(this.postTitleLinks)
  },

  /**
   * Page back till we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  findPostByPaging(postTitle) {
    cy.get(this.nextPageLink).click();
    this.postTitleExists(postTitle) ? true : this.findPostByPaging(postTitle);
  }
}
export default {...basePage, ...homePage}