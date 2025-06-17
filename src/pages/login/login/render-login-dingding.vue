<template>
  <view class="render-login-dingding-layout"> render-login-dingding </view>
</template>
<script lang="jsx" name="render-login-dingding" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';
// apis
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/login/login' },
});
// emits
const emit = defineEmits([]);
// exposes
defineExpose({});
// refs
// computed
// hooks use
const { getImageUrl } = useImage();
const pageOptions = ref({}); // url 参数
onLoad(options => {
  pageOptions.value = options;
  console.log('onLoad');
});
onShow(() => {
  console.log('onShow');
});
</script>
<style lang="scss" scoped>
@use './render-login-dingding.scss';
</style>
