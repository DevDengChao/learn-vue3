import {defineConfig} from "cypress";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },
    e2e: {
        baseUrl: "http://localhost:4173",
    }
});
