import basePage from './basePage'

const githubPage = {
  url: 'https://github.com/qualityshepherd/',
  vcard: 'vcard-fullname',

  userAvatar () {
    return cy.get(this.vcard)
  }
}
export default { ...basePage, ...githubPage }
