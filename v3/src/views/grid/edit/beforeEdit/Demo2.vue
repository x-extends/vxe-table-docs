<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'
import { VxeUI } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

// 模拟后端异步
function validRow (row: RowVO) {
  return new Promise<boolean>(resolve => {
    setTimeout(() => {
      const status = row.name !== 'Test2'
      resolve(status)
    }, 300)
  })
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
        trigger: 'click',
        mode: 'cell',
        async beforeEditAsyncMethod (params) {
          const { row } = params
          gridOptions.loading = true
          const status = await validRow(row)
          gridOptions.loading = false
          if (!status) {
            VxeUI.modal.message({
              content: '不允许编辑',
              status: 'error'
            })
          }
          return status
        }
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
  }
})
</script>
