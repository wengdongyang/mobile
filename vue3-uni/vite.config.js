/** @format */
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import uni from '@dcloudio/vite-plugin-uni';
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), vueJsx()],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // '/town': { target: 'http://192.168.10.34:10021', changeOrigin: true },
      '/town': { target: 'https://wj.ikeqiao.net', changeOrigin: true },
      // '/town': { target: 'https://town.ikeqiao.net', changeOrigin: true },
    },
  },
});
