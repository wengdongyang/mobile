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
      <!-- <view class="card-content">
        <wd-form ref="formRef">
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
        </wd-form>
      </view> -->
    </wd-card>

    <view class="card-footer">
      <wd-button
        @click="onClickContinues"
        block
      >
        继续
      </wd-button>
    </view>
  </view>
</template>
<script lang="jsx" setup>
import { onLoad } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { storeToRefs } from 'pinia';
import qs from 'qs';
import { computed, ref } from 'vue';
// apis
// hooks
import { useDevice } from './hooks';
// utils
// stores
import { useStoreDevice, useStoreGlobal, useStoreUserInfo } from '@src/stores';
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/login/index' },
});
// emits
// refs
// computed
const storeGlobal = useStoreGlobal();
const { setEnvironment } = storeGlobal;
const { environment, environmentList, requestBaseUrl } = storeToRefs(storeGlobal);

const storeUserInfo = useStoreUserInfo();
const { setToken } = storeUserInfo;
const { token } = storeToRefs(storeUserInfo);

const storeDevice = useStoreDevice();
const { setDeviceFingerprint, setDeviceSecurity } = storeDevice;
const { deviceFingerprint, deviceSecurity } = storeToRefs(storeDevice);

const { getDeviceFingerprint } = useDevice();

const environmentLabel = computed(() => {
  const environmentItem = lodash.find(environmentList.value, { value: environment.value });
  return environmentItem ? environmentItem.label : '';
});

const pageOptions = ref({}); // url 参数

const onChangeEnvironment = event => {
  setEnvironment(event.value);
  setToken('');
  setDeviceFingerprint('');
  setDeviceSecurity('');
};

const onClickContinues = async () => {
  try {
    await getDeviceFingerprint();
    await toPageLogin();
  } catch (error) {
    console.warn(error);
  }
};
const toPageLogin = () => {
  try {
    if (deviceFingerprint.value && deviceSecurity.value) {
      const paramsString = qs.stringify(pageOptions.value);
      uni.navigateTo({ url: `/pages/login/login/index?${paramsString}` });
    } else {
      uni.showToast({ title: '请先获取设备信息', icon: 'none' });
    }
  } catch (error) {
    console.warn(error);
  }
};
onLoad(options => {
  pageOptions.value = options;
  // // 如果是正式版，不允许切换，直接下一步
  // if (ENV.ENV_VERSION === ENUMS_ENV_VERSION.RELEASE) {
  //   onClickContinues();
  // }
});
</script>
<style lang="scss" scoped>
@use './render-index-default.scss';
</style>
