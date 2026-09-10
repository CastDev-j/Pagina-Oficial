import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://digitalandia.com',
  integrations: [
    react()
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
