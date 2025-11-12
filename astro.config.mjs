import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || "https://douglasluz.com",
  integrations: [mdx(), sitemap(), tailwind()],
});
