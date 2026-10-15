<template>
  <div>
    轨道背景色：<vxe-color-picker v-model="trackBgColor" :colors="colorList" show-eye-dropper clearable></vxe-color-picker>
    滑块背景色：<vxe-color-picker v-model="thumbBgColor" :colors="colorList" show-eye-dropper></vxe-color-picker>

    <vxe-table
      border
      show-footer
      use-scrollbar
      height="400"
      :footer-data="footerData"
      :data="tableData"
      :style="{
        '--vxe-ui-scrollbar-track-background-color': trackBgColor,
        '--vxe-ui-scrollbar-thumb-background-color': thumbBgColor,
        '--vxe-ui-scrollbar-thumb-hover-background-color': thumbHoverBgColor,
        '--vxe-ui-scrollbar-thumb-active-background-color': thumbActiveBgColor
      }"
    >
      <vxe-column field="seq" type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="250"></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="360"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="240"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="300"></vxe-column>
      <vxe-column field="address" title="Address" min-width="400"></vxe-column>
      <vxe-column field="role" title="Role" width="200" fixed="right"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
      { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 100010, name: 'Test10', role: 'Develop', sex: 'Women', age: 35, address: 'test abc' }
    ]

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', name: '222', age: '555', attr2: '555', role: '111' }
    ]

    const trackBgColor = 'transparent'
    const thumbBgColor = '#00BFFF'

    const colorList = [
      '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
      '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
      '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
      '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
      '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
      '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
    ]

    return {
      tableData,
      footerData,
      trackBgColor,
      thumbBgColor,
      colorList
    }
  },
  computed: {
    thumbHoverBgColor () {
      return VxeUI.color.darken(this.thumbBgColor, 5)
    },
    thumbActiveBgColor () {
      return VxeUI.color.darken(this.thumbBgColor, 10)
    }
  }
})
</script>
