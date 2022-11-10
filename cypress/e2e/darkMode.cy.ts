/// <reference types="cypress" />

describe('Dark Mode', () => {
  it('should toggle dark mode', () => {
    cy.visit('http://localhost:3000');

    cy.get('body')
      .should('have.css', 'background-color', 'rgb(247, 246, 243)')
      .then(($body) => {
        if ($body.css('background-color') === 'rgb(247, 246, 243)') {
          cy.get('.toggle-theme').click();
          cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(30, 32, 34)',
          );
        } else {
          cy.get('.toggle-theme').click();
          cy.get('body').should(
            'have.css',
            'background-color',
            'rgb(247, 246, 243)',
          );
        }
      });
  });
});
