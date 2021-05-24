import { logout } from '../utils/logoutSelector';
import { emailChangeSelectors } from '../constants/selectors/emailChange'
import { texts } from '../constants/texts/text'

export const emailChange = (newEmail, currentPwd) => {
        cy.get(emailChangeSelectors.emailField).type(newEmail);
        cy.get(emailChangeSelectors.passwordField).type(currentPwd);
        cy.get(emailChangeSelectors.submitButton).click();
        cy.msgPrompt(texts.emailSuccessfullyChanged);
        logout();
}


