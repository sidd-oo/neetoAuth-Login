export const passwordTab = () => {
     cy.visit('/')
     cy.fixture("credentials").then((user) => {
        cy.login(user.correct.email,user.correct.password);
      })

      cy.get('.bp3-popover-target > .relative').click();
      cy.get('[data-cy="nav-profile-link"]').click();

      cy.get('[data-cy=profile-settings-change-password-tab]').click();
}
