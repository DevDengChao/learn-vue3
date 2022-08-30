describe('empty spec', () => {
    it('passes', () => {
        cy.visit('/')
        cy.contains("h1", "Vite + Vue");
    })
})
