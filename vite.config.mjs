import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        html: 'index.html'
      },
    },
  },
  server: {
    open: './'
  },
  plugins: [eslintPlugin()],
});
