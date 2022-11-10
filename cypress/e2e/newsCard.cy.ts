/// <reference types="cypress" />

describe('News Card', () => {
  it('should render 10 skeleton cards', () => {
    cy.visit('http://localhost:3000');
    cy.get('.skeleton-card').should('have.length', 10);
  });

  it('should render 10 news cards', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('/v3/articles**').as('getArticles');
    cy.wait('@getArticles');
    cy.get('.news-card').should('have.length', 10);
  });

  it('each card shoud have a title, sumary and image', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('/v3/articles**').as('getArticles');
    cy.wait('@getArticles');
    cy.get('.news-card').each((card) => {
      cy.wrap(card).find('h2').should('not.be.empty');
      cy.wrap(card).find('p').should('not.be.empty');
      cy.wrap(card).find('img').should('have.attr', 'src');
    });
  });

  it('when click on site button should open a new tab', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('/v3/articles**').as('getArticles');
    cy.wait('@getArticles');
    cy.get('.news-card')
      .first()
      .find('.news-site-button')
      .should('have.attr', 'target', '_blank');
  });

  it('when scroll to bottom should load more cards', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('/v3/articles**').as('getArticles');
    cy.wait('@getArticles');
    cy.scrollTo('bottom');
    cy.wait('@getArticles');
    cy.get('.news-card').should('have.length', 20);
  });
});
