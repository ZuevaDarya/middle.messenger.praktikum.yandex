import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  server: {
    open: './index.html'
  },
  plugins: [eslintPlugin()],
});
