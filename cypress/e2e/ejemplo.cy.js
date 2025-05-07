describe('Mi primer test', () => {
  it('visita ejemplo.com', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain');
  });
});
