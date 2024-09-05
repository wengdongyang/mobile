<!-- @format -->

<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
// apis
// hooks
// utils
// stores
// configs
// components
onLaunch(() => {
  console.info('App Launch');
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
@import '@climblee/uv-ui/index.scss';
</style>
