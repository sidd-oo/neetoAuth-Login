import { common } from '../constants/selectors/common'

export const logout = () => {
    cy.get(common.logout).click(); 
}