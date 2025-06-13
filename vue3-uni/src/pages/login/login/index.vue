<template>
  <view>999</view>
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
</template>
<script lang="jsx" name="loginLogin" setup>
// apis
// hooks
// utils
// stores
// configs
import { ENUMS_ENVIRONMENT, ENUMS_ENV_VERSION, ENV } from '@src/configs/index';
// components
// 默认页面
// import RenderLoginDefault from './render-login-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
// import RenderLoginWeixin from './render-login-weixin.vue';
// #endif
// #ifdef MP-WEIXIN && IS_SHAO_XING
// 专属页面 - 微信小程序 - 绍兴环境
// import RenderLoginWeixinShaoXing from './render-login-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// 专属页面 - 微信小程序 - 柯桥环境
// import RenderLoginWeixinKeQiao from './render-login-weixin-ke-qiao.vue';
// #endif
// #ifdef H5
// 默认页面 - 浙政钉H5
// import RenderLoginDingding from './render-login-dingding.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
// 专属页面 - 浙政钉H5 - 绍兴环境
// import RenderLoginDingdingShaoXing from './render-login-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
// 专属页面 - 浙政钉H5 - 柯桥环境
// import RenderLoginDingdingKeQiao from './render-login-dingding-ke-qiao.vue';
// #endif

console.error(ENV, ENUMS_ENV_VERSION, ENUMS_ENVIRONMENT);
</script>
