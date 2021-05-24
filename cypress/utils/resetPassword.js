import { logout } from '../utils/logoutSelector'
import { tabs, loginSelectors} from '../constants/selectors/selector'
import { passwordChange } from './passwordChange';

export const resetPassword = (email, currentPassword, newPassword) => {
    cy.visit('/')
    cy.login(email,currentPassword);
    
    cy.get(loginSelectors.profileIcon).click();
    cy.get(tabs.profileTabClick).click();

    cy.get(tabs.passwordChangeTabClick).click();
    passwordChange(currentPassword, newPassword)
    logout();
}
