<template>
  <div>
    <p>
      <vxe-button @click="updateNameOpts">修改选项</vxe-button>
      <vxe-button @click="updateNameDefaultOpts">修改选项并设置默认值</vxe-button>
    </p>

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
      loading: false,
      height: 500,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', filters: [] },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 24, address: 'Shanghai' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 32, address: 'Shenzhen' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 28, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    updateNameOpts () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 修改选项列表
        $grid.setFilter('name', [
          { label: 'Test2', value: 'Test2' },
          { label: 'Test3', value: 'Test3' }
        ])
      }
    },
    updateNameDefaultOpts () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 修改条件
        $grid.setFilter('name', [
          { label: 'Test2', value: 'Test2', checked: false },
          { label: 'Test3', value: 'Test3', checked: true },
          { label: 'Test4', value: 'Test4', checked: true }
        ])
        $grid.updateData()
      }
    }
  }
})
</script>
