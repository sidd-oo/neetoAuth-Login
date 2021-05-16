import { logout } from '../utils/logoutSelector';

export const emailChange = (newEmail, currentPwd) => {
        cy.get('[data-cy=change-email-new-email-text-field]').type(newEmail);
        cy.get('[data-cy=change-email-current-password-text-field]').type(currentPwd);
        cy.get('[data-cy=change-email-submit-button]').click();
        cy.get('[data-cy=toastr-message-container]').should('have.text','Email successfully changed!')
        logout();
}


