import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://subbuandco.com/',
  base: '/',
  trailingSlash: 'always',
  build: {
    assets: '_astro',   // required for correct asset folder
  },
});
