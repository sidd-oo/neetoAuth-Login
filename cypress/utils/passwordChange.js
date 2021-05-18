import { logout } from '../utils/logoutSelector'

export const passwordChange = (currentPassword, newPassword) => {
    cy.get('[data-cy=change-password-current-password]').type(currentPassword);
    cy.get('[data-cy=change-password-new-password]').type(newPassword);
    cy.get('[data-cy=change-password-confirm-new-password]').type(newPassword);
    cy.get('[data-cy=change-password-submit-button]').click();
    cy.msgPrompt('Password successfully changed!'); 
    logout();       
}
