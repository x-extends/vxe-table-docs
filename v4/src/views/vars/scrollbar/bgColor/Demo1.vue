<template>
  <div>
    轨道背景色：<vxe-color-picker v-model="trackBgColor" :colors="colorList" clearable></vxe-color-picker>
    滑块背景色：<vxe-color-picker v-model="thumbBgColor" :colors="colorList"></vxe-color-picker>

    <vxe-scrollbar
      height="300"
      :style="{
        '--vxe-ui-scrollbar-track-background-color': trackBgColor,
        '--vxe-ui-scrollbar-thumb-background-color': thumbBgColor,
        '--vxe-ui-scrollbar-thumb-hover-background-color': thumbHoverBgColor,
        '--vxe-ui-scrollbar-thumb-active-background-color': thumbActiveBgColor
      }"
    >
      <div v-for="item in 20" :key="item" class="my-scrollbar-item">
        <div>{{ item }}这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const trackBgColor = ref('transparent')
const thumbBgColor = ref('#00BFFF')
const thumbHoverBgColor = computed(() => VxeUI.color.darken(thumbBgColor.value, 5))
const thumbActiveBgColor = computed(() => VxeUI.color.darken(thumbBgColor.value, 10))

const colorList = ref([
  '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
  '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
  '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
  '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
  '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
  '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
])
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  width: 6000px;
}
</style>
