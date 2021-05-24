import { logout } from '../utils/logoutSelector';
import { emailChangeSelectors } from '../constants/selectors/selector'

export const emailChange = (newEmail, currentPwd) => {
        cy.get(emailChangeSelectors.emailField).type(newEmail);
        cy.get(emailChangeSelectors.passwordField).type(currentPwd);
        cy.get(emailChangeSelectors.submitBtn).click();
        cy.msgPrompt('Email successfully changed!');
        logout();
}


