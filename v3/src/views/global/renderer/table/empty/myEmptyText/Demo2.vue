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
      height: 300,
      loading: false,
      emptyRender: {
        name: 'MyTableEmptyText'
      },
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'name' },
        { field: 'sex', title: 'sex' },
        { field: 'age', title: 'Age' }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  created () {
    this.gridOptions.loading = true
    setTimeout(() => {
      this.gridOptions.loading = false
    }, 1000)
  }
})
</script>
