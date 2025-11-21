import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';  // <-- THIS WAS MISSING

export default defineConfig({
  site: 'https://subbuandco.com', // Your actual domain
  base: '/', // Change from '/subbu-and-co/' to '/'
  integrations: [sitemap()],

});
