<template>
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
  <render-index-dingding />
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉 && 柯桥环境 -->
  <!-- #endif -->

  <!-- 默认页面 -->
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// 默认页面
// import RenderIndexDefault from './render-index-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
// import RenderIndexWeixin from './render-index-weixin.vue';
// #endif
// #ifdef MP-WEIXIN && IS_SHAO_XING
// 专属页面 - 微信小程序
// import RenderIndexWeixinShaoXing from './render-index-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// 专属页面 - 微信小程序
// import RenderIndexWeixinKeQiao from './render-index-weixin-ke-qiao.vue';
// #endif
// #ifdef H5
// 默认页面 - 钉钉
import RenderIndexDingding from './render-index-dingding.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
// 专属页面 - 钉钉
// import RenderIndexDingdingShaoXing from './render-index-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
// 专属页面 - 钉钉
// import RenderIndexDingdingKeQiao from './render-index-dingding-ke-qiao.vue';
// #endif
</script>
