import basePage from './basePage';

const githubPage = {
    url: 'https://github.com/qualityshepherd/',
    vcard: '.vcard-names',

    username() {
      return cy.get(this.vcard)
    }
}
export default {...basePage, ...githubPage}