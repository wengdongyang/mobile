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
onLaunch(() => {
  console.info('App Hide');
});
</script>

<style>
/*每个页面公共css */
</style>
