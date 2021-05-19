import { emailChange } from '../utils/emailChange'

export const resetEmail = (email, newEmail, currentPassword) => {
    cy.visit('/')
    cy.login(email,currentPassword);

    cy.get('.bp3-popover-target > .relative').click();
    cy.get('[data-cy="nav-profile-link"]').click();
    
    cy.get('[data-cy=profile-settings-change-email-tab]').click();
    emailChange(newEmail, currentPassword);
}    
