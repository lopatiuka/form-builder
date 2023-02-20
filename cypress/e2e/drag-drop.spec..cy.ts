describe('Dragtest', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="login-email"]').type('admin@mail.com');
    cy.get('[data-test="login-password"]').type('admin');
    cy.get('[data-test="login-submit"]').click();
  })

  it('should drag and drop', () =>  {

    const dragElems = '[data-test="available-items"]';
    const dropEl = '[data-test="drop-zone"]';
    let expectedLength: number;
    let availableLength: number;

    cy.get(dragElems)
    .children()
    .its('length')
    .then(length => {
      availableLength = length;
    })

    cy.get('[data-test="selected-items"]')
    .then($container => {
      cy.wait(1000);
      if($container.find('div').length) {
        cy.get('[data-test="selected-items"]')
        .children()
        .its('length')
        .then(length => {
          expectedLength = length;
        })
      }
      else {
        expectedLength = 0;
      }
    })
    .then (() => {
      cy.get(dragElems).children().each(($el) => {
        cy.wrap($el).realMouseDown({ button: 'left', position: 'center' })
        .realMouseMove(0, 10, { position: 'center' });
      cy.wait(400)
      cy.get(dropEl).realMouseMove(0, 0, { position: 'center' }).realMouseUp();
      expectedLength++;
      })
    })
    .then(() => {
      cy.get('[data-test="selected-items"]').children().its('length')
      .should('eq', expectedLength);
    })
  })

  it('should delete item from form', () => {
    const dragContainer = '[data-test="selected-items"]';
    const deleteContainer = '[data-test="delete-item"]';
    let itemsLength: number;

    cy.get('[data-test="selected-items"]')
    .children()
    .its('length')
    .then(length => {
      itemsLength = length;
    })
    .then(() => {
      cy.get(dragContainer).children().first().then(($el) => {
        cy.wrap($el).realMouseDown({ button: 'left', position: 'center' })
        .realMouseMove(0, 10, { position: 'center' });
      cy.wait(400)
      cy.get(deleteContainer).realMouseMove(0, 0, { position: 'center' }).realMouseUp();
      })
    })
    .then(() => {
      cy.get('[data-test="selected-items"]')
      .children()
      .its('length')
      .should('eq', itemsLength - 1);
    })
  })
})