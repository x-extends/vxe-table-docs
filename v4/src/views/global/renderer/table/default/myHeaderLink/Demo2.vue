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
  url: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'name', cellRender: { name: 'MyTableHeaderLink' } },
        { field: 'sex', title: 'sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: 'Man', age: 28, url: 'https://vxetable.cn/' },
        { id: 10002, name: 'Test2', sex: 'Women', age: 22, url: 'https://vxeui.com/' },
        { id: 10003, name: 'Test3', sex: 'Man', age: 32, url: 'https://vxetable.cn/' },
        { id: 10004, name: 'Test4', sex: 'Women', age: 23, url: 'https://vxeui.com/' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
