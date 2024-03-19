describe('App Loading', () => {
  it('successfully loads and displays correct headers', () => {
    cy.visit('/');

    cy.get('h1').contains('Book Manager');
    cy.get('h2').contains('Add a Book');
    cy.get('h2').contains('My Books');
  });
});
