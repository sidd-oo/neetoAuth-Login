import { logout } from '../utils/logoutSelector'
import { passwordChangeSelector } from '../constants/selectors/selector'

export const passwordChange = (currentPassword, newPassword) => {
    cy.get(passwordChangeSelector.currentPasssword).type(currentPassword);
    cy.get(passwordChangeSelector.changePassword).type(newPassword);
    cy.get(passwordChangeSelector.confirmPassword).type(newPassword);
    cy.get(passwordChangeSelector.submitBtn).click();
    cy.msgPrompt('Password successfully changed!'); 
    logout();       
}
