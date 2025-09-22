<template>
  <div>
    <div>已选：{{ selectSize }} 行</div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

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
      height: 500,
      rowConfig: {
        isHover: true
      },
      checkboxConfig: {
        labelField: 'name',
        highlight: true
      },
      columns: [
        { type: 'checkbox', title: 'Name', width: 300 },
        { field: 'id', title: 'ID' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ]
    }

    const updateComp = 0

    return {
      updateComp,
      gridOptions
    }
  },
  computed: {
    selectSize () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if (this.updateComp && $grid) {
        const selectRecords = $grid.getCheckboxRecords()
        return selectRecords.length
      }
      return 0
    }
  },
  mounted () {
    // 确保组件已被加载后才能调用 selectSize getCheckboxRecords 方法
    this.updateComp++
  }
})
</script>
