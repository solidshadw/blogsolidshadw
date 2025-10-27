import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
  site: 'https://blog.solidshadw1.workers.dev',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'solidshadw',
      openGraph: {
        home: {
          title: 'solidshadw',
          description: 'weaponizing my curiosity'
        },
        posts: {
          title: 'Posts',
          description: 'Jotting down my thoughts'
        },
        projects: {
          title: 'Projects'
        }
      },
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});

export default config;
