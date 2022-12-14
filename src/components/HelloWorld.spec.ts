import {render} from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";

/**
 * @vitest-environment jsdom
 */
test('when click the button, then msg changed', async function () {
    let result = render(HelloWorld);

    let id = 'btn';
    for (let i = 0; i < 3; i++) {
        result.getByTestId(id).click();
        result.getByTestId(id).innerText = `count is ${i}`;
    }
});
