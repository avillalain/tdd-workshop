describe('Sign Up', () => {
  it('should allow to type the first name for the new account', () => {
    cy.visit('/')
      .get('input[name=firstname]').type('first name');
  });
});