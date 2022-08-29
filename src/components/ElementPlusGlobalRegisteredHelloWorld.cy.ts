import ElementPlusGlobalRegisteredHelloWorld from "./ElementPlusGlobalRegisteredHelloWorld.vue"
import ElementPlus from "element-plus";

describe('<ElementPlusGlobalRegisteredHelloWorld />', () => {
    it('renders', () => {
        // see: https://test-utils.vuejs.org/guide/
        cy.mount(ElementPlusGlobalRegisteredHelloWorld, {global: {plugins: [ElementPlus]}});
        let button = cy.get(`[data-testid]`);
        for (let i = 0; i < 3; i++) {
            button.click().should('have.text', `count is ${i + 1}`);
        }
    })
})
