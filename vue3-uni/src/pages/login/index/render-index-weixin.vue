<template>
  <view class="render-index-weixin-layout">
    <wd-card :title="`环境信息`">
      <view class="card-layout">
        <view class="card-header"> 当前是{{ environmentLabel }}环境 </view>
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
      </view>
    </wd-card>
    <wd-card :title="`TOKEN`">
      <view class="card-layout">
        <view class="card-content"> </view>
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
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
import { useStoreGlobal } from '@src/stores';
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
    FingerprintJS.get(components => {
      const values = components.map(component => component.value);
      const deviceId = FingerprintJS.x64hash128(values.join(''), 31);
      console.error(deviceId)
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
