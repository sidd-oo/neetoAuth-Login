import { tabs } from '../constants/selectors/selector'

export const logout = () => {
    cy.get(tabs.logout).click(); 
}