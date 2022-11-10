import { defineConfig } from 'cypress';

// don't save videos
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
