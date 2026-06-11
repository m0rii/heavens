import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.heavens.am',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/contact/success/') && !page.endsWith('/style-guide/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
