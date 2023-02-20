describe('Auth test', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Login should success', () => {
    cy.get('[data-test="login-email"]').type('admin@mail.com');
    cy.get('[data-test="login-password"]').type('admin');
    cy.get('[data-test="login-submit"]').click();
    cy.url().should('contain', '/builder');
  })

  it('Login should fail', () => {
    cy.get('[data-test="login-email"]').type('admin@mail.com');
    cy.get('[data-test="login-password"]').type('uncorrect');
    cy.get('[data-test="login-submit"]').click();
    cy.url().should('contain', '/login');
  })

  it('Existing user cannot sign up', () => {
    cy.get('[data-test="to-signup"]').click();
    cy.get('[data-test="signup-email"]').type('admin@mail.com');
    cy.get('[data-test="signup-password"]').type('admin');
    cy.get('[data-test="signup-submit"]').click();
    cy.url().should('contain', '/login');
  })
});
