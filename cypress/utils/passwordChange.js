import { logout } from '../utils/logoutSelector'
import { passwordChangeSelector } from '../constants/selectors/selector'
import { texts } from '../constants/texts/text'

export const passwordChange = (currentPassword, newPassword) => {
    cy.get(passwordChangeSelector.currentPasssword).type(currentPassword);
    cy.get(passwordChangeSelector.changePassword).type(newPassword);
    cy.get(passwordChangeSelector.confirmPassword).type(newPassword);
    cy.get(passwordChangeSelector.submitButton).click();
    cy.msgPrompt(texts.passwordSuccesfullyChanged); 
    logout();       
}
