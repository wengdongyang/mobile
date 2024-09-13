import 'uno.css';

import { createSSRApp } from 'vue';
import * as Pinia from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
export const createApp = () => {
  const app = createSSRApp(App);
  const pinia = Pinia.createPinia();
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
  return { app, Pinia };
};
