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
function example() {
  console.log('原始格式');
  const obj = { a: 1, b: 2 };
  return obj;
}

onLaunch(() => {
  console.info('App Launch');
  console.info('App Launch');
  initEnv();
});
onShow(() => {
  console.info('App Show');

  console.info('App Show2');

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
