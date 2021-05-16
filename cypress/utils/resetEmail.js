import { emailChange } from '../utils/emailChange'

export const resetEmail = (newEmail, currentPassword) => {
    cy.visit('https://spinkart.neetoauth.net')
    cy.fixture("credentials").then((user) => {
        cy.login(newEmail,currentPassword);
    })
    cy.get('.bp3-popover-target > .relative').click();
    cy.get('[data-cy="nav-profile-link"]').click();
    
    cy.get('[data-cy=profile-settings-change-email-tab]').click();
    
    cy.fixture("credentials").then((user)=>{
        emailChange(user.old.email,user.old.password)
    })
}    
