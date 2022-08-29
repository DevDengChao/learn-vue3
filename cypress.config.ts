import { defineConfig } from "cypress";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
