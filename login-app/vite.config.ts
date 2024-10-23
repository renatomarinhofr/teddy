import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'loginApp',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginPage': './src/pages/LoginPage.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3001,
    cors: true,
  },
  build: {
    target: 'esnext',
    assetsDir: '',
    minify: false,
    cssCodeSplit: false,
  },
});
