 /// <reference types="cypress" />

 import { passwordTab } from  '../../utils/changePasswordTab';
 import { passwordChange } from '../../utils/passwordChange';
 import { resetPassword } from '../../utils/resetPassword';
 import { logout } from '../../utils/logoutSelector';
 import { texts } from '../../constants/texts/text';

describe("NeetoAuth change password functionality", () => {
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
    
  it("Changing current password and trying to valid it can't login anymore with old password",() => {
      passwordTab(validUser.email, validUser.password);
      passwordChange(validUser.password, invalidUser.password);
      cy.visit('/')
      cy.login(validUser.email,validUser.password); 
      cy.msgPrompt(texts.wentWrong); 
      resetPassword(validUser.email, invalidUser.password, validUser.password);   
  });

  it("Changing current password and trying to valid that it can only login with new current password",() => {
      passwordTab(validUser.email, validUser.password);
      passwordChange(validUser.password, invalidUser.password);
      cy.visit('/')
      cy.login(validUser.email,invalidUser.password);
      cy.loginSuccessAssert();
      logout();
      resetPassword(validUser.email, invalidUser.password, validUser.password);
  });

  it("Reset the password and verify",() => {
      passwordTab(validUser.email, validUser.password);
      passwordChange(validUser.password, invalidUser.password);
      resetPassword(validUser.email, invalidUser.password, validUser.password);
      cy.visit('/')
      cy.login(validUser.email,validUser.password);
      cy.loginSuccessAssert();
      logout(); 
  });

});
