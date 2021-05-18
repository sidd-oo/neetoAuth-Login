 /// <reference types="cypress" />
 
 describe("NeetoAuth Login Test", () => {
   let userDetails;
   
   beforeEach(() => {
     cy.visit('/')
     cy.fixture("credentials").then( user => {
       userDetails = user;
     })
  });
    
  it("Login test with correct email and correct password", () => {
      cy.login(userDetails.default.email,userDetails.default.password);
  });

  it("Login test with correct email and wrong password", () => {
      cy.login(userDetails.default.email,"WrongPass");
      cy.msgPrompt('Something went wrong.');
  });

  it("Login test with wrong email", () => {
      cy.login("wrongEmail@gmail.com",userDetails.default.password);
      cy.msgPrompt('Something went wrong.');
  });

  it("Login test with wrong email and wrong password", () => {
      cy.login("wrongEmail@gmail.com","wrongPass");
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
          expect(loc.toString()).to.eq('https://spinkart.neetoauth.net/login')
      });

    });

    it("Login test with empty email field and filled password field", () => {
      cy.get('[data-cy="login-email-text-field"]').and(($input) => {
            expect($input).to.have.value('')
      });
      cy.get('[data-cy="login-password-text-field"]').type(userDetails.default.password);

      cy.location().should((loc) => {
          expect(loc.toString()).to.eq('https://spinkart.neetoauth.net/login')
      });
    });

    it("Login test with filled email field and empty password field", () => {
      cy.get('[data-cy="login-email-text-field"]').type(userDetails.default.email);
      cy.get('[data-cy="login-password-text-field"]').and(($input) => {
            expect($input).to.have.value('')
      });

      cy.location().should(loc => {
          expect(loc.toString()).to.eq('https://spinkart.neetoauth.net/login')
      });
    });
});