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
      size: 'medium',
      columns: [
        { type: 'seq', width: 70 },
        { type: 'radio', width: 60 },
        { type: 'checkbox', width: 60 },
        { field: 'name', title: 'Name' },
        { field: 'age', title: 'Age', sortable: true },
        {
          field: 'sex',
          title: 'Sex',
          filters: [
            { value: '0', label: '女' },
            { value: '1', label: '男' }
          ]
        },
        {
          field: 'sex2',
          title: 'Sex2',
          sortable: true,
          filterMultiple: false,
          filters: [
            { value: '0', label: '女' },
            { value: '1', label: '男' }
          ]
        },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
