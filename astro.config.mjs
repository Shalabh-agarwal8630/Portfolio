import { defineConfig } from 'astro/config';

// Astro configuration
export default defineConfig({
  // Other configuration options...
  vite: {
    ssr: {
      noExternal: ['sharp'],
    },
  },
});
