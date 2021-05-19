 /// <reference types="cypress" />

 import { emailTab } from '../../utils/changeEmailTab' 
 import { logout } from '../../utils/logoutSelector'
 import { emailChange } from '../../utils/emailChange'
 import { resetEmail } from '../../utils/resetEmail'

 describe("NeetoAuth Email Change Functionality", () => {
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

  it("Change email and verify that the old email can't be used for login", () => {
      emailTab(validUser.email, validUser.password);
      emailChange(invalidUser.email, validUser.password);

      cy.login(validUser.email,validUser.password);
      cy.msgPrompt('Something went wrong.');
      
      resetEmail(invalidUser.email, validUser.email, validUser.password);  
  });

  it("Change email and verify that only current email can be used for login", () => {
      emailTab(validUser.email, validUser.password);
      emailChange(invalidUser.email, validUser.password);

      cy.login(invalidUser.email,validUser.password);
      cy.loginSuccessAssert();
      logout();

      resetEmail(invalidUser.email, validUser.email, validUser.password);  
  });

  it("Reset the old email and verfify",() => {
      emailTab(validUser.email, validUser.password);
      emailChange(invalidUser.email, validUser.password);

      resetEmail(invalidUser.email, validUser.email, validUser.password);  

      cy.visit('/');
      cy.login(validUser.email,validUser.password);
      cy.loginSuccessAssert();
      logout();
  });
});