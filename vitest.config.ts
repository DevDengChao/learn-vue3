import {defineConfig} from "vitest/config";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    test:{
        coverage: {
            enabled:true
        },
        globals:true
    }
})
