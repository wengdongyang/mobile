import uni from '@dcloudio/vite-plugin-uni';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import * as path from 'path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
// import { viteVConsole } from 'vite-plugin-vconsole';
// import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';
import removeOthersConsole from 'vite-plugin-rm-others-console';
export default defineConfig(async ({ command, mode, isSsrBuild, isPreview }) => {
  const UnoCss = await import('unocss/vite').then(i => i.default);
  return {
    plugins: [
      uni(),
      // qrcode(),
      UnoCss(),
      vueJsx(),
      removeConsole(),// 生产环境移除console
      removeOthersConsole(),// 移除其他包的console
      // viteVConsole({
      //   entry: path.resolve('src/main.js'),
      //   enabled: mode !== 'production',
      // }),
    ],
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
