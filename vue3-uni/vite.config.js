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
    proxy: {
      '/town': { target: 'http://10.2.0.215:8060', changeOrigin: true },
    },
  },
});
