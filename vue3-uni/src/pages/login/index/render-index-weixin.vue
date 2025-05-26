<template>
  <view class="render-index-weixin-layout">
    <wd-card :title="`当前是${environmentLabel}环境`">
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
            >{{ element.label }}</wd-radio
          >
        </wd-radio-group>
      </view>
      <view class="card-footer"></view>
    </wd-card>
  </view>
</template>
<script lang="jsx" setup>
import { onLoad } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
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
onLoad(options => {});
</script>
<style lang="scss" scoped>
@use './render-index-weixin.scss';
</style>
