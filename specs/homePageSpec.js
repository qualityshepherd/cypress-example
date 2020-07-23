import homePage from '../pages/homePage'
import githubPage from '../pages/githubPage'

describe('Search', () => {
  beforeEach(() => {
    homePage.goto()
  })

  it('should display 7 posts per page', () => {
    homePage.posts().should('have.length', 7)
  })

  // NOTE: cypress cannot handle multiple windows... a deal breaker for many
  it.skip('should open social media link in new window', () => {
    cy.get(homePage.githubLink).click()

    githubPage.username().should('be.visible')
  })

  it('should find an older post by paging', () => {
    const postTitle = 'Cypress.io Review'
    homePage.findPostByPaging(postTitle)

    homePage.postTitleExists(postTitle).should('be.visible')
  })
})