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
  address: string
}

export default Vue.extend({
  data () {
    const nameEditRender = {
      name: 'MyTableEditPulldown'
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 300,
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'name', editRender: nameEditRender },
        { field: 'sex', title: 'sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: 'Man', age: 28, address: 'Guangzhou' },
        { id: 10002, name: 'Test2', sex: 'Women', age: 22, address: 'Shanghai' },
        { id: 10003, name: 'Test3', sex: 'Man', age: 32, address: 'Shenzhen' },
        { id: 10004, name: 'Test4', sex: 'Women', age: 23, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
