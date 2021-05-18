 /// <reference types="cypress" />

 import { passwordTab } from  '../../utils/changePasswordTab';
 import { passwordChange } from '../../utils/passwordChange';
 import { resetPassword } from '../../utils/resetPassword';
 import { logout } from '../../utils/logoutSelector';

describe("NeetoAuth change password functionality", () => {
  let userDetails;

  beforeEach(() => {
    cy.fixture("credentials").then( user => {
      userDetails = user;
    })
  });
    
  it("Changing current password and trying to valid it can't login anymore with old password",() => {
      passwordTab();
      passwordChange(userDetails.userTwo.password, userDetails.userOne.password);
      cy.visit('/')
      cy.login(userDetails.default.email,userDetails.default.password); 
      cy.get('[data-cy=toastr-message-container]').should('have.text','Something went wrong.');     
      resetPassword(userDetails.userOne.password, userDetails.userTwo.password);   
  });

  it("Changing current password and trying to valid that it can only login with new current password",() => {
      passwordTab();
      passwordChange(userDetails.userTwo.password, userDetails.userOne.password);
      cy.visit('/')
      cy.login(userDetails.userTwo.email,userDetails.userOne.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout();
      resetPassword(userDetails.userOne.password, userDetails.userTwo.password); 
  });

  it("Reset the password and verify",() => {
      passwordTab();
      passwordChange(userDetails.userTwo.password, userDetails.userOne.password);
      resetPassword(userDetails.userOne.password, userDetails.userTwo.password); 
      cy.visit('/')
      cy.login(userDetails.userTwo.email,userDetails.userTwo.password);
      cy.get('[data-cy=heading]').should('have.text',"Profile Settings");
      logout(); 
  });

});
