import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'es2022',
    outDir: 'build'
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true
  },
  resolve: {
    alias: {
      application: resolve(__dirname, './src/application'),
      common: resolve(__dirname, './src/common'),
      pages: resolve(__dirname, './src/pages'),
      store: resolve(__dirname, './src/store')
    }
  },
  plugins: [
    svgr(),
    react(),
    createHtmlPlugin({
      template: 'views/index.html',
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
        @import "./src/application/styles/variables.less";
        @import "./src/application/styles/index.less";
        @import "./src/application/styles/fonts.less";
        @import "./src/application/styles/mixins.less";
        `
      }
    }
  }
});
