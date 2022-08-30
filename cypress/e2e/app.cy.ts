describe('when visiting /', function () {
    let page: Cypress.Chainable<Cypress.AUTWindow>;

    beforeEach(() => {
        page = cy.visit('/');
    })

    it("then there is an h1 contains 'Vite + Vue'", () => {
        page.contains("h1", "Vite + Vue");
    })

    it("and clicking buttons, then button inner text changed", () => {
        page.find("[data-testid='btn']").click().should('have.text', 'count is 1');
        page.find("[data-testid='element-plus-btn']").click().should('have.text', 'count is 1');
        page.find("[data-testid='element-plus-global-btn']").click().should('have.text', 'count is 1');
    })
});
