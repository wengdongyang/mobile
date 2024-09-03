<template>
  <view class="home-layout">
    <uv-button type="primary" text="确定"></uv-button>
    <uv-icon name="photo" size="30" color="#909399"></uv-icon>
    <uv-qrcode ref="qrcode" size="300px" value="https://h5.uvui.cn"></uv-qrcode>
    <!-- 街道 -->
    <view class="header-content"></view>
    <!-- 登陆 -->
    <view class="user-content"></view>
    <!-- app -->
    <view class="application-content"></view>
    <!-- news -->
    <view class="news-content"></view>
    <SwitchRegionModal v-if="regionList.length > 0" :ref="ref => (switchRegionModalRef = ref)"
      @selectRegion="onSelectRegion" />
  </view>
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
import SwitchRegionModal from './components/switchRegionModal/index.vue';
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
    console.error(newValues);
    const [newRegionNo, newRegionList, regionModalRef] = newValues;
    if (newRegionList?.length > 0 && !newRegionNo && regionModalRef) {
      regionModalRef.openSwitchRegionModal();
    }
  },
  { deep: true },
);
</script>
<style lang="scss" scoped>
@import './home.scss';
</style>
