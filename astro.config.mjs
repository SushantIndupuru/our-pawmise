// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ourpawmise.org',
  vite: {
      preview: {
          allowedHosts: ['localhost'],
      }
  },

  output: "static",
  integrations: [sitemap()]
});