// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// import '@4tw/cypress-drag-drop';
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     drag(target: string, options?: Partial<TypeOptions>): Cypress.Chainable<Element>;
//   }
// }

// declare namespace Cypress {
//     interface Chainable {
//         /** Custom command to drag subject to target */
//         drag(target: string, options?: Partial<TypeOptions>): Cypress.Chainable<Element>
//     }
// }

// Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject: Cypress.JQueryWithSelector<HTMLElement>, 
//    target: string, 
//     options?: Partial<Cypress.TypeOptions>) => {
//     // Based on this answer: https://stackoverflow.com/a/55436989/3694288
//     cy.get(subject).should('exist')
//       .get(target).should('exist');

//     const draggable = Cypress.$(dragSelector)[0]; // Pick up this
//     const droppable = Cypress.$(dropSelector)[0]; // Drop over this

//     const coords = droppable.getBoundingClientRect();
//     draggable.dispatchEvent(<any>new MouseEvent('mousedown'));
//     draggable.dispatchEvent(<any>new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
//     draggable.dispatchEvent(<any>new MouseEvent('mousemove', {
//         // I had to add (as any here --> maybe this can help solve the issue??)
//         clientX: coords.left + 10,
//         clientY: coords.top + 10  // A few extra pixels to get the ordering right
//     }));
//     draggable.dispatchEvent(new MouseEvent('mouseup'));
//     // return cy.get(dropSelector););

// })
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/** Adds custom command `cy.drag` to the global `cy` object  */
// Cypress.Commands.add('drag', { prevSubject: 'element' }, (
//   subject: Cypress.JQueryWithSelector<HTMLElement>, 
//   target: string, 
//   _options?: Partial<Cypress.TypeOptions>
// ) => {
//     const BUTTON_INDEX = 0;
//     const SLOPPY_CLICK_THRESHOLD = 10;
//     cy.get(target)
//         .then($target => {
//             let coordsDrop = $target[0].getBoundingClientRect();
//             subject
//             .trigger('mousedown')
//             .trigger('mousemove', {
//                 clientX: coordsDrop.left + 10,
//                 clientY: coordsDrop.top + 10 
//             })
//             .trigger('mouseup');        
//         });
// });


//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', drag)
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
