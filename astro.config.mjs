import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-v1--astro-blogks.netlify.app/",
  integrations: [preact()]
});