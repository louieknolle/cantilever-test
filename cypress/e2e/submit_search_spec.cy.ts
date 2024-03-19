describe('Submit Search', () => {
  it('successfully submits a search', () => {
    cy.visit('/');

    cy.get('input[name="search"]').type('The Great Gatsby');
    cy.get('button[type="submit"]').click();

    cy.get('.result-card').should('have.length', 10);
    cy.get('.result-card').first().click();
    cy.get('h2').contains('Add Notes');
    cy.contains('The Great Gatsby');
  });
});
