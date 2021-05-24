 /// <reference types="cypress" />
 
 import { loginSelectors } from '../../constants/selectors/selector'
 import { routes } from '../../constants/routes/routes'
 import { texts } from '../../constants/texts/text'

 describe("NeetoAuth Login Test", () => {
   let validUser;
   let invalidUser;
   
   beforeEach(() => {
     cy.visit('/')
     cy.fixture("validUser").then( credentials => {
       validUser = credentials;
     })
     cy.fixture("invalidUser").then( credentials => {
       invalidUser = credentials;
     })
  });
  
  it("Login test with correct email and correct password", () => {
      cy.login(validUser.email,validUser.password);
      cy.loginSuccessAssert();
  });

  it("Login test with correct email and wrong password", () => {
      cy.login(validUser.email,invalidUser.password);
      cy.msgPrompt(texts.errorMessage);
  });

  it("Login test with wrong email and wrong password", () => {
      cy.login(invalidUser.email,invalidUser.password);
      cy.msgPrompt(texts.errorMessage);
  });

  it("Login test with empty email field and empty password field", () => {
      cy.get(loginSelectors.emailField).and(($input) => {
            expect($input).to.have.value('')
      });
      cy.get(loginSelectors.passwordField).and(($input) => {
            expect($input).to.have.value('')
      });

      cy.location().should(loc => {
          expect(loc.toString()).to.eq(routes.path)
      });

    });

    it("Login test with empty email field and filled password field", () => {
      cy.get(loginSelectors.emailField).and(($input) => {
            expect($input).to.have.value('')
      });
      cy.get(loginSelectors.passwordField).type(validUser.password);

      cy.location().should((loc) => {
          expect(loc.toString()).to.eq(routes.path)
      });
    });

    it("Login test with filled email field and empty password field", () => {
      cy.get(loginSelectors.emailField).type(validUser.email);
      cy.get(loginSelectors.passwordField).and(($input) => {
            expect($input).to.have.value('')
      });

      cy.location().should(loc => {
          expect(loc.toString()).to.eq(routes.path)
      });
    });
});