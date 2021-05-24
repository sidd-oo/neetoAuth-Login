 /// <reference types="cypress" />

import { profileTab } from '../../utils/profileTab'
import { profileImageUploadSelector } from '../../constants/selectors/profileSettings'
import { texts } from '../../constants/texts/text'
import { common } from '../../constants/selectors/common';

describe("NeetoAuth Profile Image upload functionality", () => {
  let validUser;
  let invalidUser;
   
  beforeEach(() => {
    cy.fixture("validUser").then( credentials => {
      validUser = credentials;
    })
    cy.fixture("invalidUser").then( credentials => {
      invalidUser = credentials;
    })    
  });     

  it("Uploading image less than 5MB", () => {
    profileTab(validUser.email, validUser.password);
      cy.uploadImg('lessThan5MB.jpg',texts.imageSuccessMessage);
  });

  it("Uploading image more than 5MB", () => {
    profileTab(validUser.email, validUser.password);
      cy.uploadImg('moreThan5MB.jpg', texts.errorMessage);
  });

  it("Uploading unallowed file type (.pdf)", () => {
    profileTab(validUser.email, validUser.password);
      cy.uploadImg('wrongFileFormat.pdf', texts.errorMessage);
  });

  it("Uploading new image of allowed file type using change functionality",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg',texts.imageSuccessMessage);
    cy.changeImg('anotherLessThan5MB.jpg',texts.imageSuccessMessage);
  });
  
  it("Uploading new image more than 5MB using change functionality",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg',texts.imageSuccessMessage);  
    cy.changeImg('anotherMoreThan5MB.jpg', texts.errorMessage);
    //This test case is failing, there should be warning message like "Something went wrong" because we are uploading image of unallowed size.
  });

  it("Uploading unallowed file type (.pdf) using change functionality",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg',texts.imageSuccessMessage);  
    cy.uploadImg('wrongFileFormat.pdf', texts.errorMessage);
    //This test case is failing, there should be warning message like "Something went wrong" because we are uploading a file of unallowed type (.pdf)
  });

  it("Removing the image",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg',texts.imageSuccessMessage);
    cy.get(profileImageUploadSelector.imgRemoveBtn).click();
    cy.contains('Profile image successfully removed!').should('be.visible');
  });

  it("Updating first name, Change Country, Select timezone, Change date format",() => {
    profileTab(validUser.email, validUser.password);
    cy.get(profileImageUploadSelector.firstName).clear().type("Oliver")
    cy.get(profileImageUploadSelector.country).type('Canada');
    cy.get(profileImageUploadSelector.timezone).type('America/Dawson-UTC-07.00');
    cy.get(profileImageUploadSelector.DDMMYY).click();
    cy.get(profileImageUploadSelector.profileSubmit).click();
    cy.get(common.toasterMessageContainer).should('have.text', texts.profileUpdateMessage);  
  });

});