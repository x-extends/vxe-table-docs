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
      toolbarConfig: {
        custom: true
      },
      customConfig: {
        mode: 'drawer',
        allowVisible: false,
        allowFixed: false,
        allowResizable: false,
        allowSort: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'role', title: 'Role', width: 180 },
        { field: 'sex', title: 'Sex', width: 120 },
        { field: 'age', title: 'Age', width: 120 },
        { field: 'attr1', title: 'Attr1', width: 100 },
        { field: 'attr2', title: 'Attr2', width: 140 },
        { field: 'attr3', title: 'Attr3', width: 120 },
        { field: 'attr4', title: 'Attr4', width: 160 },
        { field: 'attr5', title: 'Attr5', width: 140 },
        { field: 'attr6', title: 'Attr6', width: 150 },
        { field: 'attr7', title: 'Attr7', width: 180 },
        { field: 'attr8', title: 'Attr8', width: 220 },
        { field: 'attr9', title: 'Attr9', width: 160 },
        { field: 'address', title: 'Address', minWidth: 200 }
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
