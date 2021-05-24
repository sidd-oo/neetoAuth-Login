import { common } from '../constants/selectors/common';
import { profileImageUploadSelector } from '../constants/selectors/profileSettings'

export const uploadImg = (imgName, message) => {
    cy.get(profileImageUploadSelector.uploadImg).attachFile(imgName);
    cy.get(common.toasterMessageContainer).should('have.text', message);
}
