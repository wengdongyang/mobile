<template>
  <!-- #ifdef MP-WEIXIN && IS_SHAO_XING -->
  <!-- 微信小程序 && 绍兴环境 -->
  <RenderWeixinShaoXing />
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_KE_QIAO -->
  <!-- 微信小程序 && 柯桥环境 -->
  <RenderWeixinKeQiao />
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉 && 绍兴环境 -->
  <RenderDingdingShaoXing />
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉 && 柯桥环境 -->
  <RenderDingdingKeQiao />
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
import RenderWeixinShaoXing from './render-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
import RenderWeixinKeQiao from './render-weixin-ke-qiao.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
import RenderDingdingShaoXing from './render-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
import RenderDingdingKeQiao from './render-dingding-ke-qiao.vue';
// #endif
</script>
