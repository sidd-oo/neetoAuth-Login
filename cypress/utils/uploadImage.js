import { profileImageUploadSelector } from '../constants/selectors/selector'

export const uploadImg = (imgName, message) => {
    cy.get(profileImageUploadSelector.uploadImg).attachFile(imgName);
    cy.get(profileImageUploadSelector.toasterMessageContainer).should('have.text', message);
}
