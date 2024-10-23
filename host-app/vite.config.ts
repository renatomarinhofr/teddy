import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          loginApp: `${env.VITE_LOGINAPP_URL}/remoteEntry.js`,
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
    },
  };
});
