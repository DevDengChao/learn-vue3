import {render} from "@testing-library/vue";
import ElementPlusHelloWorld from "./ElementPlusHelloWorld.vue";

/**
 * @vitest-environment jsdom
 */
test('when click the button, then msg changed', async function () {
    let result = render(ElementPlusHelloWorld);

    let id = 'element-plus-btn';
    for (let i = 0; i < 3; i++) {
        result.getByTestId(id).click();
        result.getByTestId(id).innerText = `count is ${i}`;
    }
});
