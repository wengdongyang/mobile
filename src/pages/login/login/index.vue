<template>
  <!-- #ifdef MP-WEIXIN -->
  <RenderLoginWeixin />
  <!-- #endif -->
  <!-- #ifdef H5 -->
  <RenderLoginDingding />
  <!-- #endif -->
</template>
<script lang="jsx" name="loginLogin" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// 默认页面
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
import RenderLoginWeixin from './render-login-weixin.vue';
// #endif
// #ifdef H5
// 默认页面 - 浙政钉H5
import RenderLoginDingding from './render-login-dingding.vue';
// #endif
</script>
