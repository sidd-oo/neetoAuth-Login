import { emailChange } from '../utils/emailChange'
import { loginSelectors, tabs } from '../constants/selectors/selector'

export const resetEmail = (email, newEmail, currentPassword) => {
    cy.visit('/')
    cy.login(email,currentPassword);

    cy.get(loginSelectors.profileIcon).click();
    cy.get(tabs.profileTabClick).click();
    
    cy.get(tabs.emailChangeTabClick).click();
    emailChange(newEmail, currentPassword);
}    
