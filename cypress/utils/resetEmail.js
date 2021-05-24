import { emailChange } from '../utils/emailChange'
import { loginSelectors } from '../constants/selectors/login'
import { common } from '../constants/selectors/common'

export const resetEmail = (email, newEmail, currentPassword) => {
    cy.visit('/')
    cy.login(email,currentPassword);

    cy.get(loginSelectors.profileIcon).click();
    cy.get(common.profileTabClick).click();
    
    cy.get(common.emailChangeTabClick).click();
    emailChange(newEmail, currentPassword);
}    
