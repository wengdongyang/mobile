<template>
  <view class="home-layout"> mine </view>
</template>

<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, watch } from 'vue';
// apis
import { apiGetApplicationList } from '@src/apis';
// hooks
// utils
// stores
import { useRegionList } from '@src/stores';
// configs
// components
const { regionList, regionNo } = useRegionList();

const applicationList = ref([]);

const switchRegionModalRef = ref();

const getApplicationList = async () => {
  try {
    const { code, data, msg } = await apiGetApplicationList();
    if (code === 200) {
      applicationList.value = data.length > 0 ? data : [];
    } else {
      uni.showToast({ icon: 'none', title: msg });
    }
  } catch (error) {
    console.warn(error);
  }
};

const onSelectRegion = async regionCode => {
  try {
    await getApplicationList();
  } catch (error) {
    console.warn(error);
  }
};

onLoad(option => {
  if (option.auth) {
    uni.setStorageSync('token', option.auth);
  }
  if (option.appId) {
    uni.setStorageSync('appId', option.appId);
  }
});
onShow(async () => {
  await getApplicationList();
});
watch(
  [() => regionNo, () => regionList, () => switchRegionModalRef.value],
  newValues => {
    const [newRegionNo, newRegionList, regionModalRef] = newValues;
    if (newRegionList?.length > 0 && !newRegionNo && regionModalRef) {
      regionModalRef.openSwitchRegionModal();
    }
  },
  { immediate: true, deep: true },
);
</script>
<style lang="scss" scoped>
@import './mine.scss';
</style>
