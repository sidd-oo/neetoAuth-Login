import { logout } from '../utils/logoutSelector'

export const resetPassword = (currentPwd, newPwd) => {
    cy.visit('/')
    cy.fixture("credentials").then((user) => {
        cy.login(user.correct.email,currentPwd);
    })
    
    cy.get('.bp3-popover-target > .relative').click();
    cy.get('[data-cy="nav-profile-link"]').click();

    cy.get('[data-cy=profile-settings-change-password-tab]').click();

    cy.get('[data-cy=change-password-current-password]').type(currentPwd);
    cy.get('[data-cy=change-password-new-password]').type(newPwd);
    cy.get('[data-cy=change-password-confirm-new-password]').type(newPwd);
    cy.get('[data-cy=change-password-submit-button]').click();
    cy.get('[data-cy=toastr-message-container]').should('have.text','Password successfully changed!');
    logout();
}
