<template>
  <uv-action-sheet
    :ref="ref => (actionSheetRef = ref)"
    title="选择街道"
    safeAreaInsetBottom
  >
    <view class="region-list">
      <view
        v-for="region in regionList"
        :key="region.regionCode"
        @click="() => onSelectRegion(region.regionCode)"
      >
        {{ region.regionName }}
      </view>
    </view>
  </uv-action-sheet>
</template>

<script setup>
import { debounce } from 'lodash';
import { ref, onMounted } from 'vue';
// apis
// hooks
// utils
// stores
import { useRegionList } from '@src/stores';
// configs
// components

const emits = defineEmits(['selectRegion']);

const actionSheetRef = ref();

const { regionList, setActiveRegion } = useRegionList();

const onSelectRegion = regionCode => {
  try {
    setActiveRegion(regionCode);
    if (actionSheetRef.value) {
      actionSheetRef.value.close();
    }
    emits('selectRegion', regionCode);
  } catch (error) {
    console.warn(error);
  }
};
const openSwitchRegionModal = () => {
  try {
    if (actionSheetRef.value) {
      actionSheetRef.value.open();
    }
  } catch (error) {
    console.warn(error);
  }
};

defineExpose({
  openSwitchRegionModal: debounce(openSwitchRegionModal),
});
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
