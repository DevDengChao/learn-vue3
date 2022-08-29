import HelloWorld from "./HelloWorld.vue"

describe('<HelloWorld />', () => {
    it('renders', () => {
        // see: https://test-utils.vuejs.org/guide/
        cy.mount(HelloWorld);
        let button = cy.get(`[data-testid]`);
        for (let i = 0; i < 3; i++) {
            button.click().should('have.text', `count is ${i + 1}`);
        }
    })
})
