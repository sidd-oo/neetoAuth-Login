import { common } from '../constants/selectors/common';
import { profileImageUploadSelector } from '../constants/selectors/profileSettings'

export const changeImg = (imgName, message) => {
    cy.get(profileImageUploadSelector.changeImg).attachFile(imgName);
    cy.get(common.toasterMessageContainer).should('have.text', message);
}