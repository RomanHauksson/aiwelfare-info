// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon(), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Commissioner",
      cssVariable: "--font-commissioner"
    }]
  }
});