describe('Item styles testing', () => {
    beforeEach(() => {
        cy.setCookie('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjc1MjUxMjYxLCJleHAiOjE2NzUyNTQ4NjEsInN1YiI6IjEifQ.a4xWSnmCxDAWZILHOuHZPqeKAnVDOD0yKowVlilIZf4');
        cy.visit('/');
    });

    after(() => {
        cy.get('[data-test="selected-items"]').children().last().realMouseDown({ button: 'left', position: 'center' })
        .realMouseMove(0, 10, { position: 'center' });
        cy.wait(400)
        cy.get('[data-test="delete-item"]').realMouseMove(0, 0, { position: 'center' }).realMouseUp(); 
    })

    before(() => {
        cy.setCookie('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjc1MjUxMjYxLCJleHAiOjE2NzUyNTQ4NjEsInN1YiI6IjEifQ.a4xWSnmCxDAWZILHOuHZPqeKAnVDOD0yKowVlilIZf4');
        cy.visit('/');
        const dragElems = '[data-test="available-items"]';
        cy.get(dragElems).children().first().next().next().realMouseDown({ button: 'left', position: 'center' })
            .realMouseMove(0, 10, { position: 'center' });
        cy.wait(400)
        cy.get('[data-test="drop-zone"]').realMouseMove(0, 0, { position: 'center' }).realMouseUp();
    })

    function hexToRgb(hex = '') {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${ parseInt(result[1], 16) }, ${ parseInt(result[2], 16) }, ${ parseInt(result[3], 16) })`
        : null;
    }

    it('item font color should change', () => {
        const value = '#ff0000';
        const valueRgb = hexToRgb(value);

        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-font-color"]')
        .invoke('val', value)
        .trigger('input', { force: true });

        cy.get('[data-test="selected-items"]').children()
        .last().find('input').should('have.css', 'color', valueRgb);
    });

    it('item font weight should change', () => {
        const value = '700';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-font-weight"]').click().get('mat-option').contains(value).click();
        cy.get('[data-test="selected-items"]').children()
        .last().find('input').should('have.css', 'font-weight', value);
    });

    it('item border style should change', () => {
        const value = 'Dashed';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-border-style"]').click().get('mat-option').contains(value).click();
        cy.get('[data-test="selected-items"]').children()
        .last().find('mat-form-field').should('have.css', 'border-style', value.toLowerCase());
    });

    it('item border width should change', () => {
        const value = '5';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-border-width"]').clear({ force: true }).type(value);
        cy.get('[data-test="selected-items"]').children()
        .last().find('mat-form-field').should('have.css', 'border-width', `${value}px`);
    });

    it('item border color should change', () => {
        const value = '#ff0000';
        const valueRgb = hexToRgb(value);

        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-border-color"]')
        .invoke('val', value)
        .trigger('input', { force: true });

        cy.get('[data-test="selected-items"]').children()
        .last().find('mat-form-field').should('have.css', 'border-color', valueRgb);
    });

    it('item placeholder should change', () => {
        const value = 'Test';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-placeholder"]').clear().type(value, { force: true }).blur();
        cy.get('[data-test="selected-items"]').children()
        .last().find('label').contains(value);
    });

    it('item width should change', () => {
        const value = '75';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-width"]').type(value)
        cy.get('[data-test="selected-items"]').children()
        .last().children().first().should('have.css', 'width', `${value}px`);
    });

    it('item height should change', () => {
        const value = '80';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-height"]').type(value)
        cy.get('[data-test="selected-items"]').children()
        .last().children().first().should('have.css', 'height', `${value}px`);
    });

    it('item font size should change', () => {
        const value = '25';
        cy.get('[data-test="selected-items"]')
        .children()
        .last().find('input').click()

        cy.get('[data-test="accordion-header-item-styles"]').click();

        cy.get('[data-test="item-styles-font-size"]').clear({ force: true }).type(value, { force: true })
        cy.get('[data-test="selected-items"]').children()
        .last().find('input').should('have.css', 'font-size', `${value}px`);
    });
})