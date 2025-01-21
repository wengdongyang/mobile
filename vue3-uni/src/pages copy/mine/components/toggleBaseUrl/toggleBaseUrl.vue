<template>
  <view>999</view>
</template>

<script lang="jsx" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, watch, computed } from 'vue';
// apis
// hooks
// utils
// stores
// configs
// components
// const envVersion = __wxConfig.envVersion;

const envVersion = '';
const actionSheetRef = ref();

const baseUrlList = uni.getStorageSync('BASE_URL_LIST') || [];

const baseUrl = ref(uni.getStorageSync('BASE_URL') || '');
const activeEnvironmentName = computed(() => {
  try {
    const activeItem = baseUrlList.find(el => el.url === baseUrl.value);
    return activeItem.label;
  } catch (error) {
    return '';
  }
});
const onClickToggleEnvironment = () => {
  try {
    console.error(actionSheetRef);
    actionSheetRef.value?.open();
  } catch (error) {
    console.warn(error);
  }
};
</script>
<style lang="scss" scoped></style>
