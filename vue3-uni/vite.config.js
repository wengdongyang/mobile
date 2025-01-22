import uni from '@dcloudio/vite-plugin-uni';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then(i => i.default);
  return {
    plugins: [uni(), UnoCss(), vueJsx()],
    css: {},
    resolve: {
      alias: {
        '@src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 5173,
      proxy: {
        '/sxSafetyProductionApi-test': { target: 'https://zsjc.ikeqiao.net:8888', changeOrigin: true },
      },
    },
  };
});
