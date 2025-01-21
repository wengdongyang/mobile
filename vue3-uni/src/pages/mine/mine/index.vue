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
  <!-- 浙政钉 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉 && 绍兴环境 -->
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉 && 柯桥环境 -->
  <!-- #endif -->

  <!-- 默认页面 -->
  <render-mine-default />
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// 默认页面
import RenderMineDefault from './render-mine-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
// import RenderMineWeixin from './render-mine-weixin.vue';
// #endif
// #ifdef MP-WEIXIN && IS_SHAO_XING
// 专属页面 - 微信小程序
// import RenderMineWeixinShaoXing from './render-mine-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// 专属页面 - 微信小程序
// import RenderMineWeixinKeQiao from './render-mine-weixin-ke-qiao.vue';
// #endif
// #ifdef H5
// 默认页面 - 钉钉
// import RenderMineDingding from './render-mine-dingding.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
// 专属页面 - 钉钉
// import RenderMineDingdingShaoXing from './render-mine-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
// 专属页面 - 钉钉
// import RenderMineDingdingKeQiao from './render-mine-dingding-ke-qiao.vue';
// #endif
</script>
