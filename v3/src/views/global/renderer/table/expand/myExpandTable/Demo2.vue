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
  subList: any[]
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 600,
      expandConfig: {
        padding: true
      },
      columns: [
        { type: 'seq', width: 50 },
        {
          type: 'expand',
          width: 80,
          contentRender: {
            name: 'MyExpandTable'
          }
        },
        { field: 'name', title: 'name' },
        { field: 'sex', title: 'sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: 'Man', age: 28, subList: [] },
        {
          id: 10002,
          name: 'Test2',
          sex: 'Women',
          age: 22,
          subList: [
            { name: 'Test322', sex: 'Man', age: 52 },
            { name: 'Test344', sex: 'Women', age: 42 },
            { name: 'Test3768', sex: 'Women', age: 42 },
            { name: 'Test3879', sex: 'Women', age: 42 },
            { name: 'Test3678', sex: 'Man', age: 23 },
            { name: 'Test389', sex: 'Man', age: 45 },
            { name: 'Test3909', sex: 'Women', age: 42 }
          ]
        },
        {
          id: 10002,
          name: 'Test2',
          sex: 'Women',
          age: 22,
          subList: [
            { name: 'Test222', sex: 'Man', age: 66 }
          ]
        },
        { id: 10004, name: 'Test4', sex: 'Women', age: 23, subList: [] }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
