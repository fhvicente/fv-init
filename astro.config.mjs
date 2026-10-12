// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    // ponytail: placeholder until the domain is decided (PRD open question)
    site: "https://example.com",
    integrations: [mdx(), sitemap()],
    markdown: {
        shikiConfig: { theme: "vitesse-dark" },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
