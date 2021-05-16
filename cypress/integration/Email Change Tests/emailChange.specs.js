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
    })
   })
  it("Change email and verify that the old email can't be used for login", () => {
      emailTab();
      emailChange(userDetails.new.email, userDetails.old.password);

      cy.login(userDetails.correct.email,userDetails.correct.password);
      cy.get('[data-cy=toastr-message-container]').should('have.text','Something went wrong.');

      resetEmail(userDetails.new.email,userDetails.old.password);  
  });

  it("Change email and verify that only current email can be used for login", () => {
      emailTab();
      emailChange(userDetails.new.email, userDetails.old.password);

      cy.login(userDetails.new.email,userDetails.correct.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout();

      resetEmail(userDetails.new.email,userDetails.old.password);
  });

  it("Reset the old email and verfify",() => {
      emailTab();
      emailChange(userDetails.new.email, userDetails.old.password);

      resetEmail(userDetails.new.email,userDetails.old.password);

      cy.visit('https://spinkart.neetoauth.net')
      cy.login(userDetails.old.email,userDetails.old.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout();
  })
});