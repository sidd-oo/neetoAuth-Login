import { tabs, loginSelectors } from '../constants/selectors/selector'

export const passwordTab = (email, password) => {
    cy.visit('/')
    cy.login(email, password);
    
    cy.get(loginSelectors.profileIcon).click();
    cy.get(tabs.profileTabClick).click();

    cy.get(tabs.passwordChangeTabClick).click();
}
