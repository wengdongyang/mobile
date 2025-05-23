<template>
  <!-- #ifdef MP-WEIXIN -->
  <RenderIndexWeixin />
  <!-- #endif -->

  <!-- #ifdef H5 -->
  <RenderIndexDefault />
  <!-- #endif -->
</template>
<script lang="jsx" name="loginIndex" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// 默认页面
import RenderIndexDefault from './render-index-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
import RenderIndexWeixin from './render-index-weixin.vue';
// #endif
</script>
