<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" @cell-click="cellClickEvent"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'
import { VxeUI } from 'vxe-pc-ui'

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
      showOverflow: true,
      loading: false,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'manual',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } }
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
  },
  methods: {
    cellClickEvent ({ row, column }) {
      // 模拟异步判断
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.loading = false
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          if (row.name === 'Test2') {
            VxeUI.modal.message({
              content: '不允许编辑',
              status: 'error'
            })
            return
          }
          $grid.setEditCell(row, column)
        }
      }, 300)
    }
  }
})
</script>
