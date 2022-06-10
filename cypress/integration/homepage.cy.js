/// <reference types="Cypress" />

describe("Homapage navigation", () => {
    it("Go to product page via feed", () => {
        cy.visit('');
        
        cy.get('.displate-tile__image-wrapper').first().should('be.visible').click();

        cy.url().should('include','/displate/')
    });
  });
  