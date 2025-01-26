<template>
  <!-- 页面容器 -->
  <view class="page-container">
    <!-- 通知栏 -->
    <view class="notification">
      <view class="notification-content">
        <view class="notification-left">
          <uni-icons
            class="notification-icon"
            type="notification-filled"
            size="20"
            color="#3498db"
          />
          <text class="notification-text">新增安全检查任务提醒</text>
        </view>
      </view>
    </view>
    <!-- 横幅区域 -->
    <view class="banner">
      <view class="banner-content">
        <uni-icons
          class="banner-icon"
          type="sound"
          size="24"
          color="#fff"
        />
        <text class="banner-text">应知应会</text>
        <text class="banner-more">更多</text>
      </view>
      <image
        class="banner-image"
        src="https://ai-public.mastergo.com/ai/img_res/3459fbbfffa41c4a1a6984eef9783a35.jpg"
        mode="aspectFill"
      />
    </view>
    <view class="index-layout-content">
      <!-- 巡查区域 -->
      <render-inspection />
      <!-- 数据统计区域 -->
      <view class="data-section">
        <view class="data-row">
          <view class="data-card warning">
            <view class="data-title">隐患事件</view>
            <view class="data-content">
              <view class="data-item">
                <text class="data-label">待整改</text>
                <text class="data-value">0</text>
              </view>
              <view class="data-item">
                <text class="data-label">进行中</text>
                <text class="data-value">0</text>
              </view>
            </view>
          </view>
          <view class="data-card task">
            <view class="data-title">巡检任务</view>
            <view class="data-content">
              <view class="data-item">
                <text class="data-label">当前任务</text>
                <text class="data-value">0</text>
              </view>
            </view>
          </view>
        </view>
        <view class="data-row">
          <view class="data-card alert">
            <view class="data-title">预警管理</view>
            <view class="data-content">
              <view class="data-item">
                <text class="data-label">预警数</text>
                <text class="data-value">0</text>
              </view>
            </view>
          </view>
          <view class="data-card account">
            <view class="data-title">属地台账</view>
            <view class="data-content">
              <view class="data-item">
                <text class="data-label">未提交</text>
                <text class="data-value">0</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 管理区域 -->
      <view class="manage-section">
        <view
          class="manage-card"
          @click="handleManage"
        >
          <uni-icons
            class="manage-icon"
            type="staff"
            size="24"
            color="#3498db"
          />
          <text class="manage-text">主体管理</text>
          <uni-icons
            class="arrow-icon"
            type="right"
            size="16"
            color="#999"
          />
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="jsx" setup>
// apis
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
// configs
// components
import RenderInspection from './components/render-inspection.vue';
// 处理巡查页面跳转
const handlePatrol = () => {
  console.log('Navigate to patrol page');
};
// 处理管理页面跳转
const handleManage = () => {
  console.log('Navigate to management page');
};
</script>
<style>
/* 页面全局样式 */
page {
  height: 100%;
}
/* 页面容器样式 */
.page-container {
  display: flex;
  flex-direction: column;

  min-height: 100%;

  background-color: #f5f6fa;
}
/* 通知栏样式 */
.notification {
  padding: 20rpx 30rpx;

  background-color: #fff;
}
.notification-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20rpx 30rpx;

  border-radius: 8rpx;
  background-color: #edf3fe;
}
.notification-left {
  display: flex;
  align-items: center;

  gap: 12rpx;
}
.notification-icon {
  width: 20px;
  height: 20px;
}
.notification-text {
  font-size: 14px;

  color: #333;
}
/* 横幅样式 */
.banner {
  position: relative;

  width: 750rpx;
  height: 300rpx;
}
.banner-content {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;

  padding: 20rpx 30rpx;
}
.banner-text {
  font-size: 16px;

  margin-left: 12rpx;

  color: #fff;
}
.banner-more {
  font-size: 14px;

  margin-left: auto;

  color: #fff;
}
.banner-image {
  width: 100%;
  height: 100%;
}
/* 巡查区域样式 */
.patrol-section {
  padding: 20rpx 30rpx;
}
.patrol-card {
  display: flex;
  align-items: center;

  padding: 30rpx;

  border-radius: 12rpx;
  background-color: #a29bfe;
}
.patrol-text {
  font-size: 16px;

  flex: 1;

  margin-left: 20rpx;

  color: #fff;
}
/* 数据统计区域样式 */
.data-section {
  padding: 0 30rpx;
}
.data-row {
  display: flex;

  margin-bottom: 20rpx;

  gap: 20rpx;
}
.data-card {
  flex: 1;

  padding: 20rpx;

  border-radius: 12rpx;
}
.data-card.warning {
  background-color: #ffeaa7;
}
.data-card.task {
  background-color: #ffeaa7;
}
.data-card.alert {
  background-color: #fab1a0;
}
.data-card.account {
  background-color: #81ecec;
}
.data-title {
  font-size: 14px;

  margin-bottom: 20rpx;

  color: #2d3436;
}
.data-content {
  display: flex;
  justify-content: space-around;
}
.data-item {
  text-align: center;
}
.data-label {
  font-size: 12px;

  display: block;

  margin-bottom: 8rpx;

  color: #636e72;
}
.data-value {
  font-size: 20px;
  font-weight: bold;

  color: #2d3436;
}
/* 管理区域样式 */
.manage-section {
  margin-top: 20rpx;
  padding: 20rpx 30rpx;
}
.manage-card {
  display: flex;
  align-items: center;

  padding: 30rpx;

  border-radius: 12rpx;
  background-color: #fff;
}
.manage-text {
  font-size: 16px;

  flex: 1;

  margin-left: 20rpx;

  color: #2d3436;
}

.arrow-icon {
  width: 16px;
  height: 16px;
}

.index-layout-content {
  width: 680rpx;
  margin: 0 auto;
  padding: 20rpx;

  border-radius: 10rpx;
  background-color: white;
}
</style>
