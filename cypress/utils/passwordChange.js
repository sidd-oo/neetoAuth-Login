import { logout } from '../utils/logoutSelector'

export const passwordChange = (currentPassword, newPassword) => {
    cy.get('[data-cy=change-password-current-password]').type(currentPassword);
    cy.get('[data-cy=change-password-new-password]').type(newPassword);
    cy.get('[data-cy=change-password-confirm-new-password]').type(newPassword);
    cy.get('[data-cy=change-password-submit-button]').click();
    cy.get('[data-cy=toastr-message-container]').should('have.text','Password successfully changed!');
    logout();       
}
