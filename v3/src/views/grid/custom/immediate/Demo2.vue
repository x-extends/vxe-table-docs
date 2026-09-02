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
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
  attr6: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      rowConfig: {
        keyField: 'id'
      },
      toolbarConfig: {
        custom: true
      },
      columnConfig: {
        resizable: true
      },
      customConfig: {
        mode: 'modal',
        immediate: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300 },
        { field: 'role', title: 'Role', width: 140 },
        { field: 'sex', title: 'Sex', width: 200 },
        { field: 'age', title: 'Age', width: 200 },
        { field: 'attr1', title: 'Attr1', width: 150 },
        { field: 'attr2', title: 'Attr2', width: 200 },
        { field: 'attr3', title: 'Attr3', width: 250 },
        { field: 'attr4', title: 'Attr3', width: 300 },
        { field: 'attr5', title: 'Attr5', width: 160 },
        { field: 'attr6', title: 'Attr6', width: 260 },
        { field: 'address', title: 'Address', width: 180 }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, attr1: '11', attr2: '12', attr3: '13', attr4: '14', attr5: '15', attr6: '16', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, attr1: '21', attr2: '22', attr3: '23', attr4: '24', attr5: '25', attr6: '26', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, attr1: '31', attr2: '32', attr3: '33', attr4: '34', attr5: '35', attr6: '36', address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, attr1: '41', attr2: '42', attr3: '43', attr4: '44', attr5: '45', attr6: '46', address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
