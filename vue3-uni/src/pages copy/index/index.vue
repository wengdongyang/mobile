<template>
  <!-- #ifdef MP-WEIXIN && IS_SHAO_XING -->
  <!-- 微信小程序 && 绍兴环境 -->
  <render-index-weixin-shao-xing />
  <!-- #endif -->
  <!-- #ifdef MP-WEIXIN && IS_KE_QIAO -->
  <!-- 微信小程序 && 柯桥环境 -->
  <render-index-weixin-ke-qiao />
  <!-- #endif -->
  <!-- #ifdef H5 && IS_SHAO_XING -->
  <!-- 浙政钉 && 绍兴环境 -->
  <render-index-dingding-shao-xing />
  <!-- #endif -->
  <!-- #ifdef H5 && IS_KE_QIAO -->
  <!-- 浙政钉 && 柯桥环境 -->
  <render-index-dingding-ke-qiao />
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
import RenderIndexWeixinShaoXing from './render-index-weixin-shao-xing.vue';
// #endif
// #ifdef MP-WEIXIN && IS_KE_QIAO
import RenderIndexWeixinKeQiao from './render-index-weixin-ke-qiao.vue';
// #endif
// #ifdef H5 && IS_SHAO_XING
import RenderIndexDingdingShaoXing from './render-index-dingding-shao-xing.vue';
// #endif
// #ifdef H5 && IS_KE_QIAO
import RenderIndexDingdingKeQiao from './render-index-dingding-ke-qiao.vue';
// #endif
// props
// emits
// refs
// computed
</script>
