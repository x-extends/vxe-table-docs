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
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 500,
      expandConfig: {
        padding: true
      },
      columns: [
        { type: 'seq', width: 50 },
        {
          type: 'expand',
          width: 80,
          contentRender: {
            name: 'MyExpandList'
          }
        },
        { field: 'name', title: 'name' },
        { field: 'sex', title: 'sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
        { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
        { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
        { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
