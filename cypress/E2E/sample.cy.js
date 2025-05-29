describe('Página principal', () => {
  it('muestra el título', () => {
    cy.visit('http://localhost:8080');
    cy.contains('h1', 'Hola DevOps');
  });

  it('verifica función par/impar desde UI', () => {
    cy.get('#numberInput').type('2');
    cy.get('#checkBtn').click();
    cy.get('#result').should('contain', 'Es par');

    cy.get('#numberInput').clear().type('3');
    cy.get('#checkBtn').click();
    cy.get('#result').should('contain', 'No es par');
  });
});

