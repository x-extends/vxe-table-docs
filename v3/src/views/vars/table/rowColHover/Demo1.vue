<template>
  <div>
    <vxe-color-picker v-model="hoverBgColor" :colors="colorList" clearable></vxe-color-picker>

    <vxe-grid
      v-bind="gridOptions"
      :style="{
        '--vxe-ui-table-row-hover-background-color': hoverBgColor,
        '--vxe-ui-table-column-hover-background-color': hoverBgColor
      }">
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      columnConfig: {
        isHover: true
      },
      rowConfig: {
        isHover: true
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', name: '777', sex: '333', age: '111' }
      ]
    }

    const hoverBgColor = '#f4f2a3'

    const colorList = [
      '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
      '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
      '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
      '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
      '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
      '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
    ]

    return {
      gridOptions,
      hoverBgColor,
      colorList
    }
  }
})
</script>
