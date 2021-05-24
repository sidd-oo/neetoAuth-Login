import { tabs, loginSelectors } from '../constants/selectors/selector'

export const profileTab = (email, password)=>{
    cy.visit('/');
    cy.login(email, password);

    cy.get(loginSelectors.profileIcon).click();
    cy.get(tabs.profileTabClick).click();
}