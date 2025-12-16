import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://example.com', // ganti dengan domain Anda
  integrations: [tailwind()],
  adapter: vercel(),
  // Static-first approach: Astro akan prerender halaman statis ketika memungkinkan.
});
