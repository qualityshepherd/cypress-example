
describe('Quality Shepherd', () =>  {
    beforeEach(() =>  {
        cy.visit('https://qualityshepherd.com');
    });

    it('should display 5 posts per page', () => {
        cy.get('.post').then((posts) => {
            expect(posts).to.have.length(5);
        });
    });

    it('should return search results', () =>  {
        cy.get('input#s').type('protractor{enter}');
        cy.get('#searchform').submit();

        cy.get('body.search-results').should('exist');
        cy.get('.post').then((posts) => {
            expect(posts).to.not.be.empty;
        });
    });

    it('should display "no results" message for unsuccessful searches', () =>  {
        cy.get('input#s').type('sfdslkjsfkjslkdf');
        cy.get('#searchform').submit();

        cy.get('.post>h2').then((noResultsMsg) => {
            expect(noResultsMsg).to.have.text('No posts found. Please try a different search.');
        });
    });

    it('should open social media link in new window', () =>  {
        /**
         *  It was here that I found Cypress does not, nor will they every--support
         *  new windows/tabs, nor iframes. There is zero chance I can use this tool :(
         */
    });
});