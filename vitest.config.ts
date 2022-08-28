import {defineConfig} from "vitest/config";
import vue from "@vitejs/plugin-vue";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    plugins:[vue()],
    test:{
        coverage: {
            enabled:true
        },
        globals:true
    }
})
