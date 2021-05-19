 /// <reference types="cypress" />

import { profileTab } from '../../utils/profileTab'

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
      cy.uploadImg('lessThan5MB.jpg','Profile image successfully updated!');
  });

  it("Uploading image more than 5MB", () => {
    profileTab(validUser.email, validUser.password);
      cy.uploadImg('moreThan5MB.jpg','Something went wrong.');
  });

  it("Uploading unallowed file type (.pdf)", () => {
    profileTab(validUser.email, validUser.password);
      cy.uploadImg('wrongFileFormat.pdf','Something went wrong.');
  });

  it("Uploading new image of allowed file type using change functionality",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg','Profile image successfully updated!');
    cy.changeImg('anotherLessThan5MB.jpg','Profile image successfully updated!');
  });
  
  it("Uploading new image more than 5MB using change functionality",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg','Profile image successfully updated!');  
    cy.changeImg('anotherMoreThan5MB.jpg','Something went wrong.');
    //This test case is failing, there should be warning message like "Something went wrong" because we are uploading image of unallowed size.
  });

  it("Uploading unallowed file type (.pdf) using change functionality",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg','Profile image successfully updated!');  
    cy.uploadImg('wrongFileFormat.pdf','Something went wrong.');
    //This test case is failing, there should be warning message like "Something went wrong" because we are uploading a file of unallowed type (.pdf)
  });

  it("Removing the image",() => {
    profileTab(validUser.email, validUser.password);
    cy.uploadImg('lessThan5MB.jpg','Profile image successfully updated!');
    cy.get('[data-cy=profile-image-remove-button]').click();
    cy.contains('Profile image successfully removed!').should('be.visible');
  });

  it("Updating first name, Change Country, Select timezone, Change date format",() => {
    profileTab(validUser.email, validUser.password);
    cy.get('[data-cy=profile-first-name-text-field]').clear().type("Oliver")
    cy.get('[data-cy=select-country-select-container-wrapper]').type('Canada');
    cy.get('[data-cy=select-time-zone-select-container-wrapper]').type('America/Dawson-UTC-07.00');
    cy.get(':nth-child(2) > [data-cy=profile-date-format-select]').click();
    cy.get('[data-cy=profile-submit-button]').click();
    cy.get('[data-cy=toastr-message-container]').should('have.text',"Profile successfully updated!");  
  });

});