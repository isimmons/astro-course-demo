import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [sentry(), spotlightjs()]
});