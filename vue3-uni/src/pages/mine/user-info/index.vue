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
  <render-user-info-default />
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// 默认页面
import RenderUserInfoDefault from './render-user-info-default.vue';
// #ifdef MP-WEIXIN
// 默认页面 - 微信小程序
// import RenderUserInfoWeixin from './render-user-info-weixin.vue';
// #endif
// #ifdef MP-WEIXIN && IS_SHAO_XING
// 专属页面 - 微信小程序
// import RenderUserInfoWeixinShaoXing from './render-user-info-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
// 专属页面 - 微信小程序
// import RenderUserInfoWeixinKeQiao from './render-user-info-weixin-ke-qiao.vue';
// #endif
// #ifdef H5
// 默认页面 - 钉钉
// import RenderUserInfoDingding from './render-user-info-dingding.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
// 专属页面 - 钉钉
// import RenderUserInfoDingdingShaoXing from './render-user-info-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
// 专属页面 - 钉钉
// import RenderUserInfoDingdingKeQiao from './render-user-info-dingding-ke-qiao.vue';
// #endif
</script>
