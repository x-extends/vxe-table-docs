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
      rowConfig: {
        keyField: 'id'
      },
      columnConfig: {
        resizable: true
      },
      toolbarConfig: {
        custom: true
      },
      customConfig: {
        allowVisible: false,
        allowFixed: true,
        allowResizable: false,
        allowSort: false,
        allowAlign: false,
        allowHeaderAlign: false,
        allowFooterAlign: false
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'sex', title: 'Sex', minWidth: 160 },
        { field: 'age', title: 'Age', minWidth: 140 },
        { field: 'attr1', title: 'Attr1', minWidth: 180 },
        { field: 'attr2', title: 'Attr2', minWidth: 200 },
        { field: 'attr3', title: 'Attr3', minWidth: 300 },
        { field: 'attr4', title: 'Attr4', minWidth: 140 },
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
