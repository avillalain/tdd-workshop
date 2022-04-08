describe('Sign Up', () => {
  it('should allow to type the first name for the new account', () => {
    const account = {
      firstname: 'Angel',
      lastname: 'Villalain',
      email: '',
      organization: 'TW',
      position: 'yet another software dev'
    };
    cy.visit('/')
      .intercept('POST', '/api/account', {statusCode: 201}).as('account')
      .get('input[name=firstname]').type(account.firstname)
      .get('input[name=lastname]').type(account.lastname)
      .get('button[type=submit').click()
      .get('input[name=organization]').type(account.organization)
      .get('input[name=position]').type(account.position)
      .get('button[type=submit').click()
      .wait('@account').its('request.body').should('eq', JSON.stringify(account))
      .get('h2').contains('Thanks');
  });
});