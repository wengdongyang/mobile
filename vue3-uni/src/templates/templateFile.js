// apis
// hooks
// utils
// stores
// mixins
// configs
// components
const templateIndexVue = () => {
  return `<template>
  <!-- #ifdef MP-WEIXIN && IS_SHAO_XING -->
  <!-- 微信小程序 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_KE_QIAO -->
  <!-- 微信小程序 && 柯桥环境 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉 && 柯桥环境 -->
  <!-- #endif -->
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// #ifdef MP-WEIXIN && IS_SHAO_XING
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// #endif
// #ifdef H5 && IS_SHAO_XING
// #endif
// #ifdef H5 && IS_KE_QIAO
// #endif
// props
// emits
// refs
// computed
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
<style lang="scss" scoped></style>`;
};
module.exports = { templateIndexVue, templateClientComponentVue };
