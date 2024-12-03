
<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
        resizable: true
      },
      columns: [
        {
          title: '基本信息',
          fixed: 'left',
          children: [
            { type: 'seq', width: 70, fixed: 'left' },
            { field: 'name', title: 'Name', width: 100, fixed: 'left' }
          ]
        },
        {
          title: '更多信息',
          children: [
            { field: 'role', title: 'Role', width: 300 },
            { field: 'age', title: 'Age', width: 300 },
            {
              title: '详细信息',
              children: [
                { field: 'sex', title: 'Sex', width: 300 },
                { field: 'date', title: 'Date', width: 300, showOverflow: true }
              ]
            }
          ]
        },
        {
          title: '其他信息',
          fixed: 'right',
          children: [
            { field: 'age', title: 'Age', width: 100, fixed: 'right' },
            { field: 'address', title: 'Address', width: 100, fixed: 'right', showOverflow: true }
          ]
        }
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
  }
})
</script>
