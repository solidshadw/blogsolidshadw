import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
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
      name: 'Spectre',
      openGraph: {
        home: {
          title: 'solidshadw',
          description: 'weaponizing my curiosity'
        },
        blog: {
          title: 'Blog',
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
