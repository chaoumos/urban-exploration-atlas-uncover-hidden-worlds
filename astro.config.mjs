import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://urban-exploration-atlas-uncover-hidden-worlds.example.com'
});