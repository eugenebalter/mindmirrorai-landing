// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
