<template>
  <view class="render-index-weixin-layout">
    <wd-card>
      <template #title>
        <view class="card-header">
          <view class="title">环境信息</view>
          <view class="extends">当前是{{ environmentLabel }}环境</view>
        </view>
      </template>
      <template #default>
        <view class="card-content">
          <wd-radio-group
            :modelValue="environment"
            shape="dot"
            @change="onChangeEnvironment"
          >
            <wd-radio
              v-for="element in environmentList"
              :key="element.value"
              :value="element.value"
            >
              {{ element.label }}
            </wd-radio>
          </wd-radio-group>
        </view>
      </template>
    </wd-card>
    <wd-card :title="`设备信息`">
      <view class="card-content">
        <!-- <wd-form ref="formRef">
          <wd-cell-group border>
            <wd-input
              label="设备ID"
              label-width="100px"
              placeholder="请输入密码"
              clearable
            />
            <wd-input
              label="SEC"
              label-width="100px"
              placeholder="请输入密码"
              clearable
            />
            <wd-input
              label="TOKEN"
              label-width="100px"
              placeholder="请输入密码"
              clearable
            />
          </wd-cell-group>
        </wd-form> -->
      </view>
    </wd-card>

    <view class="card-footer">
      <wd-button block> 继续 </wd-button>
    </view>
  </view>
</template>
<script lang="jsx" setup>
import { onLoad } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import FingerprintJS from 'fingerprintjs2';
// apis
import { apiGetCableSignSecurity } from '@src/apis';
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
import { useStoreGlobal, useStoreDevice, useStoreUserInfo } from '@src/stores';
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/login/index' },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
const storeGlobal = useStoreGlobal();
const { setEnvironment } = storeGlobal;
const { environment, environmentList, requestBaseUrl } = storeToRefs(storeGlobal);

const storeDevice = useStoreDevice();
const { setDeviceFingerprint, setDeviceSecurity } = storeDevice;
const { deviceFingerprint, deviceSecurity } = storeToRefs(storeDevice);
const environmentLabel = computed(() => {
  const environmentItem = lodash.find(environmentList.value, { value: environment.value });
  return environmentItem ? environmentItem.label : '';
});
const onChangeEnvironment = event => {
  setEnvironment(event.value);
};
/**
 * 获取设备指纹和
 */
const getDeviceFingerprint = async () => {
  try {
    FingerprintJS.get(async components => {
      const values = components.map(component => component.value);
      const deviceFingerprint = FingerprintJS.x64hash128(values.join(''), 31);
      await setDeviceFingerprint(deviceFingerprint);
      const { code, data } = await apiGetCableSignSecurity();
    });
  } catch (error) {
    console.warn(error);
  }
};
onLoad(options => {
  getDeviceFingerprint();
});
</script>
<style lang="scss" scoped>
@use './render-index-weixin.scss';
</style>
