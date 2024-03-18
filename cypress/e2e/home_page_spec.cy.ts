describe('My First Test', () => {
  it('successfully loads, searches with input, and displays results', () => {
    cy.visit('/');

    cy.get('h1').contains('Book Manager');
    cy.get('h2').contains('Add a Book');
    cy.get('h2').contains('My Books');

    cy.get('#search').type('The Great Gatsby');
    cy.get('button').contains('Search').click();

    cy.get('h2').contains('Results');
    cy.get('.result-card').should('have.length', 10);
  });
});
