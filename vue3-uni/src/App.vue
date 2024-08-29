<!-- @format -->

<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
// apis
// hooks
// utils
// stores
import { useRegionList } from '@src/stores';
// configs
// components
const { getRegionList } = useRegionList();
onLaunch(() => {
  console.info('App Launch');
});
onShow(() => {
  console.info('App Show');
  getRegionList();
});
onHide(() => {
  console.info('App Hide');
});
</script>

<style lang="scss">
/*每个页面公共css */
</style>
