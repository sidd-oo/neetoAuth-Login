import { common } from '../constants/selectors/common'
import { loginSelectors } from '../constants/selectors/login'

export const profileTab = (email, password)=>{
    cy.visit('/');
    cy.login(email, password);

    cy.get(loginSelectors.profileIcon).click();
    cy.get(common.profileTabClick).click();
}