describe('Builder test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test="login-email"]').type('admin@mail.com');
        cy.get('[data-test="login-password"]').type('admin');
        cy.get('[data-test="login-submit"]').click();
    })

    it('form styles should be visible', () => {
        cy.get('[data-test="accordion-header-form-styles"]').click();
        cy.get('[data-test="accordion-body-form-styles"]').should('be.visible');
    });

    it('item styles should be visible', () => {
        cy.get('[data-test="accordion-header-item-styles"]').click();
        cy.get('[data-test="no-item-selected"]').should('be.visible');
    });
})