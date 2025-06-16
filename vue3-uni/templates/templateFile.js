const lodash = require('lodash');
// apis
// hooks
// utils
// stores
// mixins
// configs
// components
const { upperFirst, camelCase } = lodash;
const templateIndexVue = ({ name }) => {
  return `<template>
  <page-view>
  <!-- #ifdef MP-WEIXIN -->
  <!-- 微信小程序 -->
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_SHAO_XING -->
  <!-- 微信小程序 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_KE_QIAO -->
  <!-- 微信小程序 && 柯桥环境 -->
  <!-- #endif -->

  <!-- #ifdef H5 -->
  <!-- 浙政钉H5 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉H5 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉H5 && 柯桥环境 -->
  <!-- #endif -->

  <!-- 默认页面 -->
  </page-view>
</template>
<script lang="jsx" name="${name}" setup>
// apis
// hooks
// utils
// stores
// configs
// components
import { PageView } from '@src/components';
// 默认页面
// import ${upperFirst(camelCase(`render-${name}-default`))} from './render-${name}-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
// import ${upperFirst(camelCase(`render-${name}-weixin`))} from './render-${name}-weixin.vue';
// #endif
// #ifdef MP-WEIXIN && IS_SHAO_XING
// 专属页面 - 微信小程序 - 绍兴环境
// import ${upperFirst(camelCase(`render-${name}-weixin-shao-xing`))} from './render-${name}-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// 专属页面 - 微信小程序 - 柯桥环境
// import ${upperFirst(camelCase(`render-${name}-weixin-ke-qiao`))} from './render-${name}-weixin-ke-qiao.vue';
// #endif
// #ifdef H5
// 默认页面 - 浙政钉H5
// import ${upperFirst(camelCase(`render-${name}-dingding`))} from './render-${name}-dingding.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
// 专属页面 - 浙政钉H5 - 绍兴环境
// import ${upperFirst(camelCase(`render-${name}-dingding-shao-xing`))} from './render-${name}-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
// 专属页面 - 浙政钉H5 - 柯桥环境
// import ${upperFirst(camelCase(`render-${name}-dingding-ke-qiao`))} from './render-${name}-dingding-ke-qiao.vue';
// #endif
</script>
`;
};
const templateClientComponentVue = ({ pagePath, name }) => {
  return `<template>
  <view class="${name}-layout"> ${name} </view>
</template>
<script lang="jsx" name="${name}" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { computed, ref, watch, useTemplateRef } from 'vue';
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
@use './${name}.scss';
</style>`;
};

const templateScss = ({ path }) => {
  return `@import '@src/styles/mixins.scss';
$page-path: '@${path}';
// 图片demo
// @include background-image($page-path, 'assets/images/yk_banner.png');`;
};

module.exports = { templateIndexVue, templateClientComponentVue, templateScss };
