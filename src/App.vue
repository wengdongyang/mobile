<!-- @format -->

<script lang="jsx" setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
// apis
// hooks
import { useEnv } from '@src/hooks';
// utils
// stores
// configs
// components
const { initEnv } = useEnv();
// 未格式化的 JS

onLaunch(() => {
  console.info('App Launch');
  initEnv();
});
onShow(() => {
  console.info('App Show');
});
onHide(() => {
  console.info('App Hide');
});
</script>

<style lang="scss">
/*每个页面公共css */
page {
  background-color: #f1f1f1;
  height: 100%;
}
</style>
