 /// <reference types="cypress" />

 import { emailTab } from '../../utils/changeEmailTab' 
 import { logout } from '../../utils/logoutSelector'
 import { emailChange } from '../../utils/emailChange'
 import { resetEmail } from '../../utils/resetEmail'

 describe("NeetoAuth Email Change Functionality", () => {
   let userDetails;
   beforeEach(() => {
      cy.fixture("credentials").then((user)=>{
        userDetails = user;
    });
   });
  it("Change email and verify that the old email can't be used for login", () => {
      emailTab();
      emailChange(userDetails.userOne.email, userDetails.userTwo.password);

      cy.login(userDetails.default.email,userDetails.default.password);
      cy.get('[data-cy=toastr-message-container]').should('have.text','Something went wrong.');

      resetEmail(userDetails.userOne.email,userDetails.userTwo.password);  
  });

  it("Change email and verify that only current email can be used for login", () => {
      emailTab();
      emailChange(userDetails.userOne.email, userDetails.userTwo.password);

      cy.login(userDetails.userOne.email,userDetails.default.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout();

      resetEmail(userDetails.userOne.email,userDetails.userTwo.password);
  });

  it("Reset the old email and verfify",() => {
      emailTab();
      emailChange(userDetails.userOne.email, userDetails.userTwo.password);

      resetEmail(userDetails.userOne.email,userDetails.userTwo.password);

      cy.visit('https://spinkart.neetoauth.net')
      cy.login(userDetails.userTwo.email,userDetails.userTwo.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout();
  });
});