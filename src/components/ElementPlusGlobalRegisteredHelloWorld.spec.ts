import {render} from "@testing-library/vue";
import ElementPlusGlobalRegisteredHelloWorld from "./ElementPlusGlobalRegisteredHelloWorld.vue";
import ElementPlus from "element-plus";

/**
 * @vitest-environment jsdom
 */
test('when click the button, then msg changed', async function () {
    let result = render(ElementPlusGlobalRegisteredHelloWorld, {
        global: {
            plugins: [
                ElementPlus
            ]
        }
    });

    let id = 'element-plus-global-btn';
    for (let i = 0; i < 3; i++) {
        result.getByTestId(id).click();
        result.getByTestId(id).innerText = `count is ${i}`;
    }
});
