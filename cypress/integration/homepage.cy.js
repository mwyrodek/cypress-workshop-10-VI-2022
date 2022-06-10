/// <reference types="Cypress" />
describe("Homapage navigation", { tags: ["@Homepage", "@Critcical"]}, () => {
    it("Go to product page via feed", () => {
        cy.visit('');
        
        cy.get('.displate-tile__image-wrapper').first().should('be.visible').click();

        cy.url().should('include','/displate/')
    });


    // Jira-XXX - issue reported waiting for fix
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
});
