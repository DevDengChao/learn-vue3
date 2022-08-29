import ElementPlusHelloWorld from "./ElementPlusHelloWorld.vue"

describe('<ElementPlusHelloWorld />', () => {
    it('renders', () => {
        // see: https://test-utils.vuejs.org/guide/
        cy.mount(ElementPlusHelloWorld);
        let button = cy.get(`[data-testid]`);
        for (let i = 0; i < 3; i++) {
            button.click().should('have.text', `count is ${i + 1}`);
        }
    })
})
