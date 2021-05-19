 /// <reference types="cypress" />
 
 describe("NeetoAuth Login Test", () => {
   let validUser;
   let invalidUser;
   let path = "https://spinkart.neetoauth.net/login";
   
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
      cy.msgPrompt('Something went wrong.');
  });

  it("Login test with wrong email and wrong password", () => {
      cy.login(invalidUser.email,invalidUser.password);
      cy.msgPrompt('Something went wrong.');
  });

  it("Login test with empty email field and empty password field", () => {
      cy.get('[data-cy="login-email-text-field"]').and(($input) => {
            expect($input).to.have.value('')
      });
      cy.get('[data-cy="login-password-text-field"]').and(($input) => {
            expect($input).to.have.value('')
      });

      cy.location().should(loc => {
          expect(loc.toString()).to.eq(path)
      });

    });

    it("Login test with empty email field and filled password field", () => {
      cy.get('[data-cy="login-email-text-field"]').and(($input) => {
            expect($input).to.have.value('')
      });
      cy.get('[data-cy="login-password-text-field"]').type(validUser.password);

      cy.location().should((loc) => {
          expect(loc.toString()).to.eq(path)
      });
    });

    it("Login test with filled email field and empty password field", () => {
      cy.get('[data-cy="login-email-text-field"]').type(validUser.email);
      cy.get('[data-cy="login-password-text-field"]').and(($input) => {
            expect($input).to.have.value('')
      });

      cy.location().should(loc => {
          expect(loc.toString()).to.eq(path)
      });
    });
});