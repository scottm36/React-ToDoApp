import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "fqoeb2",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
