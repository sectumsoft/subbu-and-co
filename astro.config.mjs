import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://subbuandco.com/',   // <-- IMPORTANT
  base: '/',                         // root domain
  trailingSlash: 'always',           // GitHub Pages fix
  outDir: './dist',                  // default
});
