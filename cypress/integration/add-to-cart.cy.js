describe("Add to Cart Test", () => {

    // clean state
    beforeEach(()=>{
     //  cy.clearLocalStorage();
     //  cy.clearCookies();
       cy.visit('displate/4977733', {
           onBeforeLoad: (win) => {
               win.sessionStorage.clear();
           }
       })
    })

    it("Add simple product from Product Page", () => {
        cy.intercept('/lapi/users/cart/items').as('CartState')

        cy.contains('Add to cart').click()

        cy.contains('Cart').should('contain', '1')

        cy.wait('@CartState').its('response.body')
        .then((body)=> {
            expect(body[0].title).to.eq("dragon ball goku vegeta")
        });
    });

    // Jira-XXX - issue reported waiting for fix
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
  });
  