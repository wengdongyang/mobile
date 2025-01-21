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
  <!-- #ifdef MP-WEIXIN -->
  <!-- 浙政钉 -->
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_SHAO_XING -->
  <!-- 微信小程序 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_KE_QIAO -->
  <!-- 微信小程序 && 柯桥环境 -->
  <!-- #endif -->

  <!-- #ifdef H5 -->
  <!-- 浙政钉 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉 && 柯桥环境 -->
  <!-- #endif -->

  <!-- 默认页面 -->
  <render-${name}-default />
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// 默认页面
import ${upperFirst(camelCase(`render-${name}-default`))} from './render-${name}-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
// import ${upperFirst(camelCase(`render-${name}-weixin`))} from './render-${name}-weixin.vue';
// #endif
// #ifdef MP-WEIXIN && IS_SHAO_XING
// 专属页面 - 微信小程序
// import ${upperFirst(camelCase(`render-${name}-weixin-shao-xing`))} from './render-${name}-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// 专属页面 - 微信小程序
// import ${upperFirst(camelCase(`render-${name}-weixin-ke-qiao`))} from './render-${name}-weixin-ke-qiao.vue';
// #endif
// #ifdef H5
// 默认页面 - 钉钉
// import ${upperFirst(camelCase(`render-${name}-dingding`))} from './render-${name}-dingding.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
// 专属页面 - 钉钉
// import ${upperFirst(camelCase(`render-${name}-dingding-shao-xing`))} from './render-${name}-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
// 专属页面 - 钉钉
// import ${upperFirst(camelCase(`render-${name}-dingding-ke-qiao`))} from './render-${name}-dingding-ke-qiao.vue';
// #endif
</script>
`;
};
const templateClientComponentVue = ({ name }) => {
  return `<template>
  <view class="${name}-layout"> ${name} </view>
</template>
<script lang="jsx" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { computed, ref, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
// components
// props
// emits
// refs
// computed
</script>
<style lang="scss" scoped>
@use './${name}.scss';
</style>`;
};
module.exports = { templateIndexVue, templateClientComponentVue };
