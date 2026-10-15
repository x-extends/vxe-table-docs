<template>
  <div>
    轨道背景色：<vxe-color-picker v-model="trackBgColor" :colors="colorList" show-eye-dropper clearable></vxe-color-picker>
    滑块背景色：<vxe-color-picker v-model="thumbBgColor" :colors="colorList" show-eye-dropper></vxe-color-picker>

    <vxe-grid
      v-bind="gridOptions"
      :style="{
        '--vxe-ui-scrollbar-track-background-color': trackBgColor,
        '--vxe-ui-scrollbar-thumb-background-color': thumbBgColor,
        '--vxe-ui-scrollbar-thumb-hover-background-color': thumbHoverBgColor,
        '--vxe-ui-scrollbar-thumb-active-background-color': thumbActiveBgColor
      }"
    ></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { VxeUI, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  useScrollbar: true,
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300 },
    { field: 'sex', title: 'Sex', minWidth: 200 },
    { field: 'age', title: 'Age', minWidth: 200 },
    { field: 'address', title: 'Address', minWidth: 400 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 24, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'PM', sex: 'Man', age: 19, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'Test', sex: 'Man', age: 18, address: 'Guangzhou' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 32, address: 'Guangzhou' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 22, address: 'Shanghai' },
    { id: 10008, name: 'Test8', role: 'PM', sex: 'Women', age: 32, address: 'Shanghai' },
    { id: 10009, name: 'Test9', role: 'Develop', sex: 'Women', age: 44, address: 'Shanghai' },
    { id: 10010, name: 'Test10', role: 'Develop', sex: 'Man', age: 39, address: 'Shanghai' }
  ]
})

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
