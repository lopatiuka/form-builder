describe('Form styles testing', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test="login-email"]').type('admin@mail.com');
        cy.get('[data-test="login-password"]').type('admin');
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="accordion-header-form-styles"]').click();
    });

    function hexToRgb(hex = '') {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${ parseInt(result[1], 16) }, ${ parseInt(result[2], 16) }, ${ parseInt(result[3], 16) })`
        : null;
    }

    it('form padding should change', () => {
        const value = '15';
        cy.get('[data-test="input-form-padding"]').clear().type(value);
        cy.get('.drop-form').should('have.css', 'padding', `${value}px`);
    });

    it('form border width should change', () => {
        const value = '3';
        cy.get('[data-test="input-form-border-width"]').clear().type(value);
        cy.get('.drop-form').should('have.css', 'border-width', `${value}px`);
    });

    it('form border radius should change', () => {
        const value = '0';
        cy.get('[data-test="input-form-border-radius"]').clear().type(value);
        cy.get('.drop-form').should('have.css', 'border-radius', `${value}px`);
    });

    it('form border style should change', () => {
        const value = 'Dashed';
        cy.get('[data-test="select-form-border-style"]').click().get('mat-option').contains(value).click();
        cy.get('.drop-form').should('have.css', 'border-style', value.toLowerCase());
    });

    it('item border color should change', () => {
        const value = '#ff0000';
        const valueRgb = hexToRgb(value);

        cy.get('[data-test="input-form-border-color"]')
        .invoke('val', value)
        .trigger('input', { force: true });

        cy.get('.drop-form').should('have.css', 'border-color', valueRgb);
    });
})