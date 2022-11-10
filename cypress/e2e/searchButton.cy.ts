/// <reference types="cypress" />

describe('Search Button', () => {
  it('cards title should match search input', () => {
    cy.visit('http://localhost:3000');
    cy.get('.search-input').type('SpaceX');
    cy.intercept('/v3/articles**').as('getArticles');
    cy.get('.search-button').click();
    cy.wait('@getArticles');
    cy.get('.news-card').each((card) => {
      cy.wrap(card).find('h2').should('contain', 'SpaceX');
    });
  });
});
