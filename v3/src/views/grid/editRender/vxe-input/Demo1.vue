<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const nameEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeInput'
    }

    const roleEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeInput',
      props: {
        clearable: true,
        showWordCount: true
      },
      events: {
        input (cellParams, eventParams) {
          const { row, column } = cellParams
          console.log('input', row, column.field, eventParams.value)
        }
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', editRender: nameEditRender },
        { field: 'role', title: 'Role', editRender: roleEditRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', address: 'Shanghai' }
      ]
    }

    return {
      gridOptions,
      nameEditRender,
      roleEditRender
    }
  }
})
</script>
