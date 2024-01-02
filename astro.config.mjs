import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

const devIntegrations = [sentry(), spotlightjs()];

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), svelte()],
  site: "https://rhythm.nation",
});
