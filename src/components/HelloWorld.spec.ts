import {render} from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";

/**
 * @vitest-environment jsdom
 */
test('when click the button, then msg changed', async function () {
    let result = render(HelloWorld);

    for (let i = 0; i < 3; i++) {
        result.getByTestId('btn').click();
        result.getByTestId('btn').innerText = `count is ${i}`;
    }
});
