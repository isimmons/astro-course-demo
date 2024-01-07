import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

const devIntegrations = [spotlightjs()];
const isDev = process.env.NODE_ENV === "development" ? true : false;
const extraIntegrations = isDev ? [...devIntegrations] : [];

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind(),
    icon(),
    svelte({ compilerOptions: { hydratable: true } }),
    sentry({
      dsn: "https://920f25fcf2b10d5a9514fac38287ab10@o1078821.ingest.sentry.io/4506504598192128",
      sourceMapsUploadOptions: {
        org: "tha-deciders",
        project: "astro-course-demo",
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
        telemetry: false,
      },
    }),
    ...extraIntegrations,
  ],
  site: "https://astro-course-demo-six.vercel.app",
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
});
