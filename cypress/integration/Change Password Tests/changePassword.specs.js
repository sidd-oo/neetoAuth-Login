 /// <reference types="cypress" />

 import { passwordTab } from  '../../utils/changePasswordTab';
 import { passwordChange } from '../../utils/passwordChange';
 import { resetPassword } from '../../utils/resetPassword';
 import { logout } from '../../utils/logoutSelector';

describe("NeetoAuth change password functionality", () => {
  let userDetails

  beforeEach(() => {
    cy.fixture("credentials").then( user => {
      userDetails = user;
    })
  });
    
  it("Changing current password and trying to valid it can't login anymore with old password",() => {
      passwordTab();
      passwordChange(userDetails.old.password, userDetails.new.password);
      cy.visit('https://spinkart.neetoauth.net')
      cy.login(userDetails.correct.email,userDetails.correct.password); 
      cy.get('[data-cy=toastr-message-container]').should('have.text','Something went wrong.');     
      resetPassword(userDetails.new.password, userDetails.old.password);   
  });

  it("Changing current password and trying to valid that it can only login with new current password",() => {
      passwordTab();
      passwordChange(userDetails.old.password, userDetails.new.password);
      cy.visit('https://spinkart.neetoauth.net')
      cy.login(userDetails.old.email,userDetails.new.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout();
      resetPassword(userDetails.new.password, userDetails.old.password); 
  });

  it("Reset the password and verify",() => {
      passwordTab();
      passwordChange(userDetails.old.password, userDetails.new.password);
      resetPassword(userDetails.new.password, userDetails.old.password); 
      cy.visit('https://spinkart.neetoauth.net')
      cy.login(userDetails.old.email,userDetails.old.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout(); 
  });

});
