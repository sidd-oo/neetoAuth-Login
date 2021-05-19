export const profileTab = (email, password)=>{
    cy.visit('/');
    cy.login(email, password);

    cy.get('.bp3-popover-target > .relative').click();
    cy.get('[data-cy="nav-profile-link"]').click();
}