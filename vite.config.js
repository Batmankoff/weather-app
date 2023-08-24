import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@fonts': path.resolve(__dirname, './src/fonts'),
      '@common': path.resolve(__dirname, './src/common'),
      '@images': path.resolve(__dirname, './src/images'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/common/index.scss";`,
      },
    },
  },
});
