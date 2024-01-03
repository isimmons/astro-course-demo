import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentry({
      dsn: "https://920f25fcf2b10d5a9514fac38287ab10@o1078821.ingest.sentry.io/4506504598192128",
      sourceMapsUploadOptions: {
        project: "astro-course-demo",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),

    tailwind(),
    icon(),
    svelte(),
  ],
  site: "https://rhythm.nation",
});
