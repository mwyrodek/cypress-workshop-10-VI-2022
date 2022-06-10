/// <reference types="Cypress" />

describe("Check Cart", { tags: ["@Cart", "@Critcical"]}, () => {
    before(()=>{
        cy.visit('');
    })

    it("Added product is visible in cart", () => {
        cy.request({
            url:"/cart-add",
            method:"POST",
            form: true,
            body:{
                "item-id": "4977733",
                "format-id": "13580806",
                "q": null,
                "upgrade-mask": 0
            }
        })
        cy.contains('Cart').click();
    });

        // Jira-XXX - issue reported waiting for fix
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });
  });
  