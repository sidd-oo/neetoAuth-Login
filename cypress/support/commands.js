// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import { common } from '../constants/selectors/common';
import { loginSelectors } from '../constants/selectors/login'
import { texts } from '../constants/texts/text'

Cypress.Commands.add('login',(email, password) => {
    cy.get(loginSelectors.emailField).type(email);
    cy.get(loginSelectors.passwordField).type(password);
    cy.get(loginSelectors.loginSubmit).click();
})

Cypress.Commands.add('msgPrompt',(msg) => {
    cy.get(common.toasterMessageContainer).should('have.text', msg);
})

Cypress.Commands.add('loginSuccessAssert', () => {
    cy.get(loginSelectors.loginSuccessful).should('have.text', texts.dashboardHeading);
})