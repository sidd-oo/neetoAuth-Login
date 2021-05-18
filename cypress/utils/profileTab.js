export const profileTab = ()=>{
     cy.visit('/');
     cy.fixture("credentials").then((user) => {
        cy.login(user.default.email,user.default.password);
      });
      cy.get('.bp3-popover-target > .relative').click();
      cy.get('[data-cy="nav-profile-link"]').click();
}