<template>
  <div>
    <p>
      <vxe-button @click="selectRowEvent">设置第二行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
    </p>

    <vxe-grid
      ref="gridRef"
      v-bind="gridOptions"
      @current-change="currentChangeEvent">
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-table'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  content: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      height: 300,
      rowConfig: {
        isCurrent: true,
        isHover: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { name: 'Test1', role: 'Develop', sex: 'Man', age: 28, content: 'test abc' },
        { name: 'Test2', role: 'Test', sex: 'Women', age: 41, content: 'Guangzhou' },
        { name: 'Test3', role: 'PM', sex: 'Man', age: 32, content: 'Shanghai' },
        { name: 'Test4', role: 'Designer', sex: 'Women', age: 24, content: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    currentChangeEvent ({ rowIndex }) {
      console.log(`行选中事件 ${rowIndex}`)
    },
    selectRowEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid && this.gridOptions.data) {
        $grid.setCurrentRow(this.gridOptions.data[1])
      }
    },
    clearSelectEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.clearCurrentRow()
      }
    },
    getCurrentEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        VxeUI.modal.alert(JSON.stringify($grid.getCurrentRecord()))
      }
    }
  }
})
</script>
