/** @format */
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import uni from '@dcloudio/vite-plugin-uni';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: ['@climblee/uv-ui'],
  plugins: [uni(), vueJsx()],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    proxy: {},
  },
});
