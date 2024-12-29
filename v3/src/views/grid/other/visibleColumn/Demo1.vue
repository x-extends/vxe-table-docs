<template>
  <div>
    <vxe-button status="info" @click="hideEvent('name')">隐藏 name</vxe-button>
    <vxe-button status="primary" @click="showEvent('name')">显示 name</vxe-button>
    <vxe-button status="info" @click="hideEvent(['role', 'sex', 'age', 'address'])">隐藏多列</vxe-button>
    <vxe-button status="primary" @click="showEvent(['role', 'sex', 'age', 'address'])">显示多列</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
      height: 400,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    showEvent (field: string | string[]) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.showColumn(field)
      }
    },
    hideEvent (field: string | string[]) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.hideColumn(field)
      }
    }
  }
})
</script>
