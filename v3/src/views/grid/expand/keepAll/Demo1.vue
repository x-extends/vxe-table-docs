<template>
  <div>
    <vxe-button @click="loadList1">修改数据1</vxe-button>
    <vxe-button @click="loadList2">修改数据2</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions" @data-change="dataChangeEvent">
      <template #expand_content="{ row }">
        <div>Name：{{ row.name }}</div>
        <div>Age：{{ row.age }}</div>
      </template>
    </vxe-grid>
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
      loading: false,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { type: 'expand', width: 80, slots: { content: 'expand_content' } },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    loadList1 () {
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: 10010, name: 'Test10', role: 'Designer', sex: 'Women', age: 33, address: 'test abc' },
          { id: 10020, name: 'Test20', role: 'PM', sex: 'Man', age: 44, address: 'shenzhen' }
        ]
        this.gridOptions.loading = false
      }, 100)
    },
    loadList2 () {
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ]
        this.gridOptions.loading = false
      }, 100)
    },
    dataChangeEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance
      if ($grid) {
        $grid.setAllRowExpand(true)
      }
    }
  }
})
</script>
