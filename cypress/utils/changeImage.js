import { profileImageUploadSelector } from '../constants/selectors/selector'

export const changeImg = (imgName, message) => {
    cy.get(profileImageUploadSelector.changeImg).attachFile(imgName);
    cy.get(profileImageUploadSelector.toasterMessageContainer).should('have.text', message);
}