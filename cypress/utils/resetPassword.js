import { logout } from '../utils/logoutSelector'
import { common } from '../constants/selectors/common'
import { loginSelectors } from '../constants/selectors/login'
import { passwordChange } from './passwordChange';

export const resetPassword = (email, currentPassword, newPassword) => {
    cy.visit('/')
    cy.login(email,currentPassword);
    
    cy.get(loginSelectors.profileIcon).click();
    cy.get(common.profileTabClick).click();

    cy.get(common.passwordChangeTabClick).click();
    passwordChange(currentPassword, newPassword)
    logout();
}
 