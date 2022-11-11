/// <reference types="cypress" />

describe('Sort By', () => {
  it('if sort by is set to "Newest", cards should be sorted by articles id', () => {
    cy.visit('http://localhost:3000');
    cy.get('.sort-filter').click();
    cy.intercept('/v3/articles**').as('getArticles');
    cy.get('li').contains('Newest').click();
    cy.wait('@getArticles');

    cy.get('.news-card').then(($cards) => {
      const ids = $cards.map((_, card) => card.id).get();
      expect(ids).to.deep.equal(ids.sort().reverse());
    });
  });

  it('if sort by is set to "Oldest", cards should be sorted by articles id', () => {
    cy.visit('http://localhost:3000');
    cy.get('.sort-filter').click();
    cy.intercept('/v3/articles**').as('getArticles');
    cy.get('li').contains('Oldest').click();
    cy.wait('@getArticles');

    cy.get('.news-card').then(($cards) => {
      const ids = $cards.map((_, card) => card.id).get();
      expect(ids).to.deep.equal(ids.sort());
    });
  }
});
