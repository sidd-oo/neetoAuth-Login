import { common } from '../constants/selectors/common'
import { loginSelectors } from '../constants/selectors/login'

export const  emailTab = (email, password) => {
    cy.visit('/')
    cy.login(email, password);
    
    cy.get(loginSelectors.profileIcon).click();
    cy.get(common.profileTabClick).click();

    cy.get(common.emailChangeTabClick).click();
}