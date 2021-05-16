export const logout = () => {
    cy.get('[data-cy=profile-settings-logout-button]').click(); 
}